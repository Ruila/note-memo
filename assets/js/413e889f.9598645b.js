"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,title:"[React] Reconciliation"},o="[React] Reconciliation",c={unversionedId:"React/react-reconciliation",id:"React/react-reconciliation",title:"[React] Reconciliation",description:"This is not original content, but just a note from articles I read.",source:"@site/docs/React/react-reconciliation.md",sourceDirName:"React",slug:"/React/react-reconciliation",permalink:"/note-memo/docs/React/react-reconciliation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/react-reconciliation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"[React] Reconciliation"},sidebar:"tutorialSidebar",previous:{title:"How to improve website's performance ?",permalink:"/note-memo/docs/Performance/performance-improve-website-performance"}},l={},s=[{value:"Intro",id:"intro",level:2},{value:"Rendering",id:"rendering",level:2},{value:"How do React do in the process of Reconciliation ?",id:"how-do-react-do-in-the-process-of-reconciliation-",level:2},{value:"Virtual DOM",id:"virtual-dom",level:3},{value:"Diffing Algorithm",id:"diffing-algorithm",level:3},{value:"Reference",id:"reference",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-reconciliation"},"[React]"," Reconciliation"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This is not original content, but just a note from articles I read.")),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"The reconciliation process makes React work faster. Reconciliation is the process through which React updates the Browser DOM."),(0,a.kt)("h2",{id:"rendering"},"Rendering"),(0,a.kt)("p",null,"The term ",(0,a.kt)("strong",{parentName:"p"},"rendering")," in React can closely be identified as making or becoming. In traditional rendering, Browser does the following tasks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Creates a DOM (Document Object Model) represented by a tree structure."),(0,a.kt)("li",{parentName:"ul"},"Renders any new data to the DOM even if data is similar to previous ones.")),(0,a.kt)("p",null,"This rendering by Browser has a sequence of steps and is rather costly in nature. The concept of Virtual DOM used by React makes rendering much faster."),(0,a.kt)("h2",{id:"how-do-react-do-in-the-process-of-reconciliation-"},"How do React do in the process of Reconciliation ?"),(0,a.kt)("p",null,"Important concepts behind the working of the Reconciliation process are:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. Virtual DOM")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Diffing Algorithm")),(0,a.kt)("h3",{id:"virtual-dom"},"Virtual DOM"),(0,a.kt)("p",null,"React renders JSX components to the Browser DOM, but keeps a copy of the actual DOM to itself."),(0,a.kt)("p",null,"This copy is the Virtual DOM. We can think of it as the twin brother of the real or Browser DOM."),(0,a.kt)("p",null,"The following actions take place in React:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"React ",(0,a.kt)("strong",{parentName:"li"},"stores a copy of Browser DOM")," which is called ",(0,a.kt)("strong",{parentName:"li"},"Virtual DOM"),"."),(0,a.kt)("li",{parentName:"ol"},"When we ",(0,a.kt)("strong",{parentName:"li"},"make changes or add data"),", React creates a ",(0,a.kt)("strong",{parentName:"li"},"new Virtual DOM and compares it with the previous one"),"."),(0,a.kt)("li",{parentName:"ol"},"Comparison is done by Diffing Algorithm. The cool fact is all these comparisons ",(0,a.kt)("strong",{parentName:"li"},"take place in the memory")," and nothing is yet changed in the Browser."),(0,a.kt)("li",{parentName:"ol"},"After comparing, React goes ahead and creates a ",(0,a.kt)("strong",{parentName:"li"},"new Virtual DOM having the changes"),". It is to note that as many as 200,000 virtual DOM nodes can be produced in a second."),(0,a.kt)("li",{parentName:"ol"},"Then it ",(0,a.kt)("strong",{parentName:"li"},"updates the Browser DOM")," with ",(0,a.kt)("strong",{parentName:"li"},"the least number of changes")," possible ",(0,a.kt)("strong",{parentName:"li"},"without rendering the entire DOM again"),". This changes the efficiency of an application tremendously")),(0,a.kt)("h3",{id:"diffing-algorithm"},"Diffing Algorithm"),(0,a.kt)("p",null,"Some concepts used by this Algorithm are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Two elements of different types will produce different trees."),(0,a.kt)("li",{parentName:"ol"},"Breadth-First Search (BFS) is applied because if a node is found as changed, it will re-render the entire subtree hence Depth First Approach is not exactly optimal. "),(0,a.kt)("li",{parentName:"ol"},"When comparing two elements of the same type, keep the underlying node as same and only update changes in attributes or styles."),(0,a.kt)("li",{parentName:"ol"},"React uses optimizations so that a minimal difference can be calculated in O(N) efficiently using this Algorithm.")),(0,a.kt)("h3",{id:""}),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@ ",(0,a.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/reactjs-reconciliation/"},"geeksforgeeks")," - ReactJS Reconciliation")))}d.isMDXComponent=!0}}]);