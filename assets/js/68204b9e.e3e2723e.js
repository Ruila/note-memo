"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8663],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,k=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(k,s(s({ref:t},m),{},{components:n})):r.createElement(k,s({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"[JS] Promise"},s="[JS] Promise",i={unversionedId:"Javascript/js-promise",id:"Javascript/js-promise",title:"[JS] Promise",description:"This is not original content, but just a note from articles I read.",source:"@site/docs/Javascript/js-promise.md",sourceDirName:"Javascript",slug:"/Javascript/js-promise",permalink:"/note-memo/docs/Javascript/js-promise",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/js-promise.md",tags:[],version:"current",frontMatter:{title:"[JS] Promise"},sidebar:"tutorialSidebar",previous:{title:"[JS] hoist",permalink:"/note-memo/docs/Javascript/js-hoist"},next:{title:"[JS] prototype chain",permalink:"/note-memo/docs/Javascript/js-prototype"}},c={},l=[{value:"Intro",id:"intro",level:2},{value:"Promise with MacroTask and MicroTask",id:"promise-with-macrotask-and-microtask",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Reference",id:"reference",level:2}],m={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"js-promise"},"[JS]"," Promise"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This is not original content, but just a note from articles I read.")),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value."),(0,o.kt)("h2",{id:"promise-with-macrotask-and-microtask"},"Promise with MacroTask and MicroTask"),(0,o.kt)("p",null,"Immediately after every macrotask, the engine executes all tasks from microtask queue, prior to running any other macrotasks or rendering or anything else."),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'setTimeout(()=>{ // 1. add to Web APIs queue, then it will be moved to macrotask.\n    console.info("setTimeout") // 19. executes next marcotask\n}, 0)\n\nnew Promise((resolve, reject) => {\n    console.log("1"); // 2. construct Promise and executes in stack immediately\n    resolve();\n  })\n.then(() => { // 3. add then event to microtask queue\n    console.log("2"); // 4. start executes microtask and executes in stack immediately\n    new Promise((resolve, reject) => { \n        console.log("3"); // 5. construct Promise and executes in stack immediately\n        resolve();\n    })\n    .then(() => { // 6. add then event to microtask queue\n        console.log("4"); // 10. start executes microtask and executes in stack immediately\n    })\n    .then(() => { // 11. add then event to microtask queue\n        console.log("5"); // 15. start executes microtask and executes in stack immediately\n    })\n    .then(() => { // 16. add then event to microtask queue\n        console.log("10"); // 18. start executes microtask and executes in stack immediately\n    });\n    \n    new Promise((resolve, reject) => {\n        console.log("7"); // 7. construct Promise and executes in stack immediately\n        resolve();\n    })\n    .then(() => { // 8. add then event to microtask queue\n        console.log("8"); // 12. start executes microtask and executes in stack immediately\n    })\n    .then(() => { // 13. add then event to microtask queue\n        console.log("9"); // 17. start executes microtask and executes in stack immediately\n    });\n})\n.then(() => { // 9. add then event to microtask queue \n    console.log("6"); // 14. start executes microtask and executes in stack immediately\n});\n')),(0,o.kt)("p",null,"the history in microtask will be:\n2 -> 4 -> 8 -> 6 -> 5 -> 9 -> 10"),(0,o.kt)("h3",{id:"example-2"},"Example 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"setTimeout(() => { // first settimeout\n  console.log('timer1');\n  Promise.resolve().then(() => { // is add to microtask queue when execute the first settimeout as a macrotask.\n    console.log('promise')\n  })\n}, 0)\nsetTimeout(() => { // second settimeout\n  console.log('timer2')\n}, 0)\nconsole.log('start')\n")),(0,o.kt)("p",null,"result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// 'start'\n// 'timer1'\n// 'promise'\n// 'timer2'\n")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@ ",(0,o.kt)("a",{parentName:"li",href:"https://javascript.info/event-loop#macrotasks-and-microtasks"},"javascript.info")),(0,o.kt)("li",{parentName:"ul"},"@ ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"MDN")," - Promise"),(0,o.kt)("li",{parentName:"ul"},"@ ",(0,o.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844904077537574919"},"juejin"))))}p.isMDXComponent=!0}}]);