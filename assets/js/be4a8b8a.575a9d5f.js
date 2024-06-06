"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8062],{1199:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=r(4848),i=r(8453);const o={},s="Production features in superduperdb",a={id:"production/overview",title:"Production features in superduperdb",description:"superduperdb was made with productionization in mind. These means several things:",source:"@site/content/production/overview.md",sourceDirName:"production",slug:"/production/overview",permalink:"/docs/production/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/production/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vector-search",permalink:"/docs/fundamentals/vector_search_algorithm"},next:{title:"Developer vs. production mode",permalink:"/docs/production/development_vs_cluster_mode"}},d={},c=[{value:"Modifiable, configurable, flexible",id:"modifiable-configurable-flexible",level:2},{value:"Scalability",id:"scalability",level:2},{value:"Interoperability",id:"interoperability",level:2},{value:"Live serving",id:"live-serving",level:2},{value:"Declarative markup",id:"declarative-markup",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"production-features-in-superduperdb",children:["Production features in ",(0,t.jsx)(n.code,{children:"superduperdb"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"superduperdb"})," was made with productionization in mind. These means several things:"]}),"\n",(0,t.jsx)(n.h2,{id:"modifiable-configurable-flexible",children:"Modifiable, configurable, flexible"}),"\n",(0,t.jsx)(n.p,{children:"A production ready solution should not come up short, as soon as developers\nencounted a use-case or scenario outside of the norm, or the documented\napplications. In this respect, modifiablility, configurability and flexibility are key."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"superduperdb"})," contains fully open-source (Apache 2.0, MIT, BSD 3-part) components for all aspects of the setup.\nThis goes from the AI-models integrated, the databases and client libraries supported, as well as\nthe cluster and compute management. This means that developers are never left hung out\nto dry with regard to taking action in altering and interrogating the source doe, as well\nas adding their own functionality."]}),"\n",(0,t.jsxs)(n.p,{children:["In addition, ",(0,t.jsx)(n.code,{children:"superduperdb"}),' may be used and configured in a wide variety of ways.\nIt can be used "in-process", with computations blocking ("developer mode") and\nit can be operated in a cluster-like architecture, with compute, vector-search,\nchange-data capture and a REST-ful server separated into separate services.\nThis is ideal for teams of developers looking to productionize their AI-data setups.']}),"\n",(0,t.jsx)(n.h2,{id:"scalability",children:"Scalability"}),"\n",(0,t.jsxs)(n.p,{children:["A production ready solution should scale with the amount of traffic, data\nand computation to the system. ",(0,t.jsx)(n.code,{children:"superduperdb"})," includes a ",(0,t.jsx)(n.code,{children:"ray"})," integration\nwhich allows developers to scale the compute as the amount of data and requests\nto the system grod. Read more ",(0,t.jsx)(n.a,{href:"./non_blocking_ray_jobs",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In addition ",(0,t.jsx)(n.code,{children:"superduperdb"})," has the option to separate the vector-comparison and sorting component\ninto a separate service, so this doesn't block or slow down the main program running."]}),"\n",(0,t.jsx)(n.h2,{id:"interoperability",children:"Interoperability"}),"\n",(0,t.jsxs)(n.p,{children:["Due to the ",(0,t.jsx)(n.a,{href:"./change_data_capture",children:"change-data-capture component"}),", developers\nare not required to operate their database through ",(0,t.jsx)(n.code,{children:"superduperdb"}),". Third-party\ndatabase clients, and even other programming languages other than Python\nmay be used to add data to the database. Nonetheless, ",(0,t.jsx)(n.code,{children:"superduperdb"}),"\nwill still process this data."]}),"\n",(0,t.jsxs)(n.p,{children:["In addition the ",(0,t.jsx)(n.a,{href:"./rest_api",children:"REST API"})," may be easily used to access ",(0,t.jsx)(n.code,{children:"superduperdb"}),"\nfrom the web, or from other programming environments."]}),"\n",(0,t.jsx)(n.h2,{id:"live-serving",children:"Live serving"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"./rest_api",children:"REST API"})," service may be used to access ",(0,t.jsx)(n.code,{children:"superduperdb"})," using pure JSON,\nplus references to saved/ uploaded binaries. This gives great flexibility to application\ndevelopers looking to build on top of ",(0,t.jsx)(n.code,{children:"superduperdb"})," from Javascript etc.."]}),"\n",(0,t.jsx)(n.h2,{id:"declarative-markup",children:"Declarative markup"}),"\n",(0,t.jsxs)(n.p,{children:["All ",(0,t.jsx)(n.code,{children:"superduperdb"})," components may be invoked in Python, or in a ",(0,t.jsx)(n.a,{href:"./yaml_formalism",children:"YAML/ JSON formalism"}),".\nThis provides a convenient set of choices for AI engineers, infrastructure engineers\nand beyond to share and communicate their AI-data setups in ",(0,t.jsx)(n.code,{children:"superduperdb"})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(6540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);