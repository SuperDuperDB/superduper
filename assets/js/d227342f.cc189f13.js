"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8961],{80816:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=n(85893),o=n(11151);const s={sidebar_position:8},i="Datalayer functionality",a={id:"docs/walkthrough/datalayer_functionality",title:"Datalayer functionality",description:"Once you have connected to your database with superduperdb (see here),",source:"@site/content/docs/walkthrough/08_datalayer_functionality.md",sourceDirName:"docs/walkthrough",slug:"/docs/walkthrough/datalayer_functionality",permalink:"/docs/docs/walkthrough/datalayer_functionality",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/docs/walkthrough/08_datalayer_functionality.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Minimum working example",permalink:"/docs/docs/walkthrough/minimum_working_example"},next:{title:"Query API Syntax and Approach",permalink:"/docs/docs/walkthrough/supported_query_APIs"}},r={},c=[{value:"Key methods",id:"key-methods",level:2},{value:"<code>db.execute</code>",id:"dbexecute",level:3},{value:"<code>db.add</code>",id:"dbadd",level:3},{value:"<code>db.show</code>",id:"dbshow",level:3},{value:"<code>db.remove</code>",id:"dbremove",level:3},{value:"Additional methods",id:"additional-methods",level:2},{value:"<code>db.validate</code>",id:"dbvalidate",level:3},{value:"<code>db.predict</code>",id:"dbpredict",level:3}];function l(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.h1,{id:"datalayer-functionality",children:"Datalayer functionality"}),"\n",(0,t.jsxs)(d.p,{children:["Once you have connected to your database with ",(0,t.jsx)(d.code,{children:"superduperdb"})," (see ",(0,t.jsx)(d.a,{href:"/docs/docs/fundamentals/connecting",children:"here"}),"),\nyou are ready to use your ",(0,t.jsx)(d.code,{children:"db: Datalayer"})," object to combine two aspects of your workflow:"]}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsxs)(d.li,{children:["Querying, and utilizing your database through the ",(0,t.jsx)(d.code,{children:"databackend"})]}),"\n",(0,t.jsx)(d.li,{children:"Adding and removing models and associated components"}),"\n",(0,t.jsx)(d.li,{children:"Displaying information related to these components"}),"\n"]}),"\n",(0,t.jsx)(d.h2,{id:"key-methods",children:"Key methods"}),"\n",(0,t.jsx)(d.p,{children:"Here are the key methods which you'll use again and again:"}),"\n",(0,t.jsx)(d.h3,{id:"dbexecute",children:(0,t.jsx)(d.code,{children:"db.execute"})}),"\n",(0,t.jsxs)(d.p,{children:["This method executes a query. For an overview of how this works see ",(0,t.jsx)(d.a,{href:"/docs/docs/walkthrough/supported_query_APIs",children:"here"}),"."]}),"\n",(0,t.jsx)(d.h3,{id:"dbadd",children:(0,t.jsx)(d.code,{children:"db.add"})}),"\n",(0,t.jsxs)(d.p,{children:["This method adds ",(0,t.jsx)(d.code,{children:"Component"})," instances to the ",(0,t.jsx)(d.code,{children:"db.artifact_store"})," connection, and registers meta-data\nabout those instances in the ",(0,t.jsx)(d.code,{children:"db.metadata_store"}),"."]}),"\n",(0,t.jsxs)(d.p,{children:["In addition, each sub-class of ",(0,t.jsx)(d.code,{children:"Component"}),' has certain "set-up" tasks, such as inference, additional configurations,\nor training, and these are scheduled by ',(0,t.jsx)(d.code,{children:"db.add"}),"."]}),"\n",(0,t.jsx)(d.h3,{id:"dbshow",children:(0,t.jsx)(d.code,{children:"db.show"})}),"\n",(0,t.jsxs)(d.p,{children:["This methods displays which ",(0,t.jsx)(d.code,{children:"Component"})," instances are registered with the system."]}),"\n",(0,t.jsx)(d.h3,{id:"dbremove",children:(0,t.jsx)(d.code,{children:"db.remove"})}),"\n",(0,t.jsxs)(d.p,{children:["This method removes a ",(0,t.jsx)(d.code,{children:"Component"})," instance from the system."]}),"\n",(0,t.jsx)(d.h2,{id:"additional-methods",children:"Additional methods"}),"\n",(0,t.jsx)(d.h3,{id:"dbvalidate",children:(0,t.jsx)(d.code,{children:"db.validate"})}),"\n",(0,t.jsx)(d.p,{children:"Validate your components (mostly models)"}),"\n",(0,t.jsx)(d.h3,{id:"dbpredict",children:(0,t.jsx)(d.code,{children:"db.predict"})}),"\n",(0,t.jsxs)(d.p,{children:["Infer predictions from models hosted by ",(0,t.jsx)(d.code,{children:"superduperdb"}),". Read more about this and about models ",(0,t.jsx)(d.a,{href:"/docs/docs/fundamentals/apply_models",children:"here"}),"."]})]})}function h(e={}){const{wrapper:d}={...(0,o.a)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,d,n)=>{n.d(d,{Z:()=>a,a:()=>i});var t=n(67294);const o={},s=t.createContext(o);function i(e){const d=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function a(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:d},e.children)}}}]);