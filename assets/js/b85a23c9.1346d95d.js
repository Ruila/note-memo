"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1,title:"[JS] closure"},c="[JS] closure",i={unversionedId:"Javascript/js-closure",id:"Javascript/js-closure",title:"[JS] closure",description:"This is not original content, but just a note from articles I read.",source:"@site/docs/Javascript/js-closure.md",sourceDirName:"Javascript",slug:"/Javascript/js-closure",permalink:"/note-memo/docs/Javascript/js-closure",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/js-closure.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"[JS] closure"},sidebar:"tutorialSidebar",previous:{title:"[JS] call",permalink:"/note-memo/docs/Javascript/js-call"},next:{title:"[JS] event delegation",permalink:"/note-memo/docs/Javascript/js-event-delegation"}},s={},l=[{value:"Intro",id:"intro",level:2},{value:"Scoping with let and const",id:"scoping-with-let-and-const",level:2},{value:"Reference",id:"reference",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"js-closure"},"[JS]"," closure"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This is not original content, but just a note from articles I read.")),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"closure")," is the combination of a function bundled together (enclosed) with references to its surrounding state (the ",(0,o.kt)("strong",{parentName:"p"},"lexical environment"),")."),(0,o.kt)("p",null,"In other words, a closure gives you ",(0,o.kt)("strong",{parentName:"p"},"access to an outer function's scope from an inner function"),"."),(0,o.kt)("p",null,"In JavaScript, closures are ",(0,o.kt)("strong",{parentName:"p"},"created every time a function is created"),", at function creation time."),(0,o.kt)("h2",{id:"scoping-with-let-and-const"},"Scoping with let and const"),(0,o.kt)("p",null,"Traditionally (before ES6), JavaScript only had two kinds of scopes: ",(0,o.kt)("strong",{parentName:"p"},"function scope")," and ",(0,o.kt)("strong",{parentName:"p"},"global scope"),"."),(0,o.kt)("p",null,"Variables declared with var are ",(0,o.kt)("strong",{parentName:"p"},"either function-scoped or global-scoped"),", depending on whether they are declared within a function or outside a function."),(0,o.kt)("p",null,"This can be tricky, because blocks with curly braces do not create scopes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"if (Math.random() > 0.5) {\n  var x = 1;\n} else {\n  var x = 2;\n}\nconsole.log(x);\n")),(0,o.kt)("p",null,"In ",(0,o.kt)("strong",{parentName:"p"},"ES6"),", JavaScript introduced the let and const declarations, which, among other things like temporal dead zones, ",(0,o.kt)("strong",{parentName:"p"},"allow you to create block-scoped variables"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"if (Math.random() > 0.5) {\n  const x = 1;\n} else {\n  const x = 2;\n}\nconsole.log(x); // ReferenceError: x is not defined\n")),(0,o.kt)("p",null,"In essence, ",(0,o.kt)("strong",{parentName:"p"},"blocks are finally treated as scopes in ES6"),", ",(0,o.kt)("strong",{parentName:"p"},"but only if you declare variables with let or const"),"."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@ ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"},"MDN")," - closure")))}d.isMDXComponent=!0}}]);