"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5771],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),p=s,y=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:s,a[1]=o;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),s=(r(7294),r(3905));const i={title:"[System Design] URL Shortener Service"},a="[System Design] URL Shortener Service",o={unversionedId:"System Design/system-design-short-url",id:"System Design/system-design-short-url",title:"[System Design] URL Shortener Service",description:"What is URL Shortener Service?",source:"@site/docs/System Design/system-design-short-url.md",sourceDirName:"System Design",slug:"/System Design/system-design-short-url",permalink:"/note-memo/docs/System Design/system-design-short-url",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/System Design/system-design-short-url.md",tags:[],version:"current",frontMatter:{title:"[System Design] URL Shortener Service"},sidebar:"tutorialSidebar",previous:{title:"[React] useSWR",permalink:"/note-memo/docs/React/react-useSWR"},next:{title:"[System Design] SSO",permalink:"/note-memo/docs/System Design/system-design-sso"}},l={},c=[{value:"What is URL Shortener Service?",id:"what-is-url-shortener-service",level:2},{value:"Rudimentary Design",id:"rudimentary-design",level:3},{value:"Scalable High Level Design",id:"scalable-high-level-design",level:3},{value:"Reference",id:"reference",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...i}=e;return(0,s.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system-design-url-shortener-service"},"[System Design]"," URL Shortener Service"),(0,s.kt)("h2",{id:"what-is-url-shortener-service"},"What is URL Shortener Service?"),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"URL shortener service")," creates a short url/aliases/tiny url against a long url."),(0,s.kt)("h3",{id:"rudimentary-design"},"Rudimentary Design"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"system-design-short-url",src:r(6835).Z,width:"1400",height:"821"})),(0,s.kt)("p",null,"-> ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Ruila/url-shortener-backend"},"My rudimentary demo")),(0,s.kt)("h3",{id:"scalable-high-level-design"},"Scalable High Level Design"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"system-design-short-url",src:r(2634).Z,width:"1400",height:"994"})),(0,s.kt)("h2",{id:"reference"},"Reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"@ ",(0,s.kt)("a",{parentName:"li",href:"https://medium.com/@sandeep4.verma/system-design-scalable-url-shortener-service-like-tinyurl-106f30f23a82"},"Sandeep Verma")," - System Design : Scalable URL shortener service like TinyURL")))}d.isMDXComponent=!0},6835:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rudimentary-short-url-66280756a90e0c30e6453b3656c027f6.png"},2634:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/short-url-service-f0d17fb0c7b6b8dea8d20eef5eca327c.png"}}]);