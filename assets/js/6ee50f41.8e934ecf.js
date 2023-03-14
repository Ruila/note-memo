"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),v=a,m=d["".concat(l,".").concat(v)]||d[v]||u[v]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},29:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,title:"[JS] event delegation"},i="[JS] event delegation",c={unversionedId:"Javascript/js-event-delegation",id:"Javascript/js-event-delegation",title:"[JS] event delegation",description:"Intro",source:"@site/docs/Javascript/js-event-delegation.md",sourceDirName:"Javascript",slug:"/Javascript/js-event-delegation",permalink:"/note-memo/docs/Javascript/js-event-delegation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/js-event-delegation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"[JS] event delegation"},sidebar:"tutorialSidebar",previous:{title:"[JS] closure",permalink:"/note-memo/docs/Javascript/js-closure"},next:{title:"[JS] prototype chain",permalink:"/note-memo/docs/Javascript/js-prototype"}},l={},s=[{value:"Intro",id:"intro",level:2},{value:"Reference",id:"reference",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"js-event-delegation"},"[JS]"," event delegation"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Event delegation is a way which benefit from ",(0,a.kt)("strong",{parentName:"p"},"event bubbling")," can reduce the number of listeners."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<div class="parent">\n  <div class="child" data-name="a"></div>\n  <div class="child" data-name="b"></div>\n  <div class="child" data-name="c"></div>\n  <div class="subitem" data-name="d"></div>\n</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"$('.parent').on('click', '.child', function(){\n  console.log($(this).data('name'));\n});\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@ ",(0,a.kt)("a",{parentName:"li",href:"https://www.cythilya.tw/2015/07/08/javascript-event-delegation/"},"summer")," - Event Delegation \u4e8b\u4ef6\u59d4\u6d3e")))}u.isMDXComponent=!0}}]);