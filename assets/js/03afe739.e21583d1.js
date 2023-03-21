"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5075],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?o.createElement(h,p(p({ref:t},l),{},{components:r})):o.createElement(h,p({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3507:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={title:"[JS] prototype chain"},p="[JS] Inheritance and the prototype chain",i={unversionedId:"Javascript/js-prototype",id:"Javascript/js-prototype",title:"[JS] prototype chain",description:"This is not original content, but just a note from articles I read.",source:"@site/docs/Javascript/js-prototype.md",sourceDirName:"Javascript",slug:"/Javascript/js-prototype",permalink:"/note-memo/docs/Javascript/js-prototype",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/js-prototype.md",tags:[],version:"current",frontMatter:{title:"[JS] prototype chain"},sidebar:"tutorialSidebar",previous:{title:"[JS] Promise",permalink:"/note-memo/docs/Javascript/js-promise"},next:{title:"[JS] while & do while",permalink:"/note-memo/docs/Javascript/js-while-do-while"}},c={},s=[{value:"Intro",id:"intro",level:2},{value:"What are the differences between __proto__ and prototype?",id:"what-are-the-differences-between-__proto__-and-prototype",level:2},{value:"Example",id:"example",level:3},{value:"Reference",id:"reference",level:2}],l={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"js-inheritance-and-the-prototype-chain"},"[JS]"," Inheritance and the prototype chain"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This is not original content, but just a note from articles I read.")),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"When it comes to inheritance, ",(0,n.kt)("strong",{parentName:"p"},"JavaScript only has one construct"),": ",(0,n.kt)("strong",{parentName:"p"},"objects"),"."),(0,n.kt)("p",null,"Each object has a private property which holds a link to another object called its prototype."),(0,n.kt)("h2",{id:"what-are-the-differences-between-__proto__-and-prototype"},"What are the differences between ","_","_proto__ and prototype?"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"var b = new Foo(20);\nvar c = new Foo(30);\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:r(1454).Z,width:"627",height:"392"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"_","_proto__")," is the actual object that is used in the lookup chain to resolve methods, etc."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"prototype")," is the object that is used to build ",(0,n.kt)("strong",{parentName:"p"},"_","_proto__")," when you create an object with new:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"( new Foo ).__proto__ === Foo.prototype\n( new Foo ).prototype === undefined\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:r(4499).Z,width:"363",height:"601"})),(0,n.kt)("p",null,"Animal.prototype.constructor is itself."),(0,n.kt)("p",null,"cat.","_","_proto__.constructor is Animal"),(0,n.kt)("p",null,"cat.constructor is Animal"),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@ ",(0,n.kt)("a",{parentName:"li",href:"http://dmitrysoshnikov.com/ecmascript/javascript-the-core/"},"dmitrysoshnikov")," - JavaScript. The Core."),(0,n.kt)("li",{parentName:"ul"},"@ ",(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript"},"stackoverflow")," - ",(0,n.kt)("strong",{parentName:"li"},"proto")," VS. prototype in JavaScript")))}m.isMDXComponent=!0},1454:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/js-prototype-a780a47f074f6c5c7d96af2746445c66.png"},4499:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/prototype-demo-31563633ce88bb28f0609b1411449f41.png"}}]);