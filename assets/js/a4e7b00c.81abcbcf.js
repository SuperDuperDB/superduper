"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7421],{1673:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(4848),i=t(8453);const a={},c="Metric",o={id:"apply_api/metric",title:"Metric",description:"- Wrapper around a function intended to validate model outputs",source:"@site/content/apply_api/metric.md",sourceDirName:"apply_api",slug:"/apply_api/metric",permalink:"/docs/apply_api/metric",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper.io/superduper/blob/main/docs/hr/content/apply_api/metric.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dataset",permalink:"/docs/apply_api/dataset"},next:{title:"Validation",permalink:"/docs/apply_api/validation"}},s={},l=[];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"metric",children:(0,r.jsx)(n.code,{children:"Metric"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Wrapper around a function intended to validate model outputs"}),"\n",(0,r.jsx)(n.li,{children:"Function returns scalar value"}),"\n",(0,r.jsxs)(n.li,{children:["Used in ",(0,r.jsx)(n.code,{children:"Validation"}),", ",(0,r.jsx)(n.code,{children:"Model"})," and ",(0,r.jsx)(n.code,{children:"Trainer"})," to measure ",(0,r.jsx)(n.code,{children:"Model"})," performance"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Usage pattern"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import Metric\n\ndef example_comparison(x, y):\n    return sum([xx == yy for xx, yy in zip(x, y)]) / len(x)\n\nm = Metric(\n    'accuracy',\n    object=example_comparison,\n)\n\ndb.apply(m)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"See also"})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../cluster_mode/change_data_capture",children:"Change-data capture"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/apply_api/validation",children:"Validation"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(6540);const i={},a=r.createContext(i);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);