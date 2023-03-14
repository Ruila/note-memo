"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,f=m["".concat(i,".").concat(u)]||m[u]||h[u]||a;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,title:"[net] preconnect"},c="[net] preconnect",s={unversionedId:"Network/net-preconnect",id:"Network/net-preconnect",title:"[net] preconnect",description:"Intro",source:"@site/docs/Network/net-preconnect.md",sourceDirName:"Network",slug:"/Network/net-preconnect",permalink:"/wills-memo/docs/Network/net-preconnect",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Network/net-preconnect.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"[net] preconnect"},sidebar:"tutorialSidebar",previous:{title:"[net] HTTP",permalink:"/wills-memo/docs/Network/net-http"},next:{title:"How to improve website's performance ?",permalink:"/wills-memo/docs/Performance/performance-improve-website-performance"}},i={},p=[{value:"Intro",id:"intro",level:2},{value:"What does it do?",id:"what-does-it-do",level:2},{value:"Comparsion",id:"comparsion",level:2},{value:"preconnect vs dns-prefetch",id:"preconnect-vs-dns-prefetch",level:2},{value:"For example:",id:"for-example",level:3},{value:"Reference",id:"reference",level:2}],l={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"net-preconnect"},"[net]"," preconnect"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"The preconnect keyword for the rel attribute of the rel element is a hint to browsers that the user is likely to need resources from the target resource's origin, and therefore the browser can likely improve the user experience by preemptively initiating a connection to that origin."),(0,o.kt)("h2",{id:"what-does-it-do"},"What does it do?"),(0,o.kt)("p",null,"Preconnecting speeds up future loads from a given origin by preemptively performing part or all of the handshake (DNS+TCP for HTTP, and DNS+TCP+TLS for HTTPS origins)."),(0,o.kt)("h2",{id:"comparsion"},"Comparsion"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"preconnect-compare",src:r(1850).Z,width:"1370",height:"662"})),(0,o.kt)("h2",{id:"preconnect-vs-dns-prefetch"},"preconnect vs dns-prefetch"),(0,o.kt)("p",null,"dns-prefetch = DNS and preconnect = DNS + TCP + TLS. Note that DNS lookup is quite cheap to perform (a simple query-response to the DNS server, that is cached in the browser for a short amount of time), whereas TCP and TLS involves some server resources."),(0,o.kt)("p",null,"The practical difference is hence, if you know that a server fetch will happen for sure, preconnect is good. If it will happen only sometimes, and you expect huge traffic, preconnect might trigger a lot of useless TCP and TLS work, and dns-prefetch might be a better fit."),(0,o.kt)("h3",{id:"for-example"},"For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"if the page requests ",(0,o.kt)("a",{parentName:"p",href:"https://backend.example.com/giveMeFreshData"},"https://backend.example.com/giveMeFreshData")," on each load, and the response is not cacheable, preconnect is a good fit.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"if the page only requests a static resource like ",(0,o.kt)("a",{parentName:"p",href:"https://statics-server.example.com/some-image.jpg"},"https://statics-server.example.com/some-image.jpg")," or ",(0,o.kt)("a",{parentName:"p",href:"https://statics-server.example.com/some-css.css"},"https://statics-server.example.com/some-css.css"),", and the resource is very likely to come from the user's browser cache (the very same resource(s) is used on many pages, and your user will trigger a lot of page loads like this with the warm cache -- and no other resources are fetched from that origin), then preconnect might be creating a lot of unnecessary TCP connections on your server (that will abandoned after a few seconds, but still, they were not necessary in the first place) and TLS handshakes (however in such case, preload might be an option if you know the exact URL and the resource is very important).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the traffic on your website is small though, it should not be impacted too much by this difference, so preconnect is probably a good fit for low-traffic websites, regardless of the things mentioned before."))),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"@ ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preconnect"},"MDN")," - preconnect")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"@ ",(0,o.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6915204591730556935#heading-0"},"juejin")," - preload\u3001prefetch\u3001preconnect \u548c dns-prefetch \u77e5\u591a\u5c11")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"@",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/47273743/preconnect-vs-dns-prefetch-resource-hints"},"stackoverflow")," - preconnect vs dns-prefetch resource hints"))))}h.isMDXComponent=!0},1850:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/preconnect-compare-c930dc4ed588b7e5c420b24cc87d34df.jpg"}}]);