"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2189],{4938:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var i=s(4848),r=s(8453);const t={},c="Execute",d={id:"core_api/execute",title:"Execute",description:"db.execute is superduper's wrapper around standard database queries:",source:"@site/content/core_api/execute.md",sourceDirName:"core_api",slug:"/core_api/execute",permalink:"/docs/core_api/execute",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper.io/superduper/blob/main/docs/hr/content/core_api/execute.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Apply",permalink:"/docs/core_api/apply"},next:{title:"Apply API",permalink:"/docs/apply_api/component"}},l={},o=[{value:"Building queries/ predictions",id:"building-queries-predictions",level:2},{value:"Selects",id:"selects",level:3},{value:"Inserts",id:"inserts",level:3},{value:"Executing the query",id:"executing-the-query",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"execute",children:"Execute"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"db.execute"})," is superduper's wrapper around standard database queries:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Inserts"}),"\n",(0,i.jsx)(n.li,{children:"Selects"}),"\n",(0,i.jsx)(n.li,{children:"Updates"}),"\n",(0,i.jsx)(n.li,{children:"Deletes"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"As well as model predictions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prediction on single data points (streaming)"}),"\n",(0,i.jsx)(n.li,{children:"Predictions on multiple data points (batch prediction)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"And also queries which consist of a combination of model computations and data operations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Vector-search queries"}),"\n",(0,i.jsx)(n.li,{children:'Complex model predictions which include database queries (e.g. "RAG")'}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Standard database queries are built using a compositional syntax similar to that found in Python database clients\nsuch as ",(0,i.jsx)(n.code,{children:"pymongo"})," and ",(0,i.jsx)(n.code,{children:"ibis"}),". The API also includes extensions of this paradigm to cover model predictions\nand vector-searches."]}),"\n",(0,i.jsxs)(n.p,{children:["Read more about the differences and approaches to document stores/ SQL data-backends ",(0,i.jsx)(n.a,{href:"docs/data_integrations",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"building-queries-predictions",children:"Building queries/ predictions"}),"\n",(0,i.jsx)(n.p,{children:'All queries consist of a "chain" of methods executed over a base object. The base object\ncan refer to a table/ collection or a model:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"q = base_object.method_1(*args_1, **kwargs_1).method_2(*args_2, **kwargs_2)....\n"})}),"\n",(0,i.jsx)(n.h3,{id:"selects",children:"Selects"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"MongoDB"})})}),"\n",(0,i.jsxs)(n.p,{children:["A MongoDB ",(0,i.jsx)(n.code,{children:"find"})," query can be built like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"q = db['collection'].find().limit(5).skip(2)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"SQL"})})}),"\n",(0,i.jsxs)(n.p,{children:["A query with on an SQL data-backend can be built with ",(0,i.jsx)(n.code,{children:"ibis"})," syntax like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"q = db['documents'].filter(t.brand == 'Nike').limit(5)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"inserts",children:"Inserts"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"MongoDB"})})}),"\n",(0,i.jsxs)(n.p,{children:["Typically insert queries wrap ",(0,i.jsx)(n.code,{children:"Document"})," instances and call the ",(0,i.jsx)(n.code,{children:"insert"})," method on a table or collection:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"q = db['documents'].insert_many([Document(r) for r in data])\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"SQL"})})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ibis"})," insert is slightly different:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"q = db['documents'].insert([Document(r) for r in data])\n"})}),"\n",(0,i.jsx)(n.h2,{id:"executing-the-query",children:"Executing the query"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"results = q.execute()\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Multiple results"})})}),"\n",(0,i.jsx)(n.p,{children:"Iterables of results are sent wrapped in a cursor"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Indiviudal results"})})}),"\n",(0,i.jsxs)(n.p,{children:["Individual results are sent wrapped in a ",(0,i.jsx)(n.code,{children:"Document"})]}),"\n",(0,i.jsxs)(n.p,{children:["Read more about ",(0,i.jsx)(n.code,{children:".execute"})," ",(0,i.jsx)(n.a,{href:"../execute_api/overview",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var i=s(6540);const r={},t=i.createContext(r);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);