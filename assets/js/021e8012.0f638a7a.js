"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2910],{2824:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=s(4848),o=s(8453);const r={},u="Select outputs of upstream listener",i={id:"docs/reusable_snippets/choose_input_key_from_listener_outputs",title:"Select outputs of upstream listener",description:"This is useful if you have performed a first step, such as pre-computing",source:"@site/content/docs/reusable_snippets/choose_input_key_from_listener_outputs.md",sourceDirName:"docs/reusable_snippets",slug:"/docs/reusable_snippets/choose_input_key_from_listener_outputs",permalink:"/docs/docs/reusable_snippets/choose_input_key_from_listener_outputs",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/reusable_snippets/choose_input_key_from_listener_outputs.md",tags:[],version:"current",frontMatter:{}},c={},p=[];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"select-outputs-of-upstream-listener",children:"Select outputs of upstream listener"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"This is useful if you have performed a first step, such as pre-computing\nfeatures, or chunking your data. You can use this query to\nchoose the input key for further models such as classification models."})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# <tab: MongoDB>\ninput_key = listener.outputs\nselect = table_or_collection.find()\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# <tab: SQL>\ninput_key = listener.outputs\nselect = table_or_collection.outputs(listener.predict_id).select(target_key, input_key)\n"})})]})}function a(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>u,x:()=>i});var n=s(6540);const o={},r=n.createContext(o);function u(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);