"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[9036],{621:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(4848),r=t(8453);const i={},o=void 0,c={id:"api/components/plugin",title:"plugin",description:"superduper.components.plugin",source:"@site/content/api/components/plugin.md",sourceDirName:"api/components",slug:"/api/components/plugin",permalink:"/docs/api/components/plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper.io/superduper/blob/main/docs/hr/content/api/components/plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"model",permalink:"/docs/api/components/model"},next:{title:"schema",permalink:"/docs/api/components/schema"}},d={},l=[{value:"<code>Plugin</code>",id:"plugin",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"superduper.components.plugin"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/superduper/superduper/blob/main/superduper.components/plugin.py",children:"Source code"})}),"\n",(0,s.jsx)(n.h2,{id:"plugin",children:(0,s.jsx)(n.code,{children:"Plugin"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Plugin(self,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: None = None,\n     *,\n     identifier: str = '',\n     plugins: \"t.Optional[t.List['Plugin']]\" = None,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     path: str,\n     cache_path: str = '.superduper/plugins') -> None\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"identifier"}),(0,s.jsx)(n.td,{children:"Unique identifier for the plugin."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db"}),(0,s.jsx)(n.td,{children:"Datalayer instance."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"uuid"}),(0,s.jsx)(n.td,{children:"UUID of the leaf."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"artifacts"}),(0,s.jsxs)(n.td,{children:["A dictionary of artifacts paths and ",(0,s.jsx)(n.code,{children:"DataType"})," objects"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"plugins"}),(0,s.jsx)(n.td,{children:"A list of plugins to be used in the component."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"Path to the plugin package or module."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cache_path"}),(0,s.jsx)(n.td,{children:"Path to the cache directory where the plugin will be stored."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Plugin component allows to install and use external python packages as plugins."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);