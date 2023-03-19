"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1167],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),h=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=h(r),p=a,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var h=2;h<i;h++)o[h]=r[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3959:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1,title:"[net] CORS"},o="[net] CORS",s={unversionedId:"Network/net-cors",id:"Network/net-cors",title:"[net] CORS",description:"This is not original content, but just a note from articles I read.",source:"@site/docs/Network/net-cors.md",sourceDirName:"Network",slug:"/Network/net-cors",permalink:"/note-memo/docs/Network/net-cors",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Network/net-cors.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"[net] CORS"},sidebar:"tutorialSidebar",previous:{title:"[Kotlin] How to mock time ?",permalink:"/note-memo/docs/Kotlin/kotlin-how-to-mock-time"},next:{title:"[net] CSRF",permalink:"/note-memo/docs/Network/net-csrf"}},l={},h=[{value:"Intro",id:"intro",level:2},{value:"What requests use CORS?",id:"what-requests-use-cors",level:2},{value:"Prefilght",id:"prefilght",level:2},{value:"What is preflight?",id:"what-is-preflight",level:3},{value:"When will trigger preflight ?",id:"when-will-trigger-preflight-",level:3},{value:"What\u2019s the reasoning behind preflight requests?",id:"whats-the-reasoning-behind-preflight-requests",level:3},{value:"How to avoid CORS?",id:"how-to-avoid-cors",level:2},{value:"Reference",id:"reference",level:2}],c={toc:h},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"net-cors"},"[net]"," CORS"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This is not original content, but just a note from articles I read.")),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources."),(0,a.kt)("h2",{id:"what-requests-use-cors"},"What requests use CORS?"),(0,a.kt)("p",null,"This cross-origin sharing standard can enable cross-origin HTTP requests for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Invocations of the ",(0,a.kt)("strong",{parentName:"li"},"XMLHttpRequest")," or ",(0,a.kt)("strong",{parentName:"li"},"Fetch APIs"),", as discussed above."),(0,a.kt)("li",{parentName:"ul"},"Web Fonts (for cross-domain font usage in @font-face within CSS), so that servers can deploy TrueType fonts that can only be loaded cross-origin and used by web sites that are permitted to do so."),(0,a.kt)("li",{parentName:"ul"},"WebGL textures."),(0,a.kt)("li",{parentName:"ul"},"Images/video frames drawn to a canvas using drawImage()."),(0,a.kt)("li",{parentName:"ul"},"CSS Shapes from images.")),(0,a.kt)("h2",{id:"prefilght"},"Prefilght"),(0,a.kt)("h3",{id:"what-is-preflight"},"What is preflight?"),(0,a.kt)("p",null,'CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request.'),(0,a.kt)("p",null,"In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request."),(0,a.kt)("h3",{id:"when-will-trigger-preflight-"},"When will trigger preflight ?"),(0,a.kt)("p",null,"When request is not simple request. like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"http method is not ",(0,a.kt)("inlineCode",{parentName:"li"},"GET"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"POST"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"HEAD")),(0,a.kt)("li",{parentName:"ul"},"Content-type is not ",(0,a.kt)("inlineCode",{parentName:"li"},"text/plain"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"multipart/form-data"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded"),"."),(0,a.kt)("li",{parentName:"ul"},"Apart from the headers automatically set by the user agent.")),(0,a.kt)("h3",{id:"whats-the-reasoning-behind-preflight-requests"},"What\u2019s the reasoning behind preflight requests?"),(0,a.kt)("p",null,"Since CORS was proposed after the SOP had been in place for some time, the idea of using preflight requests presented some advantages. With preflight requests, ",(0,a.kt)("strong",{parentName:"p"},"servers can examine requests before they\u2019re executed and get a chance to indicate if they allow them"),"."),(0,a.kt)("p",null,"If there is a side effect to a particular request which a server doesn\u2019t allow from another origin; the preflight request helps to protect the unconsenting servers by checking first and blocking the request if the server responds with headers that indicate its refusal. In addition to this, servers may change what kind of requests and headers they allow as they\u2019re developed. With preflight requests in place, browsers can check this and adjust accordingly."),(0,a.kt)("p",null,"Finally, CORS is backward compatible. Some older servers which may have been relying on SOP and do not handle CORS are still protected using this method because the browser will treat servers that send no CORS headers the same as servers that only allow requests from the same origin."),(0,a.kt)("h2",{id:"how-to-avoid-cors"},"How to avoid CORS?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"embed it in the script tag, like using ",(0,a.kt)("strong",{parentName:"li"},"JSONP"),". (has limitation)"),(0,a.kt)("li",{parentName:"ul"},"add CORS header in backend. (best practices)"),(0,a.kt)("li",{parentName:"ul"},"proxy server(ex: use own backend server to request data, and send it to frontend.). (best practices)")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@ ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#what_requests_use_cors"},"MDN")," - CORS"),(0,a.kt)("li",{parentName:"ul"},"@ ",(0,a.kt)("a",{parentName:"li",href:"https://blog.huli.tw/2021/02/19/cors-guide-2/"},"huli")," - CORS \u5b8c\u5168\u624b\u518a\uff08\u4e8c\uff09\uff1a\u5982\u4f55\u89e3\u6c7a CORS \u554f\u984c\uff1f"),(0,a.kt)("li",{parentName:"ul"},"@ ",(0,a.kt)("a",{parentName:"li",href:"https://www.baeldung.com/cs/cors-preflight-requests"},"baeldung")," - Cross-Origin Resource Sharing and Why We Need Preflight Requests")))}d.isMDXComponent=!0}}]);