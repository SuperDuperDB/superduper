import typing as t

from bson.objectid import ObjectId

from superduperdb import logging
from superduperdb.base.code import Code
from superduperdb.base.leaf import Leaf, _import_item
from superduperdb.components.component import Component
from superduperdb.components.datatype import (
    _ENCODABLES,
    DataType,
    Encodable,
    _BaseEncodable,
)
from superduperdb.misc.special_dicts import MongoStyleDict

if t.TYPE_CHECKING:
    from superduperdb.base.datalayer import Datalayer
    from superduperdb.components.schema import Schema


ContentType = t.Union[t.Dict, Encodable]
ItemType = t.Union[t.Dict[str, t.Any], Encodable, ObjectId]

_LEAF_TYPES = {
    'component': Component,
    'leaf': Leaf,
    'remote_code': Code,
}
_LEAF_TYPES.update(_ENCODABLES)
_OUTPUTS_KEY = '_outputs'


class Document(MongoStyleDict):
    """A wrapper around an instance of dict or a Encodable.

    The document data is used to dump that resource to a mix of json-able content, ids and `bytes`

    """

    _DEFAULT_ID_KEY: str = '_id'

    def __init__(self,
                 *args,
                 schema: t.Optional['Schema'] = None,
                 db: t.Optional['Datalayer'] = None,
                 **kwargs):
        super().__init__(*args, **kwargs)
        self.schema = schema
        self.db = db

    def _deep_flat_encode(self, cache, blobs, files, leaves_to_keep: t.Sequence = ()):
        out = dict(self)
        if self.schema is not None:
            out = self.schema.deep_flat_encode_data(
                self, cache, blobs, files,
                leaves_to_keep=leaves_to_keep,
            )
        return _deep_flat_encode(
            out, cache, blobs, files,
            leaves_to_keep=leaves_to_keep,
        )

    def encode(self, leaves_to_keep: t.Sequence = ()) -> t.Dict:
        cache = {}
        blobs = {}
        files = []
        out = self._deep_flat_encode(cache, blobs, files, leaves_to_keep=leaves_to_keep)
        out['_leaves'] = cache
        out['_files'] = files
        out['_blobs'] = blobs
        return out

    @classmethod
    def decode(cls, r, schema: t.Optional['Schema'] = None, db: t.Optional['Datalayer'] = None):
        cache = {}
        blobs = {}
        if '_leaves' in r:
            cache = r['_leaves']
            del r['_leaves']

        if '_blobs' in r:
            blobs = r['_blobs']
            del r['_blobs']

        if schema is not None:
            r = schema.decode_data(r)
        r = _deep_flat_decode(r, cache, blobs, db=db)
        if isinstance(r, dict):
            return Document(r, schema=schema)
        else:
            return r

    @property
    def variables(self) -> t.List[str]:
        """Return a list of variables in the object."""
        from superduperdb.base.variables import _find_variables

        return _find_variables(self)

    def set_variables(self, db, **kwargs) -> 'Document':
        """Set free variables of self.

        :param db: The datalayer to use.
        """
        from superduperdb.base.variables import _replace_variables

        content = _replace_variables(
            self, db, **kwargs
        )  # replace variables with values
        return Document(**content)

    def __repr__(self) -> str:
        return f'Document({repr(dict(self))})'

    def unpack(self, leaves_to_keep: t.Sequence = ()) -> t.Any:
        """Returns the content, but with any encodables replaced by their contents.

        :param db: The datalayer to use.
        :param leaves_to_keep: The types of leaves to keep.
        """
        out = _unpack(self, leaves_to_keep=leaves_to_keep)
        if '_base' in out:
            out = out['_base']
        return out


def _unpack(item: t.Any, db=None, leaves_to_keep: t.Sequence = ()) -> t.Any:
    if isinstance(item, _BaseEncodable) and not isinstance(item, leaves_to_keep):  # type: ignore[arg-type]
        return item.unpack()
    elif isinstance(item, dict):
        return {
            k: _unpack(v, leaves_to_keep=leaves_to_keep) for k, v in item.items()
        }
    elif isinstance(item, list):
        return [_unpack(x, leaves_to_keep=leaves_to_keep) for x in item]
    else:
        return item


def _deep_flat_encode(r, cache, blobs, files, leaves_to_keep: t.Sequence[Leaf] = ()):
    if isinstance(r, dict):
        return {k: _deep_flat_encode(v, cache, blobs, files, leaves_to_keep=leaves_to_keep) for k, v in r.items()}
    if isinstance(r, list):
        return [_deep_flat_encode(x, cache, blobs, files, leaves_to_keep=leaves_to_keep) for x in r]
    if isinstance(r, Leaf):
        return r._deep_flat_encode(cache, blobs, files, leaves_to_keep=leaves_to_keep)
    return r


def _get_leaf_from_cache(k, cache, blobs, db: t.Optional['Datalayer'] = None):
    if isinstance(cache[k], Leaf):
        return cache[k]
    leaf = _deep_flat_decode(cache[k], cache, blobs, db=db)
    cache[k] = leaf
    return leaf


def _deep_flat_decode(r, cache, blobs, db: t.Optional['Datalayer'] = None):
    if isinstance(r, Leaf):
        return r
    if isinstance(r, list):
        return [_deep_flat_decode(x, cache, blobs, db=db) for x in r]
    if isinstance(r, dict) and '_path' in r:
        parts = r['_path'].split('/')
        cls = parts[-1]
        module = '.'.join(parts[:-1])
        dict_ = {k: v for k, v in r.items() if k != '_path'}
        dict_ = _deep_flat_decode(dict_, cache, blobs, db=db)
        return _import_item(cls=cls, module=module, dict=dict_, db=db)
    if isinstance(r, dict):
        return {k: _deep_flat_decode(v, cache, blobs, db=db) for k, v in r.items()}
    if isinstance(r, str) and r.startswith('?'):
        return _get_leaf_from_cache(r[1:], cache, blobs, db=db)
    if isinstance(r, str) and r.startswith('%'):
        uuid = r.split('/')[-1]
        return db.load(uuid=uuid)
    return r