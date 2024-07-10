"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[1654],{9161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var a=n(4848),i=n(8453);const s={sidebar_position:3},r="SQL",d={id:"data_integrations/sql",title:"SQL",description:"superduper supports SQL databases via the ibis project.",source:"@site/content/data_integrations/sql.md",sourceDirName:"data_integrations",slug:"/data_integrations/sql",permalink:"/docs/data_integrations/sql",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper.io/superduper/blob/main/docs/hr/content/data_integrations/sql.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"MongoDB",permalink:"/docs/data_integrations/mongodb"},next:{title:"MySQL",permalink:"/docs/data_integrations/mysql"}},c={},o=[{value:"Inserting data",id:"inserting-data",level:2},{value:"Selecting data",id:"selecting-data",level:2},{value:"Vector-search",id:"vector-search",level:3},{value:"Updating data",id:"updating-data",level:2},{value:"Deleting data",id:"deleting-data",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"sql",children:"SQL"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"superduper"})," supports SQL databases via the ",(0,a.jsxs)(t.a,{href:"https://ibis-project.org/",children:[(0,a.jsx)(t.code,{children:"ibis"})," project"]}),".\nWith ",(0,a.jsx)(t.code,{children:"superduper"}),", queries may be built which conform to the ",(0,a.jsx)(t.code,{children:"ibis"})," API, with additional\nsupport for complex data-types and vector-searches."]}),"\n",(0,a.jsx)(t.h2,{id:"inserting-data",children:"Inserting data"}),"\n",(0,a.jsxs)(t.p,{children:["Table data must correspond to the ",(0,a.jsx)(t.code,{children:"Schema"})," for that table.\nEither ",(0,a.jsxs)(t.a,{href:"/docs/execute_api/data_encodings_and_schemas#create-a-table-with-a-schema",children:["create a ",(0,a.jsx)(t.code,{children:"Schema"})," and ",(0,a.jsx)(t.code,{children:"Table"})]}),"\nor use ",(0,a.jsxs)(t.a,{href:"/docs/execute_api/auto_data_types",children:["an auto-detected ",(0,a.jsx)(t.code,{children:"Schema"})]}),". Once you've\ngot a ",(0,a.jsx)(t.code,{children:"Schema"}),", all data inserted must conform to that ",(0,a.jsx)(t.code,{children:"Schema"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import pandas\n\npandas.DataFrame([\n    PIL.Image.open('image.jpg'), 'some text', 4,\n    PIL.Image.open('other_image.jpg'), 'some other text', 3,\n])\n\nt.insert(dataframe.to_dict(orient='records'))\n"})}),"\n",(0,a.jsx)(t.h2,{id:"selecting-data",children:"Selecting data"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"superduper"})," supports selecting data via the ",(0,a.jsx)(t.code,{children:"ibis"})," query API.\nFor example:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"db['my_table'].filter(t.rating > 3).limit(5).select(t.image).execute()\n"})}),"\n",(0,a.jsx)(t.h3,{id:"vector-search",children:"Vector-search"}),"\n",(0,a.jsxs)(t.p,{children:["Vector-searches are supported via the ",(0,a.jsx)(t.code,{children:"like"})," operator:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"(\n    db['my_table']\n    .like({'text': 'something like this'}, vector_index='my-index')\n    .filter(t.rating > 3)\n    .limit(5)\n    .select(t.image, t.id)\n).execute()\n"})}),"\n",(0,a.jsx)(t.p,{children:"Vector-searches are either first or last in a chain of operations:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"(\n    db['my_table']\n    t.filter(t.rating > 3)\n    .limit(5)\n    .select(t.image, t.id)\n    .like({'text': 'something like this'}, vector_index='my-index')\n).execute()\n"})}),"\n",(0,a.jsx)(t.h2,{id:"updating-data",children:"Updating data"}),"\n",(0,a.jsxs)(t.p,{children:["Updates are not covered for ",(0,a.jsx)(t.code,{children:"superduper"})," SQL integrations."]}),"\n",(0,a.jsx)(t.h2,{id:"deleting-data",children:"Deleting data"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"db.databackend.drop_table('my-table')\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var a=n(6540);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);