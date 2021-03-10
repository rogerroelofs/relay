(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{265:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return h}));var a,r=n(3),i=n(7),o=(n(0),n(317)),l=n(323),c=n(318),u={id:"queries",title:"Queries",slug:"/guided-tour/rendering/queries/"},s={unversionedId:"guided-tour/rendering/queries",id:"guided-tour/rendering/queries",isDocsHomePage:!1,title:"Queries",description:"A GraphQL Query is a description of data you want to query from a GraphQL servere. It consists of a set of fields (and potentially fragments) that we want to request from the GraphQL server. What we can query for will depend on the GraphQL Schema exposed on the server, which describes the data that is available for querying.",source:"@site/docs/current/guided-tour/rendering/queries.md",slug:"/guided-tour/rendering/queries/",permalink:"/docs/next/guided-tour/rendering/queries/",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/current/guided-tour/rendering/queries.md",version:"current",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1615395029,sidebar:"docs",previous:{title:"Workflow",permalink:"/docs/next/guided-tour/workflow/"},next:{title:"Fragments",permalink:"/docs/next/guided-tour/rendering/fragments/"}},d=[{value:"Rendering Queries",id:"rendering-queries",children:[]},{value:"Fetching Queries for Render",id:"fetching-queries-for-render",children:[{value:"Render as you Fetch",id:"render-as-you-fetch",children:[]}]},{value:"Lazily Fetching Queries during Render",id:"lazily-fetching-queries-during-render",children:[]}],b=(a="FbEntrypointsExtraInfo",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={toc:d};function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql.github.io/learn/queries/"}),"GraphQL Query")," is a description of data you want to query from a GraphQL servere. It consists of a set of fields (and potentially ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../fragments/"}),"fragments"),") that we want to request from the GraphQL server. What we can query for will depend on the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql.github.io/learn/schema/"}),"GraphQL Schema")," exposed on the server, which describes the data that is available for querying."),Object(o.b)("p",null,"A query can be sent as a request over the network, along with an optional collection of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../variables/"}),"variables")," that the query uses, in order to fetch the data. The server response will be a JSON object that matches the shape of the query we sent:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query UserQuery($id: ID!) {\n  user(id: $id) {\n    id\n    name\n    ...UserFragment\n  }\n  viewer {\n    actor {\n      name\n    }\n  }\n}\n\nfragment UserFragment on User {\n  username\n}\n")),Object(o.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://fburl.com/graphiql/v5hs717f"}),"Sample response"),":")),Object(o.b)(c.OssOnly,{mdxType:"OssOnly"},Object(o.b)("p",null,"Sample response:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "user": {\n      "id": "4",\n      "name": "Mark Zuckerberg",\n      "username": "zuck"\n    },\n    "viewer": {\n      "actor": {\n        "name": "Your Name"\n      }\n    }\n  }\n}\n')),Object(o.b)("h2",{id:"rendering-queries"},"Rendering Queries"),Object(o.b)("p",null,"To ",Object(o.b)("em",{parentName:"p"},"render")," a query in Relay, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"usePreloadedQuery")," Hook:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import type {HomeTabQuery} from 'HomeTabQuery.graphql';\n\nconst React = require('React');\nconst {graphql, usePreloadedQuery} = require('react-relay');\n\ntype Props = {\n  queryRef: PreloadedQuery<HomeTabQuery>,\n};\n\nfunction HomeTab(props: Props) {\n  const data = usePreloadedQuery<HomeTabQuery>(\n    graphql`\n      query HomeTabQuery($id: ID!) {\n        user(id: $id) {\n          name\n        }\n      }\n    `,\n    props.queryRef,\n  );\n\n  return (\n    <h1>{data.user?.name}</h1>\n  );\n}\n")),Object(o.b)("p",null,"Lets see what's going on here:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"usePreloadedQuery"),"  takes a ",Object(o.b)("inlineCode",{parentName:"li"},"graphql")," query and a ",Object(o.b)("inlineCode",{parentName:"li"},"PreloadedQuery")," reference, and returns the data that was fetched for that query.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"PreloadedQuery")," (in this case ",Object(o.b)("inlineCode",{parentName:"li"},"queryRef"),") is an object that describes and references an ",Object(o.b)("em",{parentName:"li"},"instance")," of our query that is being (or was) fetched.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"We'll cover how to actually fetch the query in the next section below, and cover how to show loading states if the query is in-flight when we try to render it in the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../loading-states/"}),"Loading States with Suspense")," section."))),Object(o.b)("li",{parentName:"ul"},"Note that the ",Object(o.b)("inlineCode",{parentName:"li"},"PreloadedQuery")," type takes a Flow type parameter, which corresponds to the Flow type for the query, in this case ",Object(o.b)("inlineCode",{parentName:"li"},"HomeTabQuery"),"."))),Object(o.b)("li",{parentName:"ul"},"Similarly to ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../fragments/"}),"fragments"),", ",Object(o.b)("em",{parentName:"li"},"the component is automatically subscribed to updates to the query data"),": if the data for this query is updated anywhere in the app, the component will automatically re-render with the latest updated data."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"usePreloadedQuery")," also additionally takes a Flow type parameter, which corresponds to the Flow type for the query, in this case ",Object(o.b)("inlineCode",{parentName:"li"},"HomeTabQuery"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Remember that Relay automatically generates Flow types for any declared queries, which are available to import from the generated files with the following name format: ",Object(o.b)("em",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"em"},"<query_name>")),Object(o.b)("inlineCode",{parentName:"li"},".graphql.js"),"."),Object(o.b)("li",{parentName:"ul"},"Note that the ",Object(o.b)("inlineCode",{parentName:"li"},"data")," is already properly Flow typed without requiring an explicit annotation, and is based on the types from the GraphQL schema. For example, the type of ",Object(o.b)("inlineCode",{parentName:"li"},"data")," above would be: ",Object(o.b)("inlineCode",{parentName:"li"},"{ user: ?{ name: ?string } }"),"."))),Object(o.b)("li",{parentName:"ul"},"Make sure you're providing a Relay environment using a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../environment/"}),"Relay Environment Provider")," at the root of your app before trying to render a query.")),Object(o.b)("h2",{id:"fetching-queries-for-render"},"Fetching Queries for Render"),Object(o.b)("p",null,"Apart from ",Object(o.b)("em",{parentName:"p"},"rendering")," a query, we also need to fetch it from the server. Usually we want to fetch queries somewhere at the root of our app, and only have ",Object(o.b)("strong",{parentName:"p"},"one or a few queries that ",Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"../fragments/#composing-fragments-into-queries"}),Object(o.b)("em",{parentName:"a"},"accumulate"))," all the data required to render the screen"),". Ideally, we'd fetch them as early as possible, before we even start rendering our app."),Object(o.b)("p",null,"In order to ",Object(o.b)("em",{parentName:"p"},"fetch")," a query for later rendering it, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"useQueryLoader")," Hook:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import type {HomeTabQuery as HomeTabQueryType} from 'HomeTabQuery.graphql';\nimport type {PreloadedQuery} from 'react-relay';\n\nconst HomeTabQuery = require('HomeTabQuery.graphql')\nconst {useQueryLoader} = require('react-relay');\n\n\ntype Props = {\n  initialQueryRef: PreloadedQuery<HomeTabQueryType>,\n};\n\nfunction AppTabs(props) {\n  const [\n    homeTabQueryRef,\n    loadHomeTabQuery,\n  ] = useQueryLoader<HomeTabQueryType>(\n    HomeTabQuery,\n    props.initialQueryRef, /* e.g. provided by router */\n  );\n\n  const onSelectHomeTab = () => {\n    // Start loading query for HomeTab immediately in the event handler\n    // that triggers navigation to that tab, *before* we even start\n    // rendering the target tab.\n    // Calling this function will update the value of homeTabQueryRef.\n    loadHomeTabQuery({id: '4'});\n\n    // ...\n  }\n\n  // ...\n\n  return (\n    screen === 'HomeTab' && homeTabQueryRef != null ?\n      // Pass to component that uses usePreloadedQuery\n      <HomeTab queryRef={homeTabQueryRef} /> :\n      // ...\n  );\n}\n")),Object(o.b)("p",null,"The example above is somewhat contrived, but let's distill what is happening:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We are calling ",Object(o.b)("inlineCode",{parentName:"li"},"useQueryLoader")," inside our ",Object(o.b)("inlineCode",{parentName:"li"},"AppTabs")," component.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"It takes a query, which in this case is our ",Object(o.b)("inlineCode",{parentName:"li"},"HomeTabQuery")," (the query that we declared in our previous example), and which we can obtain by requiring the auto-generated file: ",Object(o.b)("inlineCode",{parentName:"li"},"\u2018HomeTabQuery.graphql'"),"."),Object(o.b)("li",{parentName:"ul"},"It takes an optional initial ",Object(o.b)("inlineCode",{parentName:"li"},"PreloadedQuery")," to be used as the initial value of the ",Object(o.b)("inlineCode",{parentName:"li"},"homeTabQueryRef")," that is stored in state and returned by ",Object(o.b)("inlineCode",{parentName:"li"},"useQueryLoader"),"."),Object(o.b)("li",{parentName:"ul"},"It also additionally takes a Flow type parameter, which corresponds to the Flow type for the query, in this case ",Object(o.b)("inlineCode",{parentName:"li"},"HomeTabQueryType"),", which you can also obtain from the auto-generated file: ",Object(o.b)("inlineCode",{parentName:"li"},"\u2018HomeTabQuery.graphql'"),"."))),Object(o.b)("li",{parentName:"ul"},"Calling ",Object(o.b)("inlineCode",{parentName:"li"},"useQueryLoader")," allows us to obtain 2 things:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"homeTabQueryRef"),": A ",Object(o.b)("inlineCode",{parentName:"li"},"?PreloadedQuery"),", which is an object that describes and references an ",Object(o.b)("em",{parentName:"li"},"instance")," of our query that is being (or was) fetched. This value will be null if we haven't fetched the query, i.e. if we haven't called ",Object(o.b)("inlineCode",{parentName:"li"},"loadHomeTabQuery"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"loadHomeTabQuery"),": A function that will ",Object(o.b)("em",{parentName:"li"},"fetch")," the data for this query from the server (if it isn't already cached), and given an object with the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../variables/"}),"variables")," the query expects, in this case ",Object(o.b)("inlineCode",{parentName:"li"},"{id: '4'}")," (we'll go into more detail about how Relay uses cached data in the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../../reusing-cached-data/"}),"Reusing Cached Data For Render")," section). Calling this function will also update the value of ",Object(o.b)("inlineCode",{parentName:"li"},"homeTabQueryRef")," to an instance of a ",Object(o.b)("inlineCode",{parentName:"li"},"PreloadedQuery"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Note that the ",Object(o.b)("inlineCode",{parentName:"li"},"variables")," we pass to this function will checked by Flow to ensure that you are passing values that match what the GraphQL query expects."),Object(o.b)("li",{parentName:"ul"},"Also note that we are calling this function in the event handler that causes the ",Object(o.b)("inlineCode",{parentName:"li"},"HomeTab")," to be rendered. This allows us to start fetching the data for the screen as early as possible, even before the new tab starts rendering.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In fact, note that this function can NOT be called during render; it ",Object(o.b)("em",{parentName:"li"},"must")," be called outside of a Component's render function, otherwise it will produce an error."))))))),Object(o.b)("li",{parentName:"ul"},"Note that ",Object(o.b)("inlineCode",{parentName:"li"},"useQueryLoader")," will automatically dispose of all queries that have been loaded when the component unmounts. Disposing of a query means that Relay will no longer hold on to the data for that particular instance of the query in its cache (we'll cover the lifetime of query data in ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../../reusing-cached-data/"}),"Reusing Cached Data For Render")," section). Additionally, if the request for the query is still in flight when disposal occurs, it will be canceled."),Object(o.b)("li",{parentName:"ul"},"Our ",Object(o.b)("inlineCode",{parentName:"li"},"AppTabs")," component renders the ",Object(o.b)("inlineCode",{parentName:"li"},"HomeTab")," component from the previous example, and passes it the corresponding query reference. Note that this parent component owns the lifetime of the data for that query, meaning that when it unmounts, it will of dispose of that query, as mentioned above."),Object(o.b)("li",{parentName:"ul"},"Finally, make sure you're providing a Relay environment using a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../environment/"}),"Relay Environment Provider")," at the root of your app before trying to use ",Object(o.b)("inlineCode",{parentName:"li"},"useQueryLoader"),".")),Object(o.b)("p",null,"Sometimes, you want to start a fetch outside of the context of a parent component, for example to fetch the data required for the initial load of the application. For these cases, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"loadQuery")," API directly, without using ",Object(o.b)("inlineCode",{parentName:"p"},"useQueryLoader"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import type {HomeTabQuery as HomeTabQueryType} from 'HomeTabQuery.graphql';\n\nconst HomeTabQuery = require('HomeTabQuery.graphql')\nconst {loadQuery} = require('react-relay');\n\n\nconst environment = createEnvironment(...);\n\n// At some point during app initialization\nconst initialQueryRef = loadQuery<HomeTabQueryType>(\n  environment,\n  HomeTabQuery,\n  {id: '4'},\n);\n\n// ...\n\n// E.g. passing the initialQueryRef to the root component\nrender(<AppTabs initialQueryRef={initialQueryRef} initialTab={...} />)\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In this example, we are calling the ",Object(o.b)("inlineCode",{parentName:"li"},"loadQuery")," function directly to obtain a ",Object(o.b)("inlineCode",{parentName:"li"},"PreloadedQuery")," instance that we can later pass to a component that uses ",Object(o.b)("inlineCode",{parentName:"li"},"usePreloadedQuery"),"."),Object(o.b)("li",{parentName:"ul"},"In this case, we would expect the root ",Object(o.b)("inlineCode",{parentName:"li"},"AppTabs")," component to manage the lifetime of the query reference, and dispose of it at the appropriate time, if at all."),Object(o.b)("li",{parentName:"ul"},'We\'ve left the details of "app initialization" vague in this example, since that will vary from application to application. The important thing to note here is that we should obtain a query reference before we start rendering the root component. Specifically, ',Object(o.b)("inlineCode",{parentName:"li"},"loadQuery")," can NOT be called during render; it must be called outside of a Component's render function, otherwise it will produce an error.")),Object(o.b)("h3",{id:"render-as-you-fetch"},"Render as you Fetch"),Object(o.b)("p",null,"The examples above illustrate how to separate fetching the data from rendering it, in order to start the fetch as early as possible (as opposed to waiting until the component is rendered to start the fetch), and allow us to show content to our users a lot sooner. It also helps prevent waterfalling round trips, and gives us more control and predictability over when the fetch occurs, whereas if we fetch during render, it becomes harder to determine when the fetch will (or should) occur. This fits nicely with the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/concurrent-mode-suspense.html#approach-3-render-as-you-fetch-using-suspense"}),Object(o.b)("em",{parentName:"a"},'"render-as-you-fetch"'))," pattern with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../loading-states/"}),"React Suspense"),"."),Object(o.b)("p",null,"This is the preferred pattern for fetching data with Relay, and it applies in several circumstances, such as the initial load of an application, during subsequent navigations, or generally when using UI elements which are initially hidden and later revealed upon an interaction (such as menus, popovers, dialogs, etc), and which also require fetching additional data."),Object(o.b)(b,{mdxType:"FbEntrypointsExtraInfo"}),Object(o.b)("h2",{id:"lazily-fetching-queries-during-render"},"Lazily Fetching Queries during Render"),Object(o.b)("p",null,"Another alternative for fetching a query is to lazily fetch the query when the component is rendered. However, as we've mentioned previously, the preferred pattern is to start fetching queries ahead of rendering. If lazy fetching is used without caution, it can trigger nested or waterfalling round trips, and can degrade performance."),Object(o.b)("p",null,"To fetch a query lazily, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," Hook:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import type {AppQuery} from 'AppQuery.graphql';\n\nconst React = require('React');\nconst {graphql, useLazyLoadQuery} = require('react-relay');\n\nfunction App() {\n  const data = useLazyLoadQuery<AppQuery>(\n    graphql`\n      query AppQuery($id: ID!) {\n        user(id: $id) {\n          name\n        }\n      }\n    `,\n    {id: '4'},\n  );\n\n  return (\n    <h1>{data.user?.name}</h1>\n  );\n}\n")),Object(o.b)("p",null,"Lets see what's going on here:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery"),"  takes a graphql query and some variables for that query, and returns the data that was fetched for that query. The variables are an object containing the values for the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../variables/"}),"variables")," referenced inside the GraphQL query."),Object(o.b)("li",{parentName:"ul"},"Similarly to ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../fragments/"}),"fragments"),", the component is automatically subscribed to updates to the query data: if the data for this query is updated anywhere in the app, the component will automatically re-render with the latest updated data."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," additionally, it takes a Flow type parameter, which corresponds to the Flow type for the query, in this case AppQuery.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Remember that Relay automatically generates Flow types for any declared queries, which you can import and use with ",Object(o.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery"),". These types are available in the generated files with the following name format: ",Object(o.b)("inlineCode",{parentName:"li"},"<query_name>.graphql.js"),"."),Object(o.b)("li",{parentName:"ul"},"Note that the ",Object(o.b)("inlineCode",{parentName:"li"},"variables")," will checked by Flow to ensure that you are passing values that match what the GraphQL query expects."),Object(o.b)("li",{parentName:"ul"},"Note that the data is already properly Flow typed without requiring an explicit annotation, and is based on the types from the GraphQL schema. For example, the type of ",Object(o.b)("inlineCode",{parentName:"li"},"data")," above would be: ",Object(o.b)("inlineCode",{parentName:"li"},"{ user: ?{ name: ?string } }"),"."))),Object(o.b)("li",{parentName:"ul"},"By default, when the component renders, Relay will ",Object(o.b)("em",{parentName:"li"},"fetch")," the data for this query (if it isn't already cached), and return it as a the result of the ",Object(o.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," call. We'll go into more detail about how to show loading states in the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../loading-states/"}),"Loading States with Suspense")," section, and how Relay uses cached data in the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../../reusing-cached-data/"}),"Reusing Cached Data For Rendering")," section."),Object(o.b)("li",{parentName:"ul"},"Note that if you re-render your component and pass ",Object(o.b)("em",{parentName:"li"},"different query variables")," than the ones originally used, it will cause the query to be fetched again with the new variables, and potentially re-render with different data."),Object(o.b)("li",{parentName:"ul"},"Finally, make sure you're providing a Relay environment using a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../../../api-reference/relay-environment-provider/"}),"Relay Environment Provider")," at the root of your app before trying to render a query.")),Object(o.b)(l.a,{mdxType:"DocsRating"}))}h.isMDXComponent=!0},317:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,h=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?r.a.createElement(h,l(l({ref:t},u),{},{components:n})):r.a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},318:function(e,t,n){"use strict";(function(e){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=i(n(321));const o=["internal","external"];let l;try{l=n(319).usePluginData}catch(b){l=null}function c(e){return s(e),d()?"internal"in e?u(e.internal):[]:"external"in e?u(e.external):[]}function u(e){return"function"==typeof e?e():e}function s(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function d(){return e.env.FB_INTERNAL||l&&l("internaldocs-fb").FB_INTERNAL}t.fbContent=c,t.fbInternalOnly=function(e){return c({internal:e})},t.validateFbContentArgs=s,t.isInternal=d,t.FbInternalOnly=function(e){return d()?e.children:null},t.OssOnly=function(e){return d()?null:e.children}}).call(this,n(320))},319:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var a=n(22);function r(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},320:function(e,t){var n,a,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var c,u=[],s=!1,d=-1;function b(){s&&c&&(s=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!s){var e=l(b);s=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,s=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||s||l(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},321:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{c(a.next(e))}catch(t){i(t)}}function l(e){try{c(a.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const r=n(322);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},322:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{c(a.next(e))}catch(t){i(t)}}function l(e){try{c(a.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let r=!1,i=0;const o={};t.call=function(e){return a(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=i++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),a={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,l),n}))}},323:function(e,t,n){"use strict";n(60);var a=n(318),r=n(0);var i=function(){var e=r.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),"Thank you for letting us know!"):r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},o=function(){return null};t.a=function(){return Object(a.fbContent)({internal:r.createElement(o,null),external:r.createElement(i,null)})}}}]);