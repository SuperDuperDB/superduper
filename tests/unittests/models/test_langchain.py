from langchain import OpenAI
import os
import numpy
import pytest

from superduperdb.models.sentence_transformers.wrapper import SentenceTransformer
from superduperdb.core.watcher import Watcher
from superduperdb.core.vector_index import VectorIndex
from superduperdb.datalayer.mongodb.query import Select
from superduperdb.models.langchain.retriever import DBQAWithSourcesChain
from superduperdb.types.numpy.array import array


SKIP_PAID = os.environ.get('OPENAI_API_KEY') is None
if not SKIP_PAID:
    SKIP_PAID = os.environ.get('SKIP_PAID', 'true') == 'true'


@pytest.mark.skipif(SKIP_PAID, reason='don\'t test paid API')
def test_db_qa_with_sources_chain(nursery_rhymes):
    nursery_rhymes.add(array(numpy.float32))
    pl = SentenceTransformer(model_name_or_path='all-MiniLM-L6-v2', encoder='array')
    nursery_rhymes.add(pl)
    nursery_rhymes.add(
        Watcher(
            model='all-MiniLM-L6-v2', key='text', select=Select(collection='documents')
        )
    )
    nursery_rhymes.add(
        VectorIndex(
            'my-index',
            models=['all-MiniLM-L6-v2'],
            watcher='all-MiniLM-L6-v2/text',
            keys=['text'],
        )
    )
    llm = OpenAI(model_name="text-davinci-003")
    m = DBQAWithSourcesChain(
        'retrieval_chain',
        llm=llm,
        vector_index='my-index',
        key='text',
        n=2,
    )
    m.repopulate(nursery_rhymes)
    output = m.predict_one('Complete this: Do you know the ...')
    assert 'muffin' in output['answer'].lower()
