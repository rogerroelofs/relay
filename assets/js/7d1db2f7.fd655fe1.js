(self.webpackChunk=self.webpackChunk||[]).push([[38122],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),g=o,y=d["".concat(l,".").concat(g)]||d[g]||c[g]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16477:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,metadata:()=>l,toc:()=>p,default:()=>c});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],s={id:"relay-debugging",title:"Debugging",original_id:"relay-debugging"},l={unversionedId:"relay-debugging",id:"version-v7.0.0/relay-debugging",isDocsHomePage:!1,title:"Debugging",description:"If you're new to Relay, we provide some basic debugging strategies that should serve to help you clarify key concepts as you build your app. Alternatively, Relay provides a couple of tools to inspect the store and its records.",source:"@site/versioned_docs/version-v7.0.0/Modern-Debugging.md",sourceDirName:".",slug:"/relay-debugging",permalink:"/docs/v7.0.0/relay-debugging",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v7.0.0/Modern-Debugging.md",version:"v7.0.0",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1623871437,formattedLastUpdatedAt:"6/16/2021",frontMatter:{id:"relay-debugging",title:"Debugging",original_id:"relay-debugging"},sidebar:"version-v7.0.0/docs",previous:{title:"Routing",permalink:"/docs/v7.0.0/routing"},next:{title:"GraphQL Server Specification",permalink:"/docs/v7.0.0/graphql-server-specification"}},p=[{value:"Strategies",id:"strategies",children:[]},{value:"Tools",id:"tools",children:[]}],u={toc:p};function c(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you're new to Relay, we provide some basic debugging strategies that should serve to help you clarify key concepts as you build your app. Alternatively, Relay provides a couple of tools to inspect the store and its records."),(0,a.kt)("h2",{id:"strategies"},"Strategies"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Given:")," You've properly setup your schema on the backend and React on the frontend. You've read through the documents but can't seem to identify what's wrong with your code. You've even done a number of searches but can't find the answer you're looking for."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A few questions to ask yourself:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Is my ",(0,a.kt)("a",{parentName:"em",href:"./installation-and-setup#set-up-relay-compiler"},"compilation")," up-to-date?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Is my query valid?")," You can test this on your GraphiQL endpoint.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If so:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Put your entire query at the top-level (your ",(0,a.kt)("inlineCode",{parentName:"li"},"QueryRenderer"),") and comment out all fragment containers. Pass the data through your component hierarchy down to the components that were using fragments."),(0,a.kt)("li",{parentName:"ol"},"If your app isn't rendering properly, use ",(0,a.kt)("inlineCode",{parentName:"li"},"console.log(props);")," for every component to see the props you are actually passing."),(0,a.kt)("li",{parentName:"ol"},"Once your app is rendering, uncomment the deepest fragment container and add that fragment back to your top-level query. Everything should still render. If not, use ",(0,a.kt)("inlineCode",{parentName:"li"},"console.log(props);")," again."),(0,a.kt)("li",{parentName:"ol"},"Continue uncommenting fragments and confirming that your app renders until your top-level query is as desired."),(0,a.kt)("li",{parentName:"ol"},"If this still fails, come back to your code later and try debugging with a fresh mind. Additionally, you can ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/relay/issues/new"},"post an issue")," and someone should get back to you hopefully within a few days.")),(0,a.kt)("h2",{id:"tools"},"Tools"),(0,a.kt)("p",null,"Relay DevTools is tool designed to help developers inspect their Relay state and understand how store changes overtime. Relay DevTools ships in two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/relay-developer-tools/ncedobpgnmkhcmnnkcimnobpfepidadl"},"Chrome Extension")," creates a Relay tab in the developer tools interface for debugging apps in Chrome")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Store Explorer",src:r(1652).Z}),"\n",(0,a.kt)("img",{alt:"Mutations View",src:r(5962).Z})))}c.isMDXComponent=!0},5962:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/mutations-view-updated-7276d604978d51cdc3235bd101de9d20.png"},1652:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/store-explorer-updated-430481ab45a7a12bdf16aab730f6c27f.png"}}]);