import typing as t

from superduperdb.datalayer.base.query import Select
from superduperdb.misc.special_dicts import MongoStyleDict

if t.TYPE_CHECKING:
    from superduperdb.datalayer.base.database import BaseDatabase


class QueryDataset:
    """
    Dataset object wrapping a database query

    :param database_type: type of database
    :param database: database name
    :param query_params: parameters of database query
    :param fold: fold of data
    :param suppress: supply to suppress certain fields/ columns
    :param transform: function to apply to the output
    """

    def __init__(
        self,
        select: Select,
        keys: t.Sequence[str] = None,
        fold: str = 'train',
        suppress: t.Tuple = (),
        transform: t.Optional[t.Callable] = None,
        features: t.Optional[t.Dict] = None,
    ) -> None:
        super().__init__()

        self._database = None
        self.keys = keys

        self.transform = transform if transform else lambda x: x
        select = select.add_fold(fold)
        self._documents = list(self.database.execute(select))
        self.suppress = suppress
        self.features = features or {}

    @property
    def database(self) -> 'BaseDatabase':
        if self._database is None:
            from superduperdb.datalayer.base.build import build_datalayer

            self._database = build_datalayer()
        return self._database

    def __len__(self) -> int:
        return len(self._documents)

    def __getitem__(self, item: t.Any) -> t.Any:
        r = MongoStyleDict(self._documents[item].unpack())
        s = MongoStyleDict({})
        for k in self.features:
            r[k] = r['_outputs'][k][self.features[k]]

        if self.keys is not None:
            for k in self.keys:
                if k == '_base' and k not in self.features:
                    s[k] = r
                else:
                    s[k] = r[k]
        else:
            s = r
        return self.transform(s)
