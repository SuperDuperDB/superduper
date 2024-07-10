"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2921],{9854:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(4848),u=t(8453);const i={},s=void 0,c={id:"api/misc/runnable/queue_chunker",title:"queue_chunker",description:"superduper.misc.runnable.queue_chunker",source:"@site/content/api/misc/runnable/queue_chunker.md",sourceDirName:"api/misc/runnable",slug:"/api/misc/runnable/queue_chunker",permalink:"/docs/api/misc/runnable/queue_chunker",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper.io/superduper/blob/main/docs/hr/content/api/misc/runnable/queue_chunker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"runnable",permalink:"/docs/api/misc/runnable/"},next:{title:"serialization",permalink:"/docs/api/misc/serialization"}},o={},d=[{value:"<code>QueueChunker</code>",id:"queuechunker",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,u.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"superduper.misc.runnable.queue_chunker"})})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/misc/runnable/queue_chunker.py",children:"Source code"})}),"\n",(0,r.jsx)(n.h2,{id:"queuechunker",children:(0,r.jsx)(n.code,{children:"QueueChunker"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"QueueChunker(self,\n     chunk_size: int,\n     timeout: float,\n     accumulate_timeouts: bool = False) -> None\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"chunk_size"}),(0,r.jsx)(n.td,{children:"Maximum number of entries in a chunk"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timeout"}),(0,r.jsx)(n.td,{children:"Maximum amount of time to block"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accumulate_timeouts"}),(0,r.jsxs)(n.td,{children:["If accumulate timeouts is True, then ",(0,r.jsx)(n.code,{children:"timeout"})," is the total timeout allowed over the whole chunk, otherwise the timeout is applied to each item."]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Chunk a queue into lists of length at most ",(0,r.jsx)(n.code,{children:"chunk_size"})," within time ",(0,r.jsx)(n.code,{children:"timeout"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,u.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(6540);const u={},i=r.createContext(u);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(u):e.components||u:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);