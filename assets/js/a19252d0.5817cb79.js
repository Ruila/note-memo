"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"[Kotlin] Instant v.s. LocalDatetime"},i="[Kotlin] Instant v.s. LocalDatetime",l={unversionedId:"Kotlin/kotlin-instant-localdatatime",id:"Kotlin/kotlin-instant-localdatatime",title:"[Kotlin] Instant v.s. LocalDatetime",description:"tl;dr",source:"@site/docs/Kotlin/kotlin-instant-localdatatime.md",sourceDirName:"Kotlin",slug:"/Kotlin/kotlin-instant-localdatatime",permalink:"/note-memo/docs/Kotlin/kotlin-instant-localdatatime",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Kotlin/kotlin-instant-localdatatime.md",tags:[],version:"current",frontMatter:{title:"[Kotlin] Instant v.s. LocalDatetime"},sidebar:"tutorialSidebar",previous:{title:"[Kotlin] How to mock time ?",permalink:"/note-memo/docs/Kotlin/kotlin-how-to-mock-time"},next:{title:"[Spring] IoC and DI",permalink:"/note-memo/docs/Kotlin/spring-ioc"}},s={},c=[{value:"tl;dr",id:"tldr",level:2},{value:"toInstant",id:"toinstant",level:2},{value:"Reference",id:"reference",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kotlin-instant-vs-localdatetime"},"[Kotlin]"," Instant v.s. LocalDatetime"),(0,r.kt)("h2",{id:"tldr"},"tl;dr"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Instant")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalDateTime")," are two entirely different animals: One represents a moment, the other does not."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Instant")," represents a moment, a specific point in the ",(0,r.kt)("strong",{parentName:"p"},"UTC")," timeline.\nIt elapsed from the standard Java epoch(beginning of time in Java) of 1970-01-01T00:00:00Z."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LocalDateTime")," represents a date and a time-of-day.\nBut lacking a time zone or offset-from-UTC, ",(0,r.kt)("strong",{parentName:"p"},"this class cannot represent a moment"),".\nIt represents potential moments along a range of about 26 to 27 hours, the range of all time zones around the globe.\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalDateTime")," value is inherently ",(0,r.kt)("strong",{parentName:"p"},"ambiguous"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'print(time.toInstant(ZoneOffset.UTC)) // 2023-03-22T08:25:10.195027Z.\nprint(time.toInstant(ZoneOffset.of("+08:00"))) 2023-03-22T16:25:10.195027Z\n')),(0,r.kt)("h2",{id:"toinstant"},"toInstant"),(0,r.kt)("p",null,"If you want to transform ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalDateTime")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Instant"),", you have to provide the zone offset, like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"user.createdAt?.toInstant(ZoneOffset.UTC)\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@ ",(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/32437550/whats-the-difference-between-instant-and-localdatetime"},"stackoverflow"))))}u.isMDXComponent=!0}}]);