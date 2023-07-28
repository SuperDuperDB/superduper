import torch

from superduperdb.core.document import Document
from superduperdb.encoders.torch.tensor import tensor


def test_document_encoding():
    t = tensor(torch.float, shape=(20,))

    r = Document({'x': t(torch.randn(20))})

    print(r.encode())

    Document.decode(r.encode(), encoders={'torch.float32[20]': t})
