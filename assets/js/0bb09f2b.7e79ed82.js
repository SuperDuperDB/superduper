"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[518],{5373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=t(4848),o=t(8453),a=t(9489),s=t(7227),i=t(94);const l={sidebar_label:"Build image embedding model",filename:"build_image_embedding_model.md"},d="Build image embedding model",c={id:"reusable_snippets/build_image_embedding_model",title:"build_image_embedding_model",description:"Construct a neural network architecture to project high-dimensional image data into a lower-dimensional, dense vector representation",source:"@site/content/reusable_snippets/build_image_embedding_model.md",sourceDirName:"reusable_snippets",slug:"/reusable_snippets/build_image_embedding_model",permalink:"/docs/reusable_snippets/build_image_embedding_model",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper.io/superduper/blob/main/docs/hr/content/reusable_snippets/build_image_embedding_model.md",tags:[],version:"current",frontMatter:{sidebar_label:"Build image embedding model",filename:"build_image_embedding_model.md"},sidebar:"tutorialSidebar",previous:{title:"Build text embedding model",permalink:"/docs/reusable_snippets/build_text_embedding_model"},next:{title:"Build multimodal embedding models",permalink:"/docs/reusable_snippets/build_multimodal_embedding_models"}},u={},m=[];function p(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"build-image-embedding-model",children:"Build image embedding model"}),"\n",(0,r.jsx)(n.p,{children:"Construct a neural network architecture to project high-dimensional image data into a lower-dimensional, dense vector representation\n(embedding) that preserves relevant semantic and visual information within a learned latent space."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"!wget https://raw.githubusercontent.com/openai/CLIP/main/CLIP.png\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'image_path = "CLIP.png"\n'})}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(s.A,{value:"TorchVision",label:"TorchVision",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nimport torch\nimport torchvision.models as models\nfrom torchvision import transforms\nfrom superduper.ext.torch import TorchModel\n\nclass TorchVisionEmbedding:\n    def __init__(self):\n        # Load the pre-trained ResNet-18 model\n        self.resnet = models.resnet18(pretrained=True)\n        \n        # Set the model to evaluation mode\n        self.resnet.eval()\n        \n    def preprocess(self, image):\n        # Preprocess the image\n        preprocess = preprocess = transforms.Compose([\n            transforms.Resize(256),\n            transforms.CenterCrop(224),\n            transforms.ToTensor(),\n            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),\n        ])\n        tensor_image = preprocess(image)\n        return tensor_image\n        \nembedding_model = TorchVisionEmbedding()\nsuperdupermodel = TorchModel(identifier='my-vision-model-torch', object=embedding_model.resnet, preprocess=embedding_model.preprocess)        \n"})})}),(0,r.jsx)(s.A,{value:"CLIP-multimodal",label:"CLIP-multimodal",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import torch\nimport clip\nfrom torchvision import transforms\nfrom superduper.ext.torch import TorchModel\n\nclass CLIPVisionEmbedding:\n    def __init__(self):\n        # Load the CLIP model\n        self.device = "cuda" if torch.cuda.is_available() else "cpu"\n        self.model, self.preprocess = clip.load("RN50", device=self.device)\n        \n    def preprocess(self, image):\n        # Load and preprocess the image\n        image = self.preprocess(image).unsqueeze(0).to(self.device)\n        return image\n        \nembedding_model = CLIPVisionEmbedding()\nsuperdupermodel = TorchModel(identifier=\'my-vision-model-clip\', object=model.model, preprocess=model.preprocess, forward_method=\'encode_image\')        \n'})})}),(0,r.jsx)(s.A,{value:"HuggingFace (ViT)",label:"HuggingFace (ViT)",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import torch\nfrom transformers import AutoImageProcessor, AutoModel, AutoFeatureExtractor\nimport torchvision.transforms as T\nfrom superduper.ext.torch import TorchModel\n\n\nclass HuggingFaceEmbeddings(torch.nn.Module):\n    def __init__(self):\n        super().__init__()\n        model_ckpt = "nateraw/vit-base-beans"\n        processor = AutoImageProcessor.from_pretrained(model_ckpt)\n        self.extractor = AutoFeatureExtractor.from_pretrained(model_ckpt)\n        self.model = AutoModel.from_pretrained(model_ckpt)\n\n    def forward(self, x):\n        return self.model(pixel_values=x).last_hidden_state[:, 0].cpu()\n        \n        \nclass Preprocessor:\n    def __init__(self, extractor):\n        self.device = \'cpu\'\n        # Data transformation chain.\n        self.transformation_chain = T.Compose(\n            [\n                # We first resize the input image to 256x256 and then we take center crop.\n                T.Resize(int((256 / 224) * extractor.size["height"])),\n                T.CenterCrop(extractor.size["height"]),\n                T.ToTensor(),\n                T.Normalize(mean=extractor.image_mean, std=extractor.image_std),\n            ]\n        )\n    def __call__(self, image):\n        return self.transformation_chain(image).to(self.device)\n\n    \nembedding_model = HuggingFaceEmbeddings()\nsuperdupermodel = TorchModel(identifier=\'my-vision-model-huggingface\', object=embedding_model, preprocess=Preprocessor(embedding_model.extractor))        \n'})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"embedding_model.predict(Image.open(image_path))\n"})}),"\n",(0,r.jsx)(i.A,{filename:"build_image_embedding_model.md"})]})}function b(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},94:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(6540);const o=e=>{const n=Array.from(document.querySelectorAll('.tabs > li[role="tab"]')).filter((e=>"true"===e.getAttribute("aria-selected"))).map((e=>e.textContent.trim()));console.log("About to process filename:",e),console.log("Selected tabs:",n);const t=`_${e.replace(/\.md$/,".ipynb")}`,r=encodeURIComponent(t);fetch(`https://build-use-cases-sddb.replit.app/build_notebook?usecase_path=.%2Fuse_cases%2F${r}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)}).then((e=>e.blob())).then((e=>{const n=window.URL.createObjectURL(e),r=document.createElement("a");r.style.display="none",r.href=n,r.download=t,document.body.appendChild(r),r.click(),window.URL.revokeObjectURL(n),alert("Your file has downloaded!")})).catch((()=>alert("There was an error."))),console.log("Sending JSON payload:",JSON.stringify(n))};var a=t(4848);const s=e=>{let{filename:n}=e;if(!n)return console.error("Filename is not provided or invalid."),null;const[t,s]=(0,r.useState)(!1),i={padding:"10px",borderRadius:"10px",border:"0",color:"#000",backgroundColor:"#C4F800",fontWeight:"bold",cursor:"pointer"};return(0,a.jsx)("button",{style:t?{...i,backgroundColor:"#B0E000"}:i,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onClick:()=>o(n),children:"Generate notebook from all selected tabs"})}},7227:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(870);const o={tabItem:"tabItem_Ymn6"};var a=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:t,children:n})}},9489:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(6540),o=t(870),a=t(4245),s=t(6347),i=t(6494),l=t(2814),d=t(5167),c=t(1269);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=m(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[d,u]=b({queryString:t,groupId:o}),[h,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,c.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),g=(()=>{const e=d??h;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=t(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),o=i[t].value;o!==r&&(d(n),s(o))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...a,className:(0,o.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=h(e);return(0,_.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,_.jsx)(v,{...e,...n}),(0,_.jsx)(x,{...e,...n})]})}function j(e){const n=(0,f.A)();return(0,_.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);