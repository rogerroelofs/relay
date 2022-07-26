"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[6163],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>l});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),l=function(e){return function(n){var t=u(n.components);return r.createElement(e,o({},n,{components:t}))}},u=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(t),m=i,f=l["".concat(a,".").concat(m)]||l[m]||p[m]||o;return t?r.createElement(f,c(c({ref:n},d),{},{components:t})):r.createElement(f,c({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var d=2;d<o;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(39960),i=t(44256),o=t(67294);function a(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function c(e){var n=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),n)}var s=function(){var e=o.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:a},"Filing a task"))},l=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return o.createElement(c,null,o.createElement(d,null),o.createElement(s,null),o.createElement(l,null))},m=function(){return o.createElement(c,null,o.createElement(s,null),o.createElement(l,null))};const p=function(){return(0,i.fbContent)({internal:o.createElement(u,null),external:o.createElement(m,null)})}},14024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>v,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var r=t(83117),i=t(80102),o=(t(67294),t(3905)),a=t(68629),c=t(44256),s=["components"],d={id:"rendering-connections",title:"Rendering Connections",slug:"/guided-tour/list-data/rendering-connections/",description:"Relay guide to rendering connections",keywords:["pagination","usePaginationFragment","connection"]},l=void 0,u={unversionedId:"guided-tour/list-data/rendering-connections",id:"version-v12.0.0/guided-tour/list-data/rendering-connections",title:"Rendering Connections",description:"Relay guide to rendering connections",source:"@site/versioned_docs/version-v12.0.0/guided-tour/list-data/rendering-connections.md",sourceDirName:"guided-tour/list-data",slug:"/guided-tour/list-data/rendering-connections/",permalink:"/docs/v12.0.0/guided-tour/list-data/rendering-connections/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/guided-tour/list-data/rendering-connections.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Mofei Zhang",lastUpdatedAt:1658864027,formattedLastUpdatedAt:"7/26/2022",frontMatter:{id:"rendering-connections",title:"Rendering Connections",slug:"/guided-tour/list-data/rendering-connections/",description:"Relay guide to rendering connections",keywords:["pagination","usePaginationFragment","connection"]},sidebar:"version-v12.0.0/docs",previous:{title:"Connections",permalink:"/docs/v12.0.0/guided-tour/list-data/connections/"},next:{title:"Pagination",permalink:"/docs/v12.0.0/guided-tour/list-data/pagination/"}},m={},p=[],f=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",n)}},h=f("FbRenderingConnectionsUsingSuspenseList"),g=f("FbSuspenseListAlternative"),y={toc:p};function v(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.mdx)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"In Relay, in order to display a list of data that is backed by a GraphQL connection, first you need to declare a fragment that queries for a connection:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const {graphql} = require('RelayModern');\n\nconst userFragment = graphql`\n  fragment UserFragment on User {\n    name\n    friends(after: $cursor, first: $count)\n      @connection(key: \"UserFragment_friends\") {\n      edges {\n        node {\n          ...FriendComponent\n        }\n      }\n    }\n  }\n`;\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"In the example above, we're querying for the ",(0,o.mdx)("inlineCode",{parentName:"li"},"friends")," field, which is a connection; in other words, it adheres to the connection spec. Specifically, we can query the ",(0,o.mdx)("inlineCode",{parentName:"li"},"edges")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"node"),"s in the connection; the ",(0,o.mdx)("inlineCode",{parentName:"li"},"edges")," usually contain information about the relationship between the entities, while the ",(0,o.mdx)("inlineCode",{parentName:"li"},"node"),"s are the actual entities at the other end of the relationship; in this case, the ",(0,o.mdx)("inlineCode",{parentName:"li"},"node"),"s are objects of type ",(0,o.mdx)("inlineCode",{parentName:"li"},"User")," representing the user's friends."),(0,o.mdx)("li",{parentName:"ul"},"In order to indicate to Relay that we want to perform pagination over this connection, we need to mark the field with the ",(0,o.mdx)("inlineCode",{parentName:"li"},"@connection")," directive. We must also provide a ",(0,o.mdx)("em",{parentName:"li"},"static")," unique identifier for this connection, known as the ",(0,o.mdx)("inlineCode",{parentName:"li"},"key"),". We recommend the following naming convention for the connection key: ",(0,o.mdx)("inlineCode",{parentName:"li"},"<fragment_name>_<field_name>"),"."),(0,o.mdx)("li",{parentName:"ul"},"We will go into more detail later as to why it is necessary to mark the field as a ",(0,o.mdx)("inlineCode",{parentName:"li"},"@connection")," and give it a unique ",(0,o.mdx)("inlineCode",{parentName:"li"},"key")," in our ",(0,o.mdx)("a",{parentName:"li",href:"../updating-connections/"},"Updating Connections")," section.")),(0,o.mdx)("p",null,"In order to render this fragment which queries for a connection, we can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment")," Hook:"),(0,o.mdx)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)(h,{mdxType:"FbRenderingConnectionsUsingSuspenseList"})),(0,o.mdx)(c.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FriendsListPaginationQuery} from 'FriendsListPaginationQuery.graphql';\nimport type {FriendsListComponent_user$key} from 'FriendsList_user.graphql';\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\ntype Props = {\n  user: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  const {data} = usePaginationFragment<FriendsListPaginationQuery, _>(\n    graphql`\n      fragment FriendsListComponent_user on User\n      @refetchable(queryName: \"FriendsListPaginationQuery\") {\n        name\n        friends(first: $count, after: $cursor)\n        @connection(key: \"FriendsList_user_friends\") {\n          edges {\n            node {\n              ...FriendComponent\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n\n  return (\n    <>\n      {data.name != null ? <h1>Friends of {data.name}:</h1> : null}\n\n      <div>\n        {/* Extract each friend from the resulting data */}\n        {(data.friends?.edges ?? []).map(edge => {\n          const node = edge.node;\n          return (\n            <Suspense fallback={<Glimmer />}>\n              <FriendComponent user={node} />\n            </Suspense>\n          );\n        })}\n      </div>\n    </>\n  );\n}\n\nmodule.exports = FriendsListComponent;\n")),(0,o.mdx)(g,{mdxType:"FbSuspenseListAlternative"}),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"usePaginationFragment")," behaves the same way as a ",(0,o.mdx)("inlineCode",{parentName:"li"},"useFragment")," (see the ",(0,o.mdx)("a",{parentName:"li",href:"../../rendering/fragments/"},"Fragments")," section), so our list of friends is available under ",(0,o.mdx)("inlineCode",{parentName:"li"},"data.friends.edges.node"),", as declared by the fragment. However, it also has a few additions:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"It expects a fragment that is a connection field annotated with the ",(0,o.mdx)("inlineCode",{parentName:"li"},"@connection")," directive"),(0,o.mdx)("li",{parentName:"ul"},"It expects a fragment that is annotated with the ",(0,o.mdx)("inlineCode",{parentName:"li"},"@refetchable")," directive. Note that  ",(0,o.mdx)("inlineCode",{parentName:"li"},"@refetchable"),' directive can only be added to fragments that are "refetchable", that is, on fragments that are on ',(0,o.mdx)("inlineCode",{parentName:"li"},"Viewer"),", on ",(0,o.mdx)("inlineCode",{parentName:"li"},"Query"),", on any type that implements ",(0,o.mdx)("inlineCode",{parentName:"li"},"Node")," (i.e. a type that has an ",(0,o.mdx)("inlineCode",{parentName:"li"},"id")," field), or on a ",(0,o.mdx)("inlineCode",{parentName:"li"},"@fetchable")," type. ",(0,o.mdx)(c.FbInternalOnly,{mdxType:"FbInternalOnly"}," For more info on ",(0,o.mdx)("inlineCode",{parentName:"li"},"@fetchable")," types, see ",(0,o.mdx)("a",{parentName:"li",href:"https://fb.workplace.com/groups/graphql.fyi/permalink/1539541276187011/"},"this post"),". ")))),(0,o.mdx)("li",{parentName:"ul"},"It takes two Flow type parameters: the type of the generated query (in our case  ",(0,o.mdx)("inlineCode",{parentName:"li"},"FriendsListPaginationQuery"),"), and a second type which can always be inferred, so you only need to pass underscore (",(0,o.mdx)("inlineCode",{parentName:"li"},"_"),")."))),(0,o.mdx)(a.Z,{mdxType:"DocsRating"}))}v.isMDXComponent=!0},47596:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(n){o(n)}}function c(e){try{s(r.throw(e))}catch(n){o(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const i=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield i.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(n){o(n)}}function c(e){try{s(r.throw(e))}catch(n){o(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,i=0;const o={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=i++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),a={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,c),t}))}},24855:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(n){o(n)}}function c(e){try{s(r.throw(e))}catch(n){o(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const i=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield i.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield i.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return i(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=o(t(47596)),n.uidocs=o(t(17483)),n.feedback=o(t(24855)),n.inpageeditor=o(t(27312));const a=["internal","external"];function c(e){return d(e),l()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function d(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${a}. Instead got ${e}`);if(!Object.keys(e).find((e=>a.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${a}`);const n=Object.keys(e).filter((e=>!a.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${a}`)}function l(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function u(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=c,n.fbInternalOnly=function(e){return c({internal:e})},n.validateFbContentArgs=d,n.isInternal=l,n.hasEphemeralDiffNumber=function(){return Boolean(u())},n.getEphemeralDiffNumber=u,n.FbInternalOnly=function(e){return l()?e.children:null},n.OssOnly=function(e){return l()?null:e.children}},27312:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(n){o(n)}}function c(e){try{s(r.throw(e))}catch(n){o(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const i=t(11737);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r,diff_number:o}=e;try{return yield i.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r,diff_number:o}})}catch(a){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${a}`)}}))}},17483:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(n){o(n)}}function c(e){try{s(r.throw(e))}catch(n){o(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const i=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield i.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);