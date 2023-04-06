"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[13021],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),v=n,b=c["".concat(s,".").concat(v)]||c[v]||d[v]||i;return a?r.createElement(b,l(l({ref:t},p),{},{components:a})):r.createElement(b,l({ref:t},p))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},80084:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={title:"Variables",description:"This Guide will be covering variables, their usage and how to store variables in other files.",id:"variables"},l=void 0,o={unversionedId:"guides/variables",id:"guides/variables",title:"Variables",description:"This Guide will be covering variables, their usage and how to store variables in other files.",source:"@site/docs/guides/5variables.md",sourceDirName:"guides",slug:"/guides/variables",permalink:"/docs/guides/variables",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1676948276,formattedLastUpdatedAt:"Feb 21, 2023",frontMatter:{title:"Variables",description:"This Guide will be covering variables, their usage and how to store variables in other files.",id:"variables"},sidebar:"docs",previous:{title:"Client Status",permalink:"/docs/guides/status"},next:{title:"Interaction Commands",permalink:"/docs/guides/interactioncommands"}},s={},u=[{value:"Table of Content",id:"table-of-content",level:3},{value:"Using Variables",id:"using-variables",level:3},{value:"Variable Handler",id:"variable-handler",level:3}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This guide will be covering everything you need to know about variables."),(0,n.kt)("h3",{id:"table-of-content"},"Table of Content"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"#using-variables"},"Using Variables"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"#variable-handler"},"Variable Handler")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"using-variables"},"Using Variables"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Variables are very helpful, and makes devolping a lot easier.")),(0,n.kt)("p",null,"Before we use variables, we have to learn how to use them."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'bot.variables({\n    varname: "varvalue",\n    varname2: "varvalue2"\n});\n')),(0,n.kt)("p",null,"This is the easiest out of two ways to use variables, you would put that code snippet in your main file (in most cases named ",(0,n.kt)("inlineCode",{parentName:"p"},"index.js"),")."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"variable-handler"},"Variable Handler"),(0,n.kt)("p",null,"Another way, which will keep your main file clean, are variable handlers (stored in another file)."),(0,n.kt)("p",null,'Create a directory called "',(0,n.kt)("strong",{parentName:"p"},"handler"),'" and a file inside of it called "',(0,n.kt)("strong",{parentName:"p"},"variables.js"),'", after you did that, put that\nin your main file:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'bot.variables(require("./handler/variables.js"));\n')),(0,n.kt)("p",null,"Now go to your ",(0,n.kt)("inlineCode",{parentName:"p"},"variables.js")," file and paste the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n    varname: "varvalue",\n    varname2: "varvalue2"\n}]\n')),(0,n.kt)("p",null,"And that's it, you have a working variable handler and your main file will be clean."))}d.isMDXComponent=!0}}]);