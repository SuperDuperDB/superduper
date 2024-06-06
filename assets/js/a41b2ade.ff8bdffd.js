"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2643],{4306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var o=t(4848),r=t(8453);const d={},s="Basic RAG tutorial with templates",i={id:"tutorials/rag",title:"Basic RAG tutorial with templates",description:"In this tutorial we show you how to do retrieval augmented generation (RAG) with superduperdb.",source:"@site/content/tutorials/rag.md",sourceDirName:"tutorials",slug:"/tutorials/rag",permalink:"/docs/tutorials/rag",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/tutorials/rag.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Listening for new data",permalink:"/docs/tutorials/listening"},next:{title:"Training and Managing MNIST Predictions with SuperDuperDB",permalink:"/docs/tutorials/training"}},a={},c=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"basic-rag-tutorial-with-templates",children:"Basic RAG tutorial with templates"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["In this tutorial we show you how to do retrieval augmented generation (RAG) with ",(0,o.jsx)(n.code,{children:"superduperdb"}),".\nNote that this is just an example of the flexibility and power which ",(0,o.jsx)(n.code,{children:"superduperdb"})," gives\nto developers. ",(0,o.jsx)(n.code,{children:"superduperdb"})," is about much more than RAG and LLMs."]})}),"\n",(0,o.jsxs)(n.p,{children:["As in the vector-search tutorial we'll use ",(0,o.jsx)(n.code,{children:"superduperdb"})," documentation for the tutorial.\nWe'll add this to a testing database by downloading the data snapshot:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/text.json\nimport json\n\nfrom superduperdb import superduper, Document\n\ndb = superduper('mongomock://test')\n\nwith open('text.json') as f:\n    data = json.load(f)\n\n_ = db['docu'].insert_many([{'txt': r} for r in data]).execute()\n"})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Outputs"}),(0,o.jsx)("pre",{children:(0,o.jsxs)(n.p,{children:["% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\nDload  Upload   Total   Spent    Left  Speed\n100  479k  100  479k    0     0   501k      0 --:--:-- --:--:-- --:--:--  504k\n2024-Jun-02 14:23:40.34| INFO     | Duncans-MBP.fritz.box| superduperdb.base.build:69   | Data Client is ready. mongomock.MongoClient('localhost', 27017)\n2024-Jun-02 14:23:40.35| INFO     | Duncans-MBP.fritz.box| superduperdb.base.build:42   | Connecting to Metadata Client with engine:  mongomock.MongoClient('localhost', 27017)\n2024-Jun-02 14:23:40.36| INFO     | Duncans-MBP.fritz.box| superduperdb.base.build:155  | Connecting to compute client: None\n2024-Jun-02 14:23:40.36| INFO     | Duncans-MBP.fritz.box| superduperdb.base.datalayer:85   | Building Data Layer\n2024-Jun-02 14:23:40.36| INFO     | Duncans-MBP.fritz.box| superduperdb.base.build:220  | Configuration:\n+---------------+------------------+\n| Configuration |      Value       |\n+---------------+------------------+\n|  Data Backend | mongomock://test |\n+---------------+------------------+\n2024-Jun-02 14:23:40.37| INFO     | Duncans-MBP.fritz.box| superduperdb.backends.local.compute:37   | Submitting job. function:<function callable_job at 0x11e98dda0>\n2024-Jun-02 14:23:40.38| SUCCESS  | Duncans-MBP.fritz.box| superduperdb.backends.local.compute:43   | Job submitted on <superduperdb.backends.local.compute.LocalComputeBackend object at 0x2a8ed7050>.  function:<function callable_job at 0x11e98dda0> future",":ebe43b87-1388-4247-8502-ed2da8659ecd"]})})]}),"\n",(0,o.jsxs)(n.p,{children:["Let's verify the data in the ",(0,o.jsx)(n.code,{children:"db"})," by querying one datapoint:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"db['docu'].find_one().execute()\n"})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Outputs"}),(0,o.jsx)("pre",{children:(0,o.jsxs)(n.p,{children:["Document({'txt': \"---\\nsidebar_position: 5\\n---\\n\\n# Encoding data\\n\\nIn AI, typical types of data are:\\n\\n- ",(0,o.jsx)(n.strong,{children:"Numbers"})," (integers, floats, etc.)\\n- ",(0,o.jsx)(n.strong,{children:"Text"}),"\\n- ",(0,o.jsx)(n.strong,{children:"Images"}),"\\n- ",(0,o.jsx)(n.strong,{children:"Audio"}),"\\n- ",(0,o.jsx)(n.strong,{children:"Videos"}),"\\n- ",(0,o.jsx)(n.strong,{children:"...bespoke in house data"}),"\\n\\nMost databases don't support any data other than numbers and text.\\nSuperDuperDB enables the use of these more interesting data-types using the ",(0,o.jsx)(n.code,{children:"Document"})," wrapper.\\n\\n### ",(0,o.jsx)(n.code,{children:"Document"}),"\\n\\nThe ",(0,o.jsx)(n.code,{children:"Document"})," wrapper, wraps dictionaries, and is the container which is used whenever \\ndata is exchanged with your database. That means inputs, and queries, wrap dictionaries \\nused with ",(0,o.jsx)(n.code,{children:"Document"})," and also results are returned wrapped with ",(0,o.jsx)(n.code,{children:"Document"}),".\\n\\nWhenever the ",(0,o.jsx)(n.code,{children:"Document"})," contains data which is in need of specialized serialization,\\nthen the ",(0,o.jsx)(n.code,{children:"Document"})," instance contains calls to ",(0,o.jsx)(n.code,{children:"DataType"})," instances.\\n\\n### ",(0,o.jsx)(n.code,{children:"DataType"}),"\\n\\nThe ",(0,o.jsxs)(n.a,{href:"../apply_api/datatype",children:[(0,o.jsx)(n.code,{children:"DataType"})," class"]}),", allows users to create and encoder custom datatypes, by providing \\ntheir own encoder/decoder pairs.\\n\\nHere is an example of applying an ",(0,o.jsx)(n.code,{children:"DataType"})," to add an image to a ",(0,o.jsx)(n.code,{children:"Document"}),":\\n\\n",(0,o.jsx)(n.code,{children:"python\\nimport pickle\\nimport PIL.Image\\nfrom superduperdb import DataType, Document\\n\\nimage = PIL.Image.open('my_image.jpg')\\n\\nmy_image_encoder = DataType(\\n    identifier='my-pil',\\n    encoder=lambda x: pickle.dumps(x),\\n    decoder=lambda x: pickle.loads(x),\\n)\\n\\ndocument = Document(\\{'img': my_image_encoder(image)\\})\\n"}),"\\n\\nThe bare-bones dictionary may be exposed with ",(0,o.jsx)(n.code,{children:".unpack()"}),":\\n\\n",(0,o.jsx)(n.code,{children:"python\\n\\>\\>\\> document.unpack()\\n\\{'img': \\<PIL.PngImagePlugin.PngImageFile image mode=P size=400x300\\>\\}\\n"}),"\\n\\nBy default, data encoded with ",(0,o.jsx)(n.code,{children:"DataType"})," is saved in the database, but developers \\nmay alternatively save data in the ",(0,o.jsx)(n.code,{children:"db.artifact_store"})," instead. \\n\\nThis may be achiever by specifying the ",(0,o.jsx)(n.code,{children:"encodable=..."})," parameter:\\n\\n",(0,o.jsx)(n.code,{children:"python\\nmy_image_encoder = DataType(\\n    identifier='my-pil',\\n    encoder=lambda x: pickle.dumps(x),\\n    decoder=lambda x: pickle.loads(x),\\n    encodable='artifact',    # saves to disk/ db.artifact_store\\n    # encodable='lazy_artifact', # Just in time loading\\n)\\n"}),"\\n\\nThe ",(0,o.jsx)(n.code,{children:"encodable"})," specifies the type of the output of the ",(0,o.jsx)(n.code,{children:"__call__"})," method, \\nwhich will be a subclass of ",(0,o.jsx)(n.code,{children:"superduperdb.components.datatype._BaseEncodable"}),".\\nThese encodables become leaves in the tree defines by a ",(0,o.jsx)(n.code,{children:"Document"}),".\\n\\n### ",(0,o.jsx)(n.code,{children:"Schema"}),"\\n\\nA ",(0,o.jsx)(n.code,{children:"Schema"})," allows developers to connect named fields of dictionaries \\nor columns of ",(0,o.jsx)(n.code,{children:"pandas.DataFrame"})," objects with ",(0,o.jsx)(n.code,{children:"DataType"})," instances.\\n\\nA ",(0,o.jsx)(n.code,{children:"Schema"})," is used, in particular, for SQL databases/ tables, and for \\nmodels that return multiple outputs.\\n\\nHere is an example ",(0,o.jsx)(n.code,{children:"Schema"}),", which is used together with text and image \\nfields:\\n\\n",(0,o.jsx)(n.code,{children:"python\\ns = Schema('my-schema', fields=\\{'my-text': 'str', 'my-image': my_image_encoder\\})\\n"}),"\\n\", '_fold': 'train', '_id': ObjectId('665c644c53dcb972da5a9928')})"]})})]}),"\n",(0,o.jsxs)(n.p,{children:["The first step in a RAG application is to create a ",(0,o.jsx)(n.code,{children:"VectorIndex"}),". The results of searching\nwith this index will be used as input to the LLM for answering questions."]}),"\n",(0,o.jsxs)(n.p,{children:["Read about ",(0,o.jsx)(n.code,{children:"VectorIndex"})," ",(0,o.jsx)(n.a,{href:"/docs/apply_api/vector_index",children:"here"})," and follow along the tutorial on\nvector-search ",(0,o.jsx)(n.a,{href:"/docs/tutorials/vector_search",children:"here"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import requests \n\nfrom superduperdb import Stack, Document, VectorIndex, Listener, vector\nfrom superduperdb.ext.sentence_transformers.model import SentenceTransformer\nfrom superduperdb.base.code import Code\n\ndef postprocess(x):\n    return x.tolist()\n\ndatatype = vector(shape=384, identifier="my-vec")\n    \nmodel = SentenceTransformer(\n    identifier="my-embedding",\n    datatype=datatype,\n    predict_kwargs={"show_progress_bar": True},\n    signature="*args,**kwargs",\n    model="all-MiniLM-L6-v2",      \n    device="cpu",\n    postprocess=Code.from_object(postprocess),\n)\n\nlistener = Listener(\n    identifier="my-listener",\n    model=model,\n    key=\'txt\',\n    select=db[\'docu\'].find(),\n    predict_kwargs={\'max_chunk_size\': 50},\n)\n\nvector_index = VectorIndex(\n    identifier="my-index",\n    indexing_listener=listener,\n    measure="cosine"\n)\n\ndb.apply(vector_index)\n'})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Outputs"}),(0,o.jsxs)("pre",{children:[(0,o.jsx)(n.p,{children:"from superduperdb import code"}),(0,o.jsx)(n.p,{children:"@code\ndef postprocess(x):\nreturn x.tolist()"})]}),(0,o.jsx)("pre",{children:(0,o.jsxs)(n.p,{children:["/Users/dodo/.pyenv/versions/3.11.7/envs/superduperdb-3.11/lib/python3.11/site-packages/huggingface_hub/file_download.py:1132: FutureWarning: ",(0,o.jsx)(n.code,{children:"resume_download"})," is deprecated and will be removed in version 1.0.0. Downloads always resume when possible. If you want to force a new download, use ",(0,o.jsx)(n.code,{children:"force_download=True"}),".\nwarnings.warn(\n/Users/dodo/.pyenv/versions/3.11.7/envs/superduperdb-3.11/lib/python3.11/site-packages/huggingface_hub/file_download.py:1132: FutureWarning: ",(0,o.jsx)(n.code,{children:"resume_download"})," is deprecated and will be removed in version 1.0.0. Downloads always resume when possible. If you want to force a new download, use ",(0,o.jsx)(n.code,{children:"force_download=True"}),".\nwarnings.warn("]})}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.p,{children:"2024-Jun-02 14:23:58.41| INFO     | Duncans-MBP.fritz.box| superduperdb.backends.local.compute:37   | Submitting job. function:<function method_job at 0x11e98de40>"})}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.p,{children:"204it [00:00, 149744.14it/s]"})}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.p,{children:"2024-Jun-02 14:23:59.54| INFO     | Duncans-MBP.fritz.box| superduperdb.components.model:752  | Computing chunk 0/4"})}),(0,o.jsx)("pre",{}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.p,{children:"Batches:   0%|          | 0/2 [00:00<?, ?it/s]"})}),(0,o.jsx)("pre",{children:(0,o.jsxs)(n.p,{children:["2024-Jun-02 14:24:00.55| INFO     | Duncans-MBP.fritz.box| superduperdb.components.model:776  | Adding 50 model outputs to ",(0,o.jsx)(n.code,{children:"db"}),"\n2024-Jun-02 14:24:00.58| WARNING  | Duncans-MBP.fritz.box| superduperdb.backends.mongodb.query:316  | Some delete ids are not executed , hence halting execution Please note the partially executed operations wont trigger any ",(0,o.jsx)(n.code,{children:"model/listeners"})," unless CDC is active.\n2024-Jun-02 14:24:00.58| INFO     | Duncans-MBP.fritz.box| superduperdb.components.model:752  | Computing chunk 1/4"]})}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.p,{children:"Batches:   0%|          | 0/2 [00:00<?, ?it/s]"})}),(0,o.jsx)("pre",{children:(0,o.jsxs)(n.p,{children:["2024-Jun-02 14:24:01.40| INFO     | Duncans-MBP.fritz.box| superduperdb.components.model:776  | Adding 50 model outputs to ",(0,o.jsx)(n.code,{children:"db"}),"\n2024-Jun-02 14:24:01.43| WARNING  | Duncans-MBP.fritz.box| superduperdb.backends.mongodb.query:316  | Some delete ids are not executed , hence halting execution Please note the partially executed operations wont trigger any ",(0,o.jsx)(n.code,{children:"model/listeners"})," unless CDC is active.\n2024-Jun-02 14:24:01.43| INFO     | Duncans-MBP.fritz.box| superduperdb.components.model:752  | Computing chunk 2/4"]})}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.p,{children:"Batches:   0%|          | 0/2 [00:00<?, ?it/s]"})}),(0,o.jsx)("pre",{children:(0,o.jsxs)(n.p,{children:["2024-Jun-02 14:24:02.28| INFO     | Duncans-MBP.fritz.box| superduperdb.components.model:776  | Adding 50 model outputs to ",(0,o.jsx)(n.code,{children:"db"}),"\n2024-Jun-02 14:24:02.30| WARNING  | Duncans-MBP.fritz.box| superduperdb.backends.mongodb.query:316  | Some delete ids are not executed , hence halting execution Please note the partially executed operations wont trigger any ",(0,o.jsx)(n.code,{children:"model/listeners"})," unless CDC is active.\n2024-Jun-02 14:24:02.30| INFO     | Duncans-MBP.fritz.box| superduperdb.components.model:752  | Computing chunk 3/4"]})}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.p,{children:"Batches:   0%|          | 0/2 [00:00<?, ?it/s]"})}),(0,o.jsx)("pre",{children:(0,o.jsxs)(n.p,{children:["2024-Jun-02 14:24:03.13| INFO     | Duncans-MBP.fritz.box| superduperdb.components.model:776  | Adding 50 model outputs to ",(0,o.jsx)(n.code,{children:"db"}),"\n2024-Jun-02 14:24:03.16| WARNING  | Duncans-MBP.fritz.box| superduperdb.backends.mongodb.query:316  | Some delete ids are not executed , hence halting execution Please note the partially executed operations wont trigger any ",(0,o.jsx)(n.code,{children:"model/listeners"})," unless CDC is active.\n2024-Jun-02 14:24:03.16| INFO     | Duncans-MBP.fritz.box| superduperdb.components.model:752  | Computing chunk 4/4"]})}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.p,{children:"Batches:   0%|          | 0/1 [00:00<?, ?it/s]"})}),(0,o.jsx)("pre",{children:(0,o.jsxs)(n.p,{children:["2024-Jun-02 14:24:03.26| INFO     | Duncans-MBP.fritz.box| superduperdb.components.model:776  | Adding 4 model outputs to ",(0,o.jsx)(n.code,{children:"db"}),"\n2024-Jun-02 14:24:03.26| WARNING  | Duncans-MBP.fritz.box| superduperdb.backends.mongodb.query:316  | Some delete ids are not executed , hence halting execution Please note the partially executed operations wont trigger any ",(0,o.jsx)(n.code,{children:"model/listeners"})," unless CDC is active.\n2024-Jun-02 14:24:03.26| SUCCESS  | Duncans-MBP.fritz.box| superduperdb.backends.local.compute:43   | Job submitted on <superduperdb.backends.local.compute.LocalComputeBackend object at 0x2a8ed7050>.  function:<function method_job at 0x11e98de40> future",":ac399012-8213-481a-b537-3d187fb69583","\n2024-Jun-02 14:24:03.26| INFO     | Duncans-MBP.fritz.box| superduperdb.backends.local.compute:37   | Submitting job. function:<function callable_job at 0x11e98dda0>\n2024-Jun-02 14:24:04.56| INFO     | Duncans-MBP.fritz.box| superduperdb.base.datalayer:169  | Loading vectors of vector-index: 'my-index'\n2024-Jun-02 14:24:04.56| INFO     | Duncans-MBP.fritz.box| superduperdb.base.datalayer:179  | docu.find(documents[0], documents[1])"]})}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.p,{children:"Loading vectors into vector-table...: 204it [00:00, 3031.62it/s]"})}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.p,{children:"2024-Jun-02 14:24:04.63| SUCCESS  | Duncans-MBP.fritz.box| superduperdb.backends.local.compute:43   | Job submitted on <superduperdb.backends.local.compute.LocalComputeBackend object at 0x2a8ed7050>.  function:<function callable_job at 0x11e98dda0> future:41ae1218-3899-4588-bef6-481acee98e25"})}),(0,o.jsx)("pre",{}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.p,{children:"([<superduperdb.jobs.job.ComponentJob at 0x2dfe3a810>,\n<superduperdb.jobs.job.FunctionJob at 0x2acd55dd0>],\nVectorIndex(identifier='my-index', uuid='7cb9de9f-4cc8-4944-a297-f6a433c51d19', indexing_listener=Listener(identifier='my-listener', uuid='81ea6d64-21f0-4552-b234-1bcf8094c35f', key='txt', model=SentenceTransformer(preferred_devices=('cuda', 'mps', 'cpu'), device='cpu', identifier='my-embedding', uuid='db4daee6-22fe-43fe-8a57-97ced878ef2a', signature='*args,**kwargs', datatype=DataType(identifier='my-vec', uuid='dbdb8706-10f7-4377-952b-b83b81c6624a', encoder=None, decoder=None, info=None, shape=(384,), directory=None, encodable='native', bytes_encoding=<BytesEncoding.BYTES: 'Bytes'>, intermediate_type='bytes', media_type=None), output_schema=None, flatten=False, model_update_kwargs={}, predict_kwargs={'show_progress_bar': True}, compute_kwargs={}, validation=None, metric_values={}, object=SentenceTransformer(\n(0): Transformer({'max_seq_length': 256, 'do_lower_case': False}) with Transformer model: BertModel\n(1): Pooling({'word_embedding_dimension': 384, 'pooling_mode_cls_token': False, 'pooling_mode_mean_tokens': True, 'pooling_mode_max_tokens': False, 'pooling_mode_mean_sqrt_len_tokens': False, 'pooling_mode_weightedmean_tokens': False, 'pooling_mode_lasttoken': False, 'include_prompt': True})\n(2): Normalize()\n), model='all-MiniLM-L6-v2', preprocess=None, postprocess=Code(identifier='', uuid='cb1d9759-5061-4f39-a91d-e25b959e2a18', code='from superduperdb import code\\n\\n@code\\ndef postprocess(x):\\n    return x.tolist()\\n')), select=docu.find(), active=True, predict_kwargs={'max_chunk_size': 50}), compatible_listener=None, measure='cosine', metric_values={}))"})})]}),"\n",(0,o.jsxs)(n.p,{children:["Now that we've set up a ",(0,o.jsx)(n.code,{children:"VectorIndex"}),", we can connect this index with an LLM in a number of ways.\nA simple way to do that is with the ",(0,o.jsx)(n.code,{children:"SequentialModel"}),". The first part of the ",(0,o.jsx)(n.code,{children:"SequentialModel"}),"\nexecutes a query and provides the results to the LLM in the second part."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"RetrievalPrompt"}),' component takes a query with a "free" ',(0,o.jsx)(n.code,{children:"Variable"})," as input.\nThis gives users great flexibility with regard to how they fetch the context\nfor their downstream models."]}),"\n",(0,o.jsxs)(n.p,{children:["We're using OpenAI, but you can use any type of LLm with ",(0,o.jsx)(n.code,{children:"superduperdb"}),". We have several\nnative integrations (see ",(0,o.jsx)(n.a,{href:"../ai_integraitons/",children:"here"}),") but you can also ",(0,o.jsx)(n.a,{href:"../models/bring_your_own_model.md",children:"bring your own model"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.llm.prompter import *\nfrom superduperdb.base.variables import Variable\nfrom superduperdb import Document\nfrom superduperdb.components.model import SequentialModel\nfrom superduperdb.ext.openai import OpenAIChatCompletion\n\nq = db['docu'].like(Document({'txt': Variable('prompt')}), vector_index='my-index', n=5).find().limit(10)\n\ndef get_output(c):\n    return [r['txt'] for r in c]\n\nprompt_template = RetrievalPrompt('my-prompt', select=q, postprocess=Code.from_object(get_output))\n\nllm = OpenAIChatCompletion(\n    'gpt-3.5-turbo',\n    client_kwargs={'api_key': '[OPENAI-API-KEY]'},\n)\nseq = SequentialModel('rag', models=[prompt_template, llm])\n\ndb.apply(seq)\n"})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Outputs"}),(0,o.jsxs)("pre",{children:[(0,o.jsx)(n.p,{children:"from superduperdb import code"}),(0,o.jsx)(n.p,{children:"@code\ndef get_output(c):\nreturn [r['txt'] for r in c]"})]}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.p,{children:"([],\nSequentialModel(identifier='rag', uuid='1c211bfe-00df-4cff-b2a3-7722265150ca', signature='**kwargs', datatype=None, output_schema=None, flatten=False, model_update_kwargs={}, predict_kwargs={}, compute_kwargs={}, validation=None, metric_values={}, models=[RetrievalPrompt(identifier='my-prompt', uuid='e7142d22-e2fc-44de-8c12-5a8b985239bb', signature='**kwargs', datatype=None, output_schema=None, flatten=False, model_update_kwargs={}, predict_kwargs={}, compute_kwargs={}, validation=None, metric_values={}, preprocess=None, postprocess=Code(identifier='', uuid='f49a9d39-693b-4504-852c-6a682bca7e0c', code=\"from superduperdb import code\\n\\n@code\\ndef get_output(c):\\n    return [r['txt'] for r in c]\\n\"), select=docu.like(documents[0], vector_index=\"my-index\", n=5).find().limit(10), prompt_explanation=\"HERE ARE SOME FACTS SEPARATED BY '---' IN OUR DATA REPOSITORY WHICH WILL HELP YOU ANSWER THE QUESTION.\", prompt_introduction='HERE IS THE QUESTION WHICH YOU SHOULD ANSWER BASED ONLY ON THE PREVIOUS FACTS:', join='\\n---\\n'), OpenAIChatCompletion(identifier='gpt-3.5-turbo', uuid='41b0db16-8269-46fa-a6ac-9e56636f68c0', signature='singleton', datatype=None, output_schema=None, flatten=False, model_update_kwargs={}, predict_kwargs={}, compute_kwargs={}, validation=None, metric_values={}, model='gpt-3.5-turbo', max_batch_size=8, openai_api_key=None, openai_api_base=None, client_kwargs={'api_key': '[OPENAI-API-KEY]'}, batch_size=1, prompt='')]))"})})]}),"\n",(0,o.jsxs)(n.p,{children:["Now we can test the ",(0,o.jsx)(n.code,{children:"SequentialModel"})," with a sample question:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"seq.predict_one('Tell be about vector-indexes?')\n"})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Outputs"}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.p,{children:"2024-Jun-02 14:31:27.41| INFO     | Duncans-MBP.fritz.box| superduperdb.base.datalayer:1055 | {}"})}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.p,{children:"Batches:   0%|          | 0/1 [00:00<?, ?it/s]"})}),(0,o.jsx)("pre",{children:(0,o.jsxs)(n.p,{children:["'VectorIndexes in SuperDuperDB wrap a Listener so that outputs are searchable. They can take a second Listener for multimodal search and apply to Listener instances containing Model instances that output vectors, arrays, or tensors. They can be leveraged in SuperDuperDB queries with the ",(0,o.jsx)(n.code,{children:".like"})," operator. VectorIndexes are set up by applying them to the datalayer ",(0,o.jsx)(n.code,{children:"db"}),".'"]})})]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var o=t(6540);const r={},d=o.createContext(r);function s(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);