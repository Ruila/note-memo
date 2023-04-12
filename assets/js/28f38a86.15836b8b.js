"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={title:"[NextJs] Render css on server side"},s="[NextJs] Render css on server side",o={unversionedId:"React/nextjs-render-tailwindcss-server",id:"React/nextjs-render-tailwindcss-server",title:"[NextJs] Render css on server side",description:"Tutorial",source:"@site/docs/React/nextjs-render-tailwindcss-server.md",sourceDirName:"React",slug:"/React/nextjs-render-tailwindcss-server",permalink:"/note-memo/docs/React/nextjs-render-tailwindcss-server",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/nextjs-render-tailwindcss-server.md",tags:[],version:"current",frontMatter:{title:"[NextJs] Render css on server side"},sidebar:"tutorialSidebar",previous:{title:"[MUI] React-Mask with TextField of MUI",permalink:"/note-memo/docs/React/mui-react-mask-mui-textfield"},next:{title:"[React] Reconciliation",permalink:"/note-memo/docs/React/react-reconciliation"}},c={},l=[{value:"Tutorial",id:"tutorial",level:2},{value:"Before",id:"before",level:4},{value:"After",id:"after",level:4}],d={toc:l},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nextjs-render-css-on-server-side"},"[NextJs]"," Render css on server side"),(0,a.kt)("h2",{id:"tutorial"},"Tutorial"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"support ",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"tailwindcss")," and css modules")),(0,a.kt)("p",null,"step 1.enable optimizeCss"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=next.config.js",title:"next.config.js"},"/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  reactStrictMode: true,\n  experimental: {\n    optimizeCss: true, // enabling this will enable SSR for Tailwind\n  },\n}\n\nmodule.exports = nextConfig\n")),(0,a.kt)("p",null,"step 2. run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add -D critters")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Next.JS will internally use this library called Critters.")),(0,a.kt)("p",null,"step 3. then run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn start")),(0,a.kt)("h4",{id:"before"},"Before"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"before",src:r(339).Z,width:"755",height:"375"})),(0,a.kt)("h4",{id:"after"},"After"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"after",src:r(6011).Z,width:"702",height:"357"})))}u.isMDXComponent=!0},6011:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server-render-css-after-a6ee63d6e74f335dd6fdd6ecc5692909.png"},339:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server-render-css-before-6562818d65ea3ed9f4c89a777ca9cfb1.png"}}]);