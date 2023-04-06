"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||s;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const s={title:"Client Status",description:"Status - How to use bot statuses.",id:"status"},l=void 0,o={unversionedId:"guides/status",id:"guides/status",title:"Client Status",description:"Status - How to use bot statuses.",source:"@site/docs/guides/4status.md",sourceDirName:"guides",slug:"/guides/status",permalink:"/docs/guides/status",draft:!1,tags:[],version:"current",frontMatter:{title:"Client Status",description:"Status - How to use bot statuses.",id:"status"},sidebar:"docs",previous:{title:"Command Handler",permalink:"/docs/guides/commandhandler"},next:{title:"Variables",permalink:"/docs/guides/variables"}},i={},u=[{value:"This guide will be covering statuses and client presences.",id:"this-guide-will-be-covering-statuses-and-client-presences",level:4},{value:"Table of Content",id:"table-of-content",level:3},{value:"Bot Status",id:"bot-status",level:3},{value:"This section will cover how to customize your bot&#39;s status.",id:"this-section-will-cover-how-to-customize-your-bots-status",level:4},{value:"Client Presence",id:"client-presence",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"this-guide-will-be-covering-statuses-and-client-presences"},"This guide will be covering statuses and client presences."),(0,a.kt)("h3",{id:"table-of-content"},"Table of Content"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"#bot-status"},"Statuses"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"#client-presence"},"Client Presence"))," ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"#client-presence"},"Mobile Presence")))))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"bot-status"},"Bot Status"),(0,a.kt)("h4",{id:"this-section-will-cover-how-to-customize-your-bots-status"},"This section will cover how to customize your bot's status."),(0,a.kt)("p",null,"First of all we have to add the following piece of code to our main file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'bot.status({\n  text: "Example Text!",\n  type: "PLAYING",\n  time: 12\n});\n')),(0,a.kt)("p",null,'This will display the text "Example Text!" as bot status, of course you can modify it.'),(0,a.kt)("p",null,"If you want to have multiple statuses just add multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"bot.status({...})"),", simple do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'bot.status({\n  text: "Example Text!",\n  type: "PLAYING",\n  time: 12\n});\n\nbot.status({\n  text: "Example Text!",\n  type: "WATCHING",\n  time: 20\n});\n\nbot.status({\n  text: "Example Text!",\n  type: "STEAMING",\n  url: "URL"\n});\n')),(0,a.kt)("p",null,"There are various types of statuses:"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PLAYING")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"WATCHING")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"STREAMING")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LISTENING")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"COMPETING")))),(0,a.kt)("h3",{id:"client-presence"},"Client Presence"),(0,a.kt)("p",null,"You can also set the bot's presence, by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," property, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'bot.status({\n  text: "Example Text!",\n  type: "PLAYING",\n  status: "dnd"\n  time: 12\n});\n')),(0,a.kt)("p",null,"There are multiple types of presences:"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"online")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"idle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"dnd")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"invisible")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mobilePresence"),(0,a.kt)("br",{parentName:"li"}),"To use the mobile presence you have to setup something in your main file:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const aoijs = require("aoi.js")\nconst bot = new aoijs.AoiClient({\ntoken: "DISCORD BOT TOKEN",\nprefix: "DISCORD BOT PREFIX",\nintents: ["MessageContent", "Guilds", "GuildMessages"],\nmobilePlatform: true\n});\n')))),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},""))))}c.isMDXComponent=!0}}]);