"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8449],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),f=l(t),u=o,d=f["".concat(c,".").concat(u)]||f[u]||p[u]||s;return t?r.createElement(d,i(i({ref:n},m),{},{components:t})):r.createElement(d,i({ref:n},m))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},94137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const s={title:"$modifyChannelPerms",description:"Modifies a channel's permissions to the given perms"},i=void 0,a={unversionedId:"functions/modifychannelperms",id:"version-5.5.5/functions/modifychannelperms",title:"$modifyChannelPerms",description:"Modifies a channel's permissions to the given perms",source:"@site/versioned_docs/version-5.5.5/functions/modifychannelperms.md",sourceDirName:"functions",slug:"/functions/modifychannelperms",permalink:"/docs/5.5.5/functions/modifychannelperms",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1658666031,formattedLastUpdatedAt:"Jul 24, 2022",frontMatter:{title:"$modifyChannelPerms",description:"Modifies a channel's permissions to the given perms"},sidebar:"docs",previous:{title:"$minute",permalink:"/docs/5.5.5/functions/minute"},next:{title:"$modifyEmoji",permalink:"/docs/5.5.5/functions/modifyemoji"}},c={},l=[],m={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function edit's the specified channels perms"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$modifyChannelPerms[channelID;perm1;perm2;perm3;roleID/userID/$guildID]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'/*\nTIP:\n+ = Allow perms\n- = Deny Perms\n/ = Defaults the perm\n*/\nbot.command({\nname: "modifyChannelPerms",\ncode: `Modified the channel permissions!\n$modifyChannelPerms[773365032691040277;+sendmessages;-readmessages;/managemessages;$guildID]`\n})\n/*\nThis:\nAllows send messages\nDenies read messages\nDefaults manage messages\nfor the whole guild\n*/\n')))}p.isMDXComponent=!0}}]);