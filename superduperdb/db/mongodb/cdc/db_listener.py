import dataclasses as dc
import datetime
import threading
import typing as t
from enum import Enum

from pymongo.change_stream import CollectionChangeStream

from superduperdb import logging
from superduperdb.db.base import cdc
from superduperdb.db.base.base_cdc import DBEvent
from superduperdb.db.mongodb import CDC_COLLECTION_LOCKS, query
from superduperdb.misc.runnable.runnable import Event

from .base import CachedTokens, MongoDBPacket as Packet, TokenType

if t.TYPE_CHECKING:
    from superduperdb.db.base.db import DB

MongoChangePipelines: t.Dict[str, t.Sequence[t.Any]] = {'generic': []}


class CDCKeys(str, Enum):
    """
    A enum to represent mongo change document keys.
    """

    operation_type = 'operationType'
    document_key = 'documentKey'
    update_descriptions_key = 'updateDescription'
    update_field_key = 'updatedFields'
    document_data_key = 'fullDocument'
    deleted_document_data_key = 'documentKey'


@dc.dataclass
class MongoChangePipeline:
    """`MongoChangePipeline` is a class to represent listen pipeline
    in mongodb watch api.
    """

    matching_operations: t.Sequence[str] = dc.field(default_factory=list)

    def validate(self):
        raise NotImplementedError

    def build_matching(self) -> t.Sequence[t.Dict]:
        """A helper fxn to build a listen pipeline for mongo watch api.

        :param matching_operations: A list of operations to watch.
        """
        if bad := [op for op in self.matching_operations if op not in DBEvent]:
            raise ValueError(f'Unknown operations: {bad}')

        return [{'$match': {'operationType': {'$in': [*self.matching_operations]}}}]


class MongoDatabaseListener(cdc.BaseDatabaseListener):
    """
    It is a class which helps capture data from mongodb database and handle it
    accordingly.

    This class accepts options and db instance from user and starts a scheduler
    which could schedule a listening service to listen change stream.

    This class builds a workflow graph on each change observed.

    """

    DEFAULT_ID: str = '_id'
    EXCLUSION_KEYS: t.Sequence[str] = [DEFAULT_ID]
    IDENTITY_SEP: str = '/'
    _scheduler: t.Optional[threading.Thread]

    _change_pipeline: t.Union[str, t.Sequence[t.Dict], None] = None

    def __init__(
        self,
        db: 'DB',
        on: query.Collection,
        stop_event: Event,
        identifier: 'str' = '',
        timeout: t.Optional[float] = None,
        resume_token: t.Optional[TokenType] = None,
    ):
        """__init__.

        :param db: It is a superduperdb instance.
        :param on: It is used to define a Collection on which CDC would be performed.
        :param stop_event: A threading event flag to notify for stoppage.
        :param identifier: A identifier to represent the listener service.
        :param resume_token: A resume token is a token used to resume
        the change stream in mongo.
        """

        self.tokens = CachedTokens()
        self.resume_token = None

        if resume_token is not None:
            self.resume_token = resume_token

        self._change_pipeline = None

        super().__init__(
            db=db, on=on, stop_event=stop_event, identifier=identifier, timeout=timeout
        )

    def on_create(self, change: t.Dict, db: 'DB', collection: query.Collection) -> None:
        """on_create.
        A helper on create event handler which handles inserted document in the
        change stream.
        It basically extracts the change document and build the taskflow graph to
        execute.

        :param change: The changed document.
        :param db: a superduperdb instance.
        :param collection: The collection on which change was observed.
        """
        logging.debug('Triggered `on_create` handler.')
        # new document added!
        document = change[CDCKeys.document_data_key]
        ids = [document[self.DEFAULT_ID]]
        cdc_query = collection.find()
        packet = Packet(ids=ids, event_type=DBEvent.insert, query=cdc_query)
        db.cdc.CDC_QUEUE.put_nowait(packet)

    def on_update(self, change: t.Dict, db: 'DB', collection: query.Collection) -> None:
        """on_update.

        A helper on update event handler which handles updated document in the
        change stream.
        It basically extracts the change document and build the taskflow graph to
        execute.

        :param change: The changed document.
        :param db: a superduperdb instance.
        :param collection: The collection on which change was observed.
        """

        # TODO: Handle removed fields and updated fields.
        document = change[CDCKeys.document_key]
        ids = [document[self.DEFAULT_ID]]
        cdc_query = collection.find()
        packet = Packet(ids=ids, event_type=DBEvent.insert, query=cdc_query)
        db.cdc.CDC_QUEUE.put_nowait(packet)

    def on_delete(self, change: t.Dict, db: 'DB', collection: query.Collection) -> None:
        """on_delete.

        A helper on delete event handler which handles deleted document in the
        change stream.
        It basically extracts the change document and build the taskflow graph to
        execute.

        :param change: The changed document.
        :param db: a superduperdb instance.
        :param collection: The collection on which change was observed.
        """
        logging.debug('Triggered `on_delete` handler.')
        # new document added!
        document = change[CDCKeys.deleted_document_data_key]
        ids = [document[self.DEFAULT_ID]]
        packet = Packet(ids=ids, event_type=DBEvent.delete, query=None)
        db.cdc.CDC_QUEUE.put_nowait(packet)

    @staticmethod
    def _get_stream_pipeline(
        change: str,
    ) -> t.Optional[t.Sequence[t.Any]]:
        """_get_stream_pipeline.

        :param change: change can be a prebuilt listen pipeline like
        'generic' or user Defined listen pipeline.
        """
        return MongoChangePipelines.get(change)

    def _get_reference_id(self, document: t.Dict) -> t.Optional[str]:
        """_get_reference_id.

        :param document:
        """
        try:
            document_key = document[CDCKeys.document_key]
            reference_id = str(document_key['_id'])
        except KeyError:
            return None
        return reference_id

    def dump_token(self, change: t.Dict) -> None:
        """dump_token.
        A helper utility to dump resume token from the changed document.

        :param change:
        """
        token = change[self.DEFAULT_ID]
        self.tokens.append(token)

    def check_if_taskgraph_change(self, change: t.Dict) -> bool:
        """
        A helper method to check if the cdc change is done
        by taskgraph nodes.
        """
        if change[CDCKeys.operation_type] == DBEvent.update:
            updates = change[CDCKeys.update_descriptions_key]
            updated_fields = updates[CDCKeys.update_field_key]
            return any(
                [True for k in updated_fields.keys() if k.startswith('_outputs')]
            )
        return False

    def setup_cdc(self) -> CollectionChangeStream:
        """
        Setup cdc change stream from user provided
        """
        if isinstance(self._change_pipeline, str):
            pipeline = self._get_stream_pipeline(self._change_pipeline)

        elif isinstance(self._change_pipeline, list):
            pipeline = self._change_pipeline or None

        else:
            raise TypeError(
                'Change pipeline can be either a string or a dictionary, '
                f'provided {type(self._change_pipeline)}'
            )
        stream = self._on_component.change_stream(
            pipeline=pipeline, resume_after=self.resume_token
        )

        stream_iterator = stream(self.db)
        logging.info(f'Started listening database with identity {self.identity}...')
        return stream_iterator

    def next_cdc(self, stream: CollectionChangeStream) -> None:
        """
        Get the next stream of change observed on the given `Collection`.
        """

        change = stream.try_next()
        if change is not None:
            logging.debug(f'Database change encountered at {datetime.datetime.now()}')

            if not self.check_if_taskgraph_change(change):
                reference_id = self._get_reference_id(change)

                if not reference_id:
                    logging.warn('Document change not handled due to no document key')
                    return

                event = change[CDCKeys.operation_type]
                self.event_handler(change, event)
            self.dump_token(change)

    def attach_scheduler(self, scheduler: threading.Thread) -> None:
        self._scheduler = scheduler

    def set_resume_token(self, token: TokenType) -> None:
        """
        Set the resume token for the listener.
        """
        self.resume_token = token

    def set_change_pipeline(
        self, change_pipeline: t.Optional[t.Union[str, t.Sequence[t.Dict]]]
    ) -> None:
        """
        Set the change pipeline for the listener.
        """
        if change_pipeline is None:
            change_pipeline = MongoChangePipelines.get('generic')

        self._change_pipeline = change_pipeline

    def resume(self, token: TokenType) -> None:
        """
        Resume the listener from a given token.
        """
        self.set_resume_token(token)
        self.listen()

    def listen(
        self,
        change_pipeline: t.Optional[t.Union[str, t.Sequence[t.Dict]]] = None,
    ) -> None:
        """Primary fxn to initiate listening of a database on the collection
        with defined `change_pipeline` by the user.

        :param change_pipeline: A mongo listen pipeline defined by the user
        for more fine grained listening.
        """
        try:
            CDC_COLLECTION_LOCKS[self._on_component.identifier] = True

            self._stop_event.clear()
            if self._scheduler:
                if self._scheduler.is_alive():
                    raise RuntimeError(
                        'CDC Listener thread is already running!,/'
                        'Please stop the listener first.'
                    )

            scheduler = cdc.DatabaseListenerThreadScheduler(
                self, stop_event=self._stop_event, start_event=self._startup_event
            )
            self.attach_scheduler(scheduler)
            self.set_change_pipeline(change_pipeline)
            assert self._scheduler is not None
            self._scheduler.start()

            self._startup_event.wait(timeout=self.timeout)
        except Exception:
            logging.error('Listening service stopped!')
            CDC_COLLECTION_LOCKS.pop(self._on_component.identifier, None)

            self.stop()
            raise

    def last_resume_token(self) -> TokenType:
        """
        Get the last resume token from the change stream.
        """
        return self.tokens.load()[0]

    def resume_tokens(self) -> t.Sequence[TokenType]:
        """
        Get the resume tokens from the change stream.
        """
        return self.tokens.load()

    def stop(self) -> None:
        """
        Stop listening cdc changes.
        This stops the corresponding services as well.
        """
        CDC_COLLECTION_LOCKS.pop(self._on_component.identifier, None)

        self._stop_event.set()
        if self._scheduler:
            self._scheduler.join()

    def is_available(self) -> bool:
        """
        Get the status of listener.
        """
        return not self._stop_event.is_set()

    def close(self) -> None:
        self.stop()
