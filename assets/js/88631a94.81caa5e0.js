"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[85116],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){return function(t){var n=u(t.components);return a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(i,".").concat(p)]||d[p]||h[p]||o;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(39960),r=n(44256),o=n(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var c=function(){var e=o.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},d=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return o.createElement(l,null,o.createElement(s,null),o.createElement(c,null),o.createElement(d,null))},p=function(){return o.createElement(l,null,o.createElement(c,null),o.createElement(d,null))};const h=function(){return(0,r.fbContent)({internal:o.createElement(u,null),external:o.createElement(p,null)})}},50335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=n(68629),l=["components"],c={id:"thinking-in-relay",title:"Thinking in Relay",slug:"/principles-and-architecture/thinking-in-relay/",description:"Relay guide to thinking in Relay"},s=void 0,d={unversionedId:"principles-and-architecture/thinking-in-relay",id:"version-v14.0.0/principles-and-architecture/thinking-in-relay",title:"Thinking in Relay",description:"Relay guide to thinking in Relay",source:"@site/versioned_docs/version-v14.0.0/principles-and-architecture/thinking-in-relay.md",sourceDirName:"principles-and-architecture",slug:"/principles-and-architecture/thinking-in-relay/",permalink:"/docs/principles-and-architecture/thinking-in-relay/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/principles-and-architecture/thinking-in-relay.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Sam Zhou",lastUpdatedAt:1658463436,formattedLastUpdatedAt:"7/22/2022",frontMatter:{id:"thinking-in-relay",title:"Thinking in Relay",slug:"/principles-and-architecture/thinking-in-relay/",description:"Relay guide to thinking in Relay"},sidebar:"version-v14.0.0/docs",previous:{title:"Thinking in GraphQL",permalink:"/docs/principles-and-architecture/thinking-in-graphql/"},next:{title:"Architecture Overview",permalink:"/docs/principles-and-architecture/architecture-overview/"}},u={},p=[{value:"Fetching Data For a View",id:"fetching-data-for-a-view",level:2},{value:"Specifying the data requirements of a component",id:"specifying-the-data-requirements-of-a-component",level:2},{value:"Queries",id:"queries",level:2},{value:"Data Masking",id:"data-masking",level:2}],h={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.mdx)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Relay's approach to data-fetching is heavily inspired by our experience with React. In particular, React breaks complex interfaces into reusable ",(0,o.mdx)("strong",{parentName:"p"},"components"),", allowing developers to reason about discrete units of an application in isolation, and reducing the coupling between disparate parts of an application. Even more important is that these components are ",(0,o.mdx)("strong",{parentName:"p"},"declarative"),": they allow developers to specify ",(0,o.mdx)("em",{parentName:"p"},"what")," the UI should look like for a given state, and not have to worry about ",(0,o.mdx)("em",{parentName:"p"},"how")," to show that UI. Unlike previous approaches that used imperative commands to manipulate native views (e.g. the DOM), React uses a UI description to automatically determine the necessary commands."),(0,o.mdx)("p",null,"Let's look at some product use-cases to understand how we incorporated these ideas into Relay. We'll assume a basic familiarity with React."),(0,o.mdx)("h2",{id:"fetching-data-for-a-view"},"Fetching Data For a View"),(0,o.mdx)("p",null,"In our experience, the overwhelming majority of products want one specific behavior: fetch all the data for a view hierarchy while displaying a loading indicator, and then render the entire view once the data is available."),(0,o.mdx)("p",null,"One solution is to have a root component declare and fetch the data required by it and all of its children. However, this would introduce coupling: any change to a child component would require changing any root component that might render it! This coupling could mean a greater chance for bugs and slow the pace of development."),(0,o.mdx)("p",null,"Another logical approach is to have each component declare and fetch the data it requires. This sounds great. However, the problem is that a component may render different children based on the data it received. So, nested components will be unable to render and begin fetching their data until parent components' queries have completed. In other words, ",(0,o.mdx)("em",{parentName:"p"},"this forces data fetching to proceed in stages:")," first render the root and fetch the data it needs, then render its children and fetch their data, and so on until you reach leaf components. Rendering would require multiple slow, serial roundtrips."),(0,o.mdx)("p",null,"Relay combines the advantages of both of these approaches by allowing components to specify what data they require, but to coalesce those requirements into a single query that fetches the data for an entire subtree of components. In other words, it determines ",(0,o.mdx)("em",{parentName:"p"},"statically")," (i.e. before your application runs; at the time you write your code) the requirements for an entire view!"),(0,o.mdx)("p",null,"This is achieved with the help of GraphQL. Functional components use one or more GraphQL ",(0,o.mdx)("a",{href:"../../guided-tour/rendering/fragments/"},"fragments")," to describe their data requirements. These fragments are then nested within other fragments, and ultimately within queries. And when such a query is fetched, Relay will make a single network request for it and all of its nested fragments. In other words, the Relay runtime is then able to make a ",(0,o.mdx)("em",{parentName:"p"},"single network request")," for all of the data required by a view!"),(0,o.mdx)("p",null,"Let's dive deeper to understand how Relay achieves this feat."),(0,o.mdx)("h2",{id:"specifying-the-data-requirements-of-a-component"},"Specifying the data requirements of a component"),(0,o.mdx)("p",null,"With Relay, the data requirements for a component are specified with ",(0,o.mdx)("a",{href:"../../guided-tour/rendering/fragments/"},"fragments"),". Fragments are named snippets of GraphQL that specify which fields to select from an object of a particular type. Fragments are written within GraphQL literals. For example, the following declares a GraphQL literal containing a fragment which selects an author's name and photo url:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// AuthorDetails.react.js\nconst authorDetailsFragment = graphql`\n  fragment AuthorDetails_author on Author {\n    name\n    photo {\n      url\n    }\n  }\n`;\n")),(0,o.mdx)("p",null,"This data is then read out from the store by calling the ",(0,o.mdx)("inlineCode",{parentName:"p"},"useFragment(...)")," hook in a functional React component. The actual author from which to read this data is determined by the second parameter passed to ",(0,o.mdx)("inlineCode",{parentName:"p"},"useFragment"),". For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// AuthorDetails.react.js\nexport default function AuthorDetails(props) {\n  const data = useFragment(authorDetailsFragment, props.author);\n  // ...\n}\n")),(0,o.mdx)("p",null,"This second parameter (",(0,o.mdx)("inlineCode",{parentName:"p"},"props.author"),") is a fragment reference. Fragment references are obtained by ",(0,o.mdx)("strong",{parentName:"p"},"spreading")," a fragment into another fragment or query. Fragments cannot be fetched directly. Instead, all fragments must ultimately be spread (either directly or transitively) into a query for the data to be fetched."),(0,o.mdx)("p",null,"Let's take a look at one such query."),(0,o.mdx)("h2",{id:"queries"},"Queries"),(0,o.mdx)("p",null,"In order to fetch that data, we might declare a query which spreads ",(0,o.mdx)("inlineCode",{parentName:"p"},"AuthorDetails_author")," as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Story.react.js\nconst storyQuery = graphql`\n  query StoryQuery($storyID: ID!) {\n    story(id: $storyID) {\n      title\n      author {\n        ...AuthorDetails_author\n      }\n    }\n  }\n`;\n")),(0,o.mdx)("p",null,"Now, we can fetch the query by calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"const data = useLazyLoadQuery(storyQuery, {storyID})"),". At this point, ",(0,o.mdx)("inlineCode",{parentName:"p"},"data.author")," (if it is present; all fields are nullable by default) will be a fragment reference that we can pass to ",(0,o.mdx)("inlineCode",{parentName:"p"},"AuthorDetails"),". For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Story.react.js\nfunction Story(props) {\n  const data = useLazyLoadQuery(storyQuery, props.storyId);\n\n  return (<>\n    <Heading>{data?.story.title}</Heading>\n    {data?.story?.author && <AuthorDetails author={data.story.author} />}\n  </>);\n}\n")),(0,o.mdx)("p",null,"Note what has happened here. We made a single network request which contained the data required by ",(0,o.mdx)("em",{parentName:"p"},"both")," the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Story")," component ",(0,o.mdx)("em",{parentName:"p"},"and")," the ",(0,o.mdx)("inlineCode",{parentName:"p"},"AuthorDetails")," component! When that data was available, the entire view could render in a single pass."),(0,o.mdx)("h2",{id:"data-masking"},"Data Masking"),(0,o.mdx)("p",null,"With typical approaches to data-fetching we found that it was common for two components to have ",(0,o.mdx)("em",{parentName:"p"},"implicit dependencies"),". For example ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Story />")," might use some data without directly ensuring that the data was fetched. This data would often be fetched by some other part of the system, such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"<AuthorDetails />"),". Then when we changed ",(0,o.mdx)("inlineCode",{parentName:"p"},"<AuthorDetails />")," and removed that data-fetching logic, ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Story />")," would suddenly and inexplicably break. These types of bugs are not always immediately apparent, especially in larger applications developed by larger teams. Manual and automated testing can only help so much: this is exactly the type of systematic problem that is better solved by a framework."),(0,o.mdx)("p",null,"We've seen that Relay ensures that the data for a view is fetched all at once. But Relay also provide another benefit that isn't immediately obvious: ",(0,o.mdx)("strong",{parentName:"p"},"data masking"),". Relay only allows components to access data they specifically ask for in GraphQL fragments, and nothing more. So if one component queries for a Story's ",(0,o.mdx)("inlineCode",{parentName:"p"},"title"),", and another for its ",(0,o.mdx)("inlineCode",{parentName:"p"},"text"),", each can see ",(0,o.mdx)("em",{parentName:"p"},"only")," the field that they asked for. In fact, components can't even see the data requested by their ",(0,o.mdx)("em",{parentName:"p"},"children"),": that would also break encapsulation."),(0,o.mdx)("p",null,"Relay also goes further: it uses opaque identifiers on ",(0,o.mdx)("inlineCode",{parentName:"p"},"props")," to validate that we've explicitly fetched the data for a component before rendering it. If ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Story />")," renders ",(0,o.mdx)("inlineCode",{parentName:"p"},"<AuthorDetails />")," but forgets to spread its fragment, Relay will warn that the data for ",(0,o.mdx)("inlineCode",{parentName:"p"},"<AuthorDetails />")," is missing. In fact, Relay will warn ",(0,o.mdx)("em",{parentName:"p"},"even if")," some other component happened to fetch the same data required by ",(0,o.mdx)("inlineCode",{parentName:"p"},"<AuthorDetails />"),". This warning tells us that although things ",(0,o.mdx)("em",{parentName:"p"},"might")," work now, they're highly likely to break later."),(0,o.mdx)("h1",{id:"conclusion"},"Conclusion"),(0,o.mdx)("p",null,"GraphQL provides a powerful tool for building efficient, decoupled client applications. Relay builds on this functionality to provide a framework for ",(0,o.mdx)("strong",{parentName:"p"},"declarative data-fetching"),". By separating ",(0,o.mdx)("em",{parentName:"p"},"what")," data to fetch from ",(0,o.mdx)("em",{parentName:"p"},"how")," it is fetched, Relay helps developers build applications that are robust, transparent, and performant by default. It's a great complement to the component-centric way of thinking championed by React. While each of these technologies \u2014 React, Relay, and GraphQL \u2014 are powerful on their own, the combination is a ",(0,o.mdx)("strong",{parentName:"p"},"UI platform")," that allows us to ",(0,o.mdx)("em",{parentName:"p"},"move fast")," and ",(0,o.mdx)("em",{parentName:"p"},"ship high-quality apps at scale"),"."),(0,o.mdx)(i.Z,{mdxType:"DocsRating"}))}m.isMDXComponent=!0},47596:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function l(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const r=n(11737);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,t){var n=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function l(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let a=!1,r=0;const o={};t.call=function(e){return n(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=r++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),i={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(i,l),n}))}},24855:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function l(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.reportFeatureUsage=t.reportContentCopied=void 0;const r=n(11737);t.reportContentCopied=function(e){return a(this,void 0,void 0,(function*(){const{textContent:t}=e;try{yield r.call({module:"feedback",api:"reportContentCopied",args:{textContent:t}})}catch(n){}}))},t.reportFeatureUsage=function(e){return a(this,void 0,void 0,(function*(){const{featureName:t,id:n}=e;console.log("used feature");try{yield r.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:t,id:n}})}catch(a){}}))}},44256:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.getEphemeralDiffNumber=t.hasEphemeralDiffNumber=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.inpageeditor=t.feedback=t.uidocs=t.bloks=void 0,t.bloks=o(n(47596)),t.uidocs=o(n(17483)),t.feedback=o(n(24855)),t.inpageeditor=o(n(27312));const i=["internal","external"];function l(e){return s(e),d()?"internal"in e?c(e.internal):[]:"external"in e?c(e.external):[]}function c(e){return"function"==typeof e?e():e}function s(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const t=Object.keys(e).filter((e=>!i.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${i}`)}function d(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function u(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}t.fbContent=l,t.fbInternalOnly=function(e){return l({internal:e})},t.validateFbContentArgs=s,t.isInternal=d,t.hasEphemeralDiffNumber=function(){return Boolean(u())},t.getEphemeralDiffNumber=u,t.FbInternalOnly=function(e){return d()?e.children:null},t.OssOnly=function(e){return d()?null:e.children}},27312:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function l(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.submitDiff=void 0;const r=n(11737);t.submitDiff=function(e){return a(this,void 0,void 0,(function*(){const{file_path:t,new_content:n,project_name:a,diff_number:o}=e;try{return yield r.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:t,new_content:n,project_name:a,diff_number:o}})}catch(i){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${i}`)}}))}},17483:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function l(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getApi=t.docsets=void 0;const r=n(11737);t.docsets={BLOKS_CORE:"887372105406659"},t.getApi=function(e){return a(this,void 0,void 0,(function*(){const{name:t,framework:n,docset:a}=e;return yield r.call({module:"uidocs",api:"getApi",args:{name:t,framework:n,docset:a}})}))}}}]);