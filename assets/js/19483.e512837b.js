"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[19483,30292,99067,27166,30362,19205],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>h,useMDXComponents:()=>f,withMDXComponents:()=>s});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){return function(t){var n=f(t.components);return r.createElement(e,a({},t,{components:n}))}},f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=f(n),d=o,v=s["".concat(i,".").concat(d)]||s[d]||p[d]||a;return n?r.createElement(v,u(u({ref:t},l),{},{components:n})):r.createElement(v,u({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=v;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(67294),o=n(86010);const a="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.default)(a,i),hidden:n},t)}},65488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(83117),o=n(67294),a=n(86010),i=n(72389),u=n(67392),c=n(7094),l=n(12466);const s="tabList__CuJ",f="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,p=e.defaultValue,v=e.values,h=e.groupId,m=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,u.l)(y,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var O=(0,c.U)(),_=O.tabGroupChoices,E=O.setTabGroupChoices,j=(0,o.useState)(g),P=j[0],k=j[1],x=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var N=_[h];null!=N&&N!==P&&y.some((function(e){return e.value===N}))&&k(N)}var D=function(e){var t=e.currentTarget,n=x.indexOf(t),r=y[n].value;r!==P&&(C(t),k(r),null!=h&&E(h,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,o=x.indexOf(e.currentTarget)+1;n=null!=(r=x[o])?r:x[0];break;case"ArrowLeft":var a,i=x.indexOf(e.currentTarget)-1;n=null!=(a=x[i])?a:x[x.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.default)("tabs-container",s)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.default)("tabs",{"tabs--block":d},m)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:D,onClick:D},i,{className:(0,a.default)("tabs__item",f,null==i?void 0:i.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(b.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function p(e){var t=(0,i.default)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},47596:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function u(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const o=n(11737);t.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield o.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function u(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let r=!1,o=0;const a={};t.call=function(e){return n(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in a||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?a[t].resolve(e.data.response):a[t].reject(new Error(e.data.error)),delete a[t]})));const t=o++,n=new Promise(((e,n)=>{a[t]={resolve:e,reject:n}})),i={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},u="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(i,u),n}))}},24855:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function u(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.reportFeatureUsage=t.reportContentCopied=void 0;const o=n(11737);t.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:t}=e;try{yield o.call({module:"feedback",api:"reportContentCopied",args:{textContent:t}})}catch(n){}}))},t.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:t,id:n}=e;console.log("used feature");try{yield o.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:t,id:n}})}catch(r){}}))}},44256:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.getEphemeralDiffNumber=t.hasEphemeralDiffNumber=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.inpageeditor=t.feedback=t.uidocs=t.bloks=void 0,t.bloks=a(n(47596)),t.uidocs=a(n(17483)),t.feedback=a(n(24855)),t.inpageeditor=a(n(27312));const i=["internal","external"];function u(e){return l(e),s()?"internal"in e?c(e.internal):[]:"external"in e?c(e.external):[]}function c(e){return"function"==typeof e?e():e}function l(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const t=Object.keys(e).filter((e=>!i.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${i}`)}function s(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function f(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}t.fbContent=u,t.fbInternalOnly=function(e){return u({internal:e})},t.validateFbContentArgs=l,t.isInternal=s,t.hasEphemeralDiffNumber=function(){return Boolean(f())},t.getEphemeralDiffNumber=f,t.FbInternalOnly=function(e){return s()?e.children:null},t.OssOnly=function(e){return s()?null:e.children}},27312:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function u(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.submitDiff=void 0;const o=n(11737);t.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:t,new_content:n,project_name:r,diff_number:a}=e;try{return yield o.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:t,new_content:n,project_name:r,diff_number:a}})}catch(i){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${i}`)}}))}},17483:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function u(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getApi=t.docsets=void 0;const o=n(11737);t.docsets={BLOKS_CORE:"887372105406659"},t.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:t,framework:n,docset:r}=e;return yield o.call({module:"uidocs",api:"getApi",args:{name:t,framework:n,docset:r}})}))}}}]);