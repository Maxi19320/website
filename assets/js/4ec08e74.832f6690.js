"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[65569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),g=u(n),m=i,f=g["".concat(p,".").concat(m)]||g[m]||s[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=g;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},75409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const l={title:"$getTextSplitLength",description:"$getTextSplitLength will return the amount of split arguments in $textSplit",id:"getTextSplitLength"},o=void 0,a={unversionedId:"functions/util/getTextSplitLength",id:"functions/util/getTextSplitLength",title:"$getTextSplitLength",description:"$getTextSplitLength will return the amount of split arguments in $textSplit",source:"@site/docs/functions/util/getTextSplitLength.md",sourceDirName:"functions/util",slug:"/functions/util/getTextSplitLength",permalink:"/docs/functions/util/getTextSplitLength",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1672524727,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{title:"$getTextSplitLength",description:"$getTextSplitLength will return the amount of split arguments in $textSplit",id:"getTextSplitLength"},sidebar:"docs",previous:{title:"$get",permalink:"/docs/functions/util/get"},next:{title:"$globalCooldown",permalink:"/docs/functions/util/globalCooldown"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$getTextSplitLength")," will return the amount of split arguments in ",(0,i.kt)("inlineCode",{parentName:"p"},"$textSplit"),"."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$getTextSplitLength\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"This will return ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," as there are five arguments seperated by ",(0,i.kt)("inlineCode",{parentName:"p"},", ")," given in ",(0,i.kt)("inlineCode",{parentName:"p"},"$textSplit")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'getTextSplitLength',\n  code: `\n  $getTextSplitLength\n  $textSplit[Hello, my, name, is, Leref;, ]\n  `\n});\n")))}s.isMDXComponent=!0}}]);