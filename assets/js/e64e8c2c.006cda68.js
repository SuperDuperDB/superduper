"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3758],{17307:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=a(85893),n=a(11151);const s={sidebar_position:16},o="Working with and inserting large pieces of data",i={id:"docs/walkthrough/using_hybrid_storage_to_handle_large_data_blobs",title:"Working with and inserting large pieces of data",description:"Some applications require large data-blobs and objects, which are larger than the objects which are supported by the underlying database.",source:"@site/content/docs/walkthrough/16_using_hybrid_storage_to_handle_large_data_blobs.md",sourceDirName:"docs/walkthrough",slug:"/docs/walkthrough/using_hybrid_storage_to_handle_large_data_blobs",permalink:"/docs/docs/walkthrough/using_hybrid_storage_to_handle_large_data_blobs",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/docs/walkthrough/16_using_hybrid_storage_to_handle_large_data_blobs.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Working with external data sources",permalink:"/docs/docs/walkthrough/referring_to_data_from_diverse_sources"},next:{title:"Interfacing with popular AI frameworks",permalink:"/docs/docs/walkthrough/supported_ai_frameworks"}},d={},c=[];function l(e){const r={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"working-with-and-inserting-large-pieces-of-data",children:"Working with and inserting large pieces of data"}),"\n",(0,t.jsx)(r.p,{children:"Some applications require large data-blobs and objects, which are larger than the objects which are supported by the underlying database."}),"\n",(0,t.jsx)(r.p,{children:"For example:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["MongoDB supports documents up to ",(0,t.jsx)(r.code,{children:"16MB"})]}),"\n",(0,t.jsxs)(r.li,{children:["SQLite ",(0,t.jsx)(r.code,{children:"BINARY"})," has a default limit of ",(0,t.jsx)(r.code,{children:"1GB"})]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"In addition, for some applications, which are very read-heavy (for example training CNN on a database of images), storing data directly in the database, can lead to impaired database performance."}),"\n",(0,t.jsxs)(r.p,{children:["In such cases, ",(0,t.jsx)(r.code,{children:"superduperdb"})," supports hybrid storage, where large data blobs, are stored on the local filesystem."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"superduperdb"})," supports this hybrid storage, via ",(0,t.jsx)(r.code,{children:"env"})," variable or configuration:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"CFG.downloads.hybrid = True\n"})}),"\n",(0,t.jsx)(r.p,{children:"...or"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"export SUPERDUPERDB_DOWNLOADS_HYBRID=true\n"})}),"\n",(0,t.jsx)(r.p,{children:"Once this has been configured, inserting data proceeds exactly as before, with the difference\nthat items inserted via URI, are saved on the local filesystem, and referred to in the database."}),"\n",(0,t.jsxs)(r.p,{children:["Read ",(0,t.jsx)(r.a,{href:"/docs/docs/walkthrough/referring_to_data_from_diverse_sources",children:"here"})," for more details."]})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,r,a)=>{a.d(r,{Z:()=>i,a:()=>o});var t=a(67294);const n={},s=t.createContext(n);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);