"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1,title:"[CSS] box-sizing"},a="[CSS] box-sizing",s={unversionedId:"CSS/css-box-sizing",id:"CSS/css-box-sizing",title:"[CSS] box-sizing",description:"Intro",source:"@site/docs/CSS/css-box-sizing.md",sourceDirName:"CSS",slug:"/CSS/css-box-sizing",permalink:"/note-memo/docs/CSS/css-box-sizing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CSS/css-box-sizing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"[CSS] box-sizing"},sidebar:"tutorialSidebar",previous:{title:"[CSS] Box Modal",permalink:"/note-memo/docs/CSS/css-box-modal"},next:{title:"[Docker] volumes",permalink:"/note-memo/docs/Docker/docker-volumes"}},l={},c=[{value:"Intro",id:"intro",level:2},{value:"Values",id:"values",level:2},{value:"content-box",id:"content-box",level:3},{value:"border-box",id:"border-box",level:3},{value:"Reference",id:"reference",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"css-box-sizing"},"[CSS]"," box-sizing"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"box-sizing")," CSS property sets how the total width and height of an element is calculated."),(0,o.kt)("h2",{id:"values"},"Values"),(0,o.kt)("h3",{id:"content-box"},"content-box"),(0,o.kt)("p",null,"This is the initial and default value as specified by the CSS standard."),(0,o.kt)("p",null,"The width and height properties ",(0,o.kt)("strong",{parentName:"p"},"include")," the ",(0,o.kt)("strong",{parentName:"p"},"content"),", but does ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"not include"))," the ",(0,o.kt)("strong",{parentName:"p"},"padding"),", ",(0,o.kt)("strong",{parentName:"p"},"border"),", or ",(0,o.kt)("strong",{parentName:"p"},"margin"),"."),(0,o.kt)("h3",{id:"border-box"},"border-box"),(0,o.kt)("p",null,"The width and height properties ",(0,o.kt)("strong",{parentName:"p"},"include")," the ",(0,o.kt)("strong",{parentName:"p"},"content"),", ",(0,o.kt)("strong",{parentName:"p"},"padding"),", and ",(0,o.kt)("strong",{parentName:"p"},"border"),", but do ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"not include"))," the ",(0,o.kt)("strong",{parentName:"p"},"margin"),"."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"},"MDN")," - box-sizing")))}d.isMDXComponent=!0}}]);