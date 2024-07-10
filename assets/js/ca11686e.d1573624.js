"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[1940],{5329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var d=n(4848),i=n(8453);const s={},r=void 0,c={id:"api/ext/jina/model",title:"model",description:"superduper.ext.jina.model",source:"@site/content/api/ext/jina/model.md",sourceDirName:"api/ext/jina",slug:"/api/ext/jina/model",permalink:"/docs/api/ext/jina/model",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper.io/superduper/blob/main/docs/hr/content/api/ext/jina/model.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"client",permalink:"/docs/api/ext/jina/client"},next:{title:"model",permalink:"/docs/api/ext/llamacpp/model"}},a={},l=[{value:"<code>JinaEmbedding</code>",id:"jinaembedding",level:2},{value:"<code>Jina</code>",id:"jina",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:(0,d.jsx)(t.code,{children:"superduper.ext.jina.model"})})}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/ext/jina/model.py",children:"Source code"})}),"\n",(0,d.jsx)(t.h2,{id:"jinaembedding",children:(0,d.jsx)(t.code,{children:"JinaEmbedding"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"JinaEmbedding(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: str = 'singleton',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     model: 't.Optional[str]' = None,\n     max_batch_size: 'int' = 8,\n     api_key: Optional[str] = None,\n     batch_size: int = 100,\n     shape: Optional[Sequence[int]] = None) -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"db"}),(0,d.jsx)(t.td,{children:"Datalayer instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uuid"}),(0,d.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artifacts"}),(0,d.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,d.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"signature"}),(0,d.jsx)(t.td,{children:"Model signature."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datatype"}),(0,d.jsx)(t.td,{children:"DataType instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_schema"}),(0,d.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flatten"}),(0,d.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_update_kwargs"}),(0,d.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"predict_kwargs"}),(0,d.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"compute_kwargs"}),(0,d.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"validation"}),(0,d.jsxs)(t.td,{children:["The validation ",(0,d.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metric_values"}),(0,d.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model"}),(0,d.jsxs)(t.td,{children:["The Model to use, e.g. ",(0,d.jsx)(t.code,{children:"'text-embedding-ada-002'"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"max_batch_size"}),(0,d.jsx)(t.td,{children:"Maximum  batch size."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"api_key"}),(0,d.jsx)(t.td,{children:"The API key to use for the predicto"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"batch_size"}),(0,d.jsx)(t.td,{children:"The batch size to use for the predictor."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"shape"}),(0,d.jsxs)(t.td,{children:["The shape of the embedding as ",(0,d.jsx)(t.code,{children:"tuple"}),". If not provided, it will be obtained by sending a simple query to the API"]})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Jina embedding predictor."}),"\n",(0,d.jsx)(t.h2,{id:"jina",children:(0,d.jsx)(t.code,{children:"Jina"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"Jina(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     signature: 'Signature' = '*args,\n    **kwargs',\n     datatype: 'EncoderArg' = None,\n     output_schema: 't.Optional[Schema]' = None,\n     flatten: 'bool' = False,\n     model_update_kwargs: 't.Dict' = None,\n     predict_kwargs: 't.Dict' = None,\n     compute_kwargs: 't.Dict' = None,\n     validation: 't.Optional[Validation]' = None,\n     metric_values: 't.Dict' = None,\n     model: 't.Optional[str]' = None,\n     max_batch_size: 'int' = 8,\n     api_key: Optional[str] = None) -> None\n"})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"identifier"}),(0,d.jsx)(t.td,{children:"Identifier of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"db"}),(0,d.jsx)(t.td,{children:"Datalayer instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"uuid"}),(0,d.jsx)(t.td,{children:"UUID of the leaf."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artifacts"}),(0,d.jsxs)(t.td,{children:["A dictionary of artifacts paths and ",(0,d.jsx)(t.code,{children:"DataType"})," objects"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"signature"}),(0,d.jsx)(t.td,{children:"Model signature."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"datatype"}),(0,d.jsx)(t.td,{children:"DataType instance."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_schema"}),(0,d.jsx)(t.td,{children:"Output schema (mapping of encoders)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"flatten"}),(0,d.jsx)(t.td,{children:"Flatten the model outputs."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model_update_kwargs"}),(0,d.jsx)(t.td,{children:"The kwargs to use for model update."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"predict_kwargs"}),(0,d.jsx)(t.td,{children:"Additional arguments to use at prediction time."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"compute_kwargs"}),(0,d.jsx)(t.td,{children:"Kwargs used for compute backend job submit. Example (Ray backend): compute_kwargs = dict(resources=...)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"validation"}),(0,d.jsxs)(t.td,{children:["The validation ",(0,d.jsx)(t.code,{children:"Dataset"})," instances to use."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metric_values"}),(0,d.jsx)(t.td,{children:"The metrics to evaluate on."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model"}),(0,d.jsxs)(t.td,{children:["The Model to use, e.g. ",(0,d.jsx)(t.code,{children:"'text-embedding-ada-002'"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"max_batch_size"}),(0,d.jsx)(t.td,{children:"Maximum  batch size."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"api_key"}),(0,d.jsx)(t.td,{children:"The API key to use for the predicto"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Cohere predictor."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var d=n(6540);const i={},s=d.createContext(i);function r(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);