"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9097],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),h=o,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return t?n.createElement(f,l(l({ref:r},p),{},{components:t})):n.createElement(f,l({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=h;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4045:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:1,title:"[Browser] Render"},l="[Browser] Render",i={unversionedId:"Browser/browser-render",id:"Browser/browser-render",title:"[Browser] Render",description:"Process",source:"@site/docs/Browser/browser-render.md",sourceDirName:"Browser",slug:"/Browser/browser-render",permalink:"/note-memo/docs/Browser/browser-render",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Browser/browser-render.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"[Browser] Render"},sidebar:"tutorialSidebar",previous:{title:"[Browser] Polyfill",permalink:"/note-memo/docs/Browser/browser-polyfill"},next:{title:"[Browser] Transpiler",permalink:"/note-memo/docs/Browser/browser-transpiler"}},s={},c=[{value:"Process",id:"process",level:2},{value:"When occurs Reflow ?",id:"when-occurs-reflow-",level:2},{value:"When occurs Repaint ?",id:"when-occurs-repaint-",level:2},{value:"Reference",id:"reference",level:2}],p={toc:c},u="wrapper";function d(e){let{components:r,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browser-render"},"[Browser]"," Render"),(0,o.kt)("h2",{id:"process"},"Process"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"browser-render",src:t(599).Z,width:"2108",height:"516"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/faressoft"},"faressoft"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When the user enters the URL, It will fetch the HTML source code from the server"),(0,o.kt)("li",{parentName:"ol"},"Browser Parse the HTML source code and convert into the Tokens <, TagName, Attribute, AttributeValue, >"),(0,o.kt)("li",{parentName:"ol"},"The Tokens will convert into the nodes and will construct the DOM Tree"),(0,o.kt)("li",{parentName:"ol"},"The CSSOM Tree will generate from the CSS rules"),(0,o.kt)("li",{parentName:"ol"},"The DOM and CSSOM tree will combine into the RenderTree"),(0,o.kt)("li",{parentName:"ol"},"The RenderTree are constructed as below:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start from the root of the dom tree and compute which elements are visible and their computed styles"),(0,o.kt)("li",{parentName:"ul"},"RenderTree will ignore the not visible elements like (meta, script, link) and display:none"),(0,o.kt)("li",{parentName:"ul"},"It will match the visible node to the appropriate CSSOM rules and apply them")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Reflow: Calculate the position and size of each visible node"),(0,o.kt)("li",{parentName:"ol"},"Repaint: now, the browser will paint the renderTree on the screen")),(0,o.kt)("h2",{id:"when-occurs-reflow-"},"When occurs Reflow ?"),(0,o.kt)("p",null,"The Reflow happens when changes are made to the elements, that affect the layout of the partial or whole page."),(0,o.kt)("p",null,"The Reflow of the element will cause the subsequent reflow of all the child and ancestor elements in the DOM"),(0,o.kt)("h2",{id:"when-occurs-repaint-"},"When occurs Repaint ?"),(0,o.kt)("p",null,"The Repaint occurs when changes are made to the appearance of the elements that change the visibility, but doesn't affect the layout\nEg: Visibility, background color, outline"),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@ ",(0,o.kt)("a",{parentName:"li",href:"https://dev.to/gopal1996/understanding-reflow-and-repaint-in-the-browser-1jbg"},"DEV")," - Understanding Reflow and Repaint in the browser")))}d.isMDXComponent=!0},599:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/browser-render-b9a6bd5c0c435fbba3119b86419e9aa3.png"}}]);