"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,title:"[React] useCallback"},c="[React] useCallback",l={unversionedId:"React/react-useCallback",id:"React/react-useCallback",title:"[React] useCallback",description:"Intro",source:"@site/docs/React/react-useCallback.md",sourceDirName:"React",slug:"/React/react-useCallback",permalink:"/note-memo/docs/React/react-useCallback",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/react-useCallback.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"[React] useCallback"},sidebar:"tutorialSidebar",previous:{title:"[React] Reconciliation",permalink:"/note-memo/docs/React/react-reconciliation"}},i={},s=[{value:"Intro",id:"intro",level:2},{value:"Example",id:"example",level:2},{value:"Reference",id:"reference",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-usecallback"},"[React]"," useCallback"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"useCallback is a React Hook that lets you cache a function definition between re-renders."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=Parent.tsx",title:"Parent.tsx"},'export const Parent = (): JSX.Element => {\n  const [count, setCount] = useState<number>(0)\n\n  const reset = useCallback(() => {\n    console.info("demo")\n    setCount(0)\n  }, [])\n\n  const add = () => {\n    console.info("add")\n    setCount(count + 1)\n  }\n\n  return <div className="flex">\n      <div>\n        count: {count}\n      </div>\n      <div onClick={add} className="mx-4">add</div>\n      <Child reset={reset} />\n  </div>\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Child.tsx"',title:'"Child.tsx"'},'type ChildProps = {\n  reset: () => void\n}\n\nexport const Child: React.FunctionComponent<ChildProps> = React.memo(({ reset }) => {\n    console.info("Child")\n    return (<div className="w-[70px]" onClick={reset}>\n      reset\n    </div>)\n  }\n)\n')),(0,a.kt)("p",null,'console.info("demo") will not trigger when you click reset button.'),(0,a.kt)("p",null,"Because the reset function is memorized with ",(0,a.kt)("strong",{parentName:"p"},"useCallback"),", it ",(0,a.kt)("strong",{parentName:"p"},"keep the same location in memory"),"."),(0,a.kt)("p",null,"So Child component wrapped with ",(0,a.kt)("strong",{parentName:"p"},"React.memo")," will get the same reset function."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@ ",(0,a.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/reactjs-reconciliation/"},"geeksforgeeks")," - ReactJS Reconciliation")))}d.isMDXComponent=!0}}]);