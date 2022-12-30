"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37032],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),h=r,f=d["".concat(i,".").concat(h)]||d[h]||u[h]||l;return t?a.createElement(f,o(o({ref:n},s),{},{components:t})):a.createElement(f,o({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},14668:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={title:"$cloneChannel",description:"Clones the current channel"},o=void 0,c={unversionedId:"functions/clonechannel",id:"version-5.5.5/functions/clonechannel",title:"$cloneChannel",description:"Clones the current channel",source:"@site/versioned_docs/version-5.5.5/functions/clonechannel.md",sourceDirName:"functions",slug:"/functions/clonechannel",permalink:"/docs/5.5.5/functions/clonechannel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1658666031,formattedLastUpdatedAt:"Jul 24, 2022",frontMatter:{title:"$cloneChannel",description:"Clones the current channel"},sidebar:"docs",previous:{title:"$clientToken",permalink:"/docs/5.5.5/functions/clienttoken"},next:{title:"$closeTicket",permalink:"/docs/5.5.5/functions/closeticket"}},i={},p=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function allows the bot to clone the name, topic and channel position of the current or given channel."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$cloneChannel[channelID?;return_new_channelID?]\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"channel ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The id of the channel that is to be cloned"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"return ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether to return the id of the channel created"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes/no"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Without optional field:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "clonechannel",\ncode: `I have cloned this channel!\n$cloneChannel`\n})\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With optional field")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "clonechannel",\ncode: `I have cloned this channel!\n$cloneChannel[$mentionedChannels[1]]`\n})\n\n')),(0,r.kt)("p",null,"With optional field to clone current channel, save the new channel's ID inside ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/let"},"$let","[","]"," "),"and return the ID of the new channel as a channel mention with ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/get"},"$get","[","]"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "clonechannel",\ncode: `$channelSendMessage[$get[new];This is the clone!]\n$let[channel;$cloneChannel[$channelID;yes]]\n`\n})\n')))}u.isMDXComponent=!0}}]);