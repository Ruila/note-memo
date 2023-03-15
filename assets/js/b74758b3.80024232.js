"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9067],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),i=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=i(e.components);return o.createElement(l.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(t),d=n,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return t?o.createElement(f,c(c({ref:r},u),{},{components:t})):o.createElement(f,c({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[m]="string"==typeof e?e:n,c[1]=s;for(var i=2;i<a;i++)c[i]=t[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4767:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var o=t(7462),n=(t(7294),t(3905));const a={sidebar_position:2,title:"[Docker] volumes"},c="[Docker] volumes",s={unversionedId:"Docker/docker-volumes",id:"Docker/docker-volumes",title:"[Docker] volumes",description:"Intro",source:"@site/docs/Docker/docker-volumes.md",sourceDirName:"Docker",slug:"/Docker/docker-volumes",permalink:"/note-memo/docs/Docker/docker-volumes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/docker-volumes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"[Docker] volumes"},sidebar:"tutorialSidebar",previous:{title:"[CSS] selector priority",permalink:"/note-memo/docs/CSS/css-priority"},next:{title:"[JS] call",permalink:"/note-memo/docs/Javascript/js-call"}},l={},i=[{value:"Intro",id:"intro",level:2},{value:"Use a volume with Docker Compose and Postgresql",id:"use-a-volume-with-docker-compose-and-postgresql",level:2},{value:"Reference",id:"reference",level:2}],u={toc:i},m="wrapper";function p(e){let{components:r,...a}=e;return(0,n.kt)(m,(0,o.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"docker-volumes"},"[Docker]"," volumes"),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"Volumes are the preferred mechanism for persisting data generated by and used by Docker containers."),(0,n.kt)("p",null,"While bind mounts are dependent on the directory structure and OS of the host machine, volumes are completely managed by Docker."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"docker-volumes",src:t(1483).Z,width:"502",height:"255"})),(0,n.kt)("h2",{id:"use-a-volume-with-docker-compose-and-postgresql"},"Use a volume with Docker Compose and Postgresql"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  db:\n  image: postgis/postgis:11-3.3-alpine\n  volumes:\n    - myappDB:/var/lib/postgresql/data\n\nvolumes:\n  myappDB:\n")),(0,n.kt)("p",null,"Running docker compose up for the first time creates a volume. The same volume is reused when you subsequently run the command."),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@ ",(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/storage/volumes/"},"Docker")," - Volumes")))}p.isMDXComponent=!0},1483:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/docker-volumes-866cf680c6d400c46bf73612cf43fcd2.png"}}]);