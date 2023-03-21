"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"[JS] Params in function are passed by reference ? or by value ?"},i="[JS] Params in function are passed by reference ? or by value ?",s={unversionedId:"Javascript/js-function-passed-by-ref-or-by-val",id:"Javascript/js-function-passed-by-ref-or-by-val",title:"[JS] Params in function are passed by reference ? or by value ?",description:"Primitive type",source:"@site/docs/Javascript/js-function-passed-by-ref-or-by-val.md",sourceDirName:"Javascript",slug:"/Javascript/js-function-passed-by-ref-or-by-val",permalink:"/note-memo/docs/Javascript/js-function-passed-by-ref-or-by-val",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/js-function-passed-by-ref-or-by-val.md",tags:[],version:"current",frontMatter:{title:"[JS] Params in function are passed by reference ? or by value ?"},sidebar:"tutorialSidebar",previous:{title:"[JS] closure",permalink:"/note-memo/docs/Javascript/js-closure"},next:{title:"[JS] hoist",permalink:"/note-memo/docs/Javascript/js-hoist"}},c={},l=[{value:"Primitive type",id:"primitive-type",level:2},{value:"Object type",id:"object-type",level:2},{value:"Reference",id:"reference",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"js-params-in-function-are-passed-by-reference--or-by-value-"},"[JS]"," Params in function are passed by reference ? or by value ?"),(0,a.kt)("h2",{id:"primitive-type"},"Primitive type"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," in function as param is different variable from the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," declared in global."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'let name = "Will"; // 1. assume it\'s stored at 0x01 in memory\nlet digit = 0; // 2. assume it\'s stored at 0x02 in memory\n\nfunction change(name, digit) { // 4. assume that name is stored at 0x03, digit is stored at 0x04\n    name = "John" // 5. change value at 0x03\n    digit = 2 // 6. change value at 0x04\n}\n\nchange(name, digit); // 3.\n\nconsole.info(name); // "Will"\nconsole.info(digit); // 0\n')),(0,a.kt)("h2",{id:"object-type"},"Object type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'let obj = { name: "Will", digit: 0}; // 1. assume it\'s stored at 0x01 in memory which value is address of objet(0x999).\n\nfunction change(obj) { // 3. assume obj is stored at 0x02 in memory which value is 0x999 from args.\n    obj.name = "John" // 4. change value at 0x999\n    obj.digit = 2   // 5. change value at 0x999\n}\n\nchange(obj); // 2.\n\nconsole.info(obj.name); // "John"\nconsole.info(obj.digit); // 2\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'let obj = { name: "Will", digit: 0}; // 1. assume it\'s stored at 0x01 in memory which value is address of objet(0x999).\n\nfunction change(obj) { // 3. assume obj is stored at 0x02 in memory which value is 0x999 from args.\n    obj = { // 4. this obj is stored at 0x100\n        name: "John", // 5. change value at 0x100\n        digit: 2   // 6. change value at 0x100\n    }\n}\n\nchange(obj); // 2. \n\n// 7. console obj from 0x999\nconsole.info(obj.name); // "John"\nconsole.info(obj.digit); // 2\n')),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@",(0,a.kt)("a",{parentName:"li",href:"https://blog.techbridge.cc/2018/06/23/javascript-call-by-value-or-reference/"},"Huli")," - \u6df1\u5165\u63a2\u8a0e JavaScript \u4e2d\u7684\u53c3\u6578\u50b3\u905e\uff1acall by value \u9084\u662f reference\uff1f"),(0,a.kt)("li",{parentName:"ul"},"@",(0,a.kt)("a",{parentName:"li",href:"https://flexiple.com/javascript/javascript-pass-by-reference-or-value/"},"flexiple.com")," - Javascript pass by reference or value")))}m.isMDXComponent=!0}}]);