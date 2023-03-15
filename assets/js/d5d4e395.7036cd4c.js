"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,c(c({ref:t},i),{},{components:n})):r.createElement(f,c({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,c[1]=s;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,title:"[React] useMemo"},c="[React] useMemo",s={unversionedId:"React/react-useMemo",id:"React/react-useMemo",title:"[React] useMemo",description:"Intro",source:"@site/docs/React/react-useMemo.md",sourceDirName:"React",slug:"/React/react-useMemo",permalink:"/note-memo/docs/React/react-useMemo",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/react-useMemo.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"[React] useMemo"},sidebar:"tutorialSidebar",previous:{title:"[React] useCallback",permalink:"/note-memo/docs/React/react-useCallback"}},l={},u=[{value:"Intro",id:"intro",level:2},{value:"Example",id:"example",level:2},{value:"Reference",id:"reference",level:2}],i={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-usememo"},"[React]"," useMemo"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"useMemo is a React Hook that lets you cache the result of a calculation between re-renders."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=Parent.tsx",title:"Parent.tsx"},'export const UseMemoDemo = (): JSX.Element => {\n  const [count, setCount] = useState<number>(0);\n\n  const reset = () => {\n    setCount(0);\n  };\n\n  const add = () => {\n    setCount(count + 1);\n  };\n\n  const sum = useMemo(() => {\n      console.info("recalculate");\n      return [1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue, 0);\n    },\n    []);\n\n  return <div className="flex">\n    <div>\n      sum: {sum}\n    </div>\n    <div>\n      count: {count}\n    </div>\n    <div onClick={add} className="mx-4">add</div>\n    <Child reset={reset} />\n  </div>;\n};\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Child.tsx"',title:'"Child.tsx"'},'type ChildProps = {\n  reset: () => void\n}\n\nexport const Child: React.FunctionComponent<ChildProps> = ({ reset }) => {\n  return (<div className="w-[70px]" onClick={reset}>\n    reset\n  </div>)\n}\n')),(0,a.kt)("p",null,"It will not trigger ",(0,a.kt)("strong",{parentName:"p"},'console.info("recalculate")')," when click add button because sum function is memorized with useMemo."),(0,a.kt)("p",null,"If you want to recalculate sum as the ",(0,a.kt)("strong",{parentName:"p"},"count")," change, add ",(0,a.kt)("strong",{parentName:"p"},"count")," to the dependency of useMemo."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@ ",(0,a.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/reference/react/useMemo"},"react docs")," - useMemo")))}p.isMDXComponent=!0}}]);