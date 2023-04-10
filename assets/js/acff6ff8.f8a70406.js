"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={title:"[Spring] IoC and DI"},a="[Kotlin] IoC (Inversion of Control) and DI (Dependency Injection)",c={unversionedId:"Kotlin/spring-ioc",id:"Kotlin/spring-ioc",title:"[Spring] IoC and DI",description:"IoC",source:"@site/docs/Kotlin/spring-ioc.md",sourceDirName:"Kotlin",slug:"/Kotlin/spring-ioc",permalink:"/note-memo/docs/Kotlin/spring-ioc",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Kotlin/spring-ioc.md",tags:[],version:"current",frontMatter:{title:"[Spring] IoC and DI"},sidebar:"tutorialSidebar",previous:{title:"[Kotlin] Instant v.s. LocalDatetime",permalink:"/note-memo/docs/Kotlin/kotlin-instant-localdatatime"},next:{title:"[net] CORS",permalink:"/note-memo/docs/Network/net-cors"}},l={},s=[{value:"IoC",id:"ioc",level:2},{value:"The advantages of this architecture are:",id:"the-advantages-of-this-architecture-are",level:4},{value:"Reference",id:"reference",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kotlin-ioc-inversion-of-control-and-di-dependency-injection"},"[Kotlin]"," IoC (Inversion of Control) and DI (Dependency Injection)"),(0,o.kt)("h2",{id:"ioc"},"IoC"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IoC")," enables a framework to take control of the flow of a program and make calls to our custom code."),(0,o.kt)("h4",{id:"the-advantages-of-this-architecture-are"},"The advantages of this architecture are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"decoupling the execution of a task from its implementation"),(0,o.kt)("li",{parentName:"ul"},"making it easier to switch between different implementations"),(0,o.kt)("li",{parentName:"ul"},"greater modularity of a program"),(0,o.kt)("li",{parentName:"ul"},"greater ease in testing a program by isolating a component or mocking its dependencies, and allowing components to communicate through contracts")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.baeldung.com/inversion-control-and-dependency-injection-in-spring"},"baeldung")," - Intro to Inversion of Control and Dependency Injection with Spring")))}d.isMDXComponent=!0}}]);