import collections
import traceback
import uuid

from flask import Flask, jsonify, make_response, request

from superduperdb import CFG
from superduperdb.base.document import load_bson, load_bsons
from superduperdb.base.serializable import Serializable
from superduperdb.backends.base.artifact import ArtifactStore
from superduperdb.base.build import build_datalayer
from superduperdb.misc.serialization import serializers


def make_endpoints(app, db):
    cache = collections.defaultdict(lambda: {})

    @app.route('/select', methods=['GET'])
    def select():
        """
        Execute a Select query in the database for multiple components and return
        the ID for the container of the components in the server cache.

        This endpoint deserializes the query, executes the query, generates a unique
        ID for the result, stores the result in the server cache, and returns the ID
        to the client.

        :param request_id: unique identifier for the request, generated by client
        :param query: serialized query
        """
        d = request.get_json()
        query = Serializable.deserialize(d['query'])
        output = list(db.execute(query))  # TODO - support cursor with flask streaming
        file_id = str(uuid.uuid4())
        cache[d['request_id']][file_id] = output.dump_bson()
        return jsonify({'file_id': file_id})

    @app.route('/insert', methods=['POST'])
    def insert():
        """
        Execute an Insert query in the database.

        This endpoint assumes that serialized documents have already been sent
        by the client and exist in memory in the server cache. It then deserializes
        the documents in the cache, deletes the documents from the cache and
        deserializes the query. Finally, it executes the query.

        :param request_id: unique identifier for the request, generated by client
        :param documents: unique identifier for the documents, generated by client
        :param query: serialized query
        """
        d = request.get_json()
        binary = cache[d['request_id']][d['documents']]
        del cache[d['request_id']]
        documents = load_bsons(binary, encoders=db.encoders)
        query = Serializable.deserialize(d['query'])
        query.documents = documents
        db.execute(query)
        return jsonify({'msg': 'ok'})

    @app.route('/update', methods=['POST'])
    def update():
        """
        Execute an Update query in the database.

        This endpoint assumes that serialized documents have already been sent
        by the client and exist in memory in the server cache. It then deserializes
        the documents in the cache, deletes the documents from the cache and
        deserializes the query. Finally, it executes the query.

        :param request_id: unique identifier for the request, generated by client
        :param documents: unique identifier for the documents, generated by client
        :param query: serialized query
        """
        d = request.get_json()
        binary = cache[d['request_id']][d['update']]
        del cache[d['request_id']]
        update = load_bson(binary, encoders=db.encoders)
        query = Serializable.deserialize(d['query'])
        query.update = update
        db.execute(query)
        return jsonify({'msg': 'ok'})

    @app.route('/delete', methods=['POST'])
    def delete():
        """
        Execute a delete query in the database.

        :param query: serialized delete query
        """
        d = request.get_json()['query']
        query = Serializable.deserialize(d)
        db.execute(query)
        return jsonify({'msg': 'ok'})

    @app.route('/add', methods=['POST'])
    def add():
        """
        Add a component to the database.

        This endpoint assumes that serialized artifacts have already been sent
        by the client and exist in memory in the server cache. It then deserializes
        the artifacts in the cache, adds these artifacts back to the original component,
        deserializes any metadata that is contained on the component, and then adds the
        component to the database. Finally, it deletes the artifacts from the cache.

        :param request_id: unique identifier for the request, generated by client
        :param serializers: mapping from random string to serializer name (eg `pickle`)
        :param component: serialized component
        """
        d = request.get_json()
        artifact_cache = cache[d['request_id']]
        for a in artifact_cache:
            artifact_cache[a] = serializers[d['serializers'][a]].decode(
                artifact_cache[a]
            )
        d = ArtifactStore.load_from_cache(d, cache=artifact_cache)

        object = Serializable.deserialize(d['component'])
        db.add(object)
        del cache[d['request_id']]
        return jsonify({'msg': 'ok'})

    @app.route('/artifacts/get/<request_id>/<file_id>', methods=['GET'])
    def get(request_id, file_id):
        """
        Return data originally produced by the client to the client.

        It also deletes the data from the cache.

        :param request_id: unique identifier for the request, generated by client
        :param file_id: unique identifier for the component, generated by client
        """
        bytes = cache[request_id][file_id]
        del cache[request_id][file_id]
        if not cache[request_id]:
            del cache[request_id]
        return make_response(bytes)

    @app.route('/artifacts/put/<request_id>/<file_id>', methods=['PUT'])
    def put(request_id, file_id):
        """
        Read the buffered incoming data from the client into one bytes object and
        then hold in memory in a cache.

        Artifacts are serialized on the client and then sent to the server in
        individual requests.

        :param request_id: unique identifier for the request, generated by client
        :param file_id: unique identifier for the component, generated by client
        """
        cache[request_id][file_id] = request.get_data(cache=False)
        return jsonify({'msg': 'ok'})

    @app.route('/load', methods=['GET'])
    def load():
        """
        Load component artifacts from the database into server cache and send
        component metadata to the client.

        This endpoint loads the component from the database using the provided
        query parameters, serializes the component, stores the component artifacts
        in the server cache, and sends the component metadata to the client.

        :param type_id: type_id of component to load ['encoder', 'model', 'listener',
                       'learning_task', 'training_configuration', 'metric',
                       'vector_index', 'job']
        :param identifier: identifying string to component
        :param request_id: unique identifier for the request, generated by client
        :param version: (optional) numerical version - specify for full metadata
        """
        d = request.get_json()
        request_id = d['request_id']
        version = d.get('version')
        if version:
            version = int(version)
        m = db.load(type_id=d['type_id'], identifier=d['identifier'], version=version)
        serialized, artifacts = m.serialized
        lookup = {a.sha1: str(uuid.uuid4()) for a in artifacts}
        s_lookup = {lookup[a.sha1]: a.serializer for a in artifacts}
        to_send = ArtifactStore.replace_artifacts_with_dict(serialized, lookup)
        for a in artifacts:
            cache[request_id][lookup[a.sha1]] = serializers[
                s_lookup[lookup[a.sha1]]
            ].encode(a.artifact)
        return jsonify(to_send)

    @app.route('/remove', methods=['POST'])
    def remove():
        """
        Force-remove a component from the database.

        :param version: (optional) numerical version of the component to delete
        :param type_id: type_id of component to show `['encoder', 'model', 'listener',
                       'learning_task', 'training_configuration', 'metric',
                       'vector_index', 'job']`
        :param identifier: identifying string to component
        """
        d = request.get_json()
        version = d.get('version')
        if version:
            version = int(version)

        db.remove(
            type_id=d['type_id'],
            identifier=d['identifier'],
            version=version,
            force=True,
        )
        return jsonify({'msg': 'ok'})

    @app.route('/show', methods=['GET'])
    def show():
        """
        Show components already added to the database.

        :param type_id: type_id of component to show ['encoder', 'model', 'listener',
                       'learning_task', 'training_configuration', 'metric',
                       'vector_index', 'job']
        :param identifier: identifying string to component
        :param version: (optional) numerical version - specify for full metadata
        """
        return jsonify(db.show(**request.get_json()))

    @app.errorhandler(500)
    def handle_500(error):
        error_traceback = traceback.format_exc()
        response = {
            'traceback': error_traceback,
            'error': str(error),
            'type': str(type(error)),
        }
        return jsonify(response), 500


def make_flask_app(db):
    app = Flask(__name__)
    make_endpoints(app, db)
    return app


def serve(db=None):
    if db is None:
        db = build_datalayer()
    app = make_flask_app(db)
    app.run(CFG.server.host, CFG.server.port)


if __name__ == '__main__':
    serve()
