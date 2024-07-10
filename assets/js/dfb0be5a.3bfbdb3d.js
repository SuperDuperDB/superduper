"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[238],{8187:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=d(4848),r=d(8453);const i={},c=void 0,s={id:"api/ext/torch/utils",title:"utils",description:"superduper.ext.torch.utils",source:"@site/content/api/ext/torch/utils.md",sourceDirName:"api/ext/torch",slug:"/api/ext/torch/utils",permalink:"/docs/api/ext/torch/utils",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper.io/superduper/blob/main/docs/hr/content/api/ext/torch/utils.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"training",permalink:"/docs/api/ext/torch/training"},next:{title:"model",permalink:"/docs/api/ext/transformers/model"}},o={},l=[{value:"<code>device_of</code>",id:"device_of",level:2},{value:"<code>eval</code>",id:"eval",level:2},{value:"<code>to_device</code>",id:"to_device",level:2},{value:"<code>set_device</code>",id:"set_device",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"superduper.ext.torch.utils"})})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/ext/torch/utils.py",children:"Source code"})}),"\n",(0,n.jsx)(t.h2,{id:"device_of",children:(0,n.jsx)(t.code,{children:"device_of"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"device_of(module: 'Module') -> 't.Union[_device,\n     str]'\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"module"}),(0,n.jsx)(t.td,{children:"PyTorch model"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Get device of a model."}),"\n",(0,n.jsx)(t.h2,{id:"eval",children:(0,n.jsx)(t.code,{children:"eval"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"eval(module: 'Module') -> 't.Iterator[None]'\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"module"}),(0,n.jsx)(t.td,{children:"PyTorch module"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Temporarily set a module to evaluation mode."}),"\n",(0,n.jsx)(t.h2,{id:"to_device",children:(0,n.jsx)(t.code,{children:"to_device"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"to_device(item: 't.Any',\n     device: 't.Union[str,\n     _device]') -> 't.Any'\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"item"}),(0,n.jsx)(t.td,{children:"torch.Tensor instance"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"device"}),(0,n.jsx)(t.td,{children:"device to which one would like to send"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Send tensor leaves of nested list/ dictionaries/ tensors to device."}),"\n",(0,n.jsx)(t.h2,{id:"set_device",children:(0,n.jsx)(t.code,{children:"set_device"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"set_device(module: 'Module',\n     device: '_device')\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"module"}),(0,n.jsx)(t.td,{children:"PyTorch module"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"device"}),(0,n.jsx)(t.td,{children:"Device to set"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Temporarily set a device of a module."})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,d)=>{d.d(t,{R:()=>c,x:()=>s});var n=d(6540);const r={},i=n.createContext(r);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);