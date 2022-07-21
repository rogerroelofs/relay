"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[15178],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>h,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>p});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),p=function(e){return function(n){var t=m(n.components);return a.createElement(e,r({},n,{components:t}))}},m=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},h=function(e){var n=m(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(t),h=i,c=p["".concat(o,".").concat(h)]||p[h]||u[h]||r;return t?a.createElement(c,s(s({ref:n},d),{},{components:t})):a.createElement(c,s({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},96208:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>h});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),o=t(44996),s=["components"],l={id:"graphql-server-specification",title:"GraphQL Server Specification",original_id:"graphql-server-specification"},d=void 0,p={unversionedId:"graphql-server-specification",id:"version-v4.0.0/graphql-server-specification",title:"GraphQL Server Specification",description:"The goal of this document is to specify the assumptions that Relay makes about a GraphQL server and demonstrate them through an example GraphQL schema.",source:"@site/versioned_docs/version-v4.0.0/GraphQL-ServerSpecification.md",sourceDirName:".",slug:"/graphql-server-specification",permalink:"/docs/v4.0.0/graphql-server-specification",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v4.0.0/GraphQL-ServerSpecification.md",tags:[],version:"v4.0.0",lastUpdatedBy:"Pieter Vanderwerff",lastUpdatedAt:1658434113,formattedLastUpdatedAt:"7/21/2022",frontMatter:{id:"graphql-server-specification",title:"GraphQL Server Specification",original_id:"graphql-server-specification"},sidebar:"version-v4.0.0/docs",previous:{title:"Debugging",permalink:"/docs/v4.0.0/relay-debugging"},next:{title:"Persisted Queries",permalink:"/docs/v4.0.0/persisted-queries"}},m={},h=[{value:"Preface",id:"preface",level:2},{value:"Schema",id:"schema",level:2},{value:"Object Identification",id:"object-identification",level:2},{value:"Connections",id:"connections",level:2},{value:"Mutations",id:"mutations",level:2},{value:"Further Reading",id:"further-reading",level:2}],u={toc:h};function c(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.mdx)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"The goal of this document is to specify the assumptions that Relay makes about a GraphQL server and demonstrate them through an example GraphQL schema."),(0,r.mdx)("p",null,"Table of Contents:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#preface"},"Preface")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#schema"},"Schema")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#object-identification"},"Object Identification")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#connections"},"Connections")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#mutations"},"Mutations")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#further-reading"},"Further Reading"))),(0,r.mdx)("h2",{id:"preface"},"Preface"),(0,r.mdx)("p",null,"The three core assumptions that Relay makes about a GraphQL server are that it provides:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"A mechanism for refetching an object."),(0,r.mdx)("li",{parentName:"ol"},"A description of how to page through connections."),(0,r.mdx)("li",{parentName:"ol"},"Structure around mutations to make them predictable.")),(0,r.mdx)("p",null,"This example demonstrates all three of these assumptions. This example is not comprehensive, but it is designed to quickly introduce these core assumptions, to provide some context before diving into the more detailed specification of the library."),(0,r.mdx)("p",null,"The premise of the example is that we want to use GraphQL to query for information about ships and factions in the original Star Wars trilogy."),(0,r.mdx)("p",null,"It is assumed that the reader is already familiar with ",(0,r.mdx)("a",{parentName:"p",href:"http://graphql.org/"},"GraphQL"),"; if not, the README for ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/graphql/graphql-js"},"GraphQL.js")," is a good place to start."),(0,r.mdx)("p",null,"It is also assumed that the reader is already familiar with ",(0,r.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Star_Wars"},"Star Wars"),"; if not, the 1977 version of Star Wars is a good place to start, though the 1997 Special Edition will serve for the purposes of this document."),(0,r.mdx)("h2",{id:"schema"},"Schema"),(0,r.mdx)("p",null,"The schema described below will be used to demonstrate the functionality that a GraphQL server used by Relay should implement. The two core types are a faction and a ship in the Star Wars universe, where a faction has many ships associated with it. The schema below is the output of the GraphQL.js ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/graphql/graphql-js/blob/main/src/utilities/schemaPrinter.js"},(0,r.mdx)("inlineCode",{parentName:"a"},"schemaPrinter")),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"\ninterface Node {\n  id: ID!\n}\n\ntype Faction implements Node {\n  id: ID!\n  name: String\n  ships: ShipConnection\n}\n\ntype Ship implements Node {\n  id: ID!\n  name: String\n}\n\ntype ShipConnection {\n  edges: [ShipEdge]\n  pageInfo: PageInfo!\n}\n\ntype ShipEdge {\n  cursor: String!\n  node: Ship\n}\n\ntype PageInfo {\n  hasNextPage: Boolean!\n  hasPreviousPage: Boolean!\n  startCursor: String\n  endCursor: String\n}\n\ntype Query {\n  rebels: Faction\n  empire: Faction\n  node(id: ID!): Node\n}\n\ninput IntroduceShipInput {\n  factionId: String!\n  shipNamed: String!\n  clientMutationId: String!\n}\n\ntype IntroduceShipPayload {\n  faction: Faction\n  ship: Ship\n  clientMutationId: String!\n}\n\ntype Mutation {\n  introduceShip(input: IntroduceShipInput!): IntroduceShipPayload\n}\n")),(0,r.mdx)("h2",{id:"object-identification"},"Object Identification"),(0,r.mdx)("p",null,"Both ",(0,r.mdx)("inlineCode",{parentName:"p"},"Faction")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"Ship")," have identifiers that we can use to refetch them. We expose this capability to Relay through the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Node")," interface and the ",(0,r.mdx)("inlineCode",{parentName:"p"},"node")," field on the root query type."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"Node")," interface contains a single field, ",(0,r.mdx)("inlineCode",{parentName:"p"},"id"),", which is a ",(0,r.mdx)("inlineCode",{parentName:"p"},"ID!"),". The ",(0,r.mdx)("inlineCode",{parentName:"p"},"node")," root field takes a single argument, a ",(0,r.mdx)("inlineCode",{parentName:"p"},"ID!"),", and returns a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Node"),". These two work in concert to allow refetching; if we pass the ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," returned in that field to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"node")," field, we get the object back."),(0,r.mdx)("p",null,"Let's see this in action, and query for the ID of the rebels:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"\nquery RebelsQuery {\n  rebels {\n    id\n    name\n  }\n}\n")),(0,r.mdx)("p",null,"returns"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'\n{\n  "rebels": {\n    "id": "RmFjdGlvbjox",\n    "name": "Alliance to Restore the Republic"\n  }\n}\n')),(0,r.mdx)("p",null,"So now we know the ID of the Rebels in our system. We can now refetch them:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'\nquery RebelsRefetchQuery {\n  node(id: "RmFjdGlvbjox") {\n    id\n    ... on Faction {\n      name\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"returns"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'\n{\n  "node": {\n    "id": "RmFjdGlvbjox",\n    "name": "Alliance to Restore the Republic"\n  }\n}\n')),(0,r.mdx)("p",null,"If we do the same thing with the Empire, we'll find that it returns a different ID, and we can refetch it as well:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"\nquery EmpireQuery {\n  empire {\n    id\n    name\n  }\n}\n")),(0,r.mdx)("p",null,"yields"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'\n{\n  "empire": {\n    "id": "RmFjdGlvbjoy",\n    "name": "Galactic Empire"\n  }\n}\n')),(0,r.mdx)("p",null,"and"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'\nquery EmpireRefetchQuery {\n  node(id: "RmFjdGlvbjoy") {\n    id\n    ... on Faction {\n      name\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"yields"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'\n{\n  "node": {\n    "id": "RmFjdGlvbjoy",\n    "name": "Galactic Empire"\n  }\n}\n')),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"Node")," interface and ",(0,r.mdx)("inlineCode",{parentName:"p"},"node")," field assume globally unique IDs for this refetching. A system without globally unique IDs can usually synthesize them by combining the type with the type-specific ID, which is what was done in this example."),(0,r.mdx)("p",null,"The IDs we got back were base64 strings. IDs are designed to be opaque (the only thing that should be passed to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," argument on ",(0,r.mdx)("inlineCode",{parentName:"p"},"node")," is the unaltered result of querying ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," on some object in the system), and base64ing a string is a useful convention in GraphQL to remind viewers that the string is an opaque identifier."),(0,r.mdx)("p",null,"Complete details on how the server should behave are available in the ",(0,r.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/global-object-identification/"},"GraphQL Object Identification")," spec."),(0,r.mdx)("h2",{id:"connections"},"Connections"),(0,r.mdx)("p",null,"A faction has many ships in the Star Wars universe. Relay contains functionality to make manipulating one-to-many relationships easy, using a standardized way of expressing these one-to-many relationships. This standard connection model offers ways of slicing and paginating through the connection."),(0,r.mdx)("p",null,"Let's take the rebels, and ask for their first ship:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"\nquery RebelsShipsQuery {\n  rebels {\n    name,\n    ships(first: 1) {\n      edges {\n        node {\n          name\n        }\n      }\n    }\n  }\n}\n")),(0,r.mdx)("p",null,"yields"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'\n{\n  "rebels": {\n    "name": "Alliance to Restore the Republic",\n    "ships": {\n      "edges": [\n        {\n          "node": {\n            "name": "X-Wing"\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"That used the ",(0,r.mdx)("inlineCode",{parentName:"p"},"first")," argument to ",(0,r.mdx)("inlineCode",{parentName:"p"},"ships")," to slice the result set down to the first one. But what if we wanted to paginate through it? On each edge, a cursor will be exposed that we can use to paginate. Let's ask for the first two this time, and get the cursor as well:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"\nquery MoreRebelShipsQuery {\n  rebels {\n    name,\n    ships(first: 2) {\n      edges {\n        cursor\n        node {\n          name\n        }\n      }\n    }\n  }\n}\n")),(0,r.mdx)("p",null,"and we get back"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'\n{\n  "rebels": {\n    "name": "Alliance to Restore the Republic",\n    "ships": {\n      "edges": [\n        {\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA=",\n          "node": {\n            "name": "X-Wing"\n          }\n        },\n        {\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE=",\n          "node": {\n            "name": "Y-Wing"\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"Notice that the cursor is a base64 string. That's the pattern from earlier: the server is reminding us that this is an opaque string. We can pass this string back to the server as the ",(0,r.mdx)("inlineCode",{parentName:"p"},"after")," argument to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ships")," field, which will let us ask for the next three ships after the last one in the previous result:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'\nquery EndOfRebelShipsQuery {\n  rebels {\n    name,\n    ships(first: 3 after: "YXJyYXljb25uZWN0aW9uOjE=") {\n      edges {\n        cursor,\n        node {\n          name\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"gives us"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'\n\n{\n  "rebels": {\n    "name": "Alliance to Restore the Republic",\n    "ships": {\n      "edges": [\n        {\n          "cursor": "YXJyYXljb25uZWN0aW9uOjI=",\n          "node": {\n            "name": "A-Wing"\n          }\n        },\n        {\n          "cursor": "YXJyYXljb25uZWN0aW9uOjM=",\n          "node": {\n            "name": "Millenium Falcon"\n          }\n        },\n        {\n          "cursor": "YXJyYXljb25uZWN0aW9uOjQ=",\n          "node": {\n            "name": "Home One"\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"Sweet! Let's keep going and get the next four!"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'\nquery RebelsQuery {\n  rebels {\n    name,\n    ships(first: 4 after: "YXJyYXljb25uZWN0aW9uOjQ=") {\n      edges {\n        cursor,\n        node {\n          name\n        }\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"yields"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'\n{\n  "rebels": {\n    "name": "Alliance to Restore the Republic",\n    "ships": {\n      "edges": []\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"Hm. There were no more ships; guess there were only five in the system for the rebels. It would have been nice to know that we'd reached the end of the connection, without having to do another round trip in order to verify that. The connection model exposes this capability with a type called ",(0,r.mdx)("inlineCode",{parentName:"p"},"PageInfo"),". So let's issue the two queries that got us ships again, but this time ask for ",(0,r.mdx)("inlineCode",{parentName:"p"},"hasNextPage"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'\nquery EndOfRebelShipsQuery {\n  rebels {\n    name,\n    originalShips: ships(first: 2) {\n      edges {\n        node {\n          name\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n    moreShips: ships(first: 3 after: "YXJyYXljb25uZWN0aW9uOjE=") {\n      edges {\n        node {\n          name\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"and we get back"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'\n{\n  "rebels": {\n    "name": "Alliance to Restore the Republic",\n    "originalShips": {\n      "edges": [\n        {\n          "node": {\n            "name": "X-Wing"\n          }\n        },\n        {\n          "node": {\n            "name": "Y-Wing"\n          }\n        }\n      ],\n      "pageInfo": {\n        "hasNextPage": true\n      }\n    },\n    "moreShips": {\n      "edges": [\n        {\n          "node": {\n            "name": "A-Wing"\n          }\n        },\n        {\n          "node": {\n            "name": "Millenium Falcon"\n          }\n        },\n        {\n          "node": {\n            "name": "Home One"\n          }\n        }\n      ],\n      "pageInfo": {\n        "hasNextPage": false\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"So on the first query for ships, GraphQL told us there was a next page, but on the next one, it told us we'd reached the end of the connection."),(0,r.mdx)("p",null,"Relay uses all of this functionality to build out abstractions around connections, to make these easy to work with efficiently without having to manually manage cursors on the client."),(0,r.mdx)("p",null,"Complete details on how the server should behave are available in the ",(0,r.mdx)("a",{href:(0,o.default)("graphql/connections.htm")},"GraphQL Cursor Connections")," spec."),(0,r.mdx)("h2",{id:"mutations"},"Mutations"),(0,r.mdx)("p",null,"Relay uses a common pattern for mutations, where there are root fields on the mutation type with a single argument, ",(0,r.mdx)("inlineCode",{parentName:"p"},"input"),", and where the input and output both contain a client mutation identifier used to reconcile requests and responses."),(0,r.mdx)("p",null,'By convention, mutations are named as verbs, their inputs are the name with "Input" appended at the end, and they return an object that is the name with "Payload" appended.'),(0,r.mdx)("p",null,"So for our ",(0,r.mdx)("inlineCode",{parentName:"p"},"introduceShip")," mutation, we create two types: ",(0,r.mdx)("inlineCode",{parentName:"p"},"IntroduceShipInput")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"IntroduceShipPayload"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"\ninput IntroduceShipInput {\n  factionId: ID!\n  shipName: String!\n  clientMutationId: String!\n}\n\ntype IntroduceShipPayload {\n  faction: Faction\n  ship: Ship\n  clientMutationId: String!\n}\n")),(0,r.mdx)("p",null,"With this input and payload, we can issue the following mutation:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"\nmutation AddBWingQuery($input: IntroduceShipInput!) {\n  introduceShip(input: $input) {\n    ship {\n      id\n      name\n    }\n    faction {\n      name\n    }\n    clientMutationId\n  }\n}\n")),(0,r.mdx)("p",null,"with these params:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'\n{\n  "input": {\n    "shipName": "B-Wing",\n    "factionId": "1",\n    "clientMutationId": "abcde"\n  }\n}\n')),(0,r.mdx)("p",null,"and we'll get this result:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'\n{\n  "introduceShip": {\n    "ship": {\n      "id": "U2hpcDo5",\n      "name": "B-Wing"\n    },\n    "faction": {\n      "name": "Alliance to Restore the Republic"\n    },\n    "clientMutationId": "abcde"\n  }\n}\n')),(0,r.mdx)("h2",{id:"further-reading"},"Further Reading"),(0,r.mdx)("p",null,"This concludes the overview of the GraphQL Server Specifications. For the detailed requirements of a Relay-compliant GraphQL server, a more formal description of the ",(0,r.mdx)("a",{href:(0,o.default)("graphql/connections.htm")},"Relay cursor connection")," model and the ",(0,r.mdx)("a",{href:"https://graphql.org/learn/global-object-identification/"},"Relay global object identification")," model are all available."),(0,r.mdx)("p",null,"To see code implementing the specification, the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/graphql/graphql-relay-js"},"GraphQL.js Relay library")," provides helper functions for creating nodes, connections, and mutations; that repository's ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/graphql/graphql-relay-js/tree/main/src/__tests__"},(0,r.mdx)("inlineCode",{parentName:"a"},"__tests__"))," folder contains an implementation of the above example as integration tests for the repository."))}c.isMDXComponent=!0}}]);