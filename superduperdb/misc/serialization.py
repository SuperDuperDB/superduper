from __future__ import annotations

import io
import pickle
import typing as t
from abc import ABC

import dill
import typing_extensions as te

Info = dict[str, t.Any] | None


class ModuleClassDict(te.TypedDict):
    """A ``dict``with the module, class and JSONization of an object"""

    module: str
    cls: str
    dict: dict[str, t.Any]


class Serializer(ABC):
    @staticmethod
    def encode(object: t.Any, info: Info = None) -> bytes:
        raise NotImplementedError

    @staticmethod
    def decode(b: bytes, info: Info = None) -> t.Any:
        raise NotImplementedError


class PickleSerializer(Serializer):
    @staticmethod
    def encode(object: t.Any, info: Info = None) -> bytes:
        return pickle.dumps(object)

    @staticmethod
    def decode(b: bytes, info: Info = None) -> t.Any:
        return pickle.loads(b)


class DillSerializer(Serializer):
    @staticmethod
    def encode(object: t.Any, info: Info = None) -> bytes:
        return dill.dumps(object)

    @staticmethod
    def decode(b: bytes, info: Info = None) -> t.Any:
        return dill.loads(b)


class TorchSerializer(Serializer):
    @staticmethod
    def encode(object: t.Any, info: Info = None) -> bytes:
        import torch

        from superduperdb.ext.torch.utils import device_of

        if not isinstance(object, dict):
            was_gpu = str(device_of(object)) == 'cuda'
            object.to('cpu')
            f = io.BytesIO()
            torch.save(object, f)
            if was_gpu:
                object.to('cuda')
        else:
            f = io.BytesIO()
            torch.save(object, f)
        return f.getvalue()

    @staticmethod
    def decode(b: bytes, info: Info = None) -> t.Any:
        import torch

        return torch.load(io.BytesIO(b))


serializers: dict[str, t.Any] = {
    'pickle': PickleSerializer,
    'dill': DillSerializer,
    'torch': TorchSerializer,
}


class Method:
    """
    A callable that calls a method on the object it is called with.
    """

    def __init__(self, method: str, *args, **kwargs):
        self.method = method
        self.args = args
        self.kwargs = kwargs

    def __call__(self, X: t.Any) -> t.Any:
        return getattr(X, self.method)(*self.args, **self.kwargs)
