"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[79435],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),u=function(e){return function(n){var t=c(n.components);return r.createElement(e,o({},n,{components:t}))}},c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,p=u["".concat(i,".").concat(m)]||u[m]||f[m]||o;return t?r.createElement(p,l(l({ref:n},d),{},{components:t})):r.createElement(p,l({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(39960),a=t(44256),o=t(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var n=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),n)}var s=function(){var e=o.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},u=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return o.createElement(l,null,o.createElement(d,null),o.createElement(s,null),o.createElement(u,null))},m=function(){return o.createElement(l,null,o.createElement(s,null),o.createElement(u,null))};const f=function(){return(0,a.fbContent)({internal:o.createElement(c,null),external:o.createElement(m,null)})}},1358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=(t(68629),t(44256)),l=["components"],s={id:"relay-resolvers",title:"Relay Resolvers",slug:"/guides/relay-resolvers/",description:"Relay guide to Relay Resolvers",keywords:["resolvers","derived","selectors","reactive"]},d=void 0,u={unversionedId:"guides/relay-resolvers",id:"version-v14.0.0/guides/relay-resolvers",title:"Relay Resolvers",description:"Relay guide to Relay Resolvers",source:"@site/versioned_docs/version-v14.0.0/guides/relay-resolvers.md",sourceDirName:"guides",slug:"/guides/relay-resolvers/",permalink:"/docs/guides/relay-resolvers/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/guides/relay-resolvers.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Sam Zhou",lastUpdatedAt:1658463436,formattedLastUpdatedAt:"7/22/2022",frontMatter:{id:"relay-resolvers",title:"Relay Resolvers",slug:"/guides/relay-resolvers/",description:"Relay guide to Relay Resolvers",keywords:["resolvers","derived","selectors","reactive"]},sidebar:"version-v14.0.0/docs",previous:{title:"@required Directive",permalink:"/docs/guides/required-directive/"},next:{title:"Upgrading to Relay Hooks",permalink:"/docs/migration-and-compatibility/"}},c={},m=[{value:"Docblock Fields",id:"docblock-fields",level:2},{value:"Relay Resolver Signature",id:"relay-resolver-signature",level:2},{value:"How They Work",id:"how-they-work",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Passing arguments to resolver fields",id:"passing-arguments-to-resolver-fields",level:2},{value:"Defining Resolver field with Fragment Arguments",id:"defining-resolver-field-with-fragment-arguments",level:2},{value:"Using Resolver field with arguments for Fragment",id:"using-resolver-field-with-arguments-for-fragment",level:3},{value:"Defining Resolver field with Runtime (JS) Arguments",id:"defining-resolver-field-with-runtime-js-arguments",level:3},{value:"Using Resolver field with runtime arguments",id:"using-resolver-field-with-runtime-arguments",level:3},{value:"Defining Resolver field with Combined Arguments",id:"defining-resolver-field-with-combined-arguments",level:3},{value:"Using Resolver field with combined arguments",id:"using-resolver-field-with-combined-arguments",level:3},{value:"Current Limitations",id:"current-limitations",level:2}],f={toc:m};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.mdx)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Relay Resolvers is an experimental Relay feature which enables modeling derived state as client-only fields in Relay\u2019s GraphQL graph. Similar to server ",(0,o.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/execution/"},"resolvers"),", a Relay Resolver is a function which defines how to compute the value of a GraphQL field. However, unlike server resolvers, Relay Resolvers are evaluated reactively on the client. A Relay Resolver reads fields off of its parent object and returns a derived result. If any of those fields change, Relay will automatically reevaluate the resolver."),(0,o.mdx)("p",null,"Relay Resolvers are particularly valuable in apps which store client state in Relay via ",(0,o.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/guides/client-schema-extensions/"},"client schema extensions"),", since they allow you to compose together client data, server data \u2014 and even other Relay Resolver fields \u2014 into fields which update reactively as the underlying data changes."),(0,o.mdx)("p",null,"Relay Resolvers were originally conceived of as an alternative to Flux-style ",(0,o.mdx)("a",{parentName:"p",href:"https://redux.js.org/usage/deriving-data-selectors"},"selectors")," and can be thought of as providing similar capabilities."),(0,o.mdx)("p",null,"Concretely, Relay Resolvers are defined as functions annotated with a special docblock syntax. The Relay compiler will automatically recognize these docblocks in any JavaScript file and use them to extend the schema that is available within your project."),(0,o.mdx)("p",null,"Let\u2019s look at an example Relay Resolver:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import type {UserGreetingResolver$key} from 'UserGreetingResolver.graphql';\nimport {graphql} from 'relay-runtime';\nimport {readFragment} from 'relay-runtime/store/ResolverFragments';\n\n/**\n * @RelayResolver\n *\n * @onType User\n * @fieldName greeting\n * @rootFragment UserGreetingResolver\n *\n * A greeting for the user which includes their name and title.\n */\nexport default function userGreetingResolver(userKey: UserGreetingResolver$key): string {\n  const user = readFragment(graphql`\n    fragment UserGreetingResolver on User {\n      honorific\n      last_name\n    }`, userKey);\n\n  return `Hello ${user.honorific} ${user.last_name}!`;\n}\n")),(0,o.mdx)("p",null,"This resolver adds a new field ",(0,o.mdx)("inlineCode",{parentName:"p"},"greeting")," to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"User")," object type. It reads the ",(0,o.mdx)("inlineCode",{parentName:"p"},"honorific")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"last_name")," fields off of the parent ",(0,o.mdx)("inlineCode",{parentName:"p"},"User")," and derives a greeting string. The new ",(0,o.mdx)("inlineCode",{parentName:"p"},"greeting")," field may now be used by any Relay component throughout your project which has access to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"User"),"."),(0,o.mdx)("p",null,"Consuming this new field looks identical to consuming a field defined in the server schema:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"function MyGreeting({userKey}) {\n  const user = useFragment(`\n    fragment MyGreeting on User {\n      greeting\n    }`, userKey);\n  return<h1>{user.greeting}<h1>;\n}\n")),(0,o.mdx)("h2",{id:"docblock-fields"},"Docblock Fields"),(0,o.mdx)("p",null,"The Relay compiler looks for the following fields in any docblocks that includes ",(0,o.mdx)("inlineCode",{parentName:"p"},"@RelayResolver"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"@RelayResolver")," (required)"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"@onType")," or ",(0,o.mdx)("inlineCode",{parentName:"li"},"@onInterface")," (required) The GraphQL type/interface on which the new field should be exposed"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"@fieldName")," (required) The name of the new field"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"@rootFragment")," (required) The name of the fragment read by ",(0,o.mdx)("inlineCode",{parentName:"li"},"readFragment")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"@deprecated")," (optional) Indicates that the field is ",(0,o.mdx)("a",{parentName:"li",href:"https://spec.graphql.org/June2018/#sec--deprecated"},"deprecated"),". May be optionally followed text giving the reason that the field is deprecated.")),(0,o.mdx)("p",null,"The docblock may also contain free text. This free text will be used as the field\u2019s human-readable description, which will be surfaced in Relay\u2019s editor support on hover and in autocomplete results."),(0,o.mdx)("h2",{id:"relay-resolver-signature"},"Relay Resolver Signature"),(0,o.mdx)("p",null,"In order for Relay to be able to call a Relay Resolver, it must conform to a set of conventions:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"The resolver function must accept a single argument, which is the key for its root fragment."),(0,o.mdx)("li",{parentName:"ol"},"The resolver function must be the default export of its module (only one resolver per module)"),(0,o.mdx)("li",{parentName:"ol"},"The resolver must read its fragment using the special ",(0,o.mdx)("inlineCode",{parentName:"li"},"readFragment")," function."),(0,o.mdx)("li",{parentName:"ol"},"The resolver function must be pure"),(0,o.mdx)("li",{parentName:"ol"},"The resolver\u2019s return value must be immutable")),(0,o.mdx)("p",null,"Unlike server resolvers, Relay Resolvers may return any JavaScript value. This includes classes, functions and arrays. However, we generally encourage having Relay Resolvers return scalar values and only returning more complex JavaScript values (like functions) as an escape hatch."),(0,o.mdx)(i.FbInternalOnly,{mdxType:"FbInternalOnly"},"## Lint Rule",(0,o.mdx)("p",null,"In many cases, the contents of the docblock can be derived from the javascript implementation. In those cases, the ",(0,o.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/eslint/relay-resolvers"},(0,o.mdx)("inlineCode",{parentName:"a"},"relay-resolvers"))," ESLint rule rule will offer auto-fixes to derive the docblock from the implementation and ensure that the two remain in sync. The lint rule also enforces a naming convention for resolver function and modules names.")),(0,o.mdx)("h2",{id:"how-they-work"},"How They Work"),(0,o.mdx)("p",null,"When parsing your project, the Relay compiler looks for ",(0,o.mdx)("inlineCode",{parentName:"p"},"@RelayResolver")," docblocks and uses them to add special fields to the GraphQL schema. If a query or fragment references one of these fields, Relay\u2019s generated artifact for that query or fragment will automatically include an ",(0,o.mdx)("inlineCode",{parentName:"p"},"import")," of the resolver function. ",(0,o.mdx)("em",{parentName:"p"},"Note that this can happen recursively if the Relay Resolver field you are reading itself reads one or more Relay Resolver fields.")),(0,o.mdx)("p",null,"When the field is first read by a component, Relay will evaluate the Relay Resolver function and cache the result. Other components that read the same field will read the same cached value. If at any point any of the fields that the resolver reads (via its root fragment) change, Relay will reevaluate the resolver. If the return value changes (determined by ",(0,o.mdx)("inlineCode",{parentName:"p"},"===")," equality) Relay will propagate that change to all components (and other Relay Resolvers) that are currently reading the field."),(0,o.mdx)("h2",{id:"error-handling"},"Error Handling"),(0,o.mdx)("p",null,"In order to make product code as robust as possible, Relay Resolvers follow the GraphQL spec\u2019s documented ",(0,o.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/best-practices/#nullability"},"best practice")," of returning null when a field resolver errors. Instead of throwing, errors thrown by Relay Resolvers will be logged to your environment's configured ",(0,o.mdx)("inlineCode",{parentName:"p"},"requiredFieldLogger")," with an event of kind ",(0,o.mdx)("inlineCode",{parentName:"p"},'"relay_resolver.error"'),". If you make use of Relay Resolves you should be sure to configure your environment with a ",(0,o.mdx)("inlineCode",{parentName:"p"},"requiredFieldLogger")," which reports those events to whatever system you use for tracking runtime errors."),(0,o.mdx)("p",null,"If your component requires a non-null value in order to render, and can\u2019t provide a reasonable fallback experience, you can annotate the field access with ",(0,o.mdx)("inlineCode",{parentName:"p"},"@required"),"."),(0,o.mdx)("h2",{id:"passing-arguments-to-resolver-fields"},"Passing arguments to resolver fields"),(0,o.mdx)("p",null,"For resolvers (and live resolvers) we support two ways of defining field arguments:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"GraphQL: Arguments that are defined via @argumentDefinitions on the resolver's fragment."),(0,o.mdx)("li",{parentName:"ol"},"JS Runtime: Arguments that can be passed directly to the resolver function."),(0,o.mdx)("li",{parentName:"ol"},"You can also combine these, and define arguments on the fragment and on the resolver's field itself, Relay will validate the naming (these arguments have to have different names), and pass GraphQL arguments to fragment, and JS arguments to the resolver's function.")),(0,o.mdx)("p",null,"Let\u2019s look at the example 1:"),(0,o.mdx)("h2",{id:"defining-resolver-field-with-fragment-arguments"},"Defining Resolver field with Fragment Arguments"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'/**\n* @RelayResolver\n* @filedName **my_resolver_field**\n* @onType **MyType**\n* @rootFragment myResolverFragment\n*/\nfunction myResolver(key) {\n   const data = readFragment(graphql`\n       fragment myResolverFragment on MyType\n            @argumentDefinitions(**my_arg**: {type: "Float!"}) {\n            field_with_arg(arg: $my_arg) {\n               __typename\n            }\n       }\n   `, key);\n\n   return data.field_with_arg.__typename;\n}\n')),(0,o.mdx)("h3",{id:"using-resolver-field-with-arguments-for-fragment"},"Using Resolver field with arguments for Fragment"),(0,o.mdx)("p",null,"This resolver will extend the ",(0,o.mdx)("strong",{parentName:"p"},"MyType")," with the new field ",(0,o.mdx)("strong",{parentName:"p"},"my_resolver_field(my_arg: Float!)")," and the fragment arguments for ",(0,o.mdx)("strong",{parentName:"p"},"myResolverFragment")," can be passed directly to this field."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'const data = useLazyLoadQuery(graphql`\n    query myQuery($id: ID, $my_arg: Float!) {\n        node(id: $id) {\n           ... on MyType {\n                my_resolver_field(my_arg: $my_arg)\n           }\n        }\n   }\n`, { id: "some id", my_arg: 2.5 });\n')),(0,o.mdx)("p",null,"For these fragment arguments relay will pass then all queries/fragments where the resolver field is used to the resolver\u2019s fragment."),(0,o.mdx)("h3",{id:"defining-resolver-field-with-runtime-js-arguments"},"Defining Resolver field with Runtime (JS) Arguments"),(0,o.mdx)("p",null,"Relay resolvers also support runtime arguments that are not visible/passed to fragments, but are passed to the resolver function itself."),(0,o.mdx)("p",null,"You can define these fragments using GraphQL\u2019s ",(0,o.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/schema/"},"Schema Definition Language")," in the ",(0,o.mdx)("strong",{parentName:"p"},"@fieldName")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'/**\n* @RelayResolver\n* @filedName **my_resolver_field(my_arg: String, my_other_arg: Int)**\n* @onType **MyType**\n* @rootFragment myResolverFragment\n*/\nfunction myResolver(key, args) {\n   if (args.my_other_arg === 0) {\n       return "The other arg is 0";\n   }\n\n   const data = readFragment(graphql`\n       fragment myResolverFragment on MyType\n           some_field\n       }\n   `, key);\n   return data.some_field.concat(args.my_arg);\n}\n')),(0,o.mdx)("h3",{id:"using-resolver-field-with-runtime-arguments"},"Using Resolver field with runtime arguments"),(0,o.mdx)("p",null,"This resolver will extend ",(0,o.mdx)("strong",{parentName:"p"},"MyType")," with the new field ",(0,o.mdx)("strong",{parentName:"p"},"my_resolver_field(my_arg: String, my_other_arg: Int).")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'const data = useLazyLoadQuery(graphql`\n    query myQuery($id: ID, $my_arg: String!) {\n        node(id: $id) {\n           ... on MyType {\n                my_resolver_field(my_arg: $my_arg, my_other_arg: 1)\n           }\n        }\n   }\n`, { id: "some id", my_arg: "hello world!"});\n')),(0,o.mdx)("h3",{id:"defining-resolver-field-with-combined-arguments"},"Defining Resolver field with Combined Arguments"),(0,o.mdx)("p",null,"We can also combine both of these approaches and define field arguments both on the resolver\u2019s fragment and on the field itself:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'/**\n* @RelayResolver\n* @filedName **my_resolver_field(my_js_arg: String)**\n* @onType **MyType**\n* @rootFragment myResolverFragment\n*/\nfunction myResolver(key, args) {\n   const data = readFragment(graphql`\n       fragment myResolverFragment on MyType\n            @argumentDefinitions(**my_gql_arg**: {type: "Float!"}) {\n            field_with_arg(arg: $my_arg) {\n               __typename\n            }\n       }\n   `, key);\n\n   return `Hello ${args.my_js_arg}, ${data.field_with_arg.__typename}`;\n}\n')),(0,o.mdx)("h3",{id:"using-resolver-field-with-combined-arguments"},"Using Resolver field with combined arguments"),(0,o.mdx)("p",null,"Relay will extend the ",(0,o.mdx)("strong",{parentName:"p"},"MyType")," with the new resolver field that has two arguments: **my_resolver_field(my_js_arg: String, my_gql_arg: Float!)"),(0,o.mdx)("p",null,"**\nExample query:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'const data = useLazyLoadQuery(graphql`\n    query myQuery($id: ID, $my_arg: String!) {\n        node(id: $id) {\n           ... on MyType {\n                my_resolver_field(my_js_arg: "World", my_qql_arg: 2.5)\n           }\n        }\n   }\n`, { id: "some id" });\n')),(0,o.mdx)("h2",{id:"current-limitations"},"Current Limitations"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Relay Resolvers are still considered experimental. To use them you must ensure that the ",(0,o.mdx)("inlineCode",{parentName:"li"},"ENABLE_RELAY_RESOLVERS")," runtime feature flag is enabled, and that the ",(0,o.mdx)("inlineCode",{parentName:"li"},"enable_relay_resolver_transform")," feature flag is enabled in your project\u2019s Relay config file.")))}p.isMDXComponent=!0},47596:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(n){o(n)}}function l(e){try{s(r.throw(e))}catch(n){o(n)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const a=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(n){o(n)}}function l(e){try{s(r.throw(e))}catch(n){o(n)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,a=0;const o={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=a++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),i={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(i,l),t}))}},24855:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(n){o(n)}}function l(e){try{s(r.throw(e))}catch(n){o(n)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const a=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield a.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield a.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=o(t(47596)),n.uidocs=o(t(17483)),n.feedback=o(t(24855)),n.inpageeditor=o(t(27312));const i=["internal","external"];function l(e){return d(e),u()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function d(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const n=Object.keys(e).filter((e=>!i.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${i}`)}function u(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function c(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=d,n.isInternal=u,n.hasEphemeralDiffNumber=function(){return Boolean(c())},n.getEphemeralDiffNumber=c,n.FbInternalOnly=function(e){return u()?e.children:null},n.OssOnly=function(e){return u()?null:e.children}},27312:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(n){o(n)}}function l(e){try{s(r.throw(e))}catch(n){o(n)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const a=t(11737);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r,diff_number:o}=e;try{return yield a.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r,diff_number:o}})}catch(i){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${i}`)}}))}},17483:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(n){o(n)}}function l(e){try{s(r.throw(e))}catch(n){o(n)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const a=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield a.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);