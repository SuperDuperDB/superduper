"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2044],{3930:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var t=r(4848),s=r(8453),o=r(9489),a=r(7227);const u={},l="YAML/ JSON formalism",c={id:"production/yaml_formalism",title:"YAML/ JSON formalism",description:"superduperdb includes a mapping back and forth from Python to YAML/ JSON formats.",source:"@site/content/production/yaml_formalism.md",sourceDirName:"production",slug:"/production/yaml_formalism",permalink:"/docs/production/yaml_formalism",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/production/yaml_formalism.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting up SuperDuperDB as a change-data-capture daemon",permalink:"/docs/production/change_data_capture"},next:{title:"RESTful service",permalink:"/docs/production/rest_api"}},i={},d=[];function p(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"yaml-json-formalism",children:"YAML/ JSON formalism"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"superduperdb"})," includes a mapping back and forth from Python to YAML/ JSON formats.\nThe mapping is fairly self-explanatory after reading the example below."]}),"\n","\n","\n",(0,t.jsxs)(o.A,{children:[(0,t.jsxs)(a.A,{value:"YAML",label:"YAML",default:!0,children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'_base: "?my_vector_index"\n_leaves:\n  postprocess:\n    _path: superduperdb/base/code/Code\n    code: \'\n      from superduperdb import code\n\n      @code\n      def postprocess(x):\n          return x.tolist()\n      \'\n  my_vector:\n    _path: superduperdb/components/vector_index/vector\n    shape: 384\n  sentence_transformer:\n    _path: superduperdb/ext/sentence_transformers/model/SentenceTransformer\n    datatype: "?my_vector"\n    model: "all-MiniLM-L6-v2"\n    postprocess: "?postprocess"\n  my_query:\n    _path: superduperdb/backends/mongodb/query/parse_query\n    query: "documents.find()"\n  my_listener:\n    _path: superduperdb/components/listener/Listener\n    model: "?sentence_transformer"\n    select: "?my_query"\n    key: "X"\n  my_vector_index:\n    _path: superduperdb/components/vector_index/VectorIndex\n    indexing_listener: "?my_listener"\n    measure: cosine\n'})}),(0,t.jsx)(n.p,{children:"Then from the commmand line:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"superduperdb apply --manifest='<path_to_config>.yaml'\n"})})]}),(0,t.jsxs)(a.A,{value:"JSON",label:"JSON",default:!0,children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "_base": "?my_vector_index",\n  "_leaves": {\n    "postprocess": {\n      "_path": "superduperdb/base/code/Code",\n      "code": "from superduperdb import code\\n\\n@code\\ndef postprocess(x):\\n    return x.tolist()"\n    },\n    "my_vector": {\n      "_path": "superduperdb/components/vector_index/vector",\n      "shape": 384\n    },\n    "sentence_transformer": {\n      "_path": "superduperdb/ext/sentence_transformers/model/SentenceTransformer",\n      "datatype": "?my_vector",\n      "model": "all-MiniLM-L6-v2",\n      "postprocess": "?postprocess"\n    },\n    "my_query": {\n      "_path": "superduperdb/backends/mongodb/query/parse_query",\n      "query": "documents.find()"\n    },\n    "my_listener": {\n      "_path": "superduperdb/components/listener/Listener",\n      "model": "?sentence_transformer",\n      "select": "?my_query"\n    },\n    "my_vector_index": {\n      "_path": "superduperdb/components/vector_index/VectorIndex",\n      "indexing_listener": "?my_listener",\n      "measure": "cosine"\n    }\n  }\n}\n'})}),(0,t.jsx)(n.p,{children:"Then from the command line:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"superduperdb apply --manifest='<path_to_config>.json'\n"})})]}),(0,t.jsx)(a.A,{value:"Python",label:"Python",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from superduperdb import superduper\nfrom superduperdb.components.vector_index import vector\nfrom superduperdb.ext.sentence_transformers.model import SentenceTransformer\nfrom superduperdb.components.listener import Listener\nfrom superduperdb.components.vector_index import VectorIndex\nfrom superduperdb.base.code import Code\nfrom superduperdb import Stack\n\n\ndb = superduper(\'mongomock://\')\n\ndatatype = vector(shape=384, identifier="my-vec")\n\n\ndef postprocess(x):\n    return x.tolist()\n\n\npostprocess = Code.from_object(postprocess)\n\n\nmodel = SentenceTransformer(\n    identifier="test",\n    datatype=datatype,\n    predict_kwargs={"show_progress_bar": True},\n    signature="*args,**kwargs",\n    model="all-MiniLM-L6-v2",\n    device="cpu",\n    postprocess=postprocess,\n)\n\nlistener = Listener(\n    identifier="my-listener",\n    key="txt",\n    model=model,\n    select=db[\'documents\'].find(),\n    active=True,\n    predict_kwargs={}\n)\n\nvector_index = VectorIndex(\n    identifier="my-index",\n    indexing_listener=listener,\n    measure="cosine"\n)\n\ndb.apply(vector_index)\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},7227:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var t=r(870);const s={tabItem:"tabItem_Ymn6"};var o=r(4848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:r,children:n})}},9489:(e,n,r)=>{r.d(n,{A:()=>j});var t=r(6540),s=r(870),o=r(4245),a=r(6347),u=r(6494),l=r(2814),c=r(5167),i=r(1269);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function h(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,o=p(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[c,d]=f({queryString:r,groupId:s}),[h,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,i.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:s}),_=(()=>{const e=c??h;return m({value:e,tabValues:o})?e:null})();(0,u.A)((()=>{_&&l(_)}),[_]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(1062);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function y(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:u}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),i=e=>{const n=e.currentTarget,r=l.indexOf(n),s=u[r].value;s!==t&&(c(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:u.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:i,...o,className:(0,s.A)("tabs__item",_.tabItem,o?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=h(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",_.tabList),children:[(0,v.jsx)(y,{...e,...n}),(0,v.jsx)(x,{...e,...n})]})}function j(e){const n=(0,b.A)();return(0,v.jsx)(g,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>u});var t=r(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);