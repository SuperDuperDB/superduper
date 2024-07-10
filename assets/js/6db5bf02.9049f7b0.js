"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5488],{3064:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=r(4848),i=r(8453);const s={},d=void 0,a={id:"api/ext/transformers/training",title:"training",description:"superduper.ext.transformers.training",source:"@site/content/api/ext/transformers/training.md",sourceDirName:"api/ext/transformers",slug:"/api/ext/transformers/training",permalink:"/docs/api/ext/transformers/training",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper.io/superduper/blob/main/docs/hr/content/api/ext/transformers/training.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"model",permalink:"/docs/api/ext/transformers/model"},next:{title:"utils",permalink:"/docs/api/ext/utils"}},l={},c=[{value:"<code>create_quantization_config</code>",id:"create_quantization_config",level:2},{value:"<code>handle_ray_results</code>",id:"handle_ray_results",level:2},{value:"<code>prepare_lora_training</code>",id:"prepare_lora_training",level:2},{value:"<code>train_func</code>",id:"train_func",level:2},{value:"<code>tokenize</code>",id:"tokenize",level:2},{value:"<code>train</code>",id:"train",level:2},{value:"<code>Checkpoint</code>",id:"checkpoint",level:2},{value:"<code>LLMCallback</code>",id:"llmcallback",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"superduper.ext.transformers.training"})})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/superduper/superduper/blob/main/superduper/ext/transformers/training.py",children:"Source code"})}),"\n",(0,t.jsx)(n.h2,{id:"create_quantization_config",children:(0,t.jsx)(n.code,{children:"create_quantization_config"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"create_quantization_config(config: superduper.ext.transformers.training.LLMTrainer)\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"config"}),(0,t.jsx)(n.td,{children:"The configuration to use."})]})})]}),"\n",(0,t.jsx)(n.p,{children:"Create quantization config for LLM training."}),"\n",(0,t.jsx)(n.h2,{id:"handle_ray_results",children:(0,t.jsx)(n.code,{children:"handle_ray_results"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"handle_ray_results(db,\n     llm,\n     results)\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db"}),(0,t.jsx)(n.td,{children:"datalayer, used for saving the checkpoint"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"llm"}),(0,t.jsx)(n.td,{children:"llm model, used for saving the checkpoint"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"results"}),(0,t.jsx)(n.td,{children:"the ray training results, contains the checkpoint"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Handle the ray results."}),"\n",(0,t.jsx)(n.p,{children:"Will save the checkpoint to db if db and llm provided."}),"\n",(0,t.jsx)(n.h2,{id:"prepare_lora_training",children:(0,t.jsx)(n.code,{children:"prepare_lora_training"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"prepare_lora_training(model,\n     config: superduper.ext.transformers.training.LLMTrainer)\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"model"}),(0,t.jsx)(n.td,{children:"The model to prepare for LoRA training."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"config"}),(0,t.jsx)(n.td,{children:"The configuration to use."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Prepare LoRA training for the model."}),"\n",(0,t.jsx)(n.p,{children:"Get the LoRA target modules and convert the model to peft model."}),"\n",(0,t.jsx)(n.h2,{id:"train_func",children:(0,t.jsx)(n.code,{children:"train_func"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"train_func(training_args: superduper.ext.transformers.training.LLMTrainer,\n     train_dataset: 'Dataset',\n     eval_datasets: Union[ForwardRef('Dataset'),\n     Dict[str,\n     ForwardRef('Dataset')]],\n     model_kwargs: dict,\n     tokenizer_kwargs: dict,\n     trainer_prepare_func: Optional[Callable] = None,\n     callbacks=None,\n     **kwargs)\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"training_args"}),(0,t.jsx)(n.td,{children:"training Arguments, see LLMTrainingArguments"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"train_dataset"}),(0,t.jsx)(n.td,{children:"training dataset, can be huggingface datasets.Dataset or ray.data.Dataset"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"eval_datasets"}),(0,t.jsx)(n.td,{children:"evaluation dataset, can be a dict of datasets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"model_kwargs"}),(0,t.jsx)(n.td,{children:"model kwargs for AutoModelForCausalLM"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tokenizer_kwargs"}),(0,t.jsx)(n.td,{children:"tokenizer kwargs for AutoTokenizer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"trainer_prepare_func"}),(0,t.jsx)(n.td,{children:"function to prepare trainer This function will be called after the trainer is created, we can add some custom settings to the trainer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"callbacks"}),(0,t.jsx)(n.td,{children:"list of callbacks will be added to the trainer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"kwargs"}),(0,t.jsx)(n.td,{children:"other kwargs for Trainer All the kwargs will be passed to Trainer, make sure the Trainer support these kwargs"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Base training function for LLM model."}),"\n",(0,t.jsx)(n.h2,{id:"tokenize",children:(0,t.jsx)(n.code,{children:"tokenize"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"tokenize(tokenizer,\n     example,\n     X,\n     y)\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tokenizer"}),(0,t.jsx)(n.td,{children:"The tokenizer to use."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"example"}),(0,t.jsx)(n.td,{children:"The example to tokenize."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"X"}),(0,t.jsx)(n.td,{children:"The input key."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"y"}),(0,t.jsx)(n.td,{children:"The output key."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Function to tokenize the example."}),"\n",(0,t.jsx)(n.h2,{id:"train",children:(0,t.jsx)(n.code,{children:"train"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"train(training_args: superduper.ext.transformers.training.LLMTrainer,\n     train_dataset: datasets.arrow_dataset.Dataset,\n     eval_datasets: Union[datasets.arrow_dataset.Dataset,\n     Dict[str,\n     datasets.arrow_dataset.Dataset]],\n     model_kwargs: dict,\n     tokenizer_kwargs: dict,\n     db: Optional[ForwardRef('Datalayer')] = None,\n     llm: Optional[ForwardRef('LLM')] = None,\n     ray_configs: Optional[dict] = None,\n     **kwargs)\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"training_args"}),(0,t.jsx)(n.td,{children:"training Arguments, see LLMTrainingArguments"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"train_dataset"}),(0,t.jsx)(n.td,{children:"training dataset"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"eval_datasets"}),(0,t.jsx)(n.td,{children:"evaluation dataset, can be a dict of datasets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"model_kwargs"}),(0,t.jsx)(n.td,{children:"model kwargs for AutoModelForCausalLM"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tokenizer_kwargs"}),(0,t.jsx)(n.td,{children:"tokenizer kwargs for AutoTokenizer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db"}),(0,t.jsx)(n.td,{children:"datalayer, used for creating LLMCallback"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"llm"}),(0,t.jsx)(n.td,{children:"llm model, used for creating LLMCallback"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ray_configs"}),(0,t.jsx)(n.td,{children:"ray configs, must provide if using ray"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"kwargs"}),(0,t.jsx)(n.td,{children:"other kwargs for Trainer"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Train LLM model on specified dataset."}),"\n",(0,t.jsx)(n.p,{children:"The training process can be run on these following modes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Local node without ray, but only support single GPU"}),"\n",(0,t.jsx)(n.li,{children:"Local node with ray, support multi-nodes and multi-GPUs"}),"\n",(0,t.jsx)(n.li,{children:"Remote node with ray, support multi-nodes and multi-GPUs"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If run locally, will use train_func to train the model.\nCan log the training process to db if db and llm provided.\nWill reuse the db and llm from the current process.\nIf run on ray, will use ray_train to train the model.\nCan log the training process to db if db and llm provided.\nWill rebuild the db and llm for the new process that can access to db.\nThe ray cluster must can access to db."}),"\n",(0,t.jsx)(n.h2,{id:"checkpoint",children:(0,t.jsx)(n.code,{children:"Checkpoint"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"Checkpoint(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = None,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     path: Optional[str],\n     step: int) -> None\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"identifier"}),(0,t.jsx)(n.td,{children:"Identifier of the leaf."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db"}),(0,t.jsx)(n.td,{children:"Datalayer instance."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uuid"}),(0,t.jsx)(n.td,{children:"UUID of the leaf."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"artifacts"}),(0,t.jsxs)(n.td,{children:["A dictionary of artifacts paths and ",(0,t.jsx)(n.code,{children:"DataType"})," objects"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"path"}),(0,t.jsx)(n.td,{children:"The path to the checkpoint."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"step"}),(0,t.jsx)(n.td,{children:"The step of the checkpoint."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Checkpoint component for saving the model checkpoint."}),"\n",(0,t.jsx)(n.h2,{id:"llmcallback",children:(0,t.jsx)(n.code,{children:"LLMCallback"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"LLMCallback(self,\n     cfg: Optional[ForwardRef('Config')] = None,\n     identifier: Optional[str] = None,\n     db: Optional[ForwardRef('Datalayer')] = None,\n     llm: Optional[ForwardRef('LLM')] = None,\n     experiment_id: Optional[str] = None)\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cfg"}),(0,t.jsx)(n.td,{children:"The configuration to use."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"identifier"}),(0,t.jsx)(n.td,{children:"The identifier to use."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db"}),(0,t.jsx)(n.td,{children:"The datalayer to use."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"llm"}),(0,t.jsx)(n.td,{children:"The LLM model to use."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"experiment_id"}),(0,t.jsx)(n.td,{children:"The experiment id to use."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"LLM Callback for logging training process to db."}),"\n",(0,t.jsx)(n.p,{children:"This callback will save the checkpoint to db after each epoch.\nIf the save_total_limit is set, will remove the oldest checkpoint."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>a});var t=r(6540);const i={},s=t.createContext(i);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);