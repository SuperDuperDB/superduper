"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},l="When to use standalone or cluster mode",s={unversionedId:"docs/explanations/cluster_vs_standalone_mode",id:"docs/explanations/cluster_vs_standalone_mode",title:"When to use standalone or cluster mode",description:"SuperDuperDB may be used in cluster or standalone mode, depending on the use-case, and whether SuperDuperDB is being used for development of production. By default SuperDuperDB runs in standalone mode.",source:"@site/content/docs/explanations/cluster_vs_standalone_mode.md",sourceDirName:"docs/explanations",slug:"/docs/explanations/cluster_vs_standalone_mode",permalink:"/newdocs/index.html/docs/docs/explanations/cluster_vs_standalone_mode",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/content/docs/explanations/cluster_vs_standalone_mode.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Explanations",permalink:"/newdocs/index.html/docs/category/explanations"},next:{title:"How SuperDuperDB handles external data",permalink:"/newdocs/index.html/docs/docs/explanations/external_data"}},i={},p=[{value:"Standalone",id:"standalone",level:2},{value:"Cluster",id:"cluster",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"when-to-use-standalone-or-cluster-mode"},"When to use standalone or cluster mode"),(0,a.kt)("p",null,"SuperDuperDB may be used in ",(0,a.kt)("strong",{parentName:"p"},"cluster")," or ",(0,a.kt)("strong",{parentName:"p"},"standalone")," mode, depending on the use-case, and whether SuperDuperDB is being used for development of production. By default SuperDuperDB runs in ",(0,a.kt)("strong",{parentName:"p"},"standalone")," mode.\n",(0,a.kt)("strong",{parentName:"p"},"Cluster")," and ",(0,a.kt)("strong",{parentName:"p"},"standalone")," mode affect how and where computations are run, which are triggered whenever:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data is inserted or updated, triggering data to be downloaded and ",(0,a.kt)("inlineCode",{parentName:"li"},"model.predict")," to be executed on added ",(0,a.kt)("inlineCode",{parentName:"li"},"Listener")," instances."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"model.fit")," is called")),(0,a.kt)("p",null,"By using a combination of ",(0,a.kt)("strong",{parentName:"p"},"standalone")," mode and ",(0,a.kt)("strong",{parentName:"p"},"cluster")," mode, users and teams may profit from the advantages of both aspects, especially when transitioning from development to deployment."),(0,a.kt)("h2",{id:"standalone"},"Standalone"),(0,a.kt)("p",null,"In standalone mode, all computations and queries run in a single thread. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Advantages"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Computations are run transparently in the foreground"),(0,a.kt)("li",{parentName:"ul"},"Debugging is straightforward"),(0,a.kt)("li",{parentName:"ul"},"Works well in local deployments on a single client")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Disadvantages"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Solution does not scale to arbitrary numbers of workers"),(0,a.kt)("li",{parentName:"ul"},"No solution for communication with remote hosts/ apps"),(0,a.kt)("li",{parentName:"ul"},"No insertion of data except through SuperDuperDB main thread")),(0,a.kt)("h2",{id:"cluster"},"Cluster"),(0,a.kt)("p",null,"In cluster mode, all computations run asynchronously on a ",(0,a.kt)("a",{parentName:"p",href:"jobs"},"Dask cluster"),". In addition,\na ",(0,a.kt)("a",{parentName:"p",href:"CDC"},"change-data capture")," service (CDC) is run on a separate thread, which listens to MongoDB for changes.\nRead more ",(0,a.kt)("a",{parentName:"p",href:"clustersection"},"here"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Advantages"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Compute is scalable to magnitude handled by Dask cluster"),(0,a.kt)("li",{parentName:"ul"},"Deployment is accessible remotely via client-server implementation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Disadvantages"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Debugging is challenging, since breakpoints cannot be set easily in workers"),(0,a.kt)("li",{parentName:"ul"},"Managing solution requires setting up logging service to monitor all components")))}c.isMDXComponent=!0}}]);