"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6700],{8824:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var t=a(4848),c=a(8453);const s={},l="Table",r={id:"apply_api/table",title:"Table",description:"- Use a table in your databackend database, which optionally has a Schema attached",source:"@site/content/apply_api/table.md",sourceDirName:"apply_api",slug:"/apply_api/table",permalink:"/docs/apply_api/table",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper.io/superduper/blob/main/docs/hr/content/apply_api/table.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Schema",permalink:"/docs/apply_api/schema"},next:{title:"Dataset",permalink:"/docs/apply_api/dataset"}},i={},o=[];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"table",children:(0,t.jsx)(n.code,{children:"Table"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use a table in your databackend database, which optionally has a ",(0,t.jsx)(n.code,{children:"Schema"})," attached"]}),"\n",(0,t.jsxs)(n.li,{children:["Table can be a ",(0,t.jsx)(n.code,{children:"MongoDB"})," collection or an SQL table."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Dependencies"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/apply_api/schema",children:(0,t.jsx)(n.code,{children:"Schema"})})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Usage pattern"})})}),"\n",(0,t.jsxs)(n.p,{children:["(Learn how to build a ",(0,t.jsx)(n.code,{children:"Schema"})," ",(0,t.jsx)(n.a,{href:"schema",children:"here"}),")"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduper.backends.ibis import Table\n\ntable = Table(\n    'my-table',\n    schema=my_schema\n)\n\ndb.apply(table)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In MongoDB, the attached ",(0,t.jsx)(n.code,{children:"schema"})," will be used as the default ",(0,t.jsx)(n.code,{children:"Schema"})," for that ",(0,t.jsx)(n.code,{children:"Table"})," (collection)."]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>r});var t=a(6540);const c={},s=t.createContext(c);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);