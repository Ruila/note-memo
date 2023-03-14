"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1167],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),h=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(r),u=i,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var h=2;h<a;h++)o[h]=r[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3959:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:1,title:"[net] CORS"},o="[net] CORS",s={unversionedId:"Network/net-cors",id:"Network/net-cors",title:"[net] CORS",description:"Intro",source:"@site/docs/Network/net-cors.md",sourceDirName:"Network",slug:"/Network/net-cors",permalink:"/note-memo/docs/Network/net-cors",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Network/net-cors.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"[net] CORS"},sidebar:"tutorialSidebar",previous:{title:"[JS] Promise",permalink:"/note-memo/docs/Javascript/js-promise"},next:{title:"[net] Idempotent",permalink:"/note-memo/docs/Network/net-http-idempotent"}},l={},h=[{value:"Intro",id:"intro",level:2},{value:"Prefilght",id:"prefilght",level:2},{value:"What is preflight?",id:"what-is-preflight",level:3},{value:"When will trigger preflight ?",id:"when-will-trigger-preflight-",level:3},{value:"What\u2019s the reasoning behind preflight requests?",id:"whats-the-reasoning-behind-preflight-requests",level:3},{value:"How to avoid CORS?",id:"how-to-avoid-cors",level:2},{value:"Reference",id:"reference",level:2}],c={toc:h},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"net-cors"},"[net]"," CORS"),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources."),(0,i.kt)("h2",{id:"prefilght"},"Prefilght"),(0,i.kt)("h3",{id:"what-is-preflight"},"What is preflight?"),(0,i.kt)("p",null,'CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request.'),(0,i.kt)("p",null,"In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request."),(0,i.kt)("h3",{id:"when-will-trigger-preflight-"},"When will trigger preflight ?"),(0,i.kt)("p",null,"When request is not simple request. like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"http method is not ",(0,i.kt)("inlineCode",{parentName:"li"},"GET"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"POST"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"HEAD")),(0,i.kt)("li",{parentName:"ul"},"Content-type is not ",(0,i.kt)("inlineCode",{parentName:"li"},"text/plain"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"multipart/form-data"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded"),"."),(0,i.kt)("li",{parentName:"ul"},"Apart from the headers automatically set by the user agent.")),(0,i.kt)("h3",{id:"whats-the-reasoning-behind-preflight-requests"},"What\u2019s the reasoning behind preflight requests?"),(0,i.kt)("p",null,"Since CORS was proposed after the SOP had been in place for some time, the idea of using preflight requests presented some advantages. With preflight requests, ",(0,i.kt)("strong",{parentName:"p"},"servers can examine requests before they\u2019re executed and get a chance to indicate if they allow them"),"."),(0,i.kt)("p",null,"If there is a side effect to a particular request which a server doesn\u2019t allow from another origin; the preflight request helps to protect the unconsenting servers by checking first and blocking the request if the server responds with headers that indicate its refusal. In addition to this, servers may change what kind of requests and headers they allow as they\u2019re developed. With preflight requests in place, browsers can check this and adjust accordingly."),(0,i.kt)("p",null,"Finally, CORS is backward compatible. Some older servers which may have been relying on SOP and do not handle CORS are still protected using this method because the browser will treat servers that send no CORS headers the same as servers that only allow requests from the same origin."),(0,i.kt)("h2",{id:"how-to-avoid-cors"},"How to avoid CORS?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"embed it in the script tag, like using ",(0,i.kt)("strong",{parentName:"li"},"JSONP"),". (has limitation)"),(0,i.kt)("li",{parentName:"ul"},"add CORS header in backend. (best practices)"),(0,i.kt)("li",{parentName:"ul"},"proxy server(ex: use own backend server to request data, and send it to frontend.). (best practices)")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@ ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#what_requests_use_cors"},"MDN")," - CORS"),(0,i.kt)("li",{parentName:"ul"},"@ ",(0,i.kt)("a",{parentName:"li",href:"https://blog.huli.tw/2021/02/19/cors-guide-2/"},"huli")," - CORS \u5b8c\u5168\u624b\u518a\uff08\u4e8c\uff09\uff1a\u5982\u4f55\u89e3\u6c7a CORS \u554f\u984c\uff1f"),(0,i.kt)("li",{parentName:"ul"},"@ ",(0,i.kt)("a",{parentName:"li",href:"https://www.baeldung.com/cs/cors-preflight-requests"},"baeldung")," - Cross-Origin Resource Sharing and Why We Need Preflight Requests")))}d.isMDXComponent=!0}}]);