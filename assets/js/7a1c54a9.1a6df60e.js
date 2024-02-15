"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[9320],{90402:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(85893),a=t(11151);const r={},o="Building a Vector-Search on Snowflake",i={id:"use_cases/sql_examples/snowflake-example",title:"Building a Vector-Search on Snowflake",description:"In this use-case we describe how to implement vector-search using superduperdb on Snowflake.",source:"@site/content/use_cases/sql_examples/snowflake-example.md",sourceDirName:"use_cases/sql_examples",slug:"/use_cases/sql_examples/snowflake-example",permalink:"/docs/use_cases/sql_examples/snowflake-example",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/use_cases/sql_examples/snowflake-example.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building a Multimodel Vector-Search on DuckDB",permalink:"/docs/use_cases/sql_examples/multi-modal-duckdb"},next:{title:"Question Answering",permalink:"/docs/category/question-answering-1"}},d={},c=[{value:"Configure <code>superduperdb</code> to work with Snowflake",id:"configure-superduperdb-to-work-with-snowflake",level:3},{value:"Set up sample data to test vector-search",id:"set-up-sample-data-to-test-vector-search",level:2},{value:"Connect to your dedicated vector-search database",id:"connect-to-your-dedicated-vector-search-database",level:3},{value:"Insert data into the vector-search table",id:"insert-data-into-the-vector-search-table",level:3},{value:"Execute a vector-search query with <code>.like</code>",id:"execute-a-vector-search-query-with-like",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"building-a-vector-search-on-snowflake",children:"Building a Vector-Search on Snowflake"}),"\n",(0,s.jsxs)(n.p,{children:["In this use-case we describe how to implement vector-search using ",(0,s.jsx)(n.code,{children:"superduperdb"})," on Snowflake."]}),"\n",(0,s.jsxs)(n.p,{children:["Here is the notebook ",(0,s.jsx)(n.a,{href:"https://github.com/SuperDuperDB/superduperdb/blob/main/examples/snowflake-example.ipynb",children:"notebook"})," for you to run."]}),"\n",(0,s.jsxs)(n.h3,{id:"configure-superduperdb-to-work-with-snowflake",children:["Configure ",(0,s.jsx)(n.code,{children:"superduperdb"})," to work with Snowflake"]}),"\n",(0,s.jsx)(n.p,{children:"The first step in doing this is\nto connect to your snowflake account. When you log in it should look something like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(43564).Z+"",width:"2356",height:"1456"})}),"\n",(0,s.jsxs)(n.p,{children:["The important thing you need to get from this login is the ",(0,s.jsx)(n.strong,{children:"organization-id"})," and ",(0,s.jsx)(n.strong,{children:"user-id"})," from the menu in the bottom right (annotated on the image). You will set these values in the cell below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import os\n\n# We set this value, since Snowflake via `ibis` doesn\'t support `bytes` directly.\nos.environ[\'SUPERDUPERDB_BYTES_ENCODING\'] = \'Str\'\n\nfrom superduperdb import superduper, CFG\n\nuser = "<USERNAME>"\npassword = "<PASSWORD>"\naccount = "WSWZPKW-LN66790"  # ORGANIZATIONID-USERID\n\ndef make_uri(database):\n    return f"snowflake://{user}:{password}@{account}/{database}"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"set-up-sample-data-to-test-vector-search",children:"Set up sample data to test vector-search"}),"\n",(0,s.jsxs)(n.p,{children:["We're going to use some of the Snowflake sample data in this example, namely the ",(0,s.jsx)(n.code,{children:"FREE_COMPANY_DATASET"}),". You\ncan find the ",(0,s.jsx)(n.code,{children:"FREE_COMPANY_DATASET"})," on ",(0,s.jsx)(n.a,{href:"https://app.snowflake.com/marketplace/listing/GZSTZRRVYL2/people-data-labs-free-company-dataset",children:"this link"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Since the database where this data is hosted is read-only, we copy a sample of the data to our own dataset, and work with the data there."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.ibis.query import RawSQL\n\ndb = superduper(\n    make_uri(\"FREE_COMPANY_DATASET/PUBLIC\"),\n    metadata_store='sqlite:///.testdb.db'\n)\n\nsample = db.execute(RawSQL('SELECT * FROM FREECOMPANYDATASET SAMPLE (5000 ROWS);')).as_pandas()\n"})}),"\n",(0,s.jsx)(n.h3,{id:"connect-to-your-dedicated-vector-search-database",children:"Connect to your dedicated vector-search database"}),"\n",(0,s.jsx)(n.p,{children:"We use the connection we created to get the snapshot, to also create the dataset we are going to work with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db.databackend.conn.create_database('SUPERDUPERDB_EXAMPLE', force=True)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now we are ready to connect to this database with ",(0,s.jsx)(n.code,{children:"superduperdb"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.ibis.query import RawSQL\n\ndb = superduper(\n    make_uri(\"SUPERDUPERDB_EXAMPLE/PUBLIC\"),\n    metadata_store='sqlite:///.testdb.db'\n)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Since ",(0,s.jsx)(n.code,{children:"superduperdb"})," implements extra features on top of your classical database/ datalake, it's necessary\nto add the tables you wish to work with to the system. You'll notice we are creating a schema as well; that allows\nus to implement \"interesting\" data-types on top of Snowflake, such as images or audio."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.ibis.query import Table\nfrom superduperdb.backends.ibis.field_types import dtype\nfrom superduperdb import Schema\n\n_, t = db.add(\n    Table(\n        'MYTABLE',\n        primary_id='ID',\n        schema=Schema(\n            'MYSCHEMA',\n            fields={\n                k: dtype('str') \n                for k in sample.columns\n            }\n        )\n    )\n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you log back into Snowflake now it should look like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(71289).Z+"",width:"2352",height:"1444"})}),"\n",(0,s.jsx)(n.p,{children:"You'll see that the database and table have been created."}),"\n",(0,s.jsx)(n.h3,{id:"insert-data-into-the-vector-search-table",children:"Insert data into the vector-search table"}),"\n",(0,s.jsx)(n.p,{children:"Before inserting the data, we'll do a little bit of cleaning. The reason for this, is we want to have clean ids which uniquely define\nthe rows which we are working with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import random\nsample.ID = sample.ID.str.replace('[^A-Za-z0-9\\-]', '', regex=True).str.replace('[-]+', '-', regex=True)\nsample[sample.isnull()] = None\ndel sample['FOUNDED']\n\nrandom_id = lambda: str(random.randint(100000, 999999))\nsample.ID = sample.ID.apply(lambda x: x + '-' + random_id())\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"t = db.load('table', 'MYTABLE')\nt\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now that we've created the table we want to work with, we can insert the sample data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db.execute(t.insert(sample))\n"})}),"\n",(0,s.jsx)(n.p,{children:"Let's check this was successful by fetching some data:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"list(db.execute(t.limit(5)))\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the next step, we're going to port a model from ",(0,s.jsx)(n.code,{children:"sentence_transformers"})," to ",(0,s.jsx)(n.code,{children:"superduperdb"})," and use this model in searching the rows\nof the table with vector-search. You can see that, in-addition to the ",(0,s.jsx)(n.code,{children:"sentence_transformers"})," model, ",(0,s.jsx)(n.code,{children:"superduperdb"})," allows\ndevelopers to specify a preprocessing (and postprocessing) function in their ",(0,s.jsx)(n.code,{children:"Model"})," instances. In this case,\nthe ",(0,s.jsx)(n.code,{children:"preprocess"})," argument tells the model how to convert with the individual lines of data (dictionaries) to strings, so that the model can understand these lines:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb.ext.sentence_transformers import SentenceTransformer\nfrom superduperdb.ext.numpy import array\n\nmodel = SentenceTransformer(\n    identifier='all-MiniLM-L6-v2',\n    preprocess=lambda r: '; '.join([f'{k}={v}' for k, v in r.items()]),\n    encoder=array(dtype='float32', shape=(384,)),\n    predict_method='encode',\n    batch_predict=True,\n    device='mps',\n)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This model is then sent to the ",(0,s.jsx)(n.code,{children:"VectorIndex"})," component via ",(0,s.jsx)(n.code,{children:"Listener"})," and registered with the system\nwith ",(0,s.jsx)(n.code,{children:"db.add"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb import Listener, VectorIndex\n\ndb.add(\n    VectorIndex(\n        identifier='my-index',\n        indexing_listener=Listener(\n            select=t,\n            key='_base',\n            model=model,\n            predict_kwargs={'max_chunk_size': 500, 'batch_size': 30},\n        ),\n    )\n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"This step will take a few moments (unless you have a GPU to hand)."}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Once this step is finished you can\nsearch Snowflake with vector-search!"})})}),"\n",(0,s.jsxs)(n.h3,{id:"execute-a-vector-search-query-with-like",children:["Execute a vector-search query with ",(0,s.jsx)(n.code,{children:".like"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb import Document\n\ncur = db.execute(\n    t\n        .like(Document({'description': 'A management consultancy company based in the USA'}), vector_index='my-index', n = 3)\n        .limit(3)\n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can view the results as a dataframe:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"cur.as_pandas()\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},43564:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/snowflake-login-d6d2395aee4add1333219f65fc4928c4.png"},71289:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/snowflake-table-c263b330f2be876b63d32f1e29b965e3.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var s=t(67294);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);