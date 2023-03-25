"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},w="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),w=l(r),b=o,h=w["".concat(p,".").concat(b)]||w[b]||c[b]||a;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[w]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},7482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"[net] What happens when you type a URL in your web browser ?"},s="[net] What happens when you type a URL in your web browser ?",i={unversionedId:"Network/net-what-happen-when-type-a-url-on-browser",id:"Network/net-what-happen-when-type-a-url-on-browser",title:"[net] What happens when you type a URL in your web browser ?",description:"1. You enter a website's URL in your web browser and press enter.",source:"@site/docs/Network/net-what-happen-when-type-a-url-on-browser.md",sourceDirName:"Network",slug:"/Network/net-what-happen-when-type-a-url-on-browser",permalink:"/note-memo/docs/Network/net-what-happen-when-type-a-url-on-browser",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Network/net-what-happen-when-type-a-url-on-browser.md",tags:[],version:"current",frontMatter:{title:"[net] What happens when you type a URL in your web browser ?"},sidebar:"tutorialSidebar",previous:{title:"[net] preload",permalink:"/note-memo/docs/Network/net-preload"},next:{title:"[net] XSS",permalink:"/note-memo/docs/Network/net-xss"}},p={},l=[],u={toc:l},w="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(w,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"net-what-happens-when-you-type-a-url-in-your-web-browser-"},"[net]"," What happens when you type a URL in your web browser ?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You enter a website's URL in your web browser and press enter."),(0,o.kt)("li",{parentName:"ol"},"Your web browser sends a request to the ",(0,o.kt)("strong",{parentName:"li"},"domain name system (DNS)")," to ",(0,o.kt)("strong",{parentName:"li"},"translate the domain name")," in the URL to an ",(0,o.kt)("strong",{parentName:"li"},"IP address"),"."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"DNS responds with the IP address")," of the web server hosting the website."),(0,o.kt)("li",{parentName:"ol"},"Your web browser ",(0,o.kt)("strong",{parentName:"li"},"establishes a connection")," with the web server using the ",(0,o.kt)("strong",{parentName:"li"},"Transmission Control Protocol (TCP)"),"."),(0,o.kt)("li",{parentName:"ol"},"Your web browser ",(0,o.kt)("strong",{parentName:"li"},"sends a request to the web server")," for the website's HTML file."),(0,o.kt)("li",{parentName:"ol"},"The web ",(0,o.kt)("strong",{parentName:"li"},"server receives the request")," and ",(0,o.kt)("strong",{parentName:"li"},"sends the HTML file back")," to your web browser."),(0,o.kt)("li",{parentName:"ol"},"Your web browser ",(0,o.kt)("strong",{parentName:"li"},"parses the HTML file")," and ",(0,o.kt)("strong",{parentName:"li"},"sends additional requests")," for any other assets needed to display the website, such as ",(0,o.kt)("strong",{parentName:"li"},"images"),", ",(0,o.kt)("strong",{parentName:"li"},"CSS files"),", and ",(0,o.kt)("strong",{parentName:"li"},"JavaScript files"),"."),(0,o.kt)("li",{parentName:"ol"},"The web server sends each requested asset back to your web browser."),(0,o.kt)("li",{parentName:"ol"},"Your web browser renders the website, combining all the assets it has received into the final website displayed on your screen.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Image from ",(0,o.kt)("a",{parentName:"p",href:"https://blog.bytebytego.com/p/what-happens-when-you-type-a-url"},"Alex Xu")," ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(7317).Z,width:"1484",height:"1194"})))}c.isMDXComponent=!0},7317:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/what-happens-when-type-a-url-on-browser-609f0933f94bba028ff12f4436298e46.png"}}]);