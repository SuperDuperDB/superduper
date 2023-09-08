"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[9320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,g=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return n?o.createElement(g,i(i({ref:t},l),{},{components:n})):o.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[s]="string"==typeof e?e:r,i[1]=d;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={},i="Add images, audio or video from URIs",d={unversionedId:"docs/how_to/add_images_or_audio",id:"docs/how_to/add_images_or_audio",title:"Add images, audio or video from URIs",description:'In this "how-to" guide, we demonstrate how to add images, audio or video to SuperDuperDB.',source:"@site/content/docs/how_to/add_images_or_audio.md",sourceDirName:"docs/how_to",slug:"/docs/how_to/add_images_or_audio",permalink:"/newdocs/index.html/docs/docs/how_to/add_images_or_audio",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/content/docs/how_to/add_images_or_audio.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to...",permalink:"/newdocs/index.html/docs/category/how-to"},next:{title:"Applying models directly to the datastore with SuperDuperDB",permalink:"/newdocs/index.html/docs/docs/how_to/apply_a_model_to_data"}},c={},p=[],l={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-images-audio-or-video-from-uris"},"Add images, audio or video from URIs"),(0,r.kt)("p",null,'In this "how-to" guide, we demonstrate how to add images, audio or video to SuperDuperDB.'),(0,r.kt)("p",null,"First, let's get a ",(0,r.kt)("inlineCode",{parentName:"p"},"Datalayer")," instance, in order to demonstrate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pymongo\nfrom superduperdb import superduper\nfrom superduperdb.db.mongodb.query import Collection\n\ndb = pymongo.MongoClient().documents\n\ndb = superduper(db)\n\ncollection = Collection('complexdata')\n")),(0,r.kt)("p",null,"In order to encode, we create an ",(0,r.kt)("inlineCode",{parentName:"p"},"Encoder")," instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.container.encoder import Encoder\nimport io\nimport pickle\nimport PIL.Image\n\n# encoder handles conversion to `bytes`\ndef encoder(image):\n    buf = io.BytesIO()\n    image.save(buf, format='png')\n    return buf.getvalue()\n\n# decoder handles conversion from `bytes` to Python\ndecoder = lambda x: PIL.Image.open(io.BytesIO(x))\n\nenc = Encoder(identifier='my-enc', encoder=encoder, decoder=decoder)\n")),(0,r.kt)("p",null,"We don't need to load our objects (images etc.) to add to the DB, we can use URIs instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import glob\nfrom superduperdb.container.document import Document as D\n\nimgs = glob.glob('../img/*.png')\n\n# wrap documents with `Document` in order so that SuperDuperDB knows how to handle\n# wrap URI with `enc` to designate as \"to-be-encoded\"\n# The URIs can be a mixture of `file://`, `http://`, `https://` and `s3://`\ndb.execute(\n    collection.insert_many([\n        D({'img': enc(uri=f'file://{img}')}) for img in imgs\n    ], encoders=(enc,))\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"r = db.execute(collection.find_one()).unpack()\nr\n")),(0,r.kt)("p",null,"We can verify that the image was properly stored:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"i = r['img'].convert('RGB')\ni\n")),(0,r.kt)("p",null,"We can also add Python objects directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"db.execute(collection.insert_one(D({'img': enc(i), 'direct': True})))\n")),(0,r.kt)("p",null,"Verify:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"r = db.execute(collection.find_one({'direct': True})).unpack()\nr['img']\n")))}u.isMDXComponent=!0}}]);