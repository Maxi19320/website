"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[30894],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),g=p(n),s=r,c=g["".concat(d,".").concat(s)]||g[s]||u[s]||l;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},59271:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"$getEmbed",description:"$getEmbed will return properties about an given embed.",id:"getEmbed"},i=void 0,o={unversionedId:"functions/Info/getEmbed",id:"functions/Info/getEmbed",title:"$getEmbed",description:"$getEmbed will return properties about an given embed.",source:"@site/docs/functions/Info/getEmbed.md",sourceDirName:"functions/Info",slug:"/functions/Info/getEmbed",permalink:"/docs/functions/Info/getEmbed",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1676948276,formattedLastUpdatedAt:"Feb 21, 2023",frontMatter:{title:"$getEmbed",description:"$getEmbed will return properties about an given embed.",id:"getEmbed"},sidebar:"docs",previous:{title:"$getChannelSlowmode",permalink:"/docs/functions/Info/getChannelSlowmode"},next:{title:"$getMessage",permalink:"/docs/functions/Info/getMessage"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],m={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getEmbed")," will return properties about an given embed."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$getEmbed[channelID?;messageID?;index?;option?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelID"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"channel ID of the embed"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"messageID"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"message ID of the embed"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"index of the embed, 1 first embed, 2 second embed.."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"option"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"which part will be returned of the embed"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",null," Options ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"title of the embed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"description of the embed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"the url in the title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"color"),(0,r.kt)("td",{parentName:"tr",align:null},"color of the embed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp located in the footer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fields"),(0,r.kt)("td",{parentName:"tr",align:null},"field title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fvalue"),(0,r.kt)("td",{parentName:"tr",align:null},"field description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"thumbnail"),(0,r.kt)("td",{parentName:"tr",align:null},"thumbnail (image top right)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"large image at the bottom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"video"),(0,r.kt)("td",{parentName:"tr",align:null},"video/gif")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"author"),(0,r.kt)("td",{parentName:"tr",align:null},"author, above title field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"footer"),(0,r.kt)("td",{parentName:"tr",align:null},"footer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"files"),(0,r.kt)("td",{parentName:"tr",align:null},"attached files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createdAt"),(0,r.kt)("td",{parentName:"tr",align:null},"creation date of the embed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hexColor"),(0,r.kt)("td",{parentName:"tr",align:null},"hex color of the embed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"length"),(0,r.kt)("td",{parentName:"tr",align:null},"length of the embed"))))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"This will return the description of an embed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'getEmbed',\n    code: `\n$getEmbed[$channelID;messageID;1;description] //make sure to replace messageID with the actual message ID \n  `\n});\n")))}u.isMDXComponent=!0}}]);