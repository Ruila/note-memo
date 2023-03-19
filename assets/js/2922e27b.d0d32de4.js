"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6045],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,title:"[ThreeJS] OrbitContols"},i="[ThreeJS] OrbitContols",s={unversionedId:"Web Animate/threejs-orbitcontrol",id:"Web Animate/threejs-orbitcontrol",title:"[ThreeJS] OrbitContols",description:"OrbitContols",source:"@site/docs/Web Animate/threejs-orbitcontrol.md",sourceDirName:"Web Animate",slug:"/Web Animate/threejs-orbitcontrol",permalink:"/note-memo/docs/Web Animate/threejs-orbitcontrol",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Web Animate/threejs-orbitcontrol.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"[ThreeJS] OrbitContols"},sidebar:"tutorialSidebar",previous:{title:"[System Design] SSO",permalink:"/note-memo/docs/System Design/system-design-sso"},next:{title:"[WebAPIs] Event Capturing and Bubbling",permalink:"/note-memo/docs/WebAPIs/webapis-event-capturing-and-bubbling"}},l={},c=[{value:"OrbitContols",id:"orbitcontols",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Reference",id:"reference",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"threejs-orbitcontols"},"[ThreeJS]"," OrbitContols"),(0,o.kt)("h2",{id:"orbitcontols"},"OrbitContols"),(0,o.kt)("p",null,"Orbit controls allow the camera to orbit around a target."),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { OrbitControls } from 'three/addons/controls/OrbitControls.js';\n\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize( window.innerWidth, window.innerHeight );\ndocument.body.appendChild( renderer.domElement );\n\nconst scene = new THREE.Scene();\n\nconst camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );\n\nconst controls = new OrbitControls( camera, renderer.domElement );\n\n//controls.update() must be called after any manual changes to the camera's transform\ncamera.position.set( 0, 20, 100 );\ncontrols.update();\n\nfunction animate() {\n\n    requestAnimationFrame( animate );\n\n    // required if controls.enableDamping or controls.autoRotate are set to true\n    controls.update();\n\n    renderer.render( scene, camera );\n\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/"},"Try to control the camera")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@ ",(0,o.kt)("a",{parentName:"li",href:"https://threejs.org/docs/?q=OrbitControls#examples/en/controls/OrbitControls"},"threejs.org")," - OrbitControls")))}u.isMDXComponent=!0}}]);