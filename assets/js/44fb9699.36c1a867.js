"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[928],{9:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(4848),r=t(8453);const i={},s="Predictions",c={id:"execute_api/predictions",title:"Predictions",description:"Model predictions may be deployed by calling Model.predict or Model.predict_one directly.",source:"@site/content/execute_api/predictions.md",sourceDirName:"execute_api",slug:"/execute_api/predictions",permalink:"/docs/execute_api/predictions",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/execute_api/predictions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deleting data",permalink:"/docs/execute_api/delete_queries"},next:{title:"Models",permalink:"/docs/models/overview"}},d={},l=[];function a(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"predictions",children:"Predictions"}),"\n",(0,o.jsxs)(n.p,{children:["Model predictions may be deployed by calling ",(0,o.jsx)(n.code,{children:"Model.predict"})," or ",(0,o.jsx)(n.code,{children:"Model.predict_one"})," directly."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"m = db.load('model', 'my-model')\n\n# *args, **kwargs depend on model implementation\nresults = m.predict_one(*args, **kwargs)\n"})}),"\n",(0,o.jsx)(n.p,{children:'An alternative is to construct a prediction "query" as follows:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# *args, **kwargs depend on model implementation\ndb['my-model'].predict_one(*args, **kwargs).execute()\n"})}),"\n",(0,o.jsx)(n.p,{children:"The results should be the same for both versions."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(6540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);