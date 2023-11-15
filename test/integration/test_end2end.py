import random

import numpy as np
from PIL import Image

from superduperdb.backends.mongodb.query import Collection
from superduperdb.base.document import Document
from superduperdb.components.listener import Listener
from superduperdb.components.model import Model
from superduperdb.components.schema import Schema
from superduperdb.components.vector_index import VectorIndex
from superduperdb.ext.pillow.encoder import pil_image

# Setup:
# Take empty database
# Add two models
# Add encoder
# create custom serializer
# take output from model 1 as input to model 2
# create listener for model1 and model2
# add new data to collection
# delete data on collection
# start cdc service
# add new data to collection
# collection should have one image, one string, one float, one int data
# Make the entire service as distributed on dask


class Model1:
    def predict(self, x):
        return [
            {
                'image': Image.fromarray(np.random.randn(10, 10, 3).astype(np.uint8)),
                'int': np.asarray([x * 100] * 10),
            }
        ] * random.randint(1, 10)

    @staticmethod
    def preprocess(x):
        return x

    @staticmethod
    def postprocess(x):
        return x


class Model2:
    def predict(self, x):
        if isinstance(x, str):
            return np.asarray([int(x) * 100] * 10)
        return x

    @staticmethod
    def preprocess(x):
        return x

    @staticmethod
    def postprocess(x):
        return x


def test_advance_setup(test_db, image_url, local_dask_client):
    # Take empty database
    db = test_db
    from superduperdb import CFG

    CFG.mode = 'production'

    db._distributed_client = local_dask_client
    db.distributed = True

    image = [
        {
            '_content': {
                'uri': image_url,
                'encoder': 'pil_image',
            }
        }
    ]

    raw_bytes = 'some raw bytes'.encode('utf-8')
    data = [
        Document(
            {
                'image': image,
                'int': i,
                'text': str(i),
                'float': float(i),
                'raw_bytes': raw_bytes,
            }
        )
        for i in range(100)
    ]

    mixed_input = Collection('mixed_input')
    db.add(pil_image)
    db.execute(Collection('mixed_input').insert_many(data))

    from superduperdb.ext.numpy import array

    model1 = Model(
        identifier='model1',
        object=Model1(),
        preprocess=Model1.preprocess,
        postprocess=Model1.postprocess,
        flatten=True,
        model_update_kwargs={'document_embedded': False},
        output_schema=Schema(
            identifier='myschema',
            fields={'image': pil_image, 'int': array('int64', (10,))},
        ),
        predict_method='predict',
    )
    db.add(model1)

    e = array('int64', (10,))

    model2 = Model(
        identifier='model2',
        object=Model2(),
        preprocess=Model2.preprocess,
        postprocess=Model2.postprocess,
        predict_method='predict',
        encoder=e,
    )
    db.add(model2)

    listener1 = Listener(
        model=db.load('model', 'model1'), key='int', select=mixed_input.find()
    )
    db.add(listener1)

    db.add(
        VectorIndex(
            identifier='test_search_index',
            measure='l2',
            indexing_listener=Listener(
                model=model2,
                key='_outputs.int.model1.int',
                select=Collection('_outputs.int.model1').find(),
            ),
            compatible_listener=Listener(
                model=model2, key='text', select=None, active=False
            ),
        )
    )

    search_phrase = '96'
    r = next(
        db.execute(
            Collection('_outputs.int.model1')
            .like(
                Document({'text': search_phrase}), vector_index='test_search_index', n=1
            )
            .find()
        )
    )
    r = r.unpack()
    assert '_outputs' in r
    assert np.allclose(np.asarray([9600] * 10), r['_outputs']['int']['model1']['int'])
