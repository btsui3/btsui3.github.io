function B_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function H_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Um={exports:{}},Bl={},Im={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),G_=Symbol.for("react.portal"),V_=Symbol.for("react.fragment"),W_=Symbol.for("react.strict_mode"),X_=Symbol.for("react.profiler"),j_=Symbol.for("react.provider"),Y_=Symbol.for("react.context"),q_=Symbol.for("react.forward_ref"),$_=Symbol.for("react.suspense"),K_=Symbol.for("react.memo"),Z_=Symbol.for("react.lazy"),Od=Symbol.iterator;function Q_(t){return t===null||typeof t!="object"?null:(t=Od&&t[Od]||t["@@iterator"],typeof t=="function"?t:null)}var Nm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fm=Object.assign,Om={};function Xo(t,e,n){this.props=t,this.context=e,this.refs=Om,this.updater=n||Nm}Xo.prototype.isReactComponent={};Xo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function km(){}km.prototype=Xo.prototype;function Cf(t,e,n){this.props=t,this.context=e,this.refs=Om,this.updater=n||Nm}var Pf=Cf.prototype=new km;Pf.constructor=Cf;Fm(Pf,Xo.prototype);Pf.isPureReactComponent=!0;var kd=Array.isArray,zm=Object.prototype.hasOwnProperty,Lf={current:null},Bm={key:!0,ref:!0,__self:!0,__source:!0};function Hm(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)zm.call(e,i)&&!Bm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:sa,type:t,key:o,ref:s,props:r,_owner:Lf.current}}function J_(t,e){return{$$typeof:sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===sa}function e0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zd=/\/+/g;function hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?e0(""+t.key):e.toString(36)}function Ja(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case sa:case G_:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+hu(s,0):i,kd(r)?(n="",t!=null&&(n=t.replace(zd,"$&/")+"/"),Ja(r,e,n,"",function(u){return u})):r!=null&&(bf(r)&&(r=J_(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(zd,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",kd(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+hu(o,a);s+=Ja(o,e,n,l,r)}else if(l=Q_(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+hu(o,a++),s+=Ja(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function pa(t,e,n){if(t==null)return t;var i=[],r=0;return Ja(t,i,"","",function(o){return e.call(n,o,r++)}),i}function t0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},el={transition:null},n0={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:el,ReactCurrentOwner:Lf};Xe.Children={map:pa,forEach:function(t,e,n){pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pa(t,function(){e++}),e},toArray:function(t){return pa(t,function(e){return e})||[]},only:function(t){if(!bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Xo;Xe.Fragment=V_;Xe.Profiler=X_;Xe.PureComponent=Cf;Xe.StrictMode=W_;Xe.Suspense=$_;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n0;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Fm({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Lf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)zm.call(e,l)&&!Bm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:sa,type:t.type,key:r,ref:o,props:i,_owner:s}};Xe.createContext=function(t){return t={$$typeof:Y_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:j_,_context:t},t.Consumer=t};Xe.createElement=Hm;Xe.createFactory=function(t){var e=Hm.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:q_,render:t}};Xe.isValidElement=bf;Xe.lazy=function(t){return{$$typeof:Z_,_payload:{_status:-1,_result:t},_init:t0}};Xe.memo=function(t,e){return{$$typeof:K_,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=el.transition;el.transition={};try{t()}finally{el.transition=e}};Xe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Xe.useCallback=function(t,e){return Kt.current.useCallback(t,e)};Xe.useContext=function(t){return Kt.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return Kt.current.useEffect(t,e)};Xe.useId=function(){return Kt.current.useId()};Xe.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Kt.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};Xe.useRef=function(t){return Kt.current.useRef(t)};Xe.useState=function(t){return Kt.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return Kt.current.useTransition()};Xe.version="18.2.0";Im.exports=Xe;var ge=Im.exports;const Gm=H_(ge),i0=B_({__proto__:null,default:Gm},[ge]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0=ge,o0=Symbol.for("react.element"),s0=Symbol.for("react.fragment"),a0=Object.prototype.hasOwnProperty,l0=r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u0={key:!0,ref:!0,__self:!0,__source:!0};function Vm(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)a0.call(e,i)&&!u0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:o0,type:t,key:o,ref:s,props:r,_owner:l0.current}}Bl.Fragment=s0;Bl.jsx=Vm;Bl.jsxs=Vm;Um.exports=Bl;var gt=Um.exports,Sc={},Wm={exports:{}},_n={},Xm={exports:{}},jm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,j){var W=I.length;I.push(j);e:for(;0<W;){var B=W-1>>>1,V=I[B];if(0<r(V,j))I[B]=j,I[W]=V,W=B;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var j=I[0],W=I.pop();if(W!==j){I[0]=W;e:for(var B=0,V=I.length,he=V>>>1;B<he;){var se=2*(B+1)-1,pe=I[se],ye=se+1,Ce=I[ye];if(0>r(pe,W))ye<V&&0>r(Ce,pe)?(I[B]=Ce,I[ye]=W,B=ye):(I[B]=pe,I[se]=W,B=se);else if(ye<V&&0>r(Ce,W))I[B]=Ce,I[ye]=W,B=ye;else break e}}return j}function r(I,j){var W=I.sortIndex-j.sortIndex;return W!==0?W:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,h=3,m=!1,y=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var j=n(u);j!==null;){if(j.callback===null)i(u);else if(j.startTime<=I)i(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function g(I){if(x=!1,v(I),!y)if(n(l)!==null)y=!0,re(S);else{var j=n(u);j!==null&&Z(g,j.startTime-I)}}function S(I,j){y=!1,x&&(x=!1,f(N),N=-1),m=!0;var W=h;try{for(v(j),d=n(l);d!==null&&(!(d.expirationTime>j)||I&&!ne());){var B=d.callback;if(typeof B=="function"){d.callback=null,h=d.priorityLevel;var V=B(d.expirationTime<=j);j=t.unstable_now(),typeof V=="function"?d.callback=V:d===n(l)&&i(l),v(j)}else i(l);d=n(l)}if(d!==null)var he=!0;else{var se=n(u);se!==null&&Z(g,se.startTime-j),he=!1}return he}finally{d=null,h=W,m=!1}}var R=!1,A=null,N=-1,M=5,T=-1;function ne(){return!(t.unstable_now()-T<M)}function te(){if(A!==null){var I=t.unstable_now();T=I;var j=!0;try{j=A(!0,I)}finally{j?H():(R=!1,A=null)}}else R=!1}var H;if(typeof _=="function")H=function(){_(te)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,$=q.port2;q.port1.onmessage=te,H=function(){$.postMessage(null)}}else H=function(){p(te,0)};function re(I){A=I,R||(R=!0,H())}function Z(I,j){N=p(function(){I(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,re(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var W=h;h=j;try{return I()}finally{h=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=h;h=I;try{return j()}finally{h=W}},t.unstable_scheduleCallback=function(I,j,W){var B=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?B+W:B):W=B,I){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=W+V,I={id:c++,callback:j,priorityLevel:I,startTime:W,expirationTime:V,sortIndex:-1},W>B?(I.sortIndex=W,e(u,I),n(l)===null&&I===n(u)&&(x?(f(N),N=-1):x=!0,Z(g,W-B))):(I.sortIndex=V,e(l,I),y||m||(y=!0,re(S))),I},t.unstable_shouldYield=ne,t.unstable_wrapCallback=function(I){var j=h;return function(){var W=h;h=j;try{return I.apply(this,arguments)}finally{h=W}}}})(jm);Xm.exports=jm;var c0=Xm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym=ge,vn=c0;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qm=new Set,Fs={};function Ir(t,e){Uo(t,e),Uo(t+"Capture",e)}function Uo(t,e){for(Fs[t]=e,t=0;t<e.length;t++)qm.add(e[t])}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mc=Object.prototype.hasOwnProperty,f0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bd={},Hd={};function d0(t){return Mc.call(Hd,t)?!0:Mc.call(Bd,t)?!1:f0.test(t)?Hd[t]=!0:(Bd[t]=!0,!1)}function h0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function p0(t,e,n,i){if(e===null||typeof e>"u"||h0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Df=/[\-:]([a-z])/g;function Uf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Df,Uf);Ot[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Df,Uf);Ot[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Df,Uf);Ot[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function If(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(p0(e,n,r,i)&&(n=null),i||r===null?d0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var wi=Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma=Symbol.for("react.element"),lo=Symbol.for("react.portal"),uo=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),Ec=Symbol.for("react.profiler"),$m=Symbol.for("react.provider"),Km=Symbol.for("react.context"),Ff=Symbol.for("react.forward_ref"),Tc=Symbol.for("react.suspense"),wc=Symbol.for("react.suspense_list"),Of=Symbol.for("react.memo"),Ii=Symbol.for("react.lazy"),Zm=Symbol.for("react.offscreen"),Gd=Symbol.iterator;function es(t){return t===null||typeof t!="object"?null:(t=Gd&&t[Gd]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,pu;function vs(t){if(pu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pu=e&&e[1]||""}return`
`+pu+t}var mu=!1;function gu(t,e){if(!t||mu)return"";mu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{mu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vs(t):""}function m0(t){switch(t.tag){case 5:return vs(t.type);case 16:return vs("Lazy");case 13:return vs("Suspense");case 19:return vs("SuspenseList");case 0:case 2:case 15:return t=gu(t.type,!1),t;case 11:return t=gu(t.type.render,!1),t;case 1:return t=gu(t.type,!0),t;default:return""}}function Ac(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case uo:return"Fragment";case lo:return"Portal";case Ec:return"Profiler";case Nf:return"StrictMode";case Tc:return"Suspense";case wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Km:return(t.displayName||"Context")+".Consumer";case $m:return(t._context.displayName||"Context")+".Provider";case Ff:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Of:return e=t.displayName||null,e!==null?e:Ac(t.type)||"Memo";case Ii:e=t._payload,t=t._init;try{return Ac(t(e))}catch{}}return null}function g0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ac(e);case 8:return e===Nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function v0(t){var e=Qm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ga(t){t._valueTracker||(t._valueTracker=v0(t))}function Jm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Qm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rc(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function eg(t,e){e=e.checked,e!=null&&If(t,"checked",e,!1)}function Cc(t,e){eg(t,e);var n=Qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pc(t,e.type,Qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pc(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _s=Array.isArray;function To(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Lc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(_s(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qi(n)}}function tg(t,e){var n=Qi(e.value),i=Qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function jd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ng(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ng(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var va,ig=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(va=va||document.createElement("div"),va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Os(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_0=["Webkit","ms","Moz","O"];Object.keys(Es).forEach(function(t){_0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Es[e]=Es[t]})});function rg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Es.hasOwnProperty(t)&&Es[t]?(""+e).trim():e+"px"}function og(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=rg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var y0=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dc(t,e){if(e){if(y0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function Uc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ic=null;function kf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nc=null,wo=null,Ao=null;function Yd(t){if(t=ua(t)){if(typeof Nc!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=Xl(e),Nc(t.stateNode,t.type,e))}}function sg(t){wo?Ao?Ao.push(t):Ao=[t]:wo=t}function ag(){if(wo){var t=wo,e=Ao;if(Ao=wo=null,Yd(t),e)for(t=0;t<e.length;t++)Yd(e[t])}}function lg(t,e){return t(e)}function ug(){}var vu=!1;function cg(t,e,n){if(vu)return t(e,n);vu=!0;try{return lg(t,e,n)}finally{vu=!1,(wo!==null||Ao!==null)&&(ug(),ag())}}function ks(t,e){var n=t.stateNode;if(n===null)return null;var i=Xl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var Fc=!1;if(Si)try{var ts={};Object.defineProperty(ts,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{Fc=!1}function x0(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ts=!1,hl=null,pl=!1,Oc=null,S0={onError:function(t){Ts=!0,hl=t}};function M0(t,e,n,i,r,o,s,a,l){Ts=!1,hl=null,x0.apply(S0,arguments)}function E0(t,e,n,i,r,o,s,a,l){if(M0.apply(this,arguments),Ts){if(Ts){var u=hl;Ts=!1,hl=null}else throw Error(ue(198));pl||(pl=!0,Oc=u)}}function Nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qd(t){if(Nr(t)!==t)throw Error(ue(188))}function T0(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return qd(r),t;if(o===i)return qd(r),e;o=o.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function dg(t){return t=T0(t),t!==null?hg(t):null}function hg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hg(t);if(e!==null)return e;t=t.sibling}return null}var pg=vn.unstable_scheduleCallback,$d=vn.unstable_cancelCallback,w0=vn.unstable_shouldYield,A0=vn.unstable_requestPaint,vt=vn.unstable_now,R0=vn.unstable_getCurrentPriorityLevel,zf=vn.unstable_ImmediatePriority,mg=vn.unstable_UserBlockingPriority,ml=vn.unstable_NormalPriority,C0=vn.unstable_LowPriority,gg=vn.unstable_IdlePriority,Hl=null,Jn=null;function P0(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Hl,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:D0,L0=Math.log,b0=Math.LN2;function D0(t){return t>>>=0,t===0?32:31-(L0(t)/b0|0)|0}var _a=64,ya=4194304;function ys(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=ys(a):(o&=s,o!==0&&(i=ys(o)))}else s=n&~r,s!==0?i=ys(s):o!==0&&(i=ys(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function U0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Xn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=U0(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function kc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vg(){var t=_a;return _a<<=1,!(_a&4194240)&&(_a=64),t}function _u(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function N0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Bf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function _g(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yg,Hf,xg,Sg,Mg,zc=!1,xa=[],Gi=null,Vi=null,Wi=null,zs=new Map,Bs=new Map,Fi=[],F0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kd(t,e){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":zs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bs.delete(e.pointerId)}}function ns(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=ua(e),e!==null&&Hf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function O0(t,e,n,i,r){switch(e){case"focusin":return Gi=ns(Gi,t,e,n,i,r),!0;case"dragenter":return Vi=ns(Vi,t,e,n,i,r),!0;case"mouseover":return Wi=ns(Wi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return zs.set(o,ns(zs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Bs.set(o,ns(Bs.get(o)||null,t,e,n,i,r)),!0}return!1}function Eg(t){var e=mr(t.target);if(e!==null){var n=Nr(e);if(n!==null){if(e=n.tag,e===13){if(e=fg(n),e!==null){t.blockedOn=e,Mg(t.priority,function(){xg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ic=i,n.target.dispatchEvent(i),Ic=null}else return e=ua(n),e!==null&&Hf(e),t.blockedOn=n,!1;e.shift()}return!0}function Zd(t,e,n){tl(t)&&n.delete(e)}function k0(){zc=!1,Gi!==null&&tl(Gi)&&(Gi=null),Vi!==null&&tl(Vi)&&(Vi=null),Wi!==null&&tl(Wi)&&(Wi=null),zs.forEach(Zd),Bs.forEach(Zd)}function is(t,e){t.blockedOn===e&&(t.blockedOn=null,zc||(zc=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,k0)))}function Hs(t){function e(r){return is(r,t)}if(0<xa.length){is(xa[0],t);for(var n=1;n<xa.length;n++){var i=xa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Gi!==null&&is(Gi,t),Vi!==null&&is(Vi,t),Wi!==null&&is(Wi,t),zs.forEach(e),Bs.forEach(e),n=0;n<Fi.length;n++)i=Fi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Fi.length&&(n=Fi[0],n.blockedOn===null);)Eg(n),n.blockedOn===null&&Fi.shift()}var Ro=wi.ReactCurrentBatchConfig,vl=!0;function z0(t,e,n,i){var r=Je,o=Ro.transition;Ro.transition=null;try{Je=1,Gf(t,e,n,i)}finally{Je=r,Ro.transition=o}}function B0(t,e,n,i){var r=Je,o=Ro.transition;Ro.transition=null;try{Je=4,Gf(t,e,n,i)}finally{Je=r,Ro.transition=o}}function Gf(t,e,n,i){if(vl){var r=Bc(t,e,n,i);if(r===null)Cu(t,e,i,_l,n),Kd(t,i);else if(O0(r,t,e,n,i))i.stopPropagation();else if(Kd(t,i),e&4&&-1<F0.indexOf(t)){for(;r!==null;){var o=ua(r);if(o!==null&&yg(o),o=Bc(t,e,n,i),o===null&&Cu(t,e,i,_l,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Cu(t,e,i,null,n)}}var _l=null;function Bc(t,e,n,i){if(_l=null,t=kf(i),t=mr(t),t!==null)if(e=Nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function Tg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R0()){case zf:return 1;case mg:return 4;case ml:case C0:return 16;case gg:return 536870912;default:return 16}default:return 16}}var ki=null,Vf=null,nl=null;function wg(){if(nl)return nl;var t,e=Vf,n=e.length,i,r="value"in ki?ki.value:ki.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return nl=r.slice(t,1<i?1-i:void 0)}function il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sa(){return!0}function Qd(){return!1}function yn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sa:Qd,this.isPropagationStopped=Qd,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),e}var jo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wf=yn(jo),la=ut({},jo,{view:0,detail:0}),H0=yn(la),yu,xu,rs,Gl=ut({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==rs&&(rs&&t.type==="mousemove"?(yu=t.screenX-rs.screenX,xu=t.screenY-rs.screenY):xu=yu=0,rs=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:xu}}),Jd=yn(Gl),G0=ut({},Gl,{dataTransfer:0}),V0=yn(G0),W0=ut({},la,{relatedTarget:0}),Su=yn(W0),X0=ut({},jo,{animationName:0,elapsedTime:0,pseudoElement:0}),j0=yn(X0),Y0=ut({},jo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q0=yn(Y0),$0=ut({},jo,{data:0}),eh=yn($0),K0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Q0[t])?!!e[t]:!1}function Xf(){return J0}var ey=ut({},la,{key:function(t){if(t.key){var e=K0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xf,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ty=yn(ey),ny=ut({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),th=yn(ny),iy=ut({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xf}),ry=yn(iy),oy=ut({},jo,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=yn(oy),ay=ut({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ly=yn(ay),uy=[9,13,27,32],jf=Si&&"CompositionEvent"in window,ws=null;Si&&"documentMode"in document&&(ws=document.documentMode);var cy=Si&&"TextEvent"in window&&!ws,Ag=Si&&(!jf||ws&&8<ws&&11>=ws),nh=String.fromCharCode(32),ih=!1;function Rg(t,e){switch(t){case"keyup":return uy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var co=!1;function fy(t,e){switch(t){case"compositionend":return Cg(e);case"keypress":return e.which!==32?null:(ih=!0,nh);case"textInput":return t=e.data,t===nh&&ih?null:t;default:return null}}function dy(t,e){if(co)return t==="compositionend"||!jf&&Rg(t,e)?(t=wg(),nl=Vf=ki=null,co=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ag&&e.locale!=="ko"?null:e.data;default:return null}}var hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hy[t.type]:e==="textarea"}function Pg(t,e,n,i){sg(i),e=yl(e,"onChange"),0<e.length&&(n=new Wf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var As=null,Gs=null;function py(t){Bg(t,0)}function Vl(t){var e=po(t);if(Jm(e))return t}function my(t,e){if(t==="change")return e}var Lg=!1;if(Si){var Mu;if(Si){var Eu="oninput"in document;if(!Eu){var oh=document.createElement("div");oh.setAttribute("oninput","return;"),Eu=typeof oh.oninput=="function"}Mu=Eu}else Mu=!1;Lg=Mu&&(!document.documentMode||9<document.documentMode)}function sh(){As&&(As.detachEvent("onpropertychange",bg),Gs=As=null)}function bg(t){if(t.propertyName==="value"&&Vl(Gs)){var e=[];Pg(e,Gs,t,kf(t)),cg(py,e)}}function gy(t,e,n){t==="focusin"?(sh(),As=e,Gs=n,As.attachEvent("onpropertychange",bg)):t==="focusout"&&sh()}function vy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(Gs)}function _y(t,e){if(t==="click")return Vl(e)}function yy(t,e){if(t==="input"||t==="change")return Vl(e)}function xy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:xy;function Vs(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Mc.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function ah(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lh(t,e){var n=ah(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ah(n)}}function Dg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ug(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function Yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Sy(t){var e=Ug(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Dg(n.ownerDocument.documentElement,n)){if(i!==null&&Yf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=lh(n,o);var s=lh(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var My=Si&&"documentMode"in document&&11>=document.documentMode,fo=null,Hc=null,Rs=null,Gc=!1;function uh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gc||fo==null||fo!==dl(i)||(i=fo,"selectionStart"in i&&Yf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Rs&&Vs(Rs,i)||(Rs=i,i=yl(Hc,"onSelect"),0<i.length&&(e=new Wf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fo)))}function Ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ho={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},Tu={},Ig={};Si&&(Ig=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function Wl(t){if(Tu[t])return Tu[t];if(!ho[t])return t;var e=ho[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ig)return Tu[t]=e[n];return t}var Ng=Wl("animationend"),Fg=Wl("animationiteration"),Og=Wl("animationstart"),kg=Wl("transitionend"),zg=new Map,ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,e){zg.set(t,e),Ir(e,[t])}for(var wu=0;wu<ch.length;wu++){var Au=ch[wu],Ey=Au.toLowerCase(),Ty=Au[0].toUpperCase()+Au.slice(1);tr(Ey,"on"+Ty)}tr(Ng,"onAnimationEnd");tr(Fg,"onAnimationIteration");tr(Og,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(kg,"onTransitionEnd");Uo("onMouseEnter",["mouseout","mouseover"]);Uo("onMouseLeave",["mouseout","mouseover"]);Uo("onPointerEnter",["pointerout","pointerover"]);Uo("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wy=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function fh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,E0(i,e,void 0,t),t.currentTarget=null}function Bg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;fh(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;fh(r,a,u),o=l}}}if(pl)throw t=Oc,pl=!1,Oc=null,t}function nt(t,e){var n=e[Yc];n===void 0&&(n=e[Yc]=new Set);var i=t+"__bubble";n.has(i)||(Hg(e,t,2,!1),n.add(i))}function Ru(t,e,n){var i=0;e&&(i|=4),Hg(n,t,i,e)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function Ws(t){if(!t[Ea]){t[Ea]=!0,qm.forEach(function(n){n!=="selectionchange"&&(wy.has(n)||Ru(n,!1,t),Ru(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ea]||(e[Ea]=!0,Ru("selectionchange",!1,e))}}function Hg(t,e,n,i){switch(Tg(e)){case 1:var r=z0;break;case 4:r=B0;break;default:r=Gf}n=r.bind(null,e,n,t),r=void 0,!Fc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Cu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=mr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}cg(function(){var u=o,c=kf(n),d=[];e:{var h=zg.get(t);if(h!==void 0){var m=Wf,y=t;switch(t){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":m=ty;break;case"focusin":y="focus",m=Su;break;case"focusout":y="blur",m=Su;break;case"beforeblur":case"afterblur":m=Su;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=V0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ry;break;case Ng:case Fg:case Og:m=j0;break;case kg:m=sy;break;case"scroll":m=H0;break;case"wheel":m=ly;break;case"copy":case"cut":case"paste":m=q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=th}var x=(e&4)!==0,p=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var _=u,v;_!==null;){v=_;var g=v.stateNode;if(v.tag===5&&g!==null&&(v=g,f!==null&&(g=ks(_,f),g!=null&&x.push(Xs(_,g,v)))),p)break;_=_.return}0<x.length&&(h=new m(h,y,null,n,c),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Ic&&(y=n.relatedTarget||n.fromElement)&&(mr(y)||y[Mi]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?mr(y):null,y!==null&&(p=Nr(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(x=Jd,g="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=th,g="onPointerLeave",f="onPointerEnter",_="pointer"),p=m==null?h:po(m),v=y==null?h:po(y),h=new x(g,_+"leave",m,n,c),h.target=p,h.relatedTarget=v,g=null,mr(c)===u&&(x=new x(f,_+"enter",y,n,c),x.target=v,x.relatedTarget=p,g=x),p=g,m&&y)t:{for(x=m,f=y,_=0,v=x;v;v=Hr(v))_++;for(v=0,g=f;g;g=Hr(g))v++;for(;0<_-v;)x=Hr(x),_--;for(;0<v-_;)f=Hr(f),v--;for(;_--;){if(x===f||f!==null&&x===f.alternate)break t;x=Hr(x),f=Hr(f)}x=null}else x=null;m!==null&&dh(d,h,m,x,!1),y!==null&&p!==null&&dh(d,p,y,x,!0)}}e:{if(h=u?po(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var S=my;else if(rh(h))if(Lg)S=yy;else{S=vy;var R=gy}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=_y);if(S&&(S=S(t,u))){Pg(d,S,n,c);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Pc(h,"number",h.value)}switch(R=u?po(u):window,t){case"focusin":(rh(R)||R.contentEditable==="true")&&(fo=R,Hc=u,Rs=null);break;case"focusout":Rs=Hc=fo=null;break;case"mousedown":Gc=!0;break;case"contextmenu":case"mouseup":case"dragend":Gc=!1,uh(d,n,c);break;case"selectionchange":if(My)break;case"keydown":case"keyup":uh(d,n,c)}var A;if(jf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else co?Rg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Ag&&n.locale!=="ko"&&(co||N!=="onCompositionStart"?N==="onCompositionEnd"&&co&&(A=wg()):(ki=c,Vf="value"in ki?ki.value:ki.textContent,co=!0)),R=yl(u,N),0<R.length&&(N=new eh(N,t,null,n,c),d.push({event:N,listeners:R}),A?N.data=A:(A=Cg(n),A!==null&&(N.data=A)))),(A=cy?fy(t,n):dy(t,n))&&(u=yl(u,"onBeforeInput"),0<u.length&&(c=new eh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}Bg(d,e)})}function Xs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=ks(t,n),o!=null&&i.unshift(Xs(t,o,r)),o=ks(t,e),o!=null&&i.push(Xs(t,o,r))),t=t.return}return i}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dh(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ks(n,o),l!=null&&s.unshift(Xs(n,l,a))):r||(l=ks(n,o),l!=null&&s.push(Xs(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Ay=/\r\n?/g,Ry=/\u0000|\uFFFD/g;function hh(t){return(typeof t=="string"?t:""+t).replace(Ay,`
`).replace(Ry,"")}function Ta(t,e,n){if(e=hh(e),hh(t)!==e&&n)throw Error(ue(425))}function xl(){}var Vc=null,Wc=null;function Xc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,Cy=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,Py=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(t){return ph.resolve(null).then(t).catch(Ly)}:jc;function Ly(t){setTimeout(function(){throw t})}function Pu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Hs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Hs(e)}function Xi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Yo=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Yo,js="__reactProps$"+Yo,Mi="__reactContainer$"+Yo,Yc="__reactEvents$"+Yo,by="__reactListeners$"+Yo,Dy="__reactHandles$"+Yo;function mr(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mh(t);t!==null;){if(n=t[Qn])return n;t=mh(t)}return e}t=n,n=t.parentNode}return null}function ua(t){return t=t[Qn]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function po(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function Xl(t){return t[js]||null}var qc=[],mo=-1;function nr(t){return{current:t}}function it(t){0>mo||(t.current=qc[mo],qc[mo]=null,mo--)}function tt(t,e){mo++,qc[mo]=t.current,t.current=e}var Ji={},Wt=nr(Ji),tn=nr(!1),wr=Ji;function Io(t,e){var n=t.type.contextTypes;if(!n)return Ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function Sl(){it(tn),it(Wt)}function gh(t,e,n){if(Wt.current!==Ji)throw Error(ue(168));tt(Wt,e),tt(tn,n)}function Gg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,g0(t)||"Unknown",r));return ut({},n,i)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,wr=Wt.current,tt(Wt,t),tt(tn,tn.current),!0}function vh(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=Gg(t,e,wr),i.__reactInternalMemoizedMergedChildContext=t,it(tn),it(Wt),tt(Wt,t)):it(tn),tt(tn,n)}var hi=null,jl=!1,Lu=!1;function Vg(t){hi===null?hi=[t]:hi.push(t)}function Uy(t){jl=!0,Vg(t)}function ir(){if(!Lu&&hi!==null){Lu=!0;var t=0,e=Je;try{var n=hi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hi=null,jl=!1}catch(r){throw hi!==null&&(hi=hi.slice(t+1)),pg(zf,ir),r}finally{Je=e,Lu=!1}}return null}var go=[],vo=0,El=null,Tl=0,En=[],Tn=0,Ar=null,mi=1,gi="";function cr(t,e){go[vo++]=Tl,go[vo++]=El,El=t,Tl=e}function Wg(t,e,n){En[Tn++]=mi,En[Tn++]=gi,En[Tn++]=Ar,Ar=t;var i=mi;t=gi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var o=32-Xn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,mi=1<<32-Xn(e)+r|n<<r|i,gi=o+t}else mi=1<<o|n<<r|i,gi=t}function qf(t){t.return!==null&&(cr(t,1),Wg(t,1,0))}function $f(t){for(;t===El;)El=go[--vo],go[vo]=null,Tl=go[--vo],go[vo]=null;for(;t===Ar;)Ar=En[--Tn],En[Tn]=null,gi=En[--Tn],En[Tn]=null,mi=En[--Tn],En[Tn]=null}var mn=null,pn=null,ot=!1,Hn=null;function Xg(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _h(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Xi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:mi,overflow:gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function $c(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kc(t){if(ot){var e=pn;if(e){var n=e;if(!_h(t,e)){if($c(t))throw Error(ue(418));e=Xi(n.nextSibling);var i=mn;e&&_h(t,e)?Xg(i,n):(t.flags=t.flags&-4097|2,ot=!1,mn=t)}}else{if($c(t))throw Error(ue(418));t.flags=t.flags&-4097|2,ot=!1,mn=t}}}function yh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function wa(t){if(t!==mn)return!1;if(!ot)return yh(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xc(t.type,t.memoizedProps)),e&&(e=pn)){if($c(t))throw jg(),Error(ue(418));for(;e;)Xg(t,e),e=Xi(e.nextSibling)}if(yh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Xi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Xi(t.stateNode.nextSibling):null;return!0}function jg(){for(var t=pn;t;)t=Xi(t.nextSibling)}function No(){pn=mn=null,ot=!1}function Kf(t){Hn===null?Hn=[t]:Hn.push(t)}var Iy=wi.ReactCurrentBatchConfig;function kn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var wl=nr(null),Al=null,_o=null,Zf=null;function Qf(){Zf=_o=Al=null}function Jf(t){var e=wl.current;it(wl),t._currentValue=e}function Zc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Co(t,e){Al=t,Zf=_o=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(Zf!==t)if(t={context:t,memoizedValue:e,next:null},_o===null){if(Al===null)throw Error(ue(308));_o=t,Al.dependencies={lanes:0,firstContext:t}}else _o=_o.next=t;return e}var gr=null;function ed(t){gr===null?gr=[t]:gr.push(t)}function Yg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ed(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ni=!1;function td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,ed(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bf(t,n)}}function xh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,i){var r=t.updateQueue;Ni=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,m=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,x=a;switch(h=e,m=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(m,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(m,d,h):y,h==null)break e;d=ut({},d,h);break e;case 2:Ni=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Cr|=s,t.lanes=s,t.memoizedState=d}}function Sh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var $g=new Ym.Component().refs;function Qc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yl={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=qi(t),o=_i(i,r);o.payload=e,n!=null&&(o.callback=n),e=ji(t,o,r),e!==null&&(jn(e,t,r,i),rl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=qi(t),o=_i(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=ji(t,o,r),e!==null&&(jn(e,t,r,i),rl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=qi(t),r=_i(n,i);r.tag=2,e!=null&&(r.callback=e),e=ji(t,r,i),e!==null&&(jn(e,t,i,n),rl(e,t,i))}};function Mh(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Vs(n,i)||!Vs(r,o):!0}function Kg(t,e,n){var i=!1,r=Ji,o=e.contextType;return typeof o=="object"&&o!==null?o=Pn(o):(r=nn(e)?wr:Wt.current,i=e.contextTypes,o=(i=i!=null)?Io(t,r):Ji),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Eh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Yl.enqueueReplaceState(e,e.state,null)}function Jc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=$g,td(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Pn(o):(o=nn(e)?wr:Wt.current,r.context=Io(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Qc(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yl.enqueueReplaceState(r,r.state,null),Rl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===$g&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function Aa(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Th(t){var e=t._init;return e(t._payload)}function Zg(t){function e(f,_){if(t){var v=f.deletions;v===null?(f.deletions=[_],f.flags|=16):v.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=$i(f,_),f.index=0,f.sibling=null,f}function o(f,_,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<_?(f.flags|=2,_):v):(f.flags|=2,_)):(f.flags|=1048576,_)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,v,g){return _===null||_.tag!==6?(_=Ou(v,f.mode,g),_.return=f,_):(_=r(_,v),_.return=f,_)}function l(f,_,v,g){var S=v.type;return S===uo?c(f,_,v.props.children,g,v.key):_!==null&&(_.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ii&&Th(S)===_.type)?(g=r(_,v.props),g.ref=os(f,_,v),g.return=f,g):(g=cl(v.type,v.key,v.props,null,f.mode,g),g.ref=os(f,_,v),g.return=f,g)}function u(f,_,v,g){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=ku(v,f.mode,g),_.return=f,_):(_=r(_,v.children||[]),_.return=f,_)}function c(f,_,v,g,S){return _===null||_.tag!==7?(_=xr(v,f.mode,g,S),_.return=f,_):(_=r(_,v),_.return=f,_)}function d(f,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ou(""+_,f.mode,v),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ma:return v=cl(_.type,_.key,_.props,null,f.mode,v),v.ref=os(f,null,_),v.return=f,v;case lo:return _=ku(_,f.mode,v),_.return=f,_;case Ii:var g=_._init;return d(f,g(_._payload),v)}if(_s(_)||es(_))return _=xr(_,f.mode,v,null),_.return=f,_;Aa(f,_)}return null}function h(f,_,v,g){var S=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(f,_,""+v,g);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ma:return v.key===S?l(f,_,v,g):null;case lo:return v.key===S?u(f,_,v,g):null;case Ii:return S=v._init,h(f,_,S(v._payload),g)}if(_s(v)||es(v))return S!==null?null:c(f,_,v,g,null);Aa(f,v)}return null}function m(f,_,v,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(v)||null,a(_,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ma:return f=f.get(g.key===null?v:g.key)||null,l(_,f,g,S);case lo:return f=f.get(g.key===null?v:g.key)||null,u(_,f,g,S);case Ii:var R=g._init;return m(f,_,v,R(g._payload),S)}if(_s(g)||es(g))return f=f.get(v)||null,c(_,f,g,S,null);Aa(_,g)}return null}function y(f,_,v,g){for(var S=null,R=null,A=_,N=_=0,M=null;A!==null&&N<v.length;N++){A.index>N?(M=A,A=null):M=A.sibling;var T=h(f,A,v[N],g);if(T===null){A===null&&(A=M);break}t&&A&&T.alternate===null&&e(f,A),_=o(T,_,N),R===null?S=T:R.sibling=T,R=T,A=M}if(N===v.length)return n(f,A),ot&&cr(f,N),S;if(A===null){for(;N<v.length;N++)A=d(f,v[N],g),A!==null&&(_=o(A,_,N),R===null?S=A:R.sibling=A,R=A);return ot&&cr(f,N),S}for(A=i(f,A);N<v.length;N++)M=m(A,f,N,v[N],g),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?N:M.key),_=o(M,_,N),R===null?S=M:R.sibling=M,R=M);return t&&A.forEach(function(ne){return e(f,ne)}),ot&&cr(f,N),S}function x(f,_,v,g){var S=es(v);if(typeof S!="function")throw Error(ue(150));if(v=S.call(v),v==null)throw Error(ue(151));for(var R=S=null,A=_,N=_=0,M=null,T=v.next();A!==null&&!T.done;N++,T=v.next()){A.index>N?(M=A,A=null):M=A.sibling;var ne=h(f,A,T.value,g);if(ne===null){A===null&&(A=M);break}t&&A&&ne.alternate===null&&e(f,A),_=o(ne,_,N),R===null?S=ne:R.sibling=ne,R=ne,A=M}if(T.done)return n(f,A),ot&&cr(f,N),S;if(A===null){for(;!T.done;N++,T=v.next())T=d(f,T.value,g),T!==null&&(_=o(T,_,N),R===null?S=T:R.sibling=T,R=T);return ot&&cr(f,N),S}for(A=i(f,A);!T.done;N++,T=v.next())T=m(A,f,N,T.value,g),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?N:T.key),_=o(T,_,N),R===null?S=T:R.sibling=T,R=T);return t&&A.forEach(function(te){return e(f,te)}),ot&&cr(f,N),S}function p(f,_,v,g){if(typeof v=="object"&&v!==null&&v.type===uo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ma:e:{for(var S=v.key,R=_;R!==null;){if(R.key===S){if(S=v.type,S===uo){if(R.tag===7){n(f,R.sibling),_=r(R,v.props.children),_.return=f,f=_;break e}}else if(R.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ii&&Th(S)===R.type){n(f,R.sibling),_=r(R,v.props),_.ref=os(f,R,v),_.return=f,f=_;break e}n(f,R);break}else e(f,R);R=R.sibling}v.type===uo?(_=xr(v.props.children,f.mode,g,v.key),_.return=f,f=_):(g=cl(v.type,v.key,v.props,null,f.mode,g),g.ref=os(f,_,v),g.return=f,f=g)}return s(f);case lo:e:{for(R=v.key;_!==null;){if(_.key===R)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(f,_.sibling),_=r(_,v.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=ku(v,f.mode,g),_.return=f,f=_}return s(f);case Ii:return R=v._init,p(f,_,R(v._payload),g)}if(_s(v))return y(f,_,v,g);if(es(v))return x(f,_,v,g);Aa(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,v),_.return=f,f=_):(n(f,_),_=Ou(v,f.mode,g),_.return=f,f=_),s(f)):n(f,_)}return p}var Fo=Zg(!0),Qg=Zg(!1),ca={},ei=nr(ca),Ys=nr(ca),qs=nr(ca);function vr(t){if(t===ca)throw Error(ue(174));return t}function nd(t,e){switch(tt(qs,e),tt(Ys,t),tt(ei,ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bc(e,t)}it(ei),tt(ei,e)}function Oo(){it(ei),it(Ys),it(qs)}function Jg(t){vr(qs.current);var e=vr(ei.current),n=bc(e,t.type);e!==n&&(tt(Ys,t),tt(ei,n))}function id(t){Ys.current===t&&(it(ei),it(Ys))}var at=nr(0);function Cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bu=[];function rd(){for(var t=0;t<bu.length;t++)bu[t]._workInProgressVersionPrimary=null;bu.length=0}var ol=wi.ReactCurrentDispatcher,Du=wi.ReactCurrentBatchConfig,Rr=0,lt=null,At=null,Ut=null,Pl=!1,Cs=!1,$s=0,Ny=0;function kt(){throw Error(ue(321))}function od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function sd(t,e,n,i,r,o){if(Rr=o,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?zy:By,t=n(i,r),Cs){o=0;do{if(Cs=!1,$s=0,25<=o)throw Error(ue(301));o+=1,Ut=At=null,e.updateQueue=null,ol.current=Hy,t=n(i,r)}while(Cs)}if(ol.current=Ll,e=At!==null&&At.next!==null,Rr=0,Ut=At=lt=null,Pl=!1,e)throw Error(ue(300));return t}function ad(){var t=$s!==0;return $s=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?lt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Ln(){if(At===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Ut===null?lt.memoizedState:Ut.next;if(e!==null)Ut=e,At=t;else{if(t===null)throw Error(ue(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Ut===null?lt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Ks(t,e){return typeof e=="function"?e(t):e}function Uu(t){var e=Ln(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Rr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,lt.lanes|=c,Cr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,Yn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,lt.lanes|=o,Cr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Iu(t){var e=Ln(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Yn(o,e.memoizedState)||(en=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function ev(){}function tv(t,e){var n=lt,i=Ln(),r=e(),o=!Yn(i.memoizedState,r);if(o&&(i.memoizedState=r,en=!0),i=i.queue,ld(rv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Zs(9,iv.bind(null,n,i,r,e),void 0,null),It===null)throw Error(ue(349));Rr&30||nv(n,e,r)}return r}function nv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function iv(t,e,n,i){e.value=n,e.getSnapshot=i,ov(e)&&sv(t)}function rv(t,e,n){return n(function(){ov(e)&&sv(t)})}function ov(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function sv(t){var e=Ei(t,1);e!==null&&jn(e,t,1,-1)}function wh(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ks,lastRenderedState:t},e.queue=t,t=t.dispatch=ky.bind(null,lt,t),[e.memoizedState,t]}function Zs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function av(){return Ln().memoizedState}function sl(t,e,n,i){var r=Kn();lt.flags|=t,r.memoizedState=Zs(1|e,n,void 0,i===void 0?null:i)}function ql(t,e,n,i){var r=Ln();i=i===void 0?null:i;var o=void 0;if(At!==null){var s=At.memoizedState;if(o=s.destroy,i!==null&&od(i,s.deps)){r.memoizedState=Zs(e,n,o,i);return}}lt.flags|=t,r.memoizedState=Zs(1|e,n,o,i)}function Ah(t,e){return sl(8390656,8,t,e)}function ld(t,e){return ql(2048,8,t,e)}function lv(t,e){return ql(4,2,t,e)}function uv(t,e){return ql(4,4,t,e)}function cv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fv(t,e,n){return n=n!=null?n.concat([t]):null,ql(4,4,cv.bind(null,e,t),n)}function ud(){}function dv(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&od(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function hv(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&od(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function pv(t,e,n){return Rr&21?(Yn(n,e)||(n=vg(),lt.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function Fy(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Du.transition;Du.transition={};try{t(!1),e()}finally{Je=n,Du.transition=i}}function mv(){return Ln().memoizedState}function Oy(t,e,n){var i=qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},gv(t))vv(e,n);else if(n=Yg(t,e,n,i),n!==null){var r=$t();jn(n,t,i,r),_v(n,e,i)}}function ky(t,e,n){var i=qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(gv(t))vv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,s)){var l=e.interleaved;l===null?(r.next=r,ed(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Yg(t,e,r,i),n!==null&&(r=$t(),jn(n,t,i,r),_v(n,e,i))}}function gv(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function vv(t,e){Cs=Pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _v(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bf(t,n)}}var Ll={readContext:Pn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},zy={readContext:Pn,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:Ah,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sl(4194308,4,cv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return sl(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Oy.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:wh,useDebugValue:ud,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=wh(!1),e=t[0];return t=Fy.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=lt,r=Kn();if(ot){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),It===null)throw Error(ue(349));Rr&30||nv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Ah(rv.bind(null,i,o,t),[t]),i.flags|=2048,Zs(9,iv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Kn(),e=It.identifierPrefix;if(ot){var n=gi,i=mi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$s++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ny++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},By={readContext:Pn,useCallback:dv,useContext:Pn,useEffect:ld,useImperativeHandle:fv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:hv,useReducer:Uu,useRef:av,useState:function(){return Uu(Ks)},useDebugValue:ud,useDeferredValue:function(t){var e=Ln();return pv(e,At.memoizedState,t)},useTransition:function(){var t=Uu(Ks)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1},Hy={readContext:Pn,useCallback:dv,useContext:Pn,useEffect:ld,useImperativeHandle:fv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:hv,useReducer:Iu,useRef:av,useState:function(){return Iu(Ks)},useDebugValue:ud,useDeferredValue:function(t){var e=Ln();return At===null?e.memoizedState=t:pv(e,At.memoizedState,t)},useTransition:function(){var t=Iu(Ks)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1};function ko(t,e){try{var n="",i=e;do n+=m0(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Nu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ef(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Gy=typeof WeakMap=="function"?WeakMap:Map;function yv(t,e,n){n=_i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Dl||(Dl=!0,ff=i),ef(t,e)},n}function xv(t,e,n){n=_i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ef(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ef(t,e),typeof i!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Rh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Gy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=nx.bind(null,t,e,n),e.then(t,t))}function Ch(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ph(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_i(-1,1),e.tag=2,ji(n,e,1))),n.lanes|=1),t)}var Vy=wi.ReactCurrentOwner,en=!1;function Yt(t,e,n,i){e.child=t===null?Qg(e,null,n,i):Fo(e,t.child,n,i)}function Lh(t,e,n,i,r){n=n.render;var o=e.ref;return Co(e,r),i=sd(t,e,n,i,o,r),n=ad(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(ot&&n&&qf(e),e.flags|=1,Yt(t,e,i,r),e.child)}function bh(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!vd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Sv(t,e,o,i,r)):(t=cl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vs,n(s,i)&&t.ref===e.ref)return Ti(t,e,r)}return e.flags|=1,t=$i(o,i),t.ref=e.ref,t.return=e,e.child=t}function Sv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Vs(o,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,Ti(t,e,r)}return tf(t,e,n,i,r)}function Mv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(xo,dn),dn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(xo,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,tt(xo,dn),dn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,tt(xo,dn),dn|=i;return Yt(t,e,r,n),e.child}function Ev(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tf(t,e,n,i,r){var o=nn(n)?wr:Wt.current;return o=Io(e,o),Co(e,r),n=sd(t,e,n,i,o,r),i=ad(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(ot&&i&&qf(e),e.flags|=1,Yt(t,e,n,r),e.child)}function Dh(t,e,n,i,r){if(nn(n)){var o=!0;Ml(e)}else o=!1;if(Co(e,r),e.stateNode===null)al(t,e),Kg(e,n,i),Jc(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=nn(n)?wr:Wt.current,u=Io(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Eh(e,s,i,u),Ni=!1;var h=e.memoizedState;s.state=h,Rl(e,i,s,r),l=e.memoizedState,a!==i||h!==l||tn.current||Ni?(typeof c=="function"&&(Qc(e,n,c,i),l=e.memoizedState),(a=Ni||Mh(e,n,a,i,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,qg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:kn(e.type,a),s.props=u,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=nn(n)?wr:Wt.current,l=Io(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Eh(e,s,i,l),Ni=!1,h=e.memoizedState,s.state=h,Rl(e,i,s,r);var y=e.memoizedState;a!==d||h!==y||tn.current||Ni?(typeof m=="function"&&(Qc(e,n,m,i),y=e.memoizedState),(u=Ni||Mh(e,n,u,i,h,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),s.props=i,s.state=y,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return nf(t,e,n,i,o,r)}function nf(t,e,n,i,r,o){Ev(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&vh(e,n,!1),Ti(t,e,o);i=e.stateNode,Vy.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Fo(e,t.child,null,o),e.child=Fo(e,null,a,o)):Yt(t,e,a,o),e.memoizedState=i.state,r&&vh(e,n,!0),e.child}function Tv(t){var e=t.stateNode;e.pendingContext?gh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gh(t,e.context,!1),nd(t,e.containerInfo)}function Uh(t,e,n,i,r){return No(),Kf(r),e.flags|=256,Yt(t,e,n,i),e.child}var rf={dehydrated:null,treeContext:null,retryLane:0};function of(t){return{baseLanes:t,cachePool:null,transitions:null}}function wv(t,e,n){var i=e.pendingProps,r=at.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(at,r&1),t===null)return Kc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Zl(s,i,0,null),t=xr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=of(n),e.memoizedState=rf,t):cd(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Wy(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$i(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=$i(a,o):(o=xr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?of(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=rf,i}return o=t.child,t=o.sibling,i=$i(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function cd(t,e){return e=Zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ra(t,e,n,i){return i!==null&&Kf(i),Fo(e,t.child,null,n),t=cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Wy(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Nu(Error(ue(422))),Ra(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Zl({mode:"visible",children:i.children},r,0,null),o=xr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Fo(e,t.child,null,s),e.child.memoizedState=of(s),e.memoizedState=rf,o);if(!(e.mode&1))return Ra(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ue(419)),i=Nu(o,i,void 0),Ra(t,e,s,i)}if(a=(s&t.childLanes)!==0,en||a){if(i=It,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ei(t,r),jn(i,t,r,-1))}return gd(),i=Nu(Error(ue(421))),Ra(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ix.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,pn=Xi(r.nextSibling),mn=e,ot=!0,Hn=null,t!==null&&(En[Tn++]=mi,En[Tn++]=gi,En[Tn++]=Ar,mi=t.id,gi=t.overflow,Ar=e),e=cd(e,i.children),e.flags|=4096,e)}function Ih(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Zc(t.return,e,n)}function Fu(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Av(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Yt(t,e,i.children,n),i=at.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ih(t,n,e);else if(t.tag===19)Ih(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(at,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Fu(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Fu(e,!0,n,null,o);break;case"together":Fu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ti(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=$i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Xy(t,e,n){switch(e.tag){case 3:Tv(e),No();break;case 5:Jg(e);break;case 1:nn(e.type)&&Ml(e);break;case 4:nd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?wv(t,e,n):(tt(at,at.current&1),t=Ti(t,e,n),t!==null?t.sibling:null);tt(at,at.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Av(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,Mv(t,e,n)}return Ti(t,e,n)}var Rv,sf,Cv,Pv;Rv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sf=function(){};Cv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vr(ei.current);var o=null;switch(n){case"input":r=Rc(t,r),i=Rc(t,i),o=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),o=[];break;case"textarea":r=Lc(t,r),i=Lc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xl)}Dc(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&nt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Pv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ss(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function jy(t,e,n){var i=e.pendingProps;switch($f(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return nn(e.type)&&Sl(),zt(e),null;case 3:return i=e.stateNode,Oo(),it(tn),it(Wt),rd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(pf(Hn),Hn=null))),sf(t,e),zt(e),null;case 5:id(e);var r=vr(qs.current);if(n=e.type,t!==null&&e.stateNode!=null)Cv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return zt(e),null}if(t=vr(ei.current),wa(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Qn]=e,i[js]=o,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<xs.length;r++)nt(xs[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":Vd(i,o),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},nt("invalid",i);break;case"textarea":Xd(i,o),nt("invalid",i)}Dc(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ta(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ta(i.textContent,a,t),r=["children",""+a]):Fs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&nt("scroll",i)}switch(n){case"input":ga(i),Wd(i,o,!0);break;case"textarea":ga(i),jd(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=xl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ng(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Qn]=e,t[js]=i,Rv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Uc(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<xs.length;r++)nt(xs[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":Vd(t,i),r=Rc(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),nt("invalid",t);break;case"textarea":Xd(t,i),r=Lc(t,i),nt("invalid",t);break;default:r=i}Dc(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?og(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ig(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Os(t,l):typeof l=="number"&&Os(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&nt("scroll",t):l!=null&&If(t,o,l,s))}switch(n){case"input":ga(t),Wd(t,i,!1);break;case"textarea":ga(t),jd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Qi(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?To(t,!!i.multiple,o,!1):i.defaultValue!=null&&To(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)Pv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=vr(qs.current),vr(ei.current),wa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(o=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:Ta(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return zt(e),null;case 13:if(it(at),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&pn!==null&&e.mode&1&&!(e.flags&128))jg(),No(),e.flags|=98560,o=!1;else if(o=wa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ue(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ue(317));o[Qn]=e}else No(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),o=!1}else Hn!==null&&(pf(Hn),Hn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?Rt===0&&(Rt=3):gd())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Oo(),sf(t,e),t===null&&Ws(e.stateNode.containerInfo),zt(e),null;case 10:return Jf(e.type._context),zt(e),null;case 17:return nn(e.type)&&Sl(),zt(e),null;case 19:if(it(at),o=e.memoizedState,o===null)return zt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)ss(o,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Cl(t),s!==null){for(e.flags|=128,ss(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(at,at.current&1|2),e.child}t=t.sibling}o.tail!==null&&vt()>zo&&(e.flags|=128,i=!0,ss(o,!1),e.lanes=4194304)}else{if(!i)if(t=Cl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ss(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ot)return zt(e),null}else 2*vt()-o.renderingStartTime>zo&&n!==1073741824&&(e.flags|=128,i=!0,ss(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=vt(),e.sibling=null,n=at.current,tt(at,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return md(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function Yy(t,e){switch($f(e),e.tag){case 1:return nn(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Oo(),it(tn),it(Wt),rd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return id(e),null;case 13:if(it(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));No()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return it(at),null;case 4:return Oo(),null;case 10:return Jf(e.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var Ca=!1,Gt=!1,qy=typeof WeakSet=="function"?WeakSet:Set,ve=null;function yo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){dt(t,e,i)}else n.current=null}function af(t,e,n){try{n()}catch(i){dt(t,e,i)}}var Nh=!1;function $y(t,e){if(Vc=vl,t=Ug(),Yf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++c===i&&(l=s),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wc={focusedElem:t,selectionRange:n},vl=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,p=y.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:kn(e.type,x),p);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(g){dt(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return y=Nh,Nh=!1,y}function Ps(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&af(e,n,o)}r=r.next}while(r!==i)}}function $l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function lf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lv(t){var e=t.alternate;e!==null&&(t.alternate=null,Lv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[js],delete e[Yc],delete e[by],delete e[Dy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bv(t){return t.tag===5||t.tag===3||t.tag===4}function Fh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xl));else if(i!==4&&(t=t.child,t!==null))for(uf(t,e,n),t=t.sibling;t!==null;)uf(t,e,n),t=t.sibling}function cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(cf(t,e,n),t=t.sibling;t!==null;)cf(t,e,n),t=t.sibling}var Nt=null,zn=!1;function Pi(t,e,n){for(n=n.child;n!==null;)Dv(t,e,n),n=n.sibling}function Dv(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Hl,n)}catch{}switch(n.tag){case 5:Gt||yo(n,e);case 6:var i=Nt,r=zn;Nt=null,Pi(t,e,n),Nt=i,zn=r,Nt!==null&&(zn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(zn?(t=Nt,n=n.stateNode,t.nodeType===8?Pu(t.parentNode,n):t.nodeType===1&&Pu(t,n),Hs(t)):Pu(Nt,n.stateNode));break;case 4:i=Nt,r=zn,Nt=n.stateNode.containerInfo,zn=!0,Pi(t,e,n),Nt=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&af(n,e,s),r=r.next}while(r!==i)}Pi(t,e,n);break;case 1:if(!Gt&&(yo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){dt(n,e,a)}Pi(t,e,n);break;case 21:Pi(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Pi(t,e,n),Gt=i):Pi(t,e,n);break;default:Pi(t,e,n)}}function Oh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qy),e.forEach(function(i){var r=rx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,zn=!1;break e;case 3:Nt=a.stateNode.containerInfo,zn=!0;break e;case 4:Nt=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Nt===null)throw Error(ue(160));Dv(o,s,r),Nt=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){dt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Uv(e,t),e=e.sibling}function Uv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),$n(t),i&4){try{Ps(3,t,t.return),$l(3,t)}catch(x){dt(t,t.return,x)}try{Ps(5,t,t.return)}catch(x){dt(t,t.return,x)}}break;case 1:Un(e,t),$n(t),i&512&&n!==null&&yo(n,n.return);break;case 5:if(Un(e,t),$n(t),i&512&&n!==null&&yo(n,n.return),t.flags&32){var r=t.stateNode;try{Os(r,"")}catch(x){dt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&eg(r,o),Uc(a,s);var u=Uc(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?og(r,d):c==="dangerouslySetInnerHTML"?ig(r,d):c==="children"?Os(r,d):If(r,c,d,u)}switch(a){case"input":Cc(r,o);break;case"textarea":tg(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?To(r,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?To(r,!!o.multiple,o.defaultValue,!0):To(r,!!o.multiple,o.multiple?[]:"",!1))}r[js]=o}catch(x){dt(t,t.return,x)}}break;case 6:if(Un(e,t),$n(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){dt(t,t.return,x)}}break;case 3:if(Un(e,t),$n(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Hs(e.containerInfo)}catch(x){dt(t,t.return,x)}break;case 4:Un(e,t),$n(t);break;case 13:Un(e,t),$n(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(hd=vt())),i&4&&Oh(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||c,Un(e,t),Gt=u):Un(e,t),$n(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ve=t,c=t.child;c!==null;){for(d=ve=c;ve!==null;){switch(h=ve,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ps(4,h,h.return);break;case 1:yo(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(x){dt(i,n,x)}}break;case 5:yo(h,h.return);break;case 22:if(h.memoizedState!==null){zh(d);continue}}m!==null?(m.return=h,ve=m):zh(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=rg("display",s))}catch(x){dt(t,t.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){dt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Un(e,t),$n(t),i&4&&Oh(t);break;case 21:break;default:Un(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bv(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Os(r,""),i.flags&=-33);var o=Fh(t);cf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Fh(t);uf(t,a,s);break;default:throw Error(ue(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ky(t,e,n){ve=t,Iv(t)}function Iv(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Ca;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=Ca;var u=Gt;if(Ca=s,(Gt=l)&&!u)for(ve=r;ve!==null;)s=ve,l=s.child,s.tag===22&&s.memoizedState!==null?Bh(r):l!==null?(l.return=s,ve=l):Bh(r);for(;o!==null;)ve=o,Iv(o),o=o.sibling;ve=r,Ca=a,Gt=u}kh(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,ve=o):kh(t)}}function kh(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||$l(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Sh(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sh(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Hs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Gt||e.flags&512&&lf(e)}catch(h){dt(e,e.return,h)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function zh(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Bh(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$l(4,e)}catch(l){dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var o=e.return;try{lf(e)}catch(l){dt(e,o,l)}break;case 5:var s=e.return;try{lf(e)}catch(l){dt(e,s,l)}}}catch(l){dt(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var Zy=Math.ceil,bl=wi.ReactCurrentDispatcher,fd=wi.ReactCurrentOwner,Cn=wi.ReactCurrentBatchConfig,qe=0,It=null,Mt=null,Ft=0,dn=0,xo=nr(0),Rt=0,Qs=null,Cr=0,Kl=0,dd=0,Ls=null,Jt=null,hd=0,zo=1/0,di=null,Dl=!1,ff=null,Yi=null,Pa=!1,zi=null,Ul=0,bs=0,df=null,ll=-1,ul=0;function $t(){return qe&6?vt():ll!==-1?ll:ll=vt()}function qi(t){return t.mode&1?qe&2&&Ft!==0?Ft&-Ft:Iy.transition!==null?(ul===0&&(ul=vg()),ul):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Tg(t.type)),t):1}function jn(t,e,n,i){if(50<bs)throw bs=0,df=null,Error(ue(185));aa(t,n,i),(!(qe&2)||t!==It)&&(t===It&&(!(qe&2)&&(Kl|=n),Rt===4&&Oi(t,Ft)),rn(t,i),n===1&&qe===0&&!(e.mode&1)&&(zo=vt()+500,jl&&ir()))}function rn(t,e){var n=t.callbackNode;I0(t,e);var i=gl(t,t===It?Ft:0);if(i===0)n!==null&&$d(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&$d(n),e===1)t.tag===0?Uy(Hh.bind(null,t)):Vg(Hh.bind(null,t)),Py(function(){!(qe&6)&&ir()}),n=null;else{switch(_g(i)){case 1:n=zf;break;case 4:n=mg;break;case 16:n=ml;break;case 536870912:n=gg;break;default:n=ml}n=Gv(n,Nv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Nv(t,e){if(ll=-1,ul=0,qe&6)throw Error(ue(327));var n=t.callbackNode;if(Po()&&t.callbackNode!==n)return null;var i=gl(t,t===It?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Il(t,i);else{e=i;var r=qe;qe|=2;var o=Ov();(It!==t||Ft!==e)&&(di=null,zo=vt()+500,yr(t,e));do try{ex();break}catch(a){Fv(t,a)}while(1);Qf(),bl.current=o,qe=r,Mt!==null?e=0:(It=null,Ft=0,e=Rt)}if(e!==0){if(e===2&&(r=kc(t),r!==0&&(i=r,e=hf(t,r))),e===1)throw n=Qs,yr(t,0),Oi(t,i),rn(t,vt()),n;if(e===6)Oi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Qy(r)&&(e=Il(t,i),e===2&&(o=kc(t),o!==0&&(i=o,e=hf(t,o))),e===1))throw n=Qs,yr(t,0),Oi(t,i),rn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:fr(t,Jt,di);break;case 3:if(Oi(t,i),(i&130023424)===i&&(e=hd+500-vt(),10<e)){if(gl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=jc(fr.bind(null,t,Jt,di),e);break}fr(t,Jt,di);break;case 4:if(Oi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Xn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Zy(i/1960))-i,10<i){t.timeoutHandle=jc(fr.bind(null,t,Jt,di),i);break}fr(t,Jt,di);break;case 5:fr(t,Jt,di);break;default:throw Error(ue(329))}}}return rn(t,vt()),t.callbackNode===n?Nv.bind(null,t):null}function hf(t,e){var n=Ls;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=Il(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&pf(e)),t}function pf(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function Qy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Yn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Oi(t,e){for(e&=~dd,e&=~Kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function Hh(t){if(qe&6)throw Error(ue(327));Po();var e=gl(t,0);if(!(e&1))return rn(t,vt()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var i=kc(t);i!==0&&(e=i,n=hf(t,i))}if(n===1)throw n=Qs,yr(t,0),Oi(t,e),rn(t,vt()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,Jt,di),rn(t,vt()),null}function pd(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(zo=vt()+500,jl&&ir())}}function Pr(t){zi!==null&&zi.tag===0&&!(qe&6)&&Po();var e=qe;qe|=1;var n=Cn.transition,i=Je;try{if(Cn.transition=null,Je=1,t)return t()}finally{Je=i,Cn.transition=n,qe=e,!(qe&6)&&ir()}}function md(){dn=xo.current,it(xo)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Cy(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch($f(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sl();break;case 3:Oo(),it(tn),it(Wt),rd();break;case 5:id(i);break;case 4:Oo();break;case 13:it(at);break;case 19:it(at);break;case 10:Jf(i.type._context);break;case 22:case 23:md()}n=n.return}if(It=t,Mt=t=$i(t.current,null),Ft=dn=e,Rt=0,Qs=null,dd=Kl=Cr=0,Jt=Ls=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}gr=null}return t}function Fv(t,e){do{var n=Mt;try{if(Qf(),ol.current=Ll,Pl){for(var i=lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pl=!1}if(Rr=0,Ut=At=lt=null,Cs=!1,$s=0,fd.current=null,n===null||n.return===null){Rt=1,Qs=e,Mt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Ch(s);if(m!==null){m.flags&=-257,Ph(m,s,a,o,e),m.mode&1&&Rh(o,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var x=new Set;x.add(l),e.updateQueue=x}else y.add(l);break e}else{if(!(e&1)){Rh(o,u,e),gd();break e}l=Error(ue(426))}}else if(ot&&a.mode&1){var p=Ch(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Ph(p,s,a,o,e),Kf(ko(l,a));break e}}o=l=ko(l,a),Rt!==4&&(Rt=2),Ls===null?Ls=[o]:Ls.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=yv(o,l,e);xh(o,f);break e;case 1:a=l;var _=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Yi===null||!Yi.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var g=xv(o,a,e);xh(o,g);break e}}o=o.return}while(o!==null)}zv(n)}catch(S){e=S,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(1)}function Ov(){var t=bl.current;return bl.current=Ll,t===null?Ll:t}function gd(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),It===null||!(Cr&268435455)&&!(Kl&268435455)||Oi(It,Ft)}function Il(t,e){var n=qe;qe|=2;var i=Ov();(It!==t||Ft!==e)&&(di=null,yr(t,e));do try{Jy();break}catch(r){Fv(t,r)}while(1);if(Qf(),qe=n,bl.current=i,Mt!==null)throw Error(ue(261));return It=null,Ft=0,Rt}function Jy(){for(;Mt!==null;)kv(Mt)}function ex(){for(;Mt!==null&&!w0();)kv(Mt)}function kv(t){var e=Hv(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?zv(t):Mt=e,fd.current=null}function zv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Yy(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Mt=null;return}}else if(n=jy(n,e,dn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Rt===0&&(Rt=5)}function fr(t,e,n){var i=Je,r=Cn.transition;try{Cn.transition=null,Je=1,tx(t,e,n,i)}finally{Cn.transition=r,Je=i}return null}function tx(t,e,n,i){do Po();while(zi!==null);if(qe&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(N0(t,o),t===It&&(Mt=It=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pa||(Pa=!0,Gv(ml,function(){return Po(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Cn.transition,Cn.transition=null;var s=Je;Je=1;var a=qe;qe|=4,fd.current=null,$y(t,n),Uv(n,t),Sy(Wc),vl=!!Vc,Wc=Vc=null,t.current=n,Ky(n),A0(),qe=a,Je=s,Cn.transition=o}else t.current=n;if(Pa&&(Pa=!1,zi=t,Ul=r),o=t.pendingLanes,o===0&&(Yi=null),P0(n.stateNode),rn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Dl)throw Dl=!1,t=ff,ff=null,t;return Ul&1&&t.tag!==0&&Po(),o=t.pendingLanes,o&1?t===df?bs++:(bs=0,df=t):bs=0,ir(),null}function Po(){if(zi!==null){var t=_g(Ul),e=Cn.transition,n=Je;try{if(Cn.transition=null,Je=16>t?16:t,zi===null)var i=!1;else{if(t=zi,zi=null,Ul=0,qe&6)throw Error(ue(331));var r=qe;for(qe|=4,ve=t.current;ve!==null;){var o=ve,s=o.child;if(ve.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ve=u;ve!==null;){var c=ve;switch(c.tag){case 0:case 11:case 15:Ps(8,c,o)}var d=c.child;if(d!==null)d.return=c,ve=d;else for(;ve!==null;){c=ve;var h=c.sibling,m=c.return;if(Lv(c),c===u){ve=null;break}if(h!==null){h.return=m,ve=h;break}ve=m}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}ve=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ve=s;else e:for(;ve!==null;){if(o=ve,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ps(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,ve=f;break e}ve=o.return}}var _=t.current;for(ve=_;ve!==null;){s=ve;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,ve=v;else e:for(s=_;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$l(9,a)}}catch(S){dt(a,a.return,S)}if(a===s){ve=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,ve=g;break e}ve=a.return}}if(qe=r,ir(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Hl,t)}catch{}i=!0}return i}finally{Je=n,Cn.transition=e}}return!1}function Gh(t,e,n){e=ko(n,e),e=yv(t,e,1),t=ji(t,e,1),e=$t(),t!==null&&(aa(t,1,e),rn(t,e))}function dt(t,e,n){if(t.tag===3)Gh(t,t,n);else for(;e!==null;){if(e.tag===3){Gh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yi===null||!Yi.has(i))){t=ko(n,t),t=xv(e,t,1),e=ji(e,t,1),t=$t(),e!==null&&(aa(e,1,t),rn(e,t));break}}e=e.return}}function nx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(Ft&n)===n&&(Rt===4||Rt===3&&(Ft&130023424)===Ft&&500>vt()-hd?yr(t,0):dd|=n),rn(t,e)}function Bv(t,e){e===0&&(t.mode&1?(e=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):e=1);var n=$t();t=Ei(t,e),t!==null&&(aa(t,e,n),rn(t,n))}function ix(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bv(t,n)}function rx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),Bv(t,n)}var Hv;Hv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,Xy(t,e,n);en=!!(t.flags&131072)}else en=!1,ot&&e.flags&1048576&&Wg(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;al(t,e),t=e.pendingProps;var r=Io(e,Wt.current);Co(e,n),r=sd(null,e,i,t,r,n);var o=ad();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(o=!0,Ml(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,td(e),r.updater=Yl,e.stateNode=r,r._reactInternals=e,Jc(e,i,t,n),e=nf(null,e,i,!0,o,n)):(e.tag=0,ot&&o&&qf(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(al(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sx(i),t=kn(i,t),r){case 0:e=tf(null,e,i,t,n);break e;case 1:e=Dh(null,e,i,t,n);break e;case 11:e=Lh(null,e,i,t,n);break e;case 14:e=bh(null,e,i,kn(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),tf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Dh(t,e,i,r,n);case 3:e:{if(Tv(e),t===null)throw Error(ue(387));i=e.pendingProps,o=e.memoizedState,r=o.element,qg(t,e),Rl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=ko(Error(ue(423)),e),e=Uh(t,e,i,n,r);break e}else if(i!==r){r=ko(Error(ue(424)),e),e=Uh(t,e,i,n,r);break e}else for(pn=Xi(e.stateNode.containerInfo.firstChild),mn=e,ot=!0,Hn=null,n=Qg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(No(),i===r){e=Ti(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return Jg(e),t===null&&Kc(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Xc(i,r)?s=null:o!==null&&Xc(i,o)&&(e.flags|=32),Ev(t,e),Yt(t,e,s,n),e.child;case 6:return t===null&&Kc(e),null;case 13:return wv(t,e,n);case 4:return nd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Fo(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Lh(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,tt(wl,i._currentValue),i._currentValue=s,o!==null)if(Yn(o.value,s)){if(o.children===r.children&&!tn.current){e=Ti(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=_i(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Zc(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ue(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Zc(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Co(e,n),r=Pn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),bh(t,e,i,r,n);case 15:return Sv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),al(t,e),e.tag=1,nn(i)?(t=!0,Ml(e)):t=!1,Co(e,n),Kg(e,i,r),Jc(e,i,r,n),nf(null,e,i,!0,t,n);case 19:return Av(t,e,n);case 22:return Mv(t,e,n)}throw Error(ue(156,e.tag))};function Gv(t,e){return pg(t,e)}function ox(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new ox(t,e,n,i)}function vd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sx(t){if(typeof t=="function")return vd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ff)return 11;if(t===Of)return 14}return 2}function $i(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")vd(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case uo:return xr(n.children,r,o,e);case Nf:s=8,r|=8;break;case Ec:return t=An(12,n,e,r|2),t.elementType=Ec,t.lanes=o,t;case Tc:return t=An(13,n,e,r),t.elementType=Tc,t.lanes=o,t;case wc:return t=An(19,n,e,r),t.elementType=wc,t.lanes=o,t;case Zm:return Zl(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $m:s=10;break e;case Km:s=9;break e;case Ff:s=11;break e;case Of:s=14;break e;case Ii:s=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=An(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function xr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function Zl(t,e,n,i){return t=An(22,t,i,e),t.elementType=Zm,t.lanes=n,t.stateNode={isHidden:!1},t}function Ou(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function ku(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ax(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_u(0),this.expirationTimes=_u(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_u(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _d(t,e,n,i,r,o,s,a,l){return t=new ax(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=An(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},td(o),t}function lx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Vv(t){if(!t)return Ji;t=t._reactInternals;e:{if(Nr(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(nn(n))return Gg(t,n,e)}return e}function Wv(t,e,n,i,r,o,s,a,l){return t=_d(n,i,!0,t,r,o,s,a,l),t.context=Vv(null),n=t.current,i=$t(),r=qi(n),o=_i(i,r),o.callback=e??null,ji(n,o,r),t.current.lanes=r,aa(t,r,i),rn(t,i),t}function Ql(t,e,n,i){var r=e.current,o=$t(),s=qi(r);return n=Vv(n),e.context===null?e.context=n:e.pendingContext=n,e=_i(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ji(r,e,s),t!==null&&(jn(t,r,s,o),rl(t,r,s)),s}function Nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yd(t,e){Vh(t,e),(t=t.alternate)&&Vh(t,e)}function ux(){return null}var Xv=typeof reportError=="function"?reportError:function(t){console.error(t)};function xd(t){this._internalRoot=t}Jl.prototype.render=xd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));Ql(t,e,null,null)};Jl.prototype.unmount=xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){Ql(null,t,null,null)}),e[Mi]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fi.length&&e!==0&&e<Fi[n].priority;n++);Fi.splice(n,0,t),n===0&&Eg(t)}};function Sd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function eu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wh(){}function cx(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=Nl(s);o.call(u)}}var s=Wv(e,i,t,0,null,!1,!1,"",Wh);return t._reactRootContainer=s,t[Mi]=s.current,Ws(t.nodeType===8?t.parentNode:t),Pr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Nl(l);a.call(u)}}var l=_d(t,0,!1,null,null,!1,!1,"",Wh);return t._reactRootContainer=l,t[Mi]=l.current,Ws(t.nodeType===8?t.parentNode:t),Pr(function(){Ql(e,l,n,i)}),l}function tu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Nl(s);a.call(l)}}Ql(e,s,t,r)}else s=cx(n,e,t,r,i);return Nl(s)}yg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ys(e.pendingLanes);n!==0&&(Bf(e,n|1),rn(e,vt()),!(qe&6)&&(zo=vt()+500,ir()))}break;case 13:Pr(function(){var i=Ei(t,1);if(i!==null){var r=$t();jn(i,t,1,r)}}),yd(t,1)}};Hf=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=$t();jn(e,t,134217728,n)}yd(t,134217728)}};xg=function(t){if(t.tag===13){var e=qi(t),n=Ei(t,e);if(n!==null){var i=$t();jn(n,t,e,i)}yd(t,e)}};Sg=function(){return Je};Mg=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Nc=function(t,e,n){switch(e){case"input":if(Cc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Xl(i);if(!r)throw Error(ue(90));Jm(i),Cc(i,r)}}}break;case"textarea":tg(t,n);break;case"select":e=n.value,e!=null&&To(t,!!n.multiple,e,!1)}};lg=pd;ug=Pr;var fx={usingClientEntryPoint:!1,Events:[ua,po,Xl,sg,ag,pd]},as={findFiberByHostInstance:mr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dx={bundleType:as.bundleType,version:as.version,rendererPackageName:as.rendererPackageName,rendererConfig:as.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dg(t),t===null?null:t.stateNode},findFiberByHostInstance:as.findFiberByHostInstance||ux,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{Hl=La.inject(dx),Jn=La}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fx;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sd(e))throw Error(ue(200));return lx(t,e,null,n)};_n.createRoot=function(t,e){if(!Sd(t))throw Error(ue(299));var n=!1,i="",r=Xv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_d(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,Ws(t.nodeType===8?t.parentNode:t),new xd(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=dg(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Pr(t)};_n.hydrate=function(t,e,n){if(!eu(e))throw Error(ue(200));return tu(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!Sd(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Xv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Wv(e,null,t,1,n??null,r,!1,o,s),t[Mi]=e.current,Ws(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Jl(e)};_n.render=function(t,e,n){if(!eu(e))throw Error(ue(200));return tu(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!eu(t))throw Error(ue(40));return t._reactRootContainer?(Pr(function(){tu(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};_n.unstable_batchedUpdates=pd;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!eu(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return tu(t,e,n,!1,i)};_n.version="18.2.0-next-9e3b772b8-20220608";function jv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jv)}catch(t){console.error(t)}}jv(),Wm.exports=_n;var hx=Wm.exports,Xh=hx;Sc.createRoot=Xh.createRoot,Sc.hydrateRoot=Xh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Md="154",Gr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},px=0,jh=1,mx=2,Yv=1,gx=2,fi=3,er=0,on=1,pi=2,Ki=0,Lo=1,Yh=2,qh=3,$h=4,vx=5,so=100,_x=101,yx=102,Kh=103,Zh=104,xx=200,Sx=201,Mx=202,Ex=203,qv=204,$v=205,Tx=206,wx=207,Ax=208,Rx=209,Cx=210,Px=0,Lx=1,bx=2,mf=3,Dx=4,Ux=5,Ix=6,Nx=7,Kv=0,Fx=1,Ox=2,yi=0,kx=1,zx=2,Bx=3,Hx=4,Gx=5,Zv=300,Bo=301,Ho=302,gf=303,vf=304,nu=306,_f=1e3,Vn=1001,yf=1002,qt=1003,Qh=1004,zu=1005,wn=1006,Vx=1007,Js=1008,Zi=1009,Wx=1010,Xx=1011,Ed=1012,Qv=1013,Bi=1014,Hi=1015,ea=1016,Jv=1017,e_=1018,Sr=1020,jx=1021,Wn=1023,Yx=1024,qx=1025,Mr=1026,Go=1027,$x=1028,t_=1029,Kx=1030,n_=1031,i_=1033,Bu=33776,Hu=33777,Gu=33778,Vu=33779,Jh=35840,ep=35841,tp=35842,np=35843,Zx=36196,ip=37492,rp=37496,op=37808,sp=37809,ap=37810,lp=37811,up=37812,cp=37813,fp=37814,dp=37815,hp=37816,pp=37817,mp=37818,gp=37819,vp=37820,_p=37821,Wu=36492,Qx=36283,yp=36284,xp=36285,Sp=36286,r_=3e3,Er=3001,Jx=3200,eS=3201,o_=0,tS=1,Tr="",He="srgb",ni="srgb-linear",s_="display-p3",Xu=7680,nS=519,iS=512,rS=513,oS=514,sS=515,aS=516,lS=517,uS=518,cS=519,Mp=35044,Ep="300 es",xf=1035,vi=2e3,Fl=2001;class Fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tp=1234567;const Ds=Math.PI/180,ta=180/Math.PI;function qo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Vt(t,e,n){return Math.max(e,Math.min(n,t))}function Td(t,e){return(t%e+e)%e}function fS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function dS(t,e,n){return t!==e?(n-t)/(e-t):0}function Us(t,e,n){return(1-n)*t+n*e}function hS(t,e,n,i){return Us(t,e,1-Math.exp(-n*i))}function pS(t,e=1){return e-Math.abs(Td(t,e*2)-e)}function mS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function gS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function vS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function _S(t,e){return t+Math.random()*(e-t)}function yS(t){return t*(.5-Math.random())}function xS(t){t!==void 0&&(Tp=t);let e=Tp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function SS(t){return t*Ds}function MS(t){return t*ta}function Sf(t){return(t&t-1)===0&&t!==0}function ES(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Ol(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function TS(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),u=o((e+i)/2),c=s((e+i)/2),d=o((e-i)/2),h=s((e-i)/2),m=o((i-e)/2),y=s((i-e)/2);switch(r){case"XYX":t.set(a*c,l*d,l*h,a*u);break;case"YZY":t.set(l*h,a*c,l*d,a*u);break;case"ZXZ":t.set(l*d,l*h,a*c,a*u);break;case"XZX":t.set(a*c,l*y,l*m,a*u);break;case"YXY":t.set(l*m,a*c,l*y,a*u);break;case"ZYZ":t.set(l*y,l*m,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ss(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const wS={DEG2RAD:Ds,RAD2DEG:ta,generateUUID:qo,clamp:Vt,euclideanModulo:Td,mapLinear:fS,inverseLerp:dS,lerp:Us,damp:hS,pingpong:pS,smoothstep:mS,smootherstep:gS,randInt:vS,randFloat:_S,randFloatSpread:yS,seededRandom:xS,degToRad:SS,radToDeg:MS,isPowerOfTwo:Sf,ceilPowerOfTwo:ES,floorPowerOfTwo:Ol,setQuaternionFromProperEuler:TS,normalize:Qt,denormalize:Ss};class Fe{constructor(e=0,n=0){Fe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,o,s,a,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],m=i[5],y=i[8],x=r[0],p=r[3],f=r[6],_=r[1],v=r[4],g=r[7],S=r[2],R=r[5],A=r[8];return o[0]=s*x+a*_+l*S,o[3]=s*p+a*v+l*R,o[6]=s*f+a*g+l*A,o[1]=u*x+c*_+d*S,o[4]=u*p+c*v+d*R,o[7]=u*f+c*g+d*A,o[2]=h*x+m*_+y*S,o[5]=h*p+m*v+y*R,o[8]=h*f+m*g+y*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*s-a*u,h=a*l-c*o,m=u*o-s*l,y=n*d+i*h+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=d*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*s)*x,e[3]=h*x,e[4]=(c*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ju.makeScale(e,n)),this}rotate(e){return this.premultiply(ju.makeRotation(-e)),this}translate(e,n){return this.premultiply(ju.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ju=new Ge;function a_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function na(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const wp={};function Is(t){t in wp||(wp[t]=!0,console.warn(t))}function bo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Yu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const AS=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),RS=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function CS(t){return t.convertSRGBToLinear().applyMatrix3(RS)}function PS(t){return t.applyMatrix3(AS).convertLinearToSRGB()}const LS={[ni]:t=>t,[He]:t=>t.convertSRGBToLinear(),[s_]:CS},bS={[ni]:t=>t,[He]:t=>t.convertLinearToSRGB(),[s_]:PS},In={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return ni},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=LS[e],r=bS[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Wr;class l_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=na("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=na("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=bo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bo(n[i]/255)*255):n[i]=bo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DS=0;class u_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=qo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(qu(r[s].image)):o.push(qu(r[s]))}else o=qu(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function qu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?l_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let US=0;class sn extends Fr{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Vn,r=Vn,o=wn,s=Js,a=Wn,l=Zi,u=sn.DEFAULT_ANISOTROPY,c=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=qo(),this.name="",this.source=new u_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Er?He:Tr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _f:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _f:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===He?Er:r_}set encoding(e){Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Er?He:Tr}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Zv;sn.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,n=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],m=l[5],y=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-x)<.01&&Math.abs(y-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+x)<.1&&Math.abs(y+p)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,g=(m+1)/2,S=(f+1)/2,R=(c+h)/4,A=(d+x)/4,N=(y+p)/4;return v>g&&v>S?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=R/i,o=A/i):g>S?g<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(g),i=R/r,o=N/r):S<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(S),i=A/o,r=N/o),this.set(i,r,o,n),this}let _=Math.sqrt((p-y)*(p-y)+(d-x)*(d-x)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(p-y)/_,this.y=(d-x)/_,this.z=(h-c)/_,this.w=Math.acos((u+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lr extends Fr{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Er?He:Tr),this.texture=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:wn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new u_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class c_ extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class IS extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=o[s+0],m=o[s+1],y=o[s+2],x=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=y,e[n+3]=x;return}if(d!==x||l!==h||u!==m||c!==y){let p=1-a;const f=l*h+u*m+c*y+d*x,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const S=Math.sqrt(v),R=Math.atan2(S,f*_);p=Math.sin(p*R)/S,a=Math.sin(a*R)/S}const g=a*_;if(l=l*p+h*g,u=u*p+m*g,c=c*p+y*g,d=d*p+x*g,p===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=S,u*=S,c*=S,d*=S}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=o[s],h=o[s+1],m=o[s+2],y=o[s+3];return e[n]=a*y+c*d+l*m-u*h,e[n+1]=l*y+c*h+u*d-a*m,e[n+2]=u*y+c*m+a*h-l*d,e[n+3]=c*y-a*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(o/2),h=l(i/2),m=l(r/2),y=l(o/2);switch(s){case"XYZ":this._x=h*c*d+u*m*y,this._y=u*m*d-h*c*y,this._z=u*c*y+h*m*d,this._w=u*c*d-h*m*y;break;case"YXZ":this._x=h*c*d+u*m*y,this._y=u*m*d-h*c*y,this._z=u*c*y-h*m*d,this._w=u*c*d+h*m*y;break;case"ZXY":this._x=h*c*d-u*m*y,this._y=u*m*d+h*c*y,this._z=u*c*y+h*m*d,this._w=u*c*d-h*m*y;break;case"ZYX":this._x=h*c*d-u*m*y,this._y=u*m*d+h*c*y,this._z=u*c*y-h*m*d,this._w=u*c*d+h*m*y;break;case"YZX":this._x=h*c*d+u*m*y,this._y=u*m*d+h*c*y,this._z=u*c*y-h*m*d,this._w=u*c*d-h*m*y;break;case"XZY":this._x=h*c*d-u*m*y,this._y=u*m*d-h*c*y,this._z=u*c*y+h*m*d,this._w=u*c*d+h*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(o-u)*m,this._z=(s-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(c-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(s-r)/m,this._x=(o+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ap.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ap.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=l*n+s*r-a*i,c=l*i+a*n-o*r,d=l*r+o*i-s*n,h=-o*n-s*i-a*r;return this.x=u*l+h*-o+c*-a-d*-s,this.y=c*l+h*-s+d*-o-u*-a,this.z=d*l+h*-a+u*-s-c*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $u.copy(this).projectOnVector(e),this.sub($u)}reflect(e){return this.sub($u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $u=new O,Ap=new br;class fa{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox),Xr.applyMatrix4(e.matrixWorld),this.union(Xr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let s=0,a=o.count;s<a;s++)si.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(si)}else r.boundingBox===null&&r.computeBoundingBox(),Xr.copy(r.boundingBox),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),ba.subVectors(this.max,ls),jr.subVectors(e.a,ls),Yr.subVectors(e.b,ls),qr.subVectors(e.c,ls),Li.subVectors(Yr,jr),bi.subVectors(qr,Yr),sr.subVectors(jr,qr);let n=[0,-Li.z,Li.y,0,-bi.z,bi.y,0,-sr.z,sr.y,Li.z,0,-Li.x,bi.z,0,-bi.x,sr.z,0,-sr.x,-Li.y,Li.x,0,-bi.y,bi.x,0,-sr.y,sr.x,0];return!Ku(n,jr,Yr,qr,ba)||(n=[1,0,0,0,1,0,0,0,1],!Ku(n,jr,Yr,qr,ba))?!1:(Da.crossVectors(Li,bi),n=[Da.x,Da.y,Da.z],Ku(n,jr,Yr,qr,ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new O,new O,new O,new O,new O,new O,new O,new O],si=new O,Xr=new fa,jr=new O,Yr=new O,qr=new O,Li=new O,bi=new O,sr=new O,ls=new O,ba=new O,Da=new O,ar=new O;function Ku(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){ar.fromArray(t,o);const a=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),u=n.dot(ar),c=i.dot(ar);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const NS=new fa,us=new O,Zu=new O;class wd{constructor(e=new O,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):NS.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);const n=us.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(Zu)),this.expandByPoint(us.copy(e.center).sub(Zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new O,Qu=new O,Ua=new O,Di=new O,Ju=new O,Ia=new O,ec=new O;class FS{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,n),ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Qu.copy(e).add(n).multiplyScalar(.5),Ua.copy(n).sub(e).normalize(),Di.copy(this.origin).sub(Qu);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ua),a=Di.dot(this.direction),l=-Di.dot(Ua),u=Di.lengthSq(),c=Math.abs(1-s*s);let d,h,m,y;if(c>0)if(d=s*l-a,h=s*a-l,y=o*c,d>=0)if(h>=-y)if(h<=y){const x=1/c;d*=x,h*=x,m=d*(d+s*h+2*a)+h*(s*d+h+2*l)+u}else h=o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;else h=-o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;else h<=-y?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+u):h<=y?(d=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+u):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+u);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Qu).addScaledVector(Ua,h),m}intersectSphere(e,n){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,s=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,s=(e.min.y-h.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,n,i,r,o){Ju.subVectors(n,e),Ia.subVectors(i,e),ec.crossVectors(Ju,Ia);let s=this.direction.dot(ec),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Di.subVectors(this.origin,e);const l=a*this.direction.dot(Ia.crossVectors(Di,Ia));if(l<0)return null;const u=a*this.direction.dot(Ju.cross(Di));if(u<0||l+u>s)return null;const c=-a*Di.dot(ec);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,o,s,a,l,u,c,d,h,m,y,x,p){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,d,h,m,y,x,p)}set(e,n,i,r,o,s,a,l,u,c,d,h,m,y,x,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=m,f[7]=y,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),o=1/$r.setFromMatrixColumn(e,1).length(),s=1/$r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*c,m=s*d,y=a*c,x=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=m+y*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=y+m*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*c,m=l*d,y=u*c,x=u*d;n[0]=h+x*a,n[4]=y*a-m,n[8]=s*u,n[1]=s*d,n[5]=s*c,n[9]=-a,n[2]=m*a-y,n[6]=x+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*c,m=l*d,y=u*c,x=u*d;n[0]=h-x*a,n[4]=-s*d,n[8]=y+m*a,n[1]=m+y*a,n[5]=s*c,n[9]=x-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*c,m=s*d,y=a*c,x=a*d;n[0]=l*c,n[4]=y*u-m,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=m*u-y,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*u,y=a*l,x=a*u;n[0]=l*c,n[4]=x-h*d,n[8]=y*d+m,n[1]=d,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=m*d+y,n[10]=h-x*d}else if(e.order==="XZY"){const h=s*l,m=s*u,y=a*l,x=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+x,n[5]=s*c,n[9]=m*d-y,n[2]=y*d-m,n[6]=a*c,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OS,e,kS)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ui.crossVectors(i,cn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ui.crossVectors(i,cn)),Ui.normalize(),Na.crossVectors(cn,Ui),r[0]=Ui.x,r[4]=Na.x,r[8]=cn.x,r[1]=Ui.y,r[5]=Na.y,r[9]=cn.y,r[2]=Ui.z,r[6]=Na.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],m=i[13],y=i[2],x=i[6],p=i[10],f=i[14],_=i[3],v=i[7],g=i[11],S=i[15],R=r[0],A=r[4],N=r[8],M=r[12],T=r[1],ne=r[5],te=r[9],H=r[13],q=r[2],$=r[6],re=r[10],Z=r[14],I=r[3],j=r[7],W=r[11],B=r[15];return o[0]=s*R+a*T+l*q+u*I,o[4]=s*A+a*ne+l*$+u*j,o[8]=s*N+a*te+l*re+u*W,o[12]=s*M+a*H+l*Z+u*B,o[1]=c*R+d*T+h*q+m*I,o[5]=c*A+d*ne+h*$+m*j,o[9]=c*N+d*te+h*re+m*W,o[13]=c*M+d*H+h*Z+m*B,o[2]=y*R+x*T+p*q+f*I,o[6]=y*A+x*ne+p*$+f*j,o[10]=y*N+x*te+p*re+f*W,o[14]=y*M+x*H+p*Z+f*B,o[3]=_*R+v*T+g*q+S*I,o[7]=_*A+v*ne+g*$+S*j,o[11]=_*N+v*te+g*re+S*W,o[15]=_*M+v*H+g*Z+S*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],m=e[14],y=e[3],x=e[7],p=e[11],f=e[15];return y*(+o*l*d-r*u*d-o*a*h+i*u*h+r*a*m-i*l*m)+x*(+n*l*m-n*u*h+o*s*h-r*s*m+r*u*c-o*l*c)+p*(+n*u*d-n*a*m-o*s*d+i*s*m+o*a*c-i*u*c)+f*(-r*a*c-n*l*d+n*a*h+r*s*d-i*s*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],m=e[11],y=e[12],x=e[13],p=e[14],f=e[15],_=d*p*u-x*h*u+x*l*m-a*p*m-d*l*f+a*h*f,v=y*h*u-c*p*u-y*l*m+s*p*m+c*l*f-s*h*f,g=c*x*u-y*d*u+y*a*m-s*x*m-c*a*f+s*d*f,S=y*d*l-c*x*l-y*a*h+s*x*h+c*a*p-s*d*p,R=n*_+i*v+r*g+o*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=_*A,e[1]=(x*h*o-d*p*o-x*r*m+i*p*m+d*r*f-i*h*f)*A,e[2]=(a*p*o-x*l*o+x*r*u-i*p*u-a*r*f+i*l*f)*A,e[3]=(d*l*o-a*h*o-d*r*u+i*h*u+a*r*m-i*l*m)*A,e[4]=v*A,e[5]=(c*p*o-y*h*o+y*r*m-n*p*m-c*r*f+n*h*f)*A,e[6]=(y*l*o-s*p*o-y*r*u+n*p*u+s*r*f-n*l*f)*A,e[7]=(s*h*o-c*l*o+c*r*u-n*h*u-s*r*m+n*l*m)*A,e[8]=g*A,e[9]=(y*d*o-c*x*o-y*i*m+n*x*m+c*i*f-n*d*f)*A,e[10]=(s*x*o-y*a*o+y*i*u-n*x*u-s*i*f+n*a*f)*A,e[11]=(c*a*o-s*d*o-c*i*u+n*d*u+s*i*m-n*a*m)*A,e[12]=S*A,e[13]=(c*x*r-y*d*r+y*i*h-n*x*h-c*i*p+n*d*p)*A,e[14]=(y*a*r-s*x*r-y*i*l+n*x*l+s*i*p-n*a*p)*A,e[15]=(s*d*r-c*a*r+c*i*l-n*d*l-s*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,d=a+a,h=o*u,m=o*c,y=o*d,x=s*c,p=s*d,f=a*d,_=l*u,v=l*c,g=l*d,S=i.x,R=i.y,A=i.z;return r[0]=(1-(x+f))*S,r[1]=(m+g)*S,r[2]=(y-v)*S,r[3]=0,r[4]=(m-g)*R,r[5]=(1-(h+f))*R,r[6]=(p+_)*R,r[7]=0,r[8]=(y+v)*A,r[9]=(p-_)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=$r.set(r[0],r[1],r[2]).length();const s=$r.set(r[4],r[5],r[6]).length(),a=$r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/o,c=1/s,d=1/a;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=c,Nn.elements[5]*=c,Nn.elements[6]*=c,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,n.setFromRotationMatrix(Nn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=vi){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,y;if(a===vi)m=-(s+o)/(s-o),y=-2*s*o/(s-o);else if(a===Fl)m=-s/(s-o),y=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=vi){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(s-o),h=(n+e)*u,m=(i+r)*c;let y,x;if(a===vi)y=(s+o)*d,x=-2*d;else if(a===Fl)y=o*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $r=new O,Nn=new Et,OS=new O(0,0,0),kS=new O(1,1,1),Ui=new O,Na=new O,cn=new O,Rp=new Et,Cp=new br;class iu{constructor(e=0,n=0,i=0,r=iu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Rp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Cp.setFromEuler(this),this.setFromQuaternion(Cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}iu.DEFAULT_ORDER="XYZ";class f_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zS=0;const Pp=new O,Kr=new br,li=new Et,Fa=new O,cs=new O,BS=new O,HS=new br,Lp=new O(1,0,0),bp=new O(0,1,0),Dp=new O(0,0,1),GS={type:"added"},Up={type:"removed"};class an extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new O,n=new iu,i=new br,r=new O(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ge}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new f_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Lp,e)}rotateY(e){return this.rotateOnAxis(bp,e)}rotateZ(e){return this.rotateOnAxis(Dp,e)}translateOnAxis(e,n){return Pp.copy(e).applyQuaternion(this.quaternion),this.position.add(Pp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Lp,e)}translateY(e){return this.translateOnAxis(bp,e)}translateZ(e){return this.translateOnAxis(Dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fa.copy(e):Fa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(cs,Fa,this.up):li.lookAt(Fa,cs,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(li),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(GS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Up)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Up)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,BS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,HS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),d=s(e.shapes),h=s(e.skeletons),m=s(e.animations),y=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new O(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new O,ui=new O,tc=new O,ci=new O,Zr=new O,Qr=new O,Ip=new O,nc=new O,ic=new O,rc=new O;let Oa=!1;class Gn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Fn.subVectors(r,n),ui.subVectors(i,n),tc.subVectors(e,n);const s=Fn.dot(Fn),a=Fn.dot(ui),l=Fn.dot(tc),u=ui.dot(ui),c=ui.dot(tc),d=s*u-a*a;if(d===0)return o.set(-2,-1,-1);const h=1/d,m=(u*l-a*c)*h,y=(s*c-a*l)*h;return o.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci),ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,n,i,r,o,s,a,l){return Oa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oa=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,ci),l.setScalar(0),l.addScaledVector(o,ci.x),l.addScaledVector(s,ci.y),l.addScaledVector(a,ci.z),l}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),ui.subVectors(e,n),Fn.cross(ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Fn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return Oa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oa=!0),Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Zr.subVectors(r,i),Qr.subVectors(o,i),nc.subVectors(e,i);const l=Zr.dot(nc),u=Qr.dot(nc);if(l<=0&&u<=0)return n.copy(i);ic.subVectors(e,r);const c=Zr.dot(ic),d=Qr.dot(ic);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(Zr,s);rc.subVectors(e,o);const m=Zr.dot(rc),y=Qr.dot(rc);if(y>=0&&m<=y)return n.copy(o);const x=m*u-l*y;if(x<=0&&u>=0&&y<=0)return a=u/(u-y),n.copy(i).addScaledVector(Qr,a);const p=c*y-m*d;if(p<=0&&d-c>=0&&m-y>=0)return Ip.subVectors(o,r),a=(d-c)/(d-c+(m-y)),n.copy(r).addScaledVector(Ip,a);const f=1/(p+x+h);return s=x*f,a=h*f,n.copy(i).addScaledVector(Zr,s).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let VS=0;class da extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=Lo,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qv,this.blendDst=$v,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=mf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xu,this.stencilZFail=Xu,this.stencilZPass=Xu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lo&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const d_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},ka={h:0,s:0,l:0};function oc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,In.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=In.workingColorSpace){return this.r=e,this.g=n,this.b=i,In.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=In.workingColorSpace){if(e=Td(e,1),n=Vt(n,0,1),i=Vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=oc(s,o,e+1/3),this.g=oc(s,o,e),this.b=oc(s,o,e-1/3)}return In.toWorkingColorSpace(this,r),this}setStyle(e,n=He){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=He){const i=d_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}copyLinearToSRGB(e){return this.r=Yu(e.r),this.g=Yu(e.g),this.b=Yu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return In.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Vt(Ht.r*255,0,255))*65536+Math.round(Vt(Ht.g*255,0,255))*256+Math.round(Vt(Ht.b*255,0,255))}getHexString(e=He){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=In.workingColorSpace){In.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,o=Ht.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=c<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=In.workingColorSpace){return In.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=He){In.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==He?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(On),On.h+=e,On.s+=n,On.l+=i,this.setHSL(On.h,On.s,On.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(On),e.getHSL(ka);const i=Us(On.h,ka.h,n),r=Us(On.s,ka.s,n),o=Us(On.l,ka.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new et;et.NAMES=d_;class Ad extends da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new O,za=new Fe;class ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Mp,this.updateRange={offset:0,count:-1},this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)za.fromBufferAttribute(this,n),za.applyMatrix3(e),this.setXY(n,za.x,za.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ss(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ss(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ss(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ss(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),o=Qt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class h_ extends ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class p_ extends ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gn extends ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let WS=0;const Sn=new Et,sc=new an,Jr=new O,fn=new fa,fs=new fa,Dt=new O;class Ai extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(a_(e)?p_:h_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ge().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return sc.lookAt(e),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new gn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];fn.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(fn.min,fs.min),fn.expandByPoint(Dt),Dt.addVectors(fn.max,fs.max),fn.expandByPoint(Dt)):(fn.expandByPoint(fs.min),fn.expandByPoint(fs.max))}fn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Dt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Dt.fromBufferAttribute(a,u),l&&(Jr.fromBufferAttribute(e,u),Dt.add(Jr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let T=0;T<a;T++)u[T]=new O,c[T]=new O;const d=new O,h=new O,m=new O,y=new Fe,x=new Fe,p=new Fe,f=new O,_=new O;function v(T,ne,te){d.fromArray(r,T*3),h.fromArray(r,ne*3),m.fromArray(r,te*3),y.fromArray(s,T*2),x.fromArray(s,ne*2),p.fromArray(s,te*2),h.sub(d),m.sub(d),x.sub(y),p.sub(y);const H=1/(x.x*p.y-p.x*x.y);isFinite(H)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(H),_.copy(m).multiplyScalar(x.x).addScaledVector(h,-p.x).multiplyScalar(H),u[T].add(f),u[ne].add(f),u[te].add(f),c[T].add(_),c[ne].add(_),c[te].add(_))}let g=this.groups;g.length===0&&(g=[{start:0,count:i.length}]);for(let T=0,ne=g.length;T<ne;++T){const te=g[T],H=te.start,q=te.count;for(let $=H,re=H+q;$<re;$+=3)v(i[$+0],i[$+1],i[$+2])}const S=new O,R=new O,A=new O,N=new O;function M(T){A.fromArray(o,T*3),N.copy(A);const ne=u[T];S.copy(ne),S.sub(A.multiplyScalar(A.dot(ne))).normalize(),R.crossVectors(N,ne);const H=R.dot(c[T])<0?-1:1;l[T*4]=S.x,l[T*4+1]=S.y,l[T*4+2]=S.z,l[T*4+3]=H}for(let T=0,ne=g.length;T<ne;++T){const te=g[T],H=te.start,q=te.count;for(let $=H,re=H+q;$<re;$+=3)M(i[$+0]),M(i[$+1]),M(i[$+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,o=new O,s=new O,a=new O,l=new O,u=new O,c=new O,d=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const y=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,y),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,p),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let m=0,y=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*c;for(let f=0;f<c;f++)h[y++]=u[m++]}return new ti(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ai,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],d=o[u];for(let h=0,m=d.length;h<m;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Np=new Et,lr=new FS,Ba=new wd,Fp=new O,eo=new O,to=new O,no=new O,ac=new O,Ha=new O,Ga=new Fe,Va=new Fe,Wa=new Fe,Op=new O,kp=new O,zp=new O,Xa=new O,ja=new O;class Rn extends an{constructor(e=new Ai,n=new Ad){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Ha.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],d=o[l];c!==0&&(ac.fromBufferAttribute(d,e),s?Ha.addScaledVector(ac,c):Ha.addScaledVector(ac.sub(n),c))}n.add(Ha)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(o),lr.copy(e.ray).recast(e.near),!(Ba.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Ba,Fp)===null||lr.origin.distanceToSquared(Fp)>(e.far-e.near)**2))&&(Np.copy(o).invert(),lr.copy(e.ray).applyMatrix4(Np),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,lr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,h=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let y=0,x=h.length;y<x;y++){const p=h[y],f=s[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let g=_,S=v;g<S;g+=3){const R=a.getX(g),A=a.getX(g+1),N=a.getX(g+2);r=Ya(this,f,e,i,u,c,d,R,A,N),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=y,f=x;p<f;p+=3){const _=a.getX(p),v=a.getX(p+1),g=a.getX(p+2);r=Ya(this,s,e,i,u,c,d,_,v,g),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let y=0,x=h.length;y<x;y++){const p=h[y],f=s[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let g=_,S=v;g<S;g+=3){const R=g,A=g+1,N=g+2;r=Ya(this,f,e,i,u,c,d,R,A,N),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=y,f=x;p<f;p+=3){const _=p,v=p+1,g=p+2;r=Ya(this,s,e,i,u,c,d,_,v,g),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function XS(t,e,n,i,r,o,s,a){let l;if(e.side===on?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===er,a),l===null)return null;ja.copy(a),ja.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ja);return u<n.near||u>n.far?null:{distance:u,point:ja.clone(),object:t}}function Ya(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,eo),t.getVertexPosition(l,to),t.getVertexPosition(u,no);const c=XS(t,e,n,i,eo,to,no,Xa);if(c){r&&(Ga.fromBufferAttribute(r,a),Va.fromBufferAttribute(r,l),Wa.fromBufferAttribute(r,u),c.uv=Gn.getInterpolation(Xa,eo,to,no,Ga,Va,Wa,new Fe)),o&&(Ga.fromBufferAttribute(o,a),Va.fromBufferAttribute(o,l),Wa.fromBufferAttribute(o,u),c.uv1=Gn.getInterpolation(Xa,eo,to,no,Ga,Va,Wa,new Fe),c.uv2=c.uv1),s&&(Op.fromBufferAttribute(s,a),kp.fromBufferAttribute(s,l),zp.fromBufferAttribute(s,u),c.normal=Gn.getInterpolation(Xa,eo,to,no,Op,kp,zp,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new O,materialIndex:0};Gn.getNormal(eo,to,no,d.normal),c.face=d}return c}class $o extends Ai{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],d=[];let h=0,m=0;y("z","y","x",-1,-1,i,n,e,s,o,0),y("z","y","x",1,-1,i,n,-e,s,o,1),y("x","z","y",1,1,e,i,n,r,s,2),y("x","z","y",1,-1,e,i,-n,r,s,3),y("x","y","z",1,-1,e,n,i,r,o,4),y("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new gn(u,3)),this.setAttribute("normal",new gn(c,3)),this.setAttribute("uv",new gn(d,2));function y(x,p,f,_,v,g,S,R,A,N,M){const T=g/A,ne=S/N,te=g/2,H=S/2,q=R/2,$=A+1,re=N+1;let Z=0,I=0;const j=new O;for(let W=0;W<re;W++){const B=W*ne-H;for(let V=0;V<$;V++){const he=V*T-te;j[x]=he*_,j[p]=B*v,j[f]=q,u.push(j.x,j.y,j.z),j[x]=0,j[p]=0,j[f]=R>0?1:-1,c.push(j.x,j.y,j.z),d.push(V/A),d.push(1-W/N),Z+=1}}for(let W=0;W<N;W++)for(let B=0;B<A;B++){const V=h+B+$*W,he=h+B+$*(W+1),se=h+(B+1)+$*(W+1),pe=h+(B+1)+$*W;l.push(V,he,pe),l.push(he,se,pe),I+=6}a.addGroup(m,I,M),m+=I,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=Vo(t[n]);for(const r in i)e[r]=i[r]}return e}function jS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function m_(t){return t.getRenderTarget()===null?t.outputColorSpace:ni}const YS={clone:Vo,merge:jt};var qS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$S=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dr extends da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qS,this.fragmentShader=$S,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vo(e.uniforms),this.uniformsGroups=jS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class g_ extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends g_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ta*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ds*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const io=-90,ro=1;class KS extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new hn(io,ro,e,n);r.layers=this.layers,this.add(r);const o=new hn(io,ro,e,n);o.layers=this.layers,this.add(o);const s=new hn(io,ro,e,n);s.layers=this.layers,this.add(s);const a=new hn(io,ro,e,n);a.layers=this.layers,this.add(a);const l=new hn(io,ro,e,n);l.layers=this.layers,this.add(l);const u=new hn(io,ro,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=yi,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,s),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class v_ extends sn{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Bo,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ZS extends Lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Er?He:Tr),this.texture=new v_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $o(5,5,5),o=new Dr({name:"CubemapFromEquirect",uniforms:Vo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Ki});o.uniforms.tEquirect.value=n;const s=new Rn(r,o),a=n.minFilter;return n.minFilter===Js&&(n.minFilter=wn),new KS(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const lc=new O,QS=new O,JS=new Ge;class dr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=lc.subVectors(i,n).cross(QS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||JS.getNormalMatrix(e),r=this.coplanarPoint(lc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new wd,qa=new O;class Rd{constructor(e=new dr,n=new dr,i=new dr,r=new dr,o=new dr,s=new dr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],m=r[8],y=r[9],x=r[10],p=r[11],f=r[12],_=r[13],v=r[14],g=r[15];if(i[0].setComponents(l-o,h-u,p-m,g-f).normalize(),i[1].setComponents(l+o,h+u,p+m,g+f).normalize(),i[2].setComponents(l+s,h+c,p+y,g+_).normalize(),i[3].setComponents(l-s,h-c,p-y,g-_).normalize(),i[4].setComponents(l-a,h-d,p-x,g-v).normalize(),n===vi)i[5].setComponents(l+a,h+d,p+x,g+v).normalize();else if(n===Fl)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(qa.x=r.normal.x>0?e.max.x:e.min.x,qa.y=r.normal.y>0?e.max.y:e.min.y,qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function __(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function eM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,m=t.createBuffer();t.bindBuffer(c,m),t.bufferData(c,d,h),u.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function o(u,c,d){const h=c.array,m=c.updateRange;t.bindBuffer(d,u),m.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(o(d.buffer,u,c),d.version=u.version)}return{get:s,remove:a,update:l}}class Cd extends Ai{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=n/l,m=[],y=[],x=[],p=[];for(let f=0;f<c;f++){const _=f*h-s;for(let v=0;v<u;v++){const g=v*d-o;y.push(g,-_,0),x.push(0,0,1),p.push(v/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const v=_+u*f,g=_+u*(f+1),S=_+1+u*(f+1),R=_+1+u*f;m.push(v,g,R),m.push(g,S,R)}this.setIndex(m),this.setAttribute("position",new gn(y,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cd(e.width,e.height,e.widthSegments,e.heightSegments)}}var tM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,MM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,EM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PM="gl_FragColor = linearToOutputTexel( gl_FragColor );",LM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,GM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,YM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,QM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,nE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sE=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,aE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,vE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,EE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,CE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,FE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,BE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,GE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dT=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ET=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,LT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:tM,alphahash_pars_fragment:nM,alphamap_fragment:iM,alphamap_pars_fragment:rM,alphatest_fragment:oM,alphatest_pars_fragment:sM,aomap_fragment:aM,aomap_pars_fragment:lM,begin_vertex:uM,beginnormal_vertex:cM,bsdfs:fM,iridescence_fragment:dM,bumpmap_pars_fragment:hM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:vM,color_fragment:_M,color_pars_fragment:yM,color_pars_vertex:xM,color_vertex:SM,common:MM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:TM,displacementmap_pars_vertex:wM,displacementmap_vertex:AM,emissivemap_fragment:RM,emissivemap_pars_fragment:CM,colorspace_fragment:PM,colorspace_pars_fragment:LM,envmap_fragment:bM,envmap_common_pars_fragment:DM,envmap_pars_fragment:UM,envmap_pars_vertex:IM,envmap_physical_pars_fragment:jM,envmap_vertex:NM,fog_vertex:FM,fog_pars_vertex:OM,fog_fragment:kM,fog_pars_fragment:zM,gradientmap_pars_fragment:BM,lightmap_fragment:HM,lightmap_pars_fragment:GM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:WM,lights_pars_begin:XM,lights_toon_fragment:YM,lights_toon_pars_fragment:qM,lights_phong_fragment:$M,lights_phong_pars_fragment:KM,lights_physical_fragment:ZM,lights_physical_pars_fragment:QM,lights_fragment_begin:JM,lights_fragment_maps:eE,lights_fragment_end:tE,logdepthbuf_fragment:nE,logdepthbuf_pars_fragment:iE,logdepthbuf_pars_vertex:rE,logdepthbuf_vertex:oE,map_fragment:sE,map_pars_fragment:aE,map_particle_fragment:lE,map_particle_pars_fragment:uE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:fE,morphcolor_vertex:dE,morphnormal_vertex:hE,morphtarget_pars_vertex:pE,morphtarget_vertex:mE,normal_fragment_begin:gE,normal_fragment_maps:vE,normal_pars_fragment:_E,normal_pars_vertex:yE,normal_vertex:xE,normalmap_pars_fragment:SE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:EE,clearcoat_pars_fragment:TE,iridescence_pars_fragment:wE,opaque_fragment:AE,packing:RE,premultiplied_alpha_fragment:CE,project_vertex:PE,dithering_fragment:LE,dithering_pars_fragment:bE,roughnessmap_fragment:DE,roughnessmap_pars_fragment:UE,shadowmap_pars_fragment:IE,shadowmap_pars_vertex:NE,shadowmap_vertex:FE,shadowmask_pars_fragment:OE,skinbase_vertex:kE,skinning_pars_vertex:zE,skinning_vertex:BE,skinnormal_vertex:HE,specularmap_fragment:GE,specularmap_pars_fragment:VE,tonemapping_fragment:WE,tonemapping_pars_fragment:XE,transmission_fragment:jE,transmission_pars_fragment:YE,uv_pars_fragment:qE,uv_pars_vertex:$E,uv_vertex:KE,worldpos_vertex:ZE,background_vert:QE,background_frag:JE,backgroundCube_vert:eT,backgroundCube_frag:tT,cube_vert:nT,cube_frag:iT,depth_vert:rT,depth_frag:oT,distanceRGBA_vert:sT,distanceRGBA_frag:aT,equirect_vert:lT,equirect_frag:uT,linedashed_vert:cT,linedashed_frag:fT,meshbasic_vert:dT,meshbasic_frag:hT,meshlambert_vert:pT,meshlambert_frag:mT,meshmatcap_vert:gT,meshmatcap_frag:vT,meshnormal_vert:_T,meshnormal_frag:yT,meshphong_vert:xT,meshphong_frag:ST,meshphysical_vert:MT,meshphysical_frag:ET,meshtoon_vert:TT,meshtoon_frag:wT,points_vert:AT,points_frag:RT,shadow_vert:CT,shadow_frag:PT,sprite_vert:LT,sprite_frag:bT},me={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Zn={basic:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new et(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:jt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:jt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new et(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:jt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:jt([me.points,me.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:jt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:jt([me.common,me.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:jt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:jt([me.sprite,me.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:jt([me.common,me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:jt([me.lights,me.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Zn.physical={uniforms:jt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const $a={r:0,b:0,g:0};function DT(t,e,n,i,r,o,s){const a=new et(0);let l=o===!0?0:1,u,c,d=null,h=0,m=null;function y(p,f){let _=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?n:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),_=!0),t.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,s),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,s),_=!0;break}(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===nu)?(c===void 0&&(c=new Rn(new $o(1,1,1),new Dr({name:"BackgroundCubeMaterial",uniforms:Vo(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==He,(d!==v||h!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Rn(new Cd(2,2),new Dr({name:"BackgroundMaterial",uniforms:Vo(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=v.colorSpace!==He,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function x(p,f){p.getRGB($a,m_(t)),i.buffers.color.setClear($a.r,$a.g,$a.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:y}}function UT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=p(null);let u=l,c=!1;function d(q,$,re,Z,I){let j=!1;if(s){const W=x(Z,re,$);u!==W&&(u=W,m(u.object)),j=f(q,Z,re,I),j&&_(q,Z,re,I)}else{const W=$.wireframe===!0;(u.geometry!==Z.id||u.program!==re.id||u.wireframe!==W)&&(u.geometry=Z.id,u.program=re.id,u.wireframe=W,j=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(j||c)&&(c=!1,N(q,$,re,Z),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function m(q){return i.isWebGL2?t.bindVertexArray(q):o.bindVertexArrayOES(q)}function y(q){return i.isWebGL2?t.deleteVertexArray(q):o.deleteVertexArrayOES(q)}function x(q,$,re){const Z=re.wireframe===!0;let I=a[q.id];I===void 0&&(I={},a[q.id]=I);let j=I[$.id];j===void 0&&(j={},I[$.id]=j);let W=j[Z];return W===void 0&&(W=p(h()),j[Z]=W),W}function p(q){const $=[],re=[],Z=[];for(let I=0;I<r;I++)$[I]=0,re[I]=0,Z[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:re,attributeDivisors:Z,object:q,attributes:{},index:null}}function f(q,$,re,Z){const I=u.attributes,j=$.attributes;let W=0;const B=re.getAttributes();for(const V in B)if(B[V].location>=0){const se=I[V];let pe=j[V];if(pe===void 0&&(V==="instanceMatrix"&&q.instanceMatrix&&(pe=q.instanceMatrix),V==="instanceColor"&&q.instanceColor&&(pe=q.instanceColor)),se===void 0||se.attribute!==pe||pe&&se.data!==pe.data)return!0;W++}return u.attributesNum!==W||u.index!==Z}function _(q,$,re,Z){const I={},j=$.attributes;let W=0;const B=re.getAttributes();for(const V in B)if(B[V].location>=0){let se=j[V];se===void 0&&(V==="instanceMatrix"&&q.instanceMatrix&&(se=q.instanceMatrix),V==="instanceColor"&&q.instanceColor&&(se=q.instanceColor));const pe={};pe.attribute=se,se&&se.data&&(pe.data=se.data),I[V]=pe,W++}u.attributes=I,u.attributesNum=W,u.index=Z}function v(){const q=u.newAttributes;for(let $=0,re=q.length;$<re;$++)q[$]=0}function g(q){S(q,0)}function S(q,$){const re=u.newAttributes,Z=u.enabledAttributes,I=u.attributeDivisors;re[q]=1,Z[q]===0&&(t.enableVertexAttribArray(q),Z[q]=1),I[q]!==$&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](q,$),I[q]=$)}function R(){const q=u.newAttributes,$=u.enabledAttributes;for(let re=0,Z=$.length;re<Z;re++)$[re]!==q[re]&&(t.disableVertexAttribArray(re),$[re]=0)}function A(q,$,re,Z,I,j,W){W===!0?t.vertexAttribIPointer(q,$,re,I,j):t.vertexAttribPointer(q,$,re,Z,I,j)}function N(q,$,re,Z){if(i.isWebGL2===!1&&(q.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const I=Z.attributes,j=re.getAttributes(),W=$.defaultAttributeValues;for(const B in j){const V=j[B];if(V.location>=0){let he=I[B];if(he===void 0&&(B==="instanceMatrix"&&q.instanceMatrix&&(he=q.instanceMatrix),B==="instanceColor"&&q.instanceColor&&(he=q.instanceColor)),he!==void 0){const se=he.normalized,pe=he.itemSize,ye=n.get(he);if(ye===void 0)continue;const Ce=ye.buffer,Se=ye.type,je=ye.bytesPerElement,Tt=i.isWebGL2===!0&&(Se===t.INT||Se===t.UNSIGNED_INT||he.gpuType===Qv);if(he.isInterleavedBufferAttribute){const Ue=he.data,G=Ue.stride,_t=he.offset;if(Ue.isInstancedInterleavedBuffer){for(let Ee=0;Ee<V.locationSize;Ee++)S(V.location+Ee,Ue.meshPerAttribute);q.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Ee=0;Ee<V.locationSize;Ee++)g(V.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let Ee=0;Ee<V.locationSize;Ee++)A(V.location+Ee,pe/V.locationSize,Se,se,G*je,(_t+pe/V.locationSize*Ee)*je,Tt)}else{if(he.isInstancedBufferAttribute){for(let Ue=0;Ue<V.locationSize;Ue++)S(V.location+Ue,he.meshPerAttribute);q.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ue=0;Ue<V.locationSize;Ue++)g(V.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let Ue=0;Ue<V.locationSize;Ue++)A(V.location+Ue,pe/V.locationSize,Se,se,pe*je,pe/V.locationSize*Ue*je,Tt)}}else if(W!==void 0){const se=W[B];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(V.location,se);break;case 3:t.vertexAttrib3fv(V.location,se);break;case 4:t.vertexAttrib4fv(V.location,se);break;default:t.vertexAttrib1fv(V.location,se)}}}}R()}function M(){te();for(const q in a){const $=a[q];for(const re in $){const Z=$[re];for(const I in Z)y(Z[I].object),delete Z[I];delete $[re]}delete a[q]}}function T(q){if(a[q.id]===void 0)return;const $=a[q.id];for(const re in $){const Z=$[re];for(const I in Z)y(Z[I].object),delete Z[I];delete $[re]}delete a[q.id]}function ne(q){for(const $ in a){const re=a[$];if(re[q.id]===void 0)continue;const Z=re[q.id];for(const I in Z)y(Z[I].object),delete Z[I];delete re[q.id]}}function te(){H(),c=!0,u!==l&&(u=l,m(u.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:te,resetDefaultState:H,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:ne,initAttributes:v,enableAttribute:g,disableUnusedAttributes:R}}function IT(t,e,n,i){const r=i.isWebGL2;let o;function s(u){o=u}function a(u,c){t.drawArrays(o,u,c),n.update(c,o,1)}function l(u,c,d){if(d===0)return;let h,m;if(r)h=t,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](o,u,c,d),n.update(c,o,d)}this.setMode=s,this.render=a,this.renderInstances=l}function NT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,g=s||e.has("OES_texture_float"),S=v&&g,R=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:g,floatVertexTextures:S,maxSamples:R}}function FT(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new dr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,m){const y=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,f=t.get(d);if(!r||y===null||y.length===0||o&&!p)o?c(null):u();else{const _=o?0:i,v=_*4;let g=f.clippingState||null;l.value=g,g=c(y,h,v,m);for(let S=0;S!==v;++S)g[S]=n[S];f.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,m,y){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,y!==!0||p===null){const f=m+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,g=m;v!==x;++v,g+=4)s.copy(d[v]).applyMatrix4(_,a),s.normal.toArray(p,g),p[g+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function OT(t){let e=new WeakMap;function n(s,a){return a===gf?s.mapping=Bo:a===vf&&(s.mapping=Ho),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===gf||a===vf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new ZS(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class kT extends g_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const So=4,Bp=[.125,.215,.35,.446,.526,.582],pr=20,uc=new kT,Hp=new et;let cc=null;const hr=(1+Math.sqrt(5))/2,oo=1/hr,Gp=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,hr,oo),new O(0,hr,-oo),new O(oo,0,hr),new O(-oo,0,hr),new O(hr,oo,0),new O(-hr,oo,0)];class Vp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){cc=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cc),e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bo||e.mapping===Ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:ea,format:Wn,colorSpace:ni,depthBuffer:!1},r=Wp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wp(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zT(o)),this._blurMaterial=BT(o,e,n)}return r}_compileMaterial(e){const n=new Rn(this._lodPlanes[0],e);this._renderer.compile(n,uc)}_sceneToCubeUV(e,n,i,r){const a=new hn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Hp),c.toneMapping=yi,c.autoClear=!1;const m=new Ad({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),y=new Rn(new $o,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Hp),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const v=this._cubeSize;Ka(r,_*v,f>2?v:0,v,v),c.setRenderTarget(r),x&&c.render(y,a),c.render(e,a)}y.geometry.dispose(),y.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Bo||e.mapping===Ho;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xp());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Rn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Ka(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,uc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Gp[(r-1)%Gp.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Rn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*pr-1),x=o/y,p=isFinite(o)?1+Math.floor(c*x):pr;p>pr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pr}`);const f=[];let _=0;for(let A=0;A<pr;++A){const N=A/x,M=Math.exp(-N*N/2);f.push(M),A===0?_+=M:A<p&&(_+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=y,h.mipInt.value=v-i;const g=this._sizeLods[r],S=3*g*(r>v-So?r-v+So:0),R=4*(this._cubeSize-g);Ka(n,S,R,3*g,2*g),l.setRenderTarget(n),l.render(d,uc)}}function zT(t){const e=[],n=[],i=[];let r=t;const o=t-So+1+Bp.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-So?l=Bp[s-t+So-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,y=6,x=3,p=2,f=1,_=new Float32Array(x*y*m),v=new Float32Array(p*y*m),g=new Float32Array(f*y*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,N=R>2?0:-1,M=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];_.set(M,x*y*R),v.set(h,p*y*R);const T=[R,R,R,R,R,R];g.set(T,f*y*R)}const S=new Ai;S.setAttribute("position",new ti(_,x)),S.setAttribute("uv",new ti(v,p)),S.setAttribute("faceIndex",new ti(g,f)),e.push(S),r>So&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Wp(t,e,n){const i=new Lr(t,e,n);return i.texture.mapping=nu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ka(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function BT(t,e,n){const i=new Float32Array(pr),r=new O(0,1,0);return new Dr({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Xp(){return new Dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function jp(){return new Dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Pd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function HT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===gf||l===vf,c=l===Bo||l===Ho;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Vp(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new Vp(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function GT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function VT(t,e,n,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const x=h.morphAttributes[y];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}h.removeEventListener("dispose",s),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const y in m){const x=m[y];for(let p=0,f=x.length;p<f;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(d){const h=[],m=d.index,y=d.attributes.position;let x=0;if(m!==null){const _=m.array;x=m.version;for(let v=0,g=_.length;v<g;v+=3){const S=_[v+0],R=_[v+1],A=_[v+2];h.push(S,R,R,A,A,S)}}else{const _=y.array;x=y.version;for(let v=0,g=_.length/3-1;v<g;v+=3){const S=v+0,R=v+1,A=v+2;h.push(S,R,R,A,A,S)}}const p=new(a_(h)?p_:h_)(h,1);p.version=x;const f=o.get(d);f&&e.remove(f),o.set(d,p)}function c(d){const h=o.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function WT(t,e,n,i){const r=i.isWebGL2;let o;function s(h){o=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,m){t.drawElements(o,m,a,h*l),n.update(m,o,1)}function d(h,m,y){if(y===0)return;let x,p;if(r)x=t,p="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[p](o,m,a,h*l,y),n.update(m,o,y)}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=d}function XT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jT(t,e){return t[0]-e[0]}function YT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function qT(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new st,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=y!==void 0?y.length:0;let p=o.get(c);if(p===void 0||p.count!==x){let $=function(){H.dispose(),o.delete(c),c.removeEventListener("dispose",$)};var m=$;p!==void 0&&p.texture.dispose();const v=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,R=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],N=c.morphAttributes.color||[];let M=0;v===!0&&(M=1),g===!0&&(M=2),S===!0&&(M=3);let T=c.attributes.position.count*M,ne=1;T>e.maxTextureSize&&(ne=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const te=new Float32Array(T*ne*4*x),H=new c_(te,T,ne,x);H.type=Hi,H.needsUpdate=!0;const q=M*4;for(let re=0;re<x;re++){const Z=R[re],I=A[re],j=N[re],W=T*ne*4*re;for(let B=0;B<Z.count;B++){const V=B*q;v===!0&&(s.fromBufferAttribute(Z,B),te[W+V+0]=s.x,te[W+V+1]=s.y,te[W+V+2]=s.z,te[W+V+3]=0),g===!0&&(s.fromBufferAttribute(I,B),te[W+V+4]=s.x,te[W+V+5]=s.y,te[W+V+6]=s.z,te[W+V+7]=0),S===!0&&(s.fromBufferAttribute(j,B),te[W+V+8]=s.x,te[W+V+9]=s.y,te[W+V+10]=s.z,te[W+V+11]=j.itemSize===4?s.w:1)}}p={count:x,texture:H,size:new Fe(T,ne)},o.set(c,p),c.addEventListener("dispose",$)}let f=0;for(let v=0;v<h.length;v++)f+=h[v];const _=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const y=h===void 0?0:h.length;let x=i[c.id];if(x===void 0||x.length!==y){x=[];for(let g=0;g<y;g++)x[g]=[g,0];i[c.id]=x}for(let g=0;g<y;g++){const S=x[g];S[0]=g,S[1]=h[g]}x.sort(YT);for(let g=0;g<8;g++)g<y&&x[g][1]?(a[g][0]=x[g][0],a[g][1]=x[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(jT);const p=c.morphAttributes.position,f=c.morphAttributes.normal;let _=0;for(let g=0;g<8;g++){const S=a[g],R=S[0],A=S[1];R!==Number.MAX_SAFE_INTEGER&&A?(p&&c.getAttribute("morphTarget"+g)!==p[R]&&c.setAttribute("morphTarget"+g,p[R]),f&&c.getAttribute("morphNormal"+g)!==f[R]&&c.setAttribute("morphNormal"+g,f[R]),r[g]=A,_+=A):(p&&c.hasAttribute("morphTarget"+g)===!0&&c.deleteAttribute("morphTarget"+g),f&&c.hasAttribute("morphNormal"+g)===!0&&c.deleteAttribute("morphNormal"+g),r[g]=0)}const v=c.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function $T(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}const y_=new sn,x_=new c_,S_=new IS,M_=new v_,Yp=[],qp=[],$p=new Float32Array(16),Kp=new Float32Array(9),Zp=new Float32Array(4);function Ko(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Yp[r];if(o===void 0&&(o=new Float32Array(r),Yp[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ru(t,e){let n=qp[e];n===void 0&&(n=new Int32Array(e),qp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function KT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function ew(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Zp.set(i),t.uniformMatrix2fv(this.addr,!1,Zp),Pt(n,i)}}function tw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Kp.set(i),t.uniformMatrix3fv(this.addr,!1,Kp),Pt(n,i)}}function nw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;$p.set(i),t.uniformMatrix4fv(this.addr,!1,$p),Pt(n,i)}}function iw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function aw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function fw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||y_,r)}function dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||S_,r)}function hw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||M_,r)}function pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||x_,r)}function mw(t){switch(t){case 5126:return KT;case 35664:return ZT;case 35665:return QT;case 35666:return JT;case 35674:return ew;case 35675:return tw;case 35676:return nw;case 5124:case 35670:return iw;case 35667:case 35671:return rw;case 35668:case 35672:return ow;case 35669:case 35673:return sw;case 5125:return aw;case 36294:return lw;case 36295:return uw;case 36296:return cw;case 35678:case 36198:case 36298:case 36306:case 35682:return fw;case 35679:case 36299:case 36307:return dw;case 35680:case 36300:case 36308:case 36293:return hw;case 36289:case 36303:case 36311:case 36292:return pw}}function gw(t,e){t.uniform1fv(this.addr,e)}function vw(t,e){const n=Ko(e,this.size,2);t.uniform2fv(this.addr,n)}function _w(t,e){const n=Ko(e,this.size,3);t.uniform3fv(this.addr,n)}function yw(t,e){const n=Ko(e,this.size,4);t.uniform4fv(this.addr,n)}function xw(t,e){const n=Ko(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Sw(t,e){const n=Ko(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Mw(t,e){const n=Ko(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Ew(t,e){t.uniform1iv(this.addr,e)}function Tw(t,e){t.uniform2iv(this.addr,e)}function ww(t,e){t.uniform3iv(this.addr,e)}function Aw(t,e){t.uniform4iv(this.addr,e)}function Rw(t,e){t.uniform1uiv(this.addr,e)}function Cw(t,e){t.uniform2uiv(this.addr,e)}function Pw(t,e){t.uniform3uiv(this.addr,e)}function Lw(t,e){t.uniform4uiv(this.addr,e)}function bw(t,e,n){const i=this.cache,r=e.length,o=ru(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||y_,o[s])}function Dw(t,e,n){const i=this.cache,r=e.length,o=ru(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||S_,o[s])}function Uw(t,e,n){const i=this.cache,r=e.length,o=ru(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||M_,o[s])}function Iw(t,e,n){const i=this.cache,r=e.length,o=ru(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||x_,o[s])}function Nw(t){switch(t){case 5126:return gw;case 35664:return vw;case 35665:return _w;case 35666:return yw;case 35674:return xw;case 35675:return Sw;case 35676:return Mw;case 5124:case 35670:return Ew;case 35667:case 35671:return Tw;case 35668:case 35672:return ww;case 35669:case 35673:return Aw;case 5125:return Rw;case 36294:return Cw;case 36295:return Pw;case 36296:return Lw;case 35678:case 36198:case 36298:case 36306:case 35682:return bw;case 35679:case 36299:case 36307:return Dw;case 35680:case 36300:case 36308:case 36293:return Uw;case 36289:case 36303:case 36311:case 36292:return Iw}}class Fw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=mw(n.type)}}class Ow{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=Nw(n.type)}}class kw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function Qp(t,e){t.seq.push(e),t.map[e.id]=e}function zw(t,e,n){const i=t.name,r=i.length;for(fc.lastIndex=0;;){const o=fc.exec(i),s=fc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Qp(n,u===void 0?new Fw(a,t,e):new Ow(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new kw(a),Qp(n,d)),n=d}}}class fl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);zw(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Jp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let Bw=0;function Hw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function Gw(t){switch(t){case ni:return["Linear","( value )"];case He:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function em(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Hw(t.getShaderSource(e),s)}else return r}function Vw(t,e){const n=Gw(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Ww(t,e){let n;switch(e){case kx:n="Linear";break;case zx:n="Reinhard";break;case Bx:n="OptimizedCineon";break;case Hx:n="ACESFilmic";break;case Gx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Xw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ms).join(`
`)}function jw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Yw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Ms(t){return t!==""}function tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mf(t){return t.replace(qw,Kw)}const $w=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kw(t,e){let n=Be[e];if(n===void 0){const i=$w.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mf(n)}const Zw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(t){return t.replace(Zw,Qw)}function Qw(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function rm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Yv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===gx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function e1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Bo:case Ho:e="ENVMAP_TYPE_CUBE";break;case nu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function t1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ho:e="ENVMAP_MODE_REFRACTION";break}return e}function n1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Kv:e="ENVMAP_BLENDING_MULTIPLY";break;case Fx:e="ENVMAP_BLENDING_MIX";break;case Ox:e="ENVMAP_BLENDING_ADD";break}return e}function i1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function r1(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=Jw(n),u=e1(n),c=t1(n),d=n1(n),h=i1(n),m=n.isWebGL2?"":Xw(n),y=jw(o),x=r.createProgram();let p,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ms).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ms).join(`
`),f.length>0&&(f+=`
`)):(p=[rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),f=[m,rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yi?"#define TONE_MAPPING":"",n.toneMapping!==yi?Be.tonemapping_pars_fragment:"",n.toneMapping!==yi?Ww("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Vw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ms).join(`
`)),s=Mf(s),s=tm(s,n),s=nm(s,n),a=Mf(a),a=tm(a,n),a=nm(a,n),s=im(s),a=im(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===Ep?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ep?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=_+p+s,g=_+f+a,S=Jp(r,r.VERTEX_SHADER,v),R=Jp(r,r.FRAGMENT_SHADER,g);if(r.attachShader(x,S),r.attachShader(x,R),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),t.debug.checkShaderErrors){const M=r.getProgramInfoLog(x).trim(),T=r.getShaderInfoLog(S).trim(),ne=r.getShaderInfoLog(R).trim();let te=!0,H=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(te=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,S,R);else{const q=em(r,S,"vertex"),$=em(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+q+`
`+$)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(T===""||ne==="")&&(H=!1);H&&(this.diagnostics={runnable:te,programLog:M,vertexShader:{log:T,prefix:p},fragmentShader:{log:ne,prefix:f}})}r.deleteShader(S),r.deleteShader(R);let A;this.getUniforms=function(){return A===void 0&&(A=new fl(r,x)),A};let N;return this.getAttributes=function(){return N===void 0&&(N=Yw(r,x)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Bw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=R,this}let o1=0;class s1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new a1(e),n.set(e,i)),i}}class a1{constructor(e){this.id=o1++,this.code=e,this.usedTimes=0}}function l1(t,e,n,i,r,o,s){const a=new f_,l=new s1,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function p(M,T,ne,te,H){const q=te.fog,$=H.geometry,re=M.isMeshStandardMaterial?te.environment:null,Z=(M.isMeshStandardMaterial?n:e).get(M.envMap||re),I=Z&&Z.mapping===nu?Z.image.height:null,j=y[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const W=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,B=W!==void 0?W.length:0;let V=0;$.morphAttributes.position!==void 0&&(V=1),$.morphAttributes.normal!==void 0&&(V=2),$.morphAttributes.color!==void 0&&(V=3);let he,se,pe,ye;if(j){const Qe=Zn[j];he=Qe.vertexShader,se=Qe.fragmentShader}else he=M.vertexShader,se=M.fragmentShader,l.update(M),pe=l.getVertexShaderID(M),ye=l.getFragmentShaderID(M);const Ce=t.getRenderTarget(),Se=H.isInstancedMesh===!0,je=!!M.map,Tt=!!M.matcap,Ue=!!Z,G=!!M.aoMap,_t=!!M.lightMap,Ee=!!M.bumpMap,Ae=!!M.normalMap,Te=!!M.displacementMap,Ze=!!M.emissiveMap,Ie=!!M.metalnessMap,Le=!!M.roughnessMap,Oe=M.anisotropy>0,ct=M.clearcoat>0,ht=M.iridescence>0,C=M.sheen>0,E=M.transmission>0,Q=Oe&&!!M.anisotropyMap,ce=ct&&!!M.clearcoatMap,fe=ct&&!!M.clearcoatNormalMap,L=ct&&!!M.clearcoatRoughnessMap,oe=ht&&!!M.iridescenceMap,le=ht&&!!M.iridescenceThicknessMap,Y=C&&!!M.sheenColorMap,_e=C&&!!M.sheenRoughnessMap,Me=!!M.specularMap,b=!!M.specularColorMap,D=!!M.specularIntensityMap,k=E&&!!M.transmissionMap,ie=E&&!!M.thicknessMap,de=!!M.gradientMap,P=!!M.alphaMap,ee=M.alphaTest>0,U=!!M.alphaHash,X=!!M.extensions,ae=!!$.attributes.uv1,Pe=!!$.attributes.uv2,we=!!$.attributes.uv3;return{isWebGL2:c,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:he,fragmentShader:se,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Se,instancingColor:Se&&H.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ce===null?t.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:ni,map:je,matcap:Tt,envMap:Ue,envMapMode:Ue&&Z.mapping,envMapCubeUVHeight:I,aoMap:G,lightMap:_t,bumpMap:Ee,normalMap:Ae,displacementMap:h&&Te,emissiveMap:Ze,normalMapObjectSpace:Ae&&M.normalMapType===tS,normalMapTangentSpace:Ae&&M.normalMapType===o_,metalnessMap:Ie,roughnessMap:Le,anisotropy:Oe,anisotropyMap:Q,clearcoat:ct,clearcoatMap:ce,clearcoatNormalMap:fe,clearcoatRoughnessMap:L,iridescence:ht,iridescenceMap:oe,iridescenceThicknessMap:le,sheen:C,sheenColorMap:Y,sheenRoughnessMap:_e,specularMap:Me,specularColorMap:b,specularIntensityMap:D,transmission:E,transmissionMap:k,thicknessMap:ie,gradientMap:de,opaque:M.transparent===!1&&M.blending===Lo,alphaMap:P,alphaTest:ee,alphaHash:U,combine:M.combine,mapUv:je&&x(M.map.channel),aoMapUv:G&&x(M.aoMap.channel),lightMapUv:_t&&x(M.lightMap.channel),bumpMapUv:Ee&&x(M.bumpMap.channel),normalMapUv:Ae&&x(M.normalMap.channel),displacementMapUv:Te&&x(M.displacementMap.channel),emissiveMapUv:Ze&&x(M.emissiveMap.channel),metalnessMapUv:Ie&&x(M.metalnessMap.channel),roughnessMapUv:Le&&x(M.roughnessMap.channel),anisotropyMapUv:Q&&x(M.anisotropyMap.channel),clearcoatMapUv:ce&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(M.sheenRoughnessMap.channel),specularMapUv:Me&&x(M.specularMap.channel),specularColorMapUv:b&&x(M.specularColorMap.channel),specularIntensityMapUv:D&&x(M.specularIntensityMap.channel),transmissionMapUv:k&&x(M.transmissionMap.channel),thicknessMapUv:ie&&x(M.thicknessMap.channel),alphaMapUv:P&&x(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ae||Oe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:Pe,vertexUv3s:we,pointsUvs:H.isPoints===!0&&!!$.attributes.uv&&(je||P),fog:!!q,useFog:M.fog===!0,fogExp2:q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:V,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&ne.length>0,shadowMapType:t.shadowMap.type,toneMapping:M.toneMapped?t.toneMapping:yi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pi,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:X&&M.extensions.derivatives===!0,extensionFragDepth:X&&M.extensions.fragDepth===!0,extensionDrawBuffers:X&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:X&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const ne in M.defines)T.push(ne),T.push(M.defines[ne]);return M.isRawShaderMaterial===!1&&(_(T,M),v(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),M.push(a.mask)}function g(M){const T=y[M.type];let ne;if(T){const te=Zn[T];ne=YS.clone(te.uniforms)}else ne=M.uniforms;return ne}function S(M,T){let ne;for(let te=0,H=u.length;te<H;te++){const q=u[te];if(q.cacheKey===T){ne=q,++ne.usedTimes;break}}return ne===void 0&&(ne=new r1(t,T,M,o),u.push(ne)),ne}function R(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:g,acquireProgram:S,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:N}}function u1(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function c1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function om(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function sm(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,m,y,x,p){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:y,renderOrder:d.renderOrder,z:x,group:p},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=y,f.renderOrder=d.renderOrder,f.z=x,f.group=p),e++,f}function a(d,h,m,y,x,p){const f=s(d,h,m,y,x,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(d,h,m,y,x,p){const f=s(d,h,m,y,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||c1),i.length>1&&i.sort(h||om),r.length>1&&r.sort(h||om)}function c(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function f1(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new sm,t.set(i,[s])):r>=o.length?(s=new sm,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function d1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new et};break;case"SpotLight":n={position:new O,direction:new O,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function h1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let p1=0;function m1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function g1(t,e){const n=new d1,i=h1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new O);const o=new O,s=new Et,a=new Et;function l(c,d){let h=0,m=0,y=0;for(let ne=0;ne<9;ne++)r.probe[ne].set(0,0,0);let x=0,p=0,f=0,_=0,v=0,g=0,S=0,R=0,A=0,N=0;c.sort(m1);const M=d===!0?Math.PI:1;for(let ne=0,te=c.length;ne<te;ne++){const H=c[ne],q=H.color,$=H.intensity,re=H.distance,Z=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)h+=q.r*$*M,m+=q.g*$*M,y+=q.b*$*M;else if(H.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(H.sh.coefficients[I],$);else if(H.isDirectionalLight){const I=n.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity*M),H.castShadow){const j=H.shadow,W=i.get(H);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,r.directionalShadow[x]=W,r.directionalShadowMap[x]=Z,r.directionalShadowMatrix[x]=H.shadow.matrix,g++}r.directional[x]=I,x++}else if(H.isSpotLight){const I=n.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(q).multiplyScalar($*M),I.distance=re,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,r.spot[f]=I;const j=H.shadow;if(H.map&&(r.spotLightMap[A]=H.map,A++,j.updateMatrices(H),H.castShadow&&N++),r.spotLightMatrix[f]=j.matrix,H.castShadow){const W=i.get(H);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,r.spotShadow[f]=W,r.spotShadowMap[f]=Z,R++}f++}else if(H.isRectAreaLight){const I=n.get(H);I.color.copy(q).multiplyScalar($),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),r.rectArea[_]=I,_++}else if(H.isPointLight){const I=n.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity*M),I.distance=H.distance,I.decay=H.decay,H.castShadow){const j=H.shadow,W=i.get(H);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,r.pointShadow[p]=W,r.pointShadowMap[p]=Z,r.pointShadowMatrix[p]=H.shadow.matrix,S++}r.point[p]=I,p++}else if(H.isHemisphereLight){const I=n.get(H);I.skyColor.copy(H.color).multiplyScalar($*M),I.groundColor.copy(H.groundColor).multiplyScalar($*M),r.hemi[v]=I,v++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=y;const T=r.hash;(T.directionalLength!==x||T.pointLength!==p||T.spotLength!==f||T.rectAreaLength!==_||T.hemiLength!==v||T.numDirectionalShadows!==g||T.numPointShadows!==S||T.numSpotShadows!==R||T.numSpotMaps!==A)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=_,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=g,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=R+A-N,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=N,T.directionalLength=x,T.pointLength=p,T.spotLength=f,T.rectAreaLength=_,T.hemiLength=v,T.numDirectionalShadows=g,T.numPointShadows=S,T.numSpotShadows=R,T.numSpotMaps=A,r.version=p1++)}function u(c,d){let h=0,m=0,y=0,x=0,p=0;const f=d.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const g=c[_];if(g.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(g.matrixWorld),o.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(f),h++}else if(g.isSpotLight){const S=r.spot[y];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(g.matrixWorld),o.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(f),y++}else if(g.isRectAreaLight){const S=r.rectArea[x];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(g.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(f),m++}else if(g.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(f),p++}}}return{setup:l,setupView:u,state:r}}function am(t,e){const n=new g1(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function v1(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new am(t,e),n.set(o,[l])):s>=a.length?(l=new am(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class _1 extends da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class y1 extends da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const x1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function M1(t,e,n){let i=new Rd;const r=new Fe,o=new Fe,s=new st,a=new _1({depthPacking:eS}),l=new y1,u={},c=n.maxTextureSize,d={[er]:on,[on]:er,[pi]:pi},h=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:x1,fragmentShader:S1}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const y=new Ai;y.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Rn(y,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yv;let f=this.type;this.render=function(S,R,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const N=t.getRenderTarget(),M=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),ne=t.state;ne.setBlending(Ki),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const te=f!==fi&&this.type===fi,H=f===fi&&this.type!==fi;for(let q=0,$=S.length;q<$;q++){const re=S[q],Z=re.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const I=Z.getFrameExtents();if(r.multiply(I),o.copy(Z.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/I.x),r.x=o.x*I.x,Z.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/I.y),r.y=o.y*I.y,Z.mapSize.y=o.y)),Z.map===null||te===!0||H===!0){const W=this.type!==fi?{minFilter:qt,magFilter:qt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Lr(r.x,r.y,W),Z.map.texture.name=re.name+".shadowMap",Z.camera.updateProjectionMatrix()}t.setRenderTarget(Z.map),t.clear();const j=Z.getViewportCount();for(let W=0;W<j;W++){const B=Z.getViewport(W);s.set(o.x*B.x,o.y*B.y,o.x*B.z,o.y*B.w),ne.viewport(s),Z.updateMatrices(re,W),i=Z.getFrustum(),g(R,A,Z.camera,re,this.type)}Z.isPointLightShadow!==!0&&this.type===fi&&_(Z,A),Z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(N,M,T)};function _(S,R){const A=e.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Lr(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(R,null,A,h,x,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(R,null,A,m,x,null)}function v(S,R,A,N){let M=null;const T=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)M=T;else if(M=A.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const ne=M.uuid,te=R.uuid;let H=u[ne];H===void 0&&(H={},u[ne]=H);let q=H[te];q===void 0&&(q=M.clone(),H[te]=q),M=q}if(M.visible=R.visible,M.wireframe=R.wireframe,N===fi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const ne=t.properties.get(M);ne.light=A}return M}function g(S,R,A,N,M){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===fi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const te=e.update(S),H=S.material;if(Array.isArray(H)){const q=te.groups;for(let $=0,re=q.length;$<re;$++){const Z=q[$],I=H[Z.materialIndex];if(I&&I.visible){const j=v(S,I,N,M);t.renderBufferDirect(A,null,te,j,S,Z)}}}else if(H.visible){const q=v(S,H,N,M);t.renderBufferDirect(A,null,te,q,S,null)}}const ne=S.children;for(let te=0,H=ne.length;te<H;te++)g(ne[te],R,A,N,M)}}function E1(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const ee=new st;let U=null;const X=new st(0,0,0,0);return{setMask:function(ae){U!==ae&&!P&&(t.colorMask(ae,ae,ae,ae),U=ae)},setLocked:function(ae){P=ae},setClear:function(ae,Pe,we,ke,Qe){Qe===!0&&(ae*=ke,Pe*=ke,we*=ke),ee.set(ae,Pe,we,ke),X.equals(ee)===!1&&(t.clearColor(ae,Pe,we,ke),X.copy(ee))},reset:function(){P=!1,U=null,X.set(-1,0,0,0)}}}function o(){let P=!1,ee=null,U=null,X=null;return{setTest:function(ae){ae?Ce(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(ae){ee!==ae&&!P&&(t.depthMask(ae),ee=ae)},setFunc:function(ae){if(U!==ae){switch(ae){case Px:t.depthFunc(t.NEVER);break;case Lx:t.depthFunc(t.ALWAYS);break;case bx:t.depthFunc(t.LESS);break;case mf:t.depthFunc(t.LEQUAL);break;case Dx:t.depthFunc(t.EQUAL);break;case Ux:t.depthFunc(t.GEQUAL);break;case Ix:t.depthFunc(t.GREATER);break;case Nx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}U=ae}},setLocked:function(ae){P=ae},setClear:function(ae){X!==ae&&(t.clearDepth(ae),X=ae)},reset:function(){P=!1,ee=null,U=null,X=null}}}function s(){let P=!1,ee=null,U=null,X=null,ae=null,Pe=null,we=null,ke=null,Qe=null;return{setTest:function($e){P||($e?Ce(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function($e){ee!==$e&&!P&&(t.stencilMask($e),ee=$e)},setFunc:function($e,Lt,pt){(U!==$e||X!==Lt||ae!==pt)&&(t.stencilFunc($e,Lt,pt),U=$e,X=Lt,ae=pt)},setOp:function($e,Lt,pt){(Pe!==$e||we!==Lt||ke!==pt)&&(t.stencilOp($e,Lt,pt),Pe=$e,we=Lt,ke=pt)},setLocked:function($e){P=$e},setClear:function($e){Qe!==$e&&(t.clearStencil($e),Qe=$e)},reset:function(){P=!1,ee=null,U=null,X=null,ae=null,Pe=null,we=null,ke=null,Qe=null}}}const a=new r,l=new o,u=new s,c=new WeakMap,d=new WeakMap;let h={},m={},y=new WeakMap,x=[],p=null,f=!1,_=null,v=null,g=null,S=null,R=null,A=null,N=null,M=!1,T=null,ne=null,te=null,H=null,q=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,Z=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(I)[1]),re=Z>=1):I.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),re=Z>=2);let j=null,W={};const B=t.getParameter(t.SCISSOR_BOX),V=t.getParameter(t.VIEWPORT),he=new st().fromArray(B),se=new st().fromArray(V);function pe(P,ee,U,X){const ae=new Uint8Array(4),Pe=t.createTexture();t.bindTexture(P,Pe),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<U;we++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(ee,0,t.RGBA,1,1,X,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(ee+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Pe}const ye={};ye[t.TEXTURE_2D]=pe(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[t.TEXTURE_2D_ARRAY]=pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ce(t.DEPTH_TEST),l.setFunc(mf),Te(!1),Ze(jh),Ce(t.CULL_FACE),Ee(Ki);function Ce(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function Se(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function je(P,ee){return m[P]!==ee?(t.bindFramebuffer(P,ee),m[P]=ee,i&&(P===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ee),P===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ee)),!0):!1}function Tt(P,ee){let U=x,X=!1;if(P)if(U=y.get(ee),U===void 0&&(U=[],y.set(ee,U)),P.isWebGLMultipleRenderTargets){const ae=P.texture;if(U.length!==ae.length||U[0]!==t.COLOR_ATTACHMENT0){for(let Pe=0,we=ae.length;Pe<we;Pe++)U[Pe]=t.COLOR_ATTACHMENT0+Pe;U.length=ae.length,X=!0}}else U[0]!==t.COLOR_ATTACHMENT0&&(U[0]=t.COLOR_ATTACHMENT0,X=!0);else U[0]!==t.BACK&&(U[0]=t.BACK,X=!0);X&&(n.isWebGL2?t.drawBuffers(U):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(U))}function Ue(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const G={[so]:t.FUNC_ADD,[_x]:t.FUNC_SUBTRACT,[yx]:t.FUNC_REVERSE_SUBTRACT};if(i)G[Kh]=t.MIN,G[Zh]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(G[Kh]=P.MIN_EXT,G[Zh]=P.MAX_EXT)}const _t={[xx]:t.ZERO,[Sx]:t.ONE,[Mx]:t.SRC_COLOR,[qv]:t.SRC_ALPHA,[Cx]:t.SRC_ALPHA_SATURATE,[Ax]:t.DST_COLOR,[Tx]:t.DST_ALPHA,[Ex]:t.ONE_MINUS_SRC_COLOR,[$v]:t.ONE_MINUS_SRC_ALPHA,[Rx]:t.ONE_MINUS_DST_COLOR,[wx]:t.ONE_MINUS_DST_ALPHA};function Ee(P,ee,U,X,ae,Pe,we,ke){if(P===Ki){f===!0&&(Se(t.BLEND),f=!1);return}if(f===!1&&(Ce(t.BLEND),f=!0),P!==vx){if(P!==_||ke!==M){if((v!==so||R!==so)&&(t.blendEquation(t.FUNC_ADD),v=so,R=so),ke)switch(P){case Lo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yh:t.blendFunc(t.ONE,t.ONE);break;case qh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $h:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Lo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case qh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $h:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}g=null,S=null,A=null,N=null,_=P,M=ke}return}ae=ae||ee,Pe=Pe||U,we=we||X,(ee!==v||ae!==R)&&(t.blendEquationSeparate(G[ee],G[ae]),v=ee,R=ae),(U!==g||X!==S||Pe!==A||we!==N)&&(t.blendFuncSeparate(_t[U],_t[X],_t[Pe],_t[we]),g=U,S=X,A=Pe,N=we),_=P,M=!1}function Ae(P,ee){P.side===pi?Se(t.CULL_FACE):Ce(t.CULL_FACE);let U=P.side===on;ee&&(U=!U),Te(U),P.blending===Lo&&P.transparent===!1?Ee(Ki):Ee(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const X=P.stencilWrite;u.setTest(X),X&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Le(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ce(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Te(P){T!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),T=P)}function Ze(P){P!==px?(Ce(t.CULL_FACE),P!==ne&&(P===jh?t.cullFace(t.BACK):P===mx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),ne=P}function Ie(P){P!==te&&(re&&t.lineWidth(P),te=P)}function Le(P,ee,U){P?(Ce(t.POLYGON_OFFSET_FILL),(H!==ee||q!==U)&&(t.polygonOffset(ee,U),H=ee,q=U)):Se(t.POLYGON_OFFSET_FILL)}function Oe(P){P?Ce(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function ct(P){P===void 0&&(P=t.TEXTURE0+$-1),j!==P&&(t.activeTexture(P),j=P)}function ht(P,ee,U){U===void 0&&(j===null?U=t.TEXTURE0+$-1:U=j);let X=W[U];X===void 0&&(X={type:void 0,texture:void 0},W[U]=X),(X.type!==P||X.texture!==ee)&&(j!==U&&(t.activeTexture(U),j=U),t.bindTexture(P,ee||ye[P]),X.type=P,X.texture=ee)}function C(){const P=W[j];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function E(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function L(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function b(P){he.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),he.copy(P))}function D(P){se.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),se.copy(P))}function k(P,ee){let U=d.get(ee);U===void 0&&(U=new WeakMap,d.set(ee,U));let X=U.get(P);X===void 0&&(X=t.getUniformBlockIndex(ee,P.name),U.set(P,X))}function ie(P,ee){const X=d.get(ee).get(P);c.get(ee)!==X&&(t.uniformBlockBinding(ee,X,P.__bindingPointIndex),c.set(ee,X))}function de(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},j=null,W={},m={},y=new WeakMap,x=[],p=null,f=!1,_=null,v=null,g=null,S=null,R=null,A=null,N=null,M=!1,T=null,ne=null,te=null,H=null,q=null,he.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ce,disable:Se,bindFramebuffer:je,drawBuffers:Tt,useProgram:Ue,setBlending:Ee,setMaterial:Ae,setFlipSided:Te,setCullFace:Ze,setLineWidth:Ie,setPolygonOffset:Le,setScissorTest:Oe,activeTexture:ct,bindTexture:ht,unbindTexture:C,compressedTexImage2D:E,compressedTexImage3D:Q,texImage2D:_e,texImage3D:Me,updateUBOMapping:k,uniformBlockBinding:ie,texStorage2D:le,texStorage3D:Y,texSubImage2D:ce,texSubImage3D:fe,compressedTexSubImage2D:L,compressedTexSubImage3D:oe,scissor:b,viewport:D,reset:de}}function T1(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let x;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return f?new OffscreenCanvas(C,E):na("canvas")}function v(C,E,Q,ce){let fe=1;if((C.width>ce||C.height>ce)&&(fe=ce/Math.max(C.width,C.height)),fe<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const L=E?Ol:Math.floor,oe=L(fe*C.width),le=L(fe*C.height);x===void 0&&(x=_(oe,le));const Y=Q?_(oe,le):x;return Y.width=oe,Y.height=le,Y.getContext("2d").drawImage(C,0,0,oe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+oe+"x"+le+")."),Y}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Sf(C.width)&&Sf(C.height)}function S(C){return a?!1:C.wrapS!==Vn||C.wrapT!==Vn||C.minFilter!==qt&&C.minFilter!==wn}function R(C,E){return C.generateMipmaps&&E&&C.minFilter!==qt&&C.minFilter!==wn}function A(C){t.generateMipmap(C)}function N(C,E,Q,ce,fe=!1){if(a===!1)return E;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let L=E;return E===t.RED&&(Q===t.FLOAT&&(L=t.R32F),Q===t.HALF_FLOAT&&(L=t.R16F),Q===t.UNSIGNED_BYTE&&(L=t.R8)),E===t.RG&&(Q===t.FLOAT&&(L=t.RG32F),Q===t.HALF_FLOAT&&(L=t.RG16F),Q===t.UNSIGNED_BYTE&&(L=t.RG8)),E===t.RGBA&&(Q===t.FLOAT&&(L=t.RGBA32F),Q===t.HALF_FLOAT&&(L=t.RGBA16F),Q===t.UNSIGNED_BYTE&&(L=ce===He&&fe===!1?t.SRGB8_ALPHA8:t.RGBA8),Q===t.UNSIGNED_SHORT_4_4_4_4&&(L=t.RGBA4),Q===t.UNSIGNED_SHORT_5_5_5_1&&(L=t.RGB5_A1)),(L===t.R16F||L===t.R32F||L===t.RG16F||L===t.RG32F||L===t.RGBA16F||L===t.RGBA32F)&&e.get("EXT_color_buffer_float"),L}function M(C,E,Q){return R(C,Q)===!0||C.isFramebufferTexture&&C.minFilter!==qt&&C.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function T(C){return C===qt||C===Qh||C===zu?t.NEAREST:t.LINEAR}function ne(C){const E=C.target;E.removeEventListener("dispose",ne),H(E),E.isVideoTexture&&y.delete(E)}function te(C){const E=C.target;E.removeEventListener("dispose",te),$(E)}function H(C){const E=i.get(C);if(E.__webglInit===void 0)return;const Q=C.source,ce=p.get(Q);if(ce){const fe=ce[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&q(C),Object.keys(ce).length===0&&p.delete(Q)}i.remove(C)}function q(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const Q=C.source,ce=p.get(Q);delete ce[E.__cacheKey],s.memory.textures--}function $(C){const E=C.texture,Q=i.get(C),ce=i.get(E);if(ce.__webglTexture!==void 0&&(t.deleteTexture(ce.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++)t.deleteFramebuffer(Q.__webglFramebuffer[fe]),Q.__webglDepthbuffer&&t.deleteRenderbuffer(Q.__webglDepthbuffer[fe]);else{if(t.deleteFramebuffer(Q.__webglFramebuffer),Q.__webglDepthbuffer&&t.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&t.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let fe=0;fe<Q.__webglColorRenderbuffer.length;fe++)Q.__webglColorRenderbuffer[fe]&&t.deleteRenderbuffer(Q.__webglColorRenderbuffer[fe]);Q.__webglDepthRenderbuffer&&t.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let fe=0,L=E.length;fe<L;fe++){const oe=i.get(E[fe]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),s.memory.textures--),i.remove(E[fe])}i.remove(E),i.remove(C)}let re=0;function Z(){re=0}function I(){const C=re;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),re+=1,C}function j(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function W(C,E){const Q=i.get(C);if(C.isVideoTexture&&ct(C),C.isRenderTargetTexture===!1&&C.version>0&&Q.__version!==C.version){const ce=C.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(Q,C,E);return}}n.bindTexture(t.TEXTURE_2D,Q.__webglTexture,t.TEXTURE0+E)}function B(C,E){const Q=i.get(C);if(C.version>0&&Q.__version!==C.version){je(Q,C,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Q.__webglTexture,t.TEXTURE0+E)}function V(C,E){const Q=i.get(C);if(C.version>0&&Q.__version!==C.version){je(Q,C,E);return}n.bindTexture(t.TEXTURE_3D,Q.__webglTexture,t.TEXTURE0+E)}function he(C,E){const Q=i.get(C);if(C.version>0&&Q.__version!==C.version){Tt(Q,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture,t.TEXTURE0+E)}const se={[_f]:t.REPEAT,[Vn]:t.CLAMP_TO_EDGE,[yf]:t.MIRRORED_REPEAT},pe={[qt]:t.NEAREST,[Qh]:t.NEAREST_MIPMAP_NEAREST,[zu]:t.NEAREST_MIPMAP_LINEAR,[wn]:t.LINEAR,[Vx]:t.LINEAR_MIPMAP_NEAREST,[Js]:t.LINEAR_MIPMAP_LINEAR},ye={[iS]:t.NEVER,[cS]:t.ALWAYS,[rS]:t.LESS,[sS]:t.LEQUAL,[oS]:t.EQUAL,[uS]:t.GEQUAL,[aS]:t.GREATER,[lS]:t.NOTEQUAL};function Ce(C,E,Q){if(Q?(t.texParameteri(C,t.TEXTURE_WRAP_S,se[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,se[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,se[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,pe[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,pe[E.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Vn||E.wrapT!==Vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,T(E.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==qt&&E.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===qt||E.minFilter!==zu&&E.minFilter!==Js||E.type===Hi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===ea&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(C,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Se(C,E){let Q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",ne));const ce=E.source;let fe=p.get(ce);fe===void 0&&(fe={},p.set(ce,fe));const L=j(E);if(L!==C.__cacheKey){fe[L]===void 0&&(fe[L]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,Q=!0),fe[L].usedTimes++;const oe=fe[C.__cacheKey];oe!==void 0&&(fe[C.__cacheKey].usedTimes--,oe.usedTimes===0&&q(E)),C.__cacheKey=L,C.__webglTexture=fe[L].texture}return Q}function je(C,E,Q){let ce=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=t.TEXTURE_3D);const fe=Se(C,E),L=E.source;n.bindTexture(ce,C.__webglTexture,t.TEXTURE0+Q);const oe=i.get(L);if(L.version!==oe.__version||fe===!0){n.activeTexture(t.TEXTURE0+Q),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const le=S(E)&&g(E.image)===!1;let Y=v(E.image,le,!1,c);Y=ht(E,Y);const _e=g(Y)||a,Me=o.convert(E.format,E.colorSpace);let b=o.convert(E.type),D=N(E.internalFormat,Me,b,E.colorSpace);Ce(ce,E,_e);let k;const ie=E.mipmaps,de=a&&E.isVideoTexture!==!0,P=oe.__version===void 0||fe===!0,ee=M(E,Y,_e);if(E.isDepthTexture)D=t.DEPTH_COMPONENT,a?E.type===Hi?D=t.DEPTH_COMPONENT32F:E.type===Bi?D=t.DEPTH_COMPONENT24:E.type===Sr?D=t.DEPTH24_STENCIL8:D=t.DEPTH_COMPONENT16:E.type===Hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Mr&&D===t.DEPTH_COMPONENT&&E.type!==Ed&&E.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Bi,b=o.convert(E.type)),E.format===Go&&D===t.DEPTH_COMPONENT&&(D=t.DEPTH_STENCIL,E.type!==Sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Sr,b=o.convert(E.type))),P&&(de?n.texStorage2D(t.TEXTURE_2D,1,D,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,D,Y.width,Y.height,0,Me,b,null));else if(E.isDataTexture)if(ie.length>0&&_e){de&&P&&n.texStorage2D(t.TEXTURE_2D,ee,D,ie[0].width,ie[0].height);for(let U=0,X=ie.length;U<X;U++)k=ie[U],de?n.texSubImage2D(t.TEXTURE_2D,U,0,0,k.width,k.height,Me,b,k.data):n.texImage2D(t.TEXTURE_2D,U,D,k.width,k.height,0,Me,b,k.data);E.generateMipmaps=!1}else de?(P&&n.texStorage2D(t.TEXTURE_2D,ee,D,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,Me,b,Y.data)):n.texImage2D(t.TEXTURE_2D,0,D,Y.width,Y.height,0,Me,b,Y.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){de&&P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ee,D,ie[0].width,ie[0].height,Y.depth);for(let U=0,X=ie.length;U<X;U++)k=ie[U],E.format!==Wn?Me!==null?de?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,U,0,0,0,k.width,k.height,Y.depth,Me,k.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,U,D,k.width,k.height,Y.depth,0,k.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?n.texSubImage3D(t.TEXTURE_2D_ARRAY,U,0,0,0,k.width,k.height,Y.depth,Me,b,k.data):n.texImage3D(t.TEXTURE_2D_ARRAY,U,D,k.width,k.height,Y.depth,0,Me,b,k.data)}else{de&&P&&n.texStorage2D(t.TEXTURE_2D,ee,D,ie[0].width,ie[0].height);for(let U=0,X=ie.length;U<X;U++)k=ie[U],E.format!==Wn?Me!==null?de?n.compressedTexSubImage2D(t.TEXTURE_2D,U,0,0,k.width,k.height,Me,k.data):n.compressedTexImage2D(t.TEXTURE_2D,U,D,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?n.texSubImage2D(t.TEXTURE_2D,U,0,0,k.width,k.height,Me,b,k.data):n.texImage2D(t.TEXTURE_2D,U,D,k.width,k.height,0,Me,b,k.data)}else if(E.isDataArrayTexture)de?(P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ee,D,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Me,b,Y.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,D,Y.width,Y.height,Y.depth,0,Me,b,Y.data);else if(E.isData3DTexture)de?(P&&n.texStorage3D(t.TEXTURE_3D,ee,D,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Me,b,Y.data)):n.texImage3D(t.TEXTURE_3D,0,D,Y.width,Y.height,Y.depth,0,Me,b,Y.data);else if(E.isFramebufferTexture){if(P)if(de)n.texStorage2D(t.TEXTURE_2D,ee,D,Y.width,Y.height);else{let U=Y.width,X=Y.height;for(let ae=0;ae<ee;ae++)n.texImage2D(t.TEXTURE_2D,ae,D,U,X,0,Me,b,null),U>>=1,X>>=1}}else if(ie.length>0&&_e){de&&P&&n.texStorage2D(t.TEXTURE_2D,ee,D,ie[0].width,ie[0].height);for(let U=0,X=ie.length;U<X;U++)k=ie[U],de?n.texSubImage2D(t.TEXTURE_2D,U,0,0,Me,b,k):n.texImage2D(t.TEXTURE_2D,U,D,Me,b,k);E.generateMipmaps=!1}else de?(P&&n.texStorage2D(t.TEXTURE_2D,ee,D,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,b,Y)):n.texImage2D(t.TEXTURE_2D,0,D,Me,b,Y);R(E,_e)&&A(ce),oe.__version=L.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Tt(C,E,Q){if(E.image.length!==6)return;const ce=Se(C,E),fe=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+Q);const L=i.get(fe);if(fe.version!==L.__version||ce===!0){n.activeTexture(t.TEXTURE0+Q),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const oe=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,Y=[];for(let U=0;U<6;U++)!oe&&!le?Y[U]=v(E.image[U],!1,!0,u):Y[U]=le?E.image[U].image:E.image[U],Y[U]=ht(E,Y[U]);const _e=Y[0],Me=g(_e)||a,b=o.convert(E.format,E.colorSpace),D=o.convert(E.type),k=N(E.internalFormat,b,D,E.colorSpace),ie=a&&E.isVideoTexture!==!0,de=L.__version===void 0||ce===!0;let P=M(E,_e,Me);Ce(t.TEXTURE_CUBE_MAP,E,Me);let ee;if(oe){ie&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,P,k,_e.width,_e.height);for(let U=0;U<6;U++){ee=Y[U].mipmaps;for(let X=0;X<ee.length;X++){const ae=ee[X];E.format!==Wn?b!==null?ie?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X,0,0,ae.width,ae.height,b,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X,k,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X,0,0,ae.width,ae.height,b,D,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X,k,ae.width,ae.height,0,b,D,ae.data)}}}else{ee=E.mipmaps,ie&&de&&(ee.length>0&&P++,n.texStorage2D(t.TEXTURE_CUBE_MAP,P,k,Y[0].width,Y[0].height));for(let U=0;U<6;U++)if(le){ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Y[U].width,Y[U].height,b,D,Y[U].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,k,Y[U].width,Y[U].height,0,b,D,Y[U].data);for(let X=0;X<ee.length;X++){const Pe=ee[X].image[U].image;ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X+1,0,0,Pe.width,Pe.height,b,D,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X+1,k,Pe.width,Pe.height,0,b,D,Pe.data)}}else{ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,b,D,Y[U]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,k,b,D,Y[U]);for(let X=0;X<ee.length;X++){const ae=ee[X];ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X+1,0,0,b,D,ae.image[U]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X+1,k,b,D,ae.image[U])}}}R(E,Me)&&A(t.TEXTURE_CUBE_MAP),L.__version=fe.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ue(C,E,Q,ce,fe){const L=o.convert(Q.format,Q.colorSpace),oe=o.convert(Q.type),le=N(Q.internalFormat,L,oe,Q.colorSpace);i.get(E).__hasExternalTextures||(fe===t.TEXTURE_3D||fe===t.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,le,E.width,E.height,E.depth,0,L,oe,null):n.texImage2D(fe,0,le,E.width,E.height,0,L,oe,null)),n.bindFramebuffer(t.FRAMEBUFFER,C),Oe(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,fe,i.get(Q).__webglTexture,0,Le(E)):(fe===t.TEXTURE_2D||fe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ce,fe,i.get(Q).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function G(C,E,Q){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let ce=t.DEPTH_COMPONENT16;if(Q||Oe(E)){const fe=E.depthTexture;fe&&fe.isDepthTexture&&(fe.type===Hi?ce=t.DEPTH_COMPONENT32F:fe.type===Bi&&(ce=t.DEPTH_COMPONENT24));const L=Le(E);Oe(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L,ce,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,L,ce,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ce,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const ce=Le(E);Q&&Oe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,t.DEPTH24_STENCIL8,E.width,E.height):Oe(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const ce=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let fe=0;fe<ce.length;fe++){const L=ce[fe],oe=o.convert(L.format,L.colorSpace),le=o.convert(L.type),Y=N(L.internalFormat,oe,le,L.colorSpace),_e=Le(E);Q&&Oe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,Y,E.width,E.height):Oe(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,Y,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Y,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function _t(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const ce=i.get(E.depthTexture).__webglTexture,fe=Le(E);if(E.depthTexture.format===Mr)Oe(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ce,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ce,0);else if(E.depthTexture.format===Go)Oe(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ce,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Ee(C){const E=i.get(C),Q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");_t(E.__webglFramebuffer,C)}else if(Q){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]=t.createRenderbuffer(),G(E.__webglDepthbuffer[ce],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),G(E.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(C,E,Q){const ce=i.get(C);E!==void 0&&Ue(ce.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),Q!==void 0&&Ee(C)}function Te(C){const E=C.texture,Q=i.get(C),ce=i.get(E);C.addEventListener("dispose",te),C.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture()),ce.__version=E.version,s.memory.textures++);const fe=C.isWebGLCubeRenderTarget===!0,L=C.isWebGLMultipleRenderTargets===!0,oe=g(C)||a;if(fe){Q.__webglFramebuffer=[];for(let le=0;le<6;le++)Q.__webglFramebuffer[le]=t.createFramebuffer()}else{if(Q.__webglFramebuffer=t.createFramebuffer(),L)if(r.drawBuffers){const le=C.texture;for(let Y=0,_e=le.length;Y<_e;Y++){const Me=i.get(le[Y]);Me.__webglTexture===void 0&&(Me.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Oe(C)===!1){const le=L?E:[E];Q.__webglMultisampledFramebuffer=t.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Y=0;Y<le.length;Y++){const _e=le[Y];Q.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Q.__webglColorRenderbuffer[Y]);const Me=o.convert(_e.format,_e.colorSpace),b=o.convert(_e.type),D=N(_e.internalFormat,Me,b,_e.colorSpace,C.isXRRenderTarget===!0),k=Le(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,k,D,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,Q.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(Q.__webglDepthRenderbuffer=t.createRenderbuffer(),G(Q.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(fe){n.bindTexture(t.TEXTURE_CUBE_MAP,ce.__webglTexture),Ce(t.TEXTURE_CUBE_MAP,E,oe);for(let le=0;le<6;le++)Ue(Q.__webglFramebuffer[le],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le);R(E,oe)&&A(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(L){const le=C.texture;for(let Y=0,_e=le.length;Y<_e;Y++){const Me=le[Y],b=i.get(Me);n.bindTexture(t.TEXTURE_2D,b.__webglTexture),Ce(t.TEXTURE_2D,Me,oe),Ue(Q.__webglFramebuffer,C,Me,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D),R(Me,oe)&&A(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,ce.__webglTexture),Ce(le,E,oe),Ue(Q.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,le),R(E,oe)&&A(le),n.unbindTexture()}C.depthBuffer&&Ee(C)}function Ze(C){const E=g(C)||a,Q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ce=0,fe=Q.length;ce<fe;ce++){const L=Q[ce];if(R(L,E)){const oe=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(L).__webglTexture;n.bindTexture(oe,le),A(oe),n.unbindTexture()}}}function Ie(C){if(a&&C.samples>0&&Oe(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Q=C.width,ce=C.height;let fe=t.COLOR_BUFFER_BIT;const L=[],oe=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(C),Y=C.isWebGLMultipleRenderTargets===!0;if(Y)for(let _e=0;_e<E.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){L.push(t.COLOR_ATTACHMENT0+_e),C.depthBuffer&&L.push(oe);const Me=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Me===!1&&(C.depthBuffer&&(fe|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(fe|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[_e]),Me===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[oe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[oe])),Y){const b=i.get(E[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,b,0)}t.blitFramebuffer(0,0,Q,ce,0,0,Q,ce,fe,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let _e=0;_e<E.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,le.__webglColorRenderbuffer[_e]);const Me=i.get(E[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Le(C){return Math.min(d,C.samples)}function Oe(C){const E=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ct(C){const E=s.render.frame;y.get(C)!==E&&(y.set(C,E),C.update())}function ht(C,E){const Q=C.colorSpace,ce=C.format,fe=C.type;return C.isCompressedTexture===!0||C.format===xf||Q!==ni&&Q!==Tr&&(Q===He?a===!1?e.has("EXT_sRGB")===!0&&ce===Wn?(C.format=xf,C.minFilter=wn,C.generateMipmaps=!1):E=l_.sRGBToLinear(E):(ce!==Wn||fe!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),E}this.allocateTextureUnit=I,this.resetTextureUnits=Z,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=he,this.rebindTextures=Ae,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Oe}function w1(t,e,n){const i=n.isWebGL2;function r(o,s=Tr){let a;if(o===Zi)return t.UNSIGNED_BYTE;if(o===Jv)return t.UNSIGNED_SHORT_4_4_4_4;if(o===e_)return t.UNSIGNED_SHORT_5_5_5_1;if(o===Wx)return t.BYTE;if(o===Xx)return t.SHORT;if(o===Ed)return t.UNSIGNED_SHORT;if(o===Qv)return t.INT;if(o===Bi)return t.UNSIGNED_INT;if(o===Hi)return t.FLOAT;if(o===ea)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===jx)return t.ALPHA;if(o===Wn)return t.RGBA;if(o===Yx)return t.LUMINANCE;if(o===qx)return t.LUMINANCE_ALPHA;if(o===Mr)return t.DEPTH_COMPONENT;if(o===Go)return t.DEPTH_STENCIL;if(o===xf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===$x)return t.RED;if(o===t_)return t.RED_INTEGER;if(o===Kx)return t.RG;if(o===n_)return t.RG_INTEGER;if(o===i_)return t.RGBA_INTEGER;if(o===Bu||o===Hu||o===Gu||o===Vu)if(s===He)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Bu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Bu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Hu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Gu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Vu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Jh||o===ep||o===tp||o===np)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Jh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===ep)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===tp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===np)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Zx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===ip||o===rp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===ip)return s===He?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===rp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===op||o===sp||o===ap||o===lp||o===up||o===cp||o===fp||o===dp||o===hp||o===pp||o===mp||o===gp||o===vp||o===_p)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===op)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===sp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===ap)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===lp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===up)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===cp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===fp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===dp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===hp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===pp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===mp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===gp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===vp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===_p)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Wu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Wu)return s===He?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===Qx||o===yp||o===xp||o===Sp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Wu)return a.COMPRESSED_RED_RGTC1_EXT;if(o===yp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===xp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Sp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Sr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class A1 extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Za extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R1={type:"move"};class dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),f=this._getHandJoint(u,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),m=.02,y=.005;u.inputState.pinching&&h>m+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Za;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class C1 extends sn{constructor(e,n,i,r,o,s,a,l,u,c){if(c=c!==void 0?c:Mr,c!==Mr&&c!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Mr&&(i=Bi),i===void 0&&c===Go&&(i=Sr),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class P1 extends Fr{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,m=null,y=null;const x=n.getContextAttributes();let p=null,f=null;const _=[],v=[],g=new hn;g.layers.enable(1),g.viewport=new st;const S=new hn;S.layers.enable(2),S.viewport=new st;const R=[g,S],A=new A1;A.layers.enable(1),A.layers.enable(2);let N=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let V=_[B];return V===void 0&&(V=new dc,_[B]=V),V.getTargetRaySpace()},this.getControllerGrip=function(B){let V=_[B];return V===void 0&&(V=new dc,_[B]=V),V.getGripSpace()},this.getHand=function(B){let V=_[B];return V===void 0&&(V=new dc,_[B]=V),V.getHandSpace()};function T(B){const V=v.indexOf(B.inputSource);if(V===-1)return;const he=_[V];he!==void 0&&(he.update(B.inputSource,B.frame,u||s),he.dispatchEvent({type:B.type,data:B.inputSource}))}function ne(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",te);for(let B=0;B<_.length;B++){const V=v[B];V!==null&&(v[B]=null,_[B].disconnect(V))}N=null,M=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,f=null,W.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",te),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,V),r.updateRenderState({baseLayer:m}),f=new Lr(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let V=null,he=null,se=null;x.depth&&(se=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,V=x.stencil?Go:Mr,he=x.stencil?Sr:Bi);const pe={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(pe),r.updateRenderState({layers:[h]}),f=new Lr(h.textureWidth,h.textureHeight,{format:Wn,type:Zi,depthTexture:new C1(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ye=e.properties.get(f);ye.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),W.setContext(r),W.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(B){for(let V=0;V<B.removed.length;V++){const he=B.removed[V],se=v.indexOf(he);se>=0&&(v[se]=null,_[se].disconnect(he))}for(let V=0;V<B.added.length;V++){const he=B.added[V];let se=v.indexOf(he);if(se===-1){for(let ye=0;ye<_.length;ye++)if(ye>=v.length){v.push(he),se=ye;break}else if(v[ye]===null){v[ye]=he,se=ye;break}if(se===-1)break}const pe=_[se];pe&&pe.connect(he)}}const H=new O,q=new O;function $(B,V,he){H.setFromMatrixPosition(V.matrixWorld),q.setFromMatrixPosition(he.matrixWorld);const se=H.distanceTo(q),pe=V.projectionMatrix.elements,ye=he.projectionMatrix.elements,Ce=pe[14]/(pe[10]-1),Se=pe[14]/(pe[10]+1),je=(pe[9]+1)/pe[5],Tt=(pe[9]-1)/pe[5],Ue=(pe[8]-1)/pe[0],G=(ye[8]+1)/ye[0],_t=Ce*Ue,Ee=Ce*G,Ae=se/(-Ue+G),Te=Ae*-Ue;V.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Te),B.translateZ(Ae),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Ze=Ce+Ae,Ie=Se+Ae,Le=_t-Te,Oe=Ee+(se-Te),ct=je*Se/Ie*Ze,ht=Tt*Se/Ie*Ze;B.projectionMatrix.makePerspective(Le,Oe,ct,ht,Ze,Ie),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function re(B,V){V===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(V.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;A.near=S.near=g.near=B.near,A.far=S.far=g.far=B.far,(N!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),N=A.near,M=A.far);const V=B.parent,he=A.cameras;re(A,V);for(let se=0;se<he.length;se++)re(he[se],V);he.length===2?$(A,g,S):A.projectionMatrix.copy(g.projectionMatrix),Z(B,A,V)};function Z(B,V,he){he===null?B.matrix.copy(V.matrixWorld):(B.matrix.copy(he.matrixWorld),B.matrix.invert(),B.matrix.multiply(V.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0);const se=B.children;for(let pe=0,ye=se.length;pe<ye;pe++)se[pe].updateMatrixWorld(!0);B.projectionMatrix.copy(V.projectionMatrix),B.projectionMatrixInverse.copy(V.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ta*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let I=null;function j(B,V){if(c=V.getViewerPose(u||s),y=V,c!==null){const he=c.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let se=!1;he.length!==A.cameras.length&&(A.cameras.length=0,se=!0);for(let pe=0;pe<he.length;pe++){const ye=he[pe];let Ce=null;if(m!==null)Ce=m.getViewport(ye);else{const je=d.getViewSubImage(h,ye);Ce=je.viewport,pe===0&&(e.setRenderTargetTextures(f,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(f))}let Se=R[pe];Se===void 0&&(Se=new hn,Se.layers.enable(pe),Se.viewport=new st,R[pe]=Se),Se.matrix.fromArray(ye.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(ye.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),pe===0&&(A.matrix.copy(Se.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),se===!0&&A.cameras.push(Se)}}for(let he=0;he<_.length;he++){const se=v[he],pe=_[he];se!==null&&pe!==void 0&&pe.update(se,V,u||s)}I&&I(B,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),y=null}const W=new __;W.setAnimationLoop(j),this.setAnimationLoop=function(B){I=B},this.dispose=function(){}}}function L1(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,m_(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,_,v,g){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(p,f):f.isMeshToonMaterial?(o(p,f),d(p,f)):f.isMeshPhongMaterial?(o(p,f),c(p,f)):f.isMeshStandardMaterial?(o(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,g)):f.isMeshMatcapMaterial?(o(p,f),y(p,f)):f.isMeshDepthMaterial?o(p,f):f.isMeshDistanceMaterial?(o(p,f),x(p,f)):f.isMeshNormalMaterial?o(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,_,v):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===on&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===on&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=t.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,n(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,_,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=v*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===on&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const _=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function b1(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const g=v.program;i.uniformBlockBinding(_,g)}function u(_,v){let g=r[_.id];g===void 0&&(y(_),g=c(_),r[_.id]=g,_.addEventListener("dispose",p));const S=v.program;i.updateUBOMapping(_,S);const R=e.render.frame;o[_.id]!==R&&(h(_),o[_.id]=R)}function c(_){const v=d();_.__bindingPointIndex=v;const g=t.createBuffer(),S=_.__size,R=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,g),t.bufferData(t.UNIFORM_BUFFER,S,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,g),g}function d(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],g=_.uniforms,S=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,A=g.length;R<A;R++){const N=g[R];if(m(N,R,S)===!0){const M=N.__offset,T=Array.isArray(N.value)?N.value:[N.value];let ne=0;for(let te=0;te<T.length;te++){const H=T[te],q=x(H);typeof H=="number"?(N.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,M+ne,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=H.elements[0],N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=H.elements[0],N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=H.elements[0]):(H.toArray(N.__data,ne),ne+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,N.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,v,g){const S=_.value;if(g[v]===void 0){if(typeof S=="number")g[v]=S;else{const R=Array.isArray(S)?S:[S],A=[];for(let N=0;N<R.length;N++)A.push(R[N].clone());g[v]=A}return!0}else if(typeof S=="number"){if(g[v]!==S)return g[v]=S,!0}else{const R=Array.isArray(g[v])?g[v]:[g[v]],A=Array.isArray(S)?S:[S];for(let N=0;N<R.length;N++){const M=R[N];if(M.equals(A[N])===!1)return M.copy(A[N]),!0}}return!1}function y(_){const v=_.uniforms;let g=0;const S=16;let R=0;for(let A=0,N=v.length;A<N;A++){const M=v[A],T={boundary:0,storage:0},ne=Array.isArray(M.value)?M.value:[M.value];for(let te=0,H=ne.length;te<H;te++){const q=ne[te],$=x(q);T.boundary+=$.boundary,T.storage+=$.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=g,A>0){R=g%S;const te=S-R;R!==0&&te-T.boundary<0&&(g+=S-R,M.__offset=g)}g+=T.storage}return R=g%S,R>0&&(g+=S-R),_.__size=g,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const g=s.indexOf(v.__bindingPointIndex);s.splice(g,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:l,update:u,dispose:f}}function D1(){const t=na("canvas");return t.style.display="block",t}class E_{constructor(e={}){const{canvas:n=D1(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const m=new Uint32Array(4),y=new Int32Array(4);let x=null,p=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=He,this.useLegacyLights=!0,this.toneMapping=yi,this.toneMappingExposure=1;const v=this;let g=!1,S=0,R=0,A=null,N=-1,M=null;const T=new st,ne=new st;let te=null;const H=new et(0);let q=0,$=n.width,re=n.height,Z=1,I=null,j=null;const W=new st(0,0,$,re),B=new st(0,0,$,re);let V=!1;const he=new Rd;let se=!1,pe=!1,ye=null;const Ce=new Et,Se=new Fe,je=new O,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return A===null?Z:1}let G=i;function _t(w,F){for(let K=0;K<w.length;K++){const z=w[K],J=n.getContext(z,F);if(J!==null)return J}return null}try{const w={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Md}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",U,!1),n.addEventListener("webglcontextcreationerror",X,!1),G===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),G=_t(F,w),G===null)throw _t(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ee,Ae,Te,Ze,Ie,Le,Oe,ct,ht,C,E,Q,ce,fe,L,oe,le,Y,_e,Me,b,D,k,ie;function de(){Ee=new GT(G),Ae=new NT(G,Ee,e),Ee.init(Ae),D=new w1(G,Ee,Ae),Te=new E1(G,Ee,Ae),Ze=new XT(G),Ie=new u1,Le=new T1(G,Ee,Te,Ie,Ae,D,Ze),Oe=new OT(v),ct=new HT(v),ht=new eM(G,Ae),k=new UT(G,Ee,ht,Ae),C=new VT(G,ht,Ze,k),E=new $T(G,C,ht,Ze),_e=new qT(G,Ae,Le),oe=new FT(Ie),Q=new l1(v,Oe,ct,Ee,Ae,k,oe),ce=new L1(v,Ie),fe=new f1,L=new v1(Ee,Ae),Y=new DT(v,Oe,ct,Te,E,h,l),le=new M1(v,E,Ae),ie=new b1(G,Ze,Ae,Te),Me=new IT(G,Ee,Ze,Ae),b=new WT(G,Ee,Ze,Ae),Ze.programs=Q.programs,v.capabilities=Ae,v.extensions=Ee,v.properties=Ie,v.renderLists=fe,v.shadowMap=le,v.state=Te,v.info=Ze}de();const P=new P1(v,G);this.xr=P,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=Ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize($,re,!1))},this.getSize=function(w){return w.set($,re)},this.setSize=function(w,F,K=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,re=F,n.width=Math.floor(w*Z),n.height=Math.floor(F*Z),K===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set($*Z,re*Z).floor()},this.setDrawingBufferSize=function(w,F,K){$=w,re=F,Z=K,n.width=Math.floor(w*K),n.height=Math.floor(F*K),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(W)},this.setViewport=function(w,F,K,z){w.isVector4?W.set(w.x,w.y,w.z,w.w):W.set(w,F,K,z),Te.viewport(T.copy(W).multiplyScalar(Z).floor())},this.getScissor=function(w){return w.copy(B)},this.setScissor=function(w,F,K,z){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,F,K,z),Te.scissor(ne.copy(B).multiplyScalar(Z).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(w){Te.setScissorTest(V=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){j=w},this.getClearColor=function(w){return w.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(w=!0,F=!0,K=!0){let z=0;if(w){let J=!1;if(A!==null){const xe=A.texture.format;J=xe===i_||xe===n_||xe===t_}if(J){const xe=A.texture.type,Re=xe===Zi||xe===Bi||xe===Ed||xe===Sr||xe===Jv||xe===e_,be=Y.getClearColor(),De=Y.getClearAlpha(),Ve=be.r,Ne=be.g,ze=be.b;Re?(m[0]=Ve,m[1]=Ne,m[2]=ze,m[3]=De,G.clearBufferuiv(G.COLOR,0,m)):(y[0]=Ve,y[1]=Ne,y[2]=ze,y[3]=De,G.clearBufferiv(G.COLOR,0,y))}else z|=G.COLOR_BUFFER_BIT}F&&(z|=G.DEPTH_BUFFER_BIT),K&&(z|=G.STENCIL_BUFFER_BIT),G.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",U,!1),n.removeEventListener("webglcontextcreationerror",X,!1),fe.dispose(),L.dispose(),Ie.dispose(),Oe.dispose(),ct.dispose(),E.dispose(),k.dispose(),ie.dispose(),Q.dispose(),P.dispose(),P.removeEventListener("sessionstart",$e),P.removeEventListener("sessionend",Lt),ye&&(ye.dispose(),ye=null),pt.stop()};function ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const w=Ze.autoReset,F=le.enabled,K=le.autoUpdate,z=le.needsUpdate,J=le.type;de(),Ze.autoReset=w,le.enabled=F,le.autoUpdate=K,le.needsUpdate=z,le.type=J}function X(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ae(w){const F=w.target;F.removeEventListener("dispose",ae),Pe(F)}function Pe(w){we(w),Ie.remove(w)}function we(w){const F=Ie.get(w).programs;F!==void 0&&(F.forEach(function(K){Q.releaseProgram(K)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,K,z,J,xe){F===null&&(F=Tt);const Re=J.isMesh&&J.matrixWorld.determinant()<0,be=Ke(w,F,K,z,J);Te.setMaterial(z,Re);let De=K.index,Ve=1;z.wireframe===!0&&(De=C.getWireframeAttribute(K),Ve=2);const Ne=K.drawRange,ze=K.attributes.position;let ft=Ne.start*Ve,mt=(Ne.start+Ne.count)*Ve;xe!==null&&(ft=Math.max(ft,xe.start*Ve),mt=Math.min(mt,(xe.start+xe.count)*Ve)),De!==null?(ft=Math.max(ft,0),mt=Math.min(mt,De.count)):ze!=null&&(ft=Math.max(ft,0),mt=Math.min(mt,ze.count));const Dn=mt-ft;if(Dn<0||Dn===1/0)return;k.setup(J,z,be,K,De);let ri,yt=Me;if(De!==null&&(ri=ht.get(De),yt=b,yt.setIndex(ri)),J.isMesh)z.wireframe===!0?(Te.setLineWidth(z.wireframeLinewidth*Ue()),yt.setMode(G.LINES)):yt.setMode(G.TRIANGLES);else if(J.isLine){let Ye=z.linewidth;Ye===void 0&&(Ye=1),Te.setLineWidth(Ye*Ue()),J.isLineSegments?yt.setMode(G.LINES):J.isLineLoop?yt.setMode(G.LINE_LOOP):yt.setMode(G.LINE_STRIP)}else J.isPoints?yt.setMode(G.POINTS):J.isSprite&&yt.setMode(G.TRIANGLES);if(J.isInstancedMesh)yt.renderInstances(ft,Dn,J.count);else if(K.isInstancedBufferGeometry){const Ye=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,uu=Math.min(K.instanceCount,Ye);yt.renderInstances(ft,Dn,uu)}else yt.render(ft,Dn)},this.compile=function(w,F){function K(z,J,xe){z.transparent===!0&&z.side===pi&&z.forceSinglePass===!1?(z.side=on,z.needsUpdate=!0,Ci(z,J,xe),z.side=er,z.needsUpdate=!0,Ci(z,J,xe),z.side=pi):Ci(z,J,xe)}p=L.get(w),p.init(),_.push(p),w.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(v.useLegacyLights),w.traverse(function(z){const J=z.material;if(J)if(Array.isArray(J))for(let xe=0;xe<J.length;xe++){const Re=J[xe];K(Re,w,z)}else K(J,w,z)}),_.pop(),p=null};let ke=null;function Qe(w){ke&&ke(w)}function $e(){pt.stop()}function Lt(){pt.start()}const pt=new __;pt.setAnimationLoop(Qe),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(w){ke=w,P.setAnimationLoop(w),w===null?pt.stop():pt.start()},P.addEventListener("sessionstart",$e),P.addEventListener("sessionend",Lt),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(F),F=P.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,F,A),p=L.get(w,_.length),p.init(),_.push(p),Ce.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),he.setFromProjectionMatrix(Ce),pe=this.localClippingEnabled,se=oe.init(this.clippingPlanes,pe),x=fe.get(w,f.length),x.init(),f.push(x),kr(w,F,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(I,j),this.info.render.frame++,se===!0&&oe.beginShadows();const K=p.state.shadowsArray;if(le.render(K,w,F),se===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(x,w),p.setupLights(v.useLegacyLights),F.isArrayCamera){const z=F.cameras;for(let J=0,xe=z.length;J<xe;J++){const Re=z[J];xn(x,w,Re,Re.viewport)}}else xn(x,w,F);A!==null&&(Le.updateMultisampleRenderTarget(A),Le.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,F),k.resetDefaultState(),N=-1,M=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function kr(w,F,K,z){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||he.intersectsSprite(w)){z&&je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ce);const Re=E.update(w),be=w.material;be.visible&&x.push(w,Re,be,K,je.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||he.intersectsObject(w))){const Re=E.update(w),be=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),je.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),je.copy(Re.boundingSphere.center)),je.applyMatrix4(w.matrixWorld).applyMatrix4(Ce)),Array.isArray(be)){const De=Re.groups;for(let Ve=0,Ne=De.length;Ve<Ne;Ve++){const ze=De[Ve],ft=be[ze.materialIndex];ft&&ft.visible&&x.push(w,Re,ft,K,je.z,ze)}}else be.visible&&x.push(w,Re,be,K,je.z,null)}}const xe=w.children;for(let Re=0,be=xe.length;Re<be;Re++)kr(xe[Re],F,K,z)}function xn(w,F,K,z){const J=w.opaque,xe=w.transmissive,Re=w.transparent;p.setupLightsView(K),se===!0&&oe.setGlobalState(v.clippingPlanes,K),xe.length>0&&bn(J,xe,F,K),z&&Te.viewport(T.copy(z)),J.length>0&&ii(J,F,K),xe.length>0&&ii(xe,F,K),Re.length>0&&ii(Re,F,K),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function bn(w,F,K,z){const J=Ae.isWebGL2;ye===null&&(ye=new Lr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?ea:Zi,minFilter:Js,samples:J?4:0})),v.getDrawingBufferSize(Se),J?ye.setSize(Se.x,Se.y):ye.setSize(Ol(Se.x),Ol(Se.y));const xe=v.getRenderTarget();v.setRenderTarget(ye),v.getClearColor(H),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear();const Re=v.toneMapping;v.toneMapping=yi,ii(w,K,z),Le.updateMultisampleRenderTarget(ye),Le.updateRenderTargetMipmap(ye);let be=!1;for(let De=0,Ve=F.length;De<Ve;De++){const Ne=F[De],ze=Ne.object,ft=Ne.geometry,mt=Ne.material,Dn=Ne.group;if(mt.side===pi&&ze.layers.test(z.layers)){const ri=mt.side;mt.side=on,mt.needsUpdate=!0,zr(ze,K,z,ft,mt,Dn),mt.side=ri,mt.needsUpdate=!0,be=!0}}be===!0&&(Le.updateMultisampleRenderTarget(ye),Le.updateRenderTargetMipmap(ye)),v.setRenderTarget(xe),v.setClearColor(H,q),v.toneMapping=Re}function ii(w,F,K){const z=F.isScene===!0?F.overrideMaterial:null;for(let J=0,xe=w.length;J<xe;J++){const Re=w[J],be=Re.object,De=Re.geometry,Ve=z===null?Re.material:z,Ne=Re.group;be.layers.test(K.layers)&&zr(be,F,K,De,Ve,Ne)}}function zr(w,F,K,z,J,xe){w.onBeforeRender(v,F,K,z,J,xe),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(v,F,K,z,w,xe),J.transparent===!0&&J.side===pi&&J.forceSinglePass===!1?(J.side=on,J.needsUpdate=!0,v.renderBufferDirect(K,F,z,J,w,xe),J.side=er,J.needsUpdate=!0,v.renderBufferDirect(K,F,z,J,w,xe),J.side=pi):v.renderBufferDirect(K,F,z,J,w,xe),w.onAfterRender(v,F,K,z,J,xe)}function Ci(w,F,K){F.isScene!==!0&&(F=Tt);const z=Ie.get(w),J=p.state.lights,xe=p.state.shadowsArray,Re=J.state.version,be=Q.getParameters(w,J.state,xe,F,K),De=Q.getProgramCacheKey(be);let Ve=z.programs;z.environment=w.isMeshStandardMaterial?F.environment:null,z.fog=F.fog,z.envMap=(w.isMeshStandardMaterial?ct:Oe).get(w.envMap||z.environment),Ve===void 0&&(w.addEventListener("dispose",ae),Ve=new Map,z.programs=Ve);let Ne=Ve.get(De);if(Ne!==void 0){if(z.currentProgram===Ne&&z.lightsStateVersion===Re)return Br(w,be),Ne}else be.uniforms=Q.getUniforms(w),w.onBuild(K,be,v),w.onBeforeCompile(be,v),Ne=Q.acquireProgram(be,De),Ve.set(De,Ne),z.uniforms=be.uniforms;const ze=z.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=oe.uniform),Br(w,be),z.needsLights=qn(w),z.lightsStateVersion=Re,z.needsLights&&(ze.ambientLightColor.value=J.state.ambient,ze.lightProbe.value=J.state.probe,ze.directionalLights.value=J.state.directional,ze.directionalLightShadows.value=J.state.directionalShadow,ze.spotLights.value=J.state.spot,ze.spotLightShadows.value=J.state.spotShadow,ze.rectAreaLights.value=J.state.rectArea,ze.ltc_1.value=J.state.rectAreaLTC1,ze.ltc_2.value=J.state.rectAreaLTC2,ze.pointLights.value=J.state.point,ze.pointLightShadows.value=J.state.pointShadow,ze.hemisphereLights.value=J.state.hemi,ze.directionalShadowMap.value=J.state.directionalShadowMap,ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ze.spotShadowMap.value=J.state.spotShadowMap,ze.spotLightMatrix.value=J.state.spotLightMatrix,ze.spotLightMap.value=J.state.spotLightMap,ze.pointShadowMap.value=J.state.pointShadowMap,ze.pointShadowMatrix.value=J.state.pointShadowMatrix);const ft=Ne.getUniforms(),mt=fl.seqWithValue(ft.seq,ze);return z.currentProgram=Ne,z.uniformsList=mt,Ne}function Br(w,F){const K=Ie.get(w);K.outputColorSpace=F.outputColorSpace,K.instancing=F.instancing,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function Ke(w,F,K,z,J){F.isScene!==!0&&(F=Tt),Le.resetTextureUnits();const xe=F.fog,Re=z.isMeshStandardMaterial?F.environment:null,be=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ni,De=(z.isMeshStandardMaterial?ct:Oe).get(z.envMap||Re),Ve=z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ne=!!K.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ze=!!K.morphAttributes.position,ft=!!K.morphAttributes.normal,mt=!!K.morphAttributes.color,Dn=z.toneMapped?v.toneMapping:yi,ri=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,yt=ri!==void 0?ri.length:0,Ye=Ie.get(z),uu=p.state.lights;if(se===!0&&(pe===!0||w!==M)){const un=w===M&&z.id===N;oe.setState(z,w,un)}let bt=!1;z.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==uu.state.version||Ye.outputColorSpace!==be||J.isInstancedMesh&&Ye.instancing===!1||!J.isInstancedMesh&&Ye.instancing===!0||J.isSkinnedMesh&&Ye.skinning===!1||!J.isSkinnedMesh&&Ye.skinning===!0||Ye.envMap!==De||z.fog===!0&&Ye.fog!==xe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==oe.numPlanes||Ye.numIntersection!==oe.numIntersection)||Ye.vertexAlphas!==Ve||Ye.vertexTangents!==Ne||Ye.morphTargets!==ze||Ye.morphNormals!==ft||Ye.morphColors!==mt||Ye.toneMapping!==Dn||Ae.isWebGL2===!0&&Ye.morphTargetsCount!==yt)&&(bt=!0):(bt=!0,Ye.__version=z.version);let rr=Ye.currentProgram;bt===!0&&(rr=Ci(z,F,J));let Nd=!1,Jo=!1,cu=!1;const Xt=rr.getUniforms(),or=Ye.uniforms;if(Te.useProgram(rr.program)&&(Nd=!0,Jo=!0,cu=!0),z.id!==N&&(N=z.id,Jo=!0),Nd||M!==w){if(Xt.setValue(G,"projectionMatrix",w.projectionMatrix),Ae.logarithmicDepthBuffer&&Xt.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),M!==w&&(M=w,Jo=!0,cu=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const un=Xt.map.cameraPosition;un!==void 0&&un.setValue(G,je.setFromMatrixPosition(w.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Xt.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||J.isSkinnedMesh)&&Xt.setValue(G,"viewMatrix",w.matrixWorldInverse)}if(J.isSkinnedMesh){Xt.setOptional(G,J,"bindMatrix"),Xt.setOptional(G,J,"bindMatrixInverse");const un=J.skeleton;un&&(Ae.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),Xt.setValue(G,"boneTexture",un.boneTexture,Le),Xt.setValue(G,"boneTextureSize",un.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fu=K.morphAttributes;if((fu.position!==void 0||fu.normal!==void 0||fu.color!==void 0&&Ae.isWebGL2===!0)&&_e.update(J,K,rr),(Jo||Ye.receiveShadow!==J.receiveShadow)&&(Ye.receiveShadow=J.receiveShadow,Xt.setValue(G,"receiveShadow",J.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(or.envMap.value=De,or.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Jo&&(Xt.setValue(G,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&ln(or,cu),xe&&z.fog===!0&&ce.refreshFogUniforms(or,xe),ce.refreshMaterialUniforms(or,z,Z,re,ye),fl.upload(G,Ye.uniformsList,or,Le)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(fl.upload(G,Ye.uniformsList,or,Le),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Xt.setValue(G,"center",J.center),Xt.setValue(G,"modelViewMatrix",J.modelViewMatrix),Xt.setValue(G,"normalMatrix",J.normalMatrix),Xt.setValue(G,"modelMatrix",J.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const un=z.uniformsGroups;for(let du=0,z_=un.length;du<z_;du++)if(Ae.isWebGL2){const Fd=un[du];ie.update(Fd,rr),ie.bind(Fd,rr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rr}function ln(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function qn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,F,K){Ie.get(w.texture).__webglTexture=F,Ie.get(w.depthTexture).__webglTexture=K;const z=Ie.get(w);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=K===void 0,z.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){const K=Ie.get(w);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,K=0){A=w,S=F,R=K;let z=!0,J=null,xe=!1,Re=!1;if(w){const De=Ie.get(w);De.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(G.FRAMEBUFFER,null),z=!1):De.__webglFramebuffer===void 0?Le.setupRenderTarget(w):De.__hasExternalTextures&&Le.rebindTextures(w,Ie.get(w.texture).__webglTexture,Ie.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Re=!0);const Ne=Ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(J=Ne[F],xe=!0):Ae.isWebGL2&&w.samples>0&&Le.useMultisampledRTT(w)===!1?J=Ie.get(w).__webglMultisampledFramebuffer:J=Ne,T.copy(w.viewport),ne.copy(w.scissor),te=w.scissorTest}else T.copy(W).multiplyScalar(Z).floor(),ne.copy(B).multiplyScalar(Z).floor(),te=V;if(Te.bindFramebuffer(G.FRAMEBUFFER,J)&&Ae.drawBuffers&&z&&Te.drawBuffers(w,J),Te.viewport(T),Te.scissor(ne),Te.setScissorTest(te),xe){const De=Ie.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+F,De.__webglTexture,K)}else if(Re){const De=Ie.get(w.texture),Ve=F||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,De.__webglTexture,K||0,Ve)}N=-1},this.readRenderTargetPixels=function(w,F,K,z,J,xe,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(be=be[Re]),be){Te.bindFramebuffer(G.FRAMEBUFFER,be);try{const De=w.texture,Ve=De.format,Ne=De.type;if(Ve!==Wn&&D.convert(Ve)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Ne===ea&&(Ee.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ne!==Zi&&D.convert(Ne)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Hi&&(Ae.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-z&&K>=0&&K<=w.height-J&&G.readPixels(F,K,z,J,D.convert(Ve),D.convert(Ne),xe)}finally{const De=A!==null?Ie.get(A).__webglFramebuffer:null;Te.bindFramebuffer(G.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(w,F,K=0){const z=Math.pow(2,-K),J=Math.floor(F.image.width*z),xe=Math.floor(F.image.height*z);Le.setTexture2D(F,0),G.copyTexSubImage2D(G.TEXTURE_2D,K,0,0,w.x,w.y,J,xe),Te.unbindTexture()},this.copyTextureToTexture=function(w,F,K,z=0){const J=F.image.width,xe=F.image.height,Re=D.convert(K.format),be=D.convert(K.type);Le.setTexture2D(K,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment),F.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,z,w.x,w.y,J,xe,Re,be,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,z,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,Re,F.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,z,w.x,w.y,Re,be,F.image),z===0&&K.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(w,F,K,z,J=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=w.max.x-w.min.x+1,Re=w.max.y-w.min.y+1,be=w.max.z-w.min.z+1,De=D.convert(z.format),Ve=D.convert(z.type);let Ne;if(z.isData3DTexture)Le.setTexture3D(z,0),Ne=G.TEXTURE_3D;else if(z.isDataArrayTexture)Le.setTexture2DArray(z,0),Ne=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,z.unpackAlignment);const ze=G.getParameter(G.UNPACK_ROW_LENGTH),ft=G.getParameter(G.UNPACK_IMAGE_HEIGHT),mt=G.getParameter(G.UNPACK_SKIP_PIXELS),Dn=G.getParameter(G.UNPACK_SKIP_ROWS),ri=G.getParameter(G.UNPACK_SKIP_IMAGES),yt=K.isCompressedTexture?K.mipmaps[0]:K.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,yt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,w.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,w.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,w.min.z),K.isDataTexture||K.isData3DTexture?G.texSubImage3D(Ne,J,F.x,F.y,F.z,xe,Re,be,De,Ve,yt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ne,J,F.x,F.y,F.z,xe,Re,be,De,yt.data)):G.texSubImage3D(Ne,J,F.x,F.y,F.z,xe,Re,be,De,Ve,yt),G.pixelStorei(G.UNPACK_ROW_LENGTH,ze),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ft),G.pixelStorei(G.UNPACK_SKIP_PIXELS,mt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Dn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ri),J===0&&z.generateMipmaps&&G.generateMipmap(Ne),Te.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Le.setTextureCube(w,0):w.isData3DTexture?Le.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Le.setTexture2DArray(w,0):Le.setTexture2D(w,0),Te.unbindTexture()},this.resetState=function(){S=0,R=0,A=null,Te.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===He?Er:r_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Er?He:ni}}class U1 extends E_{}U1.prototype.isWebGL1Renderer=!0;class I1 extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class kl extends Ai{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let u=0;const c=[],d=new O,h=new O,m=[],y=[],x=[],p=[];for(let f=0;f<=i;f++){const _=[],v=f/i;let g=0;f===0&&s===0?g=.5/n:f===i&&l===Math.PI&&(g=-.5/n);for(let S=0;S<=n;S++){const R=S/n;d.x=-e*Math.cos(r+R*o)*Math.sin(s+v*a),d.y=e*Math.cos(s+v*a),d.z=e*Math.sin(r+R*o)*Math.sin(s+v*a),y.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(R+g,1-v),_.push(u++)}c.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){const v=c[f][_+1],g=c[f][_],S=c[f+1][_],R=c[f+1][_+1];(f!==0||s>0)&&m.push(v,g,R),(f!==i-1||l<Math.PI)&&m.push(g,S,R)}this.setIndex(m),this.setAttribute("position",new gn(y,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ld extends Ai{constructor(e=1,n=.4,i=12,r=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:o},i=Math.floor(i),r=Math.floor(r);const s=[],a=[],l=[],u=[],c=new O,d=new O,h=new O;for(let m=0;m<=i;m++)for(let y=0;y<=r;y++){const x=y/r*o,p=m/i*Math.PI*2;d.x=(e+n*Math.cos(p))*Math.cos(x),d.y=(e+n*Math.cos(p))*Math.sin(x),d.z=n*Math.sin(p),a.push(d.x,d.y,d.z),c.x=e*Math.cos(x),c.y=e*Math.sin(x),h.subVectors(d,c).normalize(),l.push(h.x,h.y,h.z),u.push(y/r),u.push(m/i)}for(let m=1;m<=i;m++)for(let y=1;y<=r;y++){const x=(r+1)*m+y-1,p=(r+1)*(m-1)+y-1,f=(r+1)*(m-1)+y,_=(r+1)*m+y;s.push(x,p,_),s.push(p,f,_)}this.setIndex(s),this.setAttribute("position",new gn(a,3)),this.setAttribute("normal",new gn(l,3)),this.setAttribute("uv",new gn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ld(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class hc extends da{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=o_,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const lm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class N1{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,o===!1&&r.onStart!==void 0&&r.onStart(c,s,a),o=!0},this.itemEnd=function(c){s++,r.onProgress!==void 0&&r.onProgress(c,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,h=u.length;d<h;d+=2){const m=u[d],y=u[d+1];if(m.global&&(m.lastIndex=0),m.test(c))return y}return null}}}const F1=new N1;class bd{constructor(e){this.manager=e!==void 0?e:F1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bd.DEFAULT_MATERIAL_NAME="__DEFAULT";class O1 extends bd{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=lm.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=na("img");function l(){c(),lm.add(e,this),n&&n(this),o.manager.itemEnd(e)}function u(d){c(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class pc extends bd{constructor(e){super(e)}load(e,n,i,r){const o=new sn,s=new O1(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class T_ extends an{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const mc=new Et,um=new O,cm=new O;class k1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rd,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;um.setFromMatrixPosition(e.matrixWorld),n.position.copy(um),cm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(cm),n.updateMatrixWorld(),mc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fm=new Et,ds=new O,gc=new O;class z1 extends k1{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ds.setFromMatrixPosition(e.matrixWorld),i.position.copy(ds),gc.copy(i.position),gc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(gc),i.updateMatrixWorld(),r.makeTranslation(-ds.x,-ds.y,-ds.z),fm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fm)}}class B1 extends T_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new z1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class H1 extends T_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class dm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Vt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Md);const hm={type:"change"},vc={type:"start"},pm={type:"end"};class G1 extends Fr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gr.ROTATE,MIDDLE:Gr.DOLLY,RIGHT:Gr.PAN},this.touches={ONE:Vr.ROTATE,TWO:Vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Oe),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Oe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(hm),i.update(),o=r.NONE},this.update=function(){const L=new O,oe=new br().setFromUnitVectors(e.up,new O(0,1,0)),le=oe.clone().invert(),Y=new O,_e=new br,Me=new O,b=2*Math.PI;return function(){const k=i.object.position;L.copy(k).sub(i.target),L.applyQuaternion(oe),a.setFromVector3(L),i.autoRotate&&o===r.NONE&&M(A()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ie=i.minAzimuthAngle,de=i.maxAzimuthAngle;return isFinite(ie)&&isFinite(de)&&(ie<-Math.PI?ie+=b:ie>Math.PI&&(ie-=b),de<-Math.PI?de+=b:de>Math.PI&&(de-=b),ie<=de?a.theta=Math.max(ie,Math.min(de,a.theta)):a.theta=a.theta>(ie+de)/2?Math.max(ie,a.theta):Math.min(de,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),L.setFromSpherical(a),L.applyQuaternion(le),k.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||Y.distanceToSquared(i.object.position)>s||8*(1-_e.dot(i.object.quaternion))>s||Me.distanceToSquared(i.target)>0?(i.dispatchEvent(hm),Y.copy(i.object.position),_e.copy(i.object.quaternion),Me.copy(i.target),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",C),i.domElement.removeEventListener("pointerdown",Ee),i.domElement.removeEventListener("pointercancel",Te),i.domElement.removeEventListener("wheel",Le),i.domElement.removeEventListener("pointermove",Ae),i.domElement.removeEventListener("pointerup",Te),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Oe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new dm,l=new dm;let u=1;const c=new O;let d=!1;const h=new Fe,m=new Fe,y=new Fe,x=new Fe,p=new Fe,f=new Fe,_=new Fe,v=new Fe,g=new Fe,S=[],R={};function A(){return 2*Math.PI/60/60*i.autoRotateSpeed}function N(){return Math.pow(.95,i.zoomSpeed)}function M(L){l.theta-=L}function T(L){l.phi-=L}const ne=function(){const L=new O;return function(le,Y){L.setFromMatrixColumn(Y,0),L.multiplyScalar(-le),c.add(L)}}(),te=function(){const L=new O;return function(le,Y){i.screenSpacePanning===!0?L.setFromMatrixColumn(Y,1):(L.setFromMatrixColumn(Y,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(le),c.add(L)}}(),H=function(){const L=new O;return function(le,Y){const _e=i.domElement;if(i.object.isPerspectiveCamera){const Me=i.object.position;L.copy(Me).sub(i.target);let b=L.length();b*=Math.tan(i.object.fov/2*Math.PI/180),ne(2*le*b/_e.clientHeight,i.object.matrix),te(2*Y*b/_e.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ne(le*(i.object.right-i.object.left)/i.object.zoom/_e.clientWidth,i.object.matrix),te(Y*(i.object.top-i.object.bottom)/i.object.zoom/_e.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(L){i.object.isPerspectiveCamera?u/=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*L)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(L){i.object.isPerspectiveCamera?u*=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/L)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(L){h.set(L.clientX,L.clientY)}function Z(L){_.set(L.clientX,L.clientY)}function I(L){x.set(L.clientX,L.clientY)}function j(L){m.set(L.clientX,L.clientY),y.subVectors(m,h).multiplyScalar(i.rotateSpeed);const oe=i.domElement;M(2*Math.PI*y.x/oe.clientHeight),T(2*Math.PI*y.y/oe.clientHeight),h.copy(m),i.update()}function W(L){v.set(L.clientX,L.clientY),g.subVectors(v,_),g.y>0?q(N()):g.y<0&&$(N()),_.copy(v),i.update()}function B(L){p.set(L.clientX,L.clientY),f.subVectors(p,x).multiplyScalar(i.panSpeed),H(f.x,f.y),x.copy(p),i.update()}function V(L){L.deltaY<0?$(N()):L.deltaY>0&&q(N()),i.update()}function he(L){let oe=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),oe=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),oe=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?M(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),oe=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?M(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),oe=!0;break}oe&&(L.preventDefault(),i.update())}function se(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),oe=.5*(S[0].pageY+S[1].pageY);h.set(L,oe)}}function pe(){if(S.length===1)x.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),oe=.5*(S[0].pageY+S[1].pageY);x.set(L,oe)}}function ye(){const L=S[0].pageX-S[1].pageX,oe=S[0].pageY-S[1].pageY,le=Math.sqrt(L*L+oe*oe);_.set(0,le)}function Ce(){i.enableZoom&&ye(),i.enablePan&&pe()}function Se(){i.enableZoom&&ye(),i.enableRotate&&se()}function je(L){if(S.length==1)m.set(L.pageX,L.pageY);else{const le=fe(L),Y=.5*(L.pageX+le.x),_e=.5*(L.pageY+le.y);m.set(Y,_e)}y.subVectors(m,h).multiplyScalar(i.rotateSpeed);const oe=i.domElement;M(2*Math.PI*y.x/oe.clientHeight),T(2*Math.PI*y.y/oe.clientHeight),h.copy(m)}function Tt(L){if(S.length===1)p.set(L.pageX,L.pageY);else{const oe=fe(L),le=.5*(L.pageX+oe.x),Y=.5*(L.pageY+oe.y);p.set(le,Y)}f.subVectors(p,x).multiplyScalar(i.panSpeed),H(f.x,f.y),x.copy(p)}function Ue(L){const oe=fe(L),le=L.pageX-oe.x,Y=L.pageY-oe.y,_e=Math.sqrt(le*le+Y*Y);v.set(0,_e),g.set(0,Math.pow(v.y/_.y,i.zoomSpeed)),q(g.y),_.copy(v)}function G(L){i.enableZoom&&Ue(L),i.enablePan&&Tt(L)}function _t(L){i.enableZoom&&Ue(L),i.enableRotate&&je(L)}function Ee(L){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",Ae),i.domElement.addEventListener("pointerup",Te)),E(L),L.pointerType==="touch"?ct(L):Ze(L))}function Ae(L){i.enabled!==!1&&(L.pointerType==="touch"?ht(L):Ie(L))}function Te(L){Q(L),S.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",Ae),i.domElement.removeEventListener("pointerup",Te)),i.dispatchEvent(pm),o=r.NONE}function Ze(L){let oe;switch(L.button){case 0:oe=i.mouseButtons.LEFT;break;case 1:oe=i.mouseButtons.MIDDLE;break;case 2:oe=i.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case Gr.DOLLY:if(i.enableZoom===!1)return;Z(L),o=r.DOLLY;break;case Gr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;I(L),o=r.PAN}else{if(i.enableRotate===!1)return;re(L),o=r.ROTATE}break;case Gr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;re(L),o=r.ROTATE}else{if(i.enablePan===!1)return;I(L),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(vc)}function Ie(L){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;j(L);break;case r.DOLLY:if(i.enableZoom===!1)return;W(L);break;case r.PAN:if(i.enablePan===!1)return;B(L);break}}function Le(L){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(L.preventDefault(),i.dispatchEvent(vc),V(L),i.dispatchEvent(pm))}function Oe(L){i.enabled===!1||i.enablePan===!1||he(L)}function ct(L){switch(ce(L),S.length){case 1:switch(i.touches.ONE){case Vr.ROTATE:if(i.enableRotate===!1)return;se(),o=r.TOUCH_ROTATE;break;case Vr.PAN:if(i.enablePan===!1)return;pe(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Vr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ce(),o=r.TOUCH_DOLLY_PAN;break;case Vr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Se(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(vc)}function ht(L){switch(ce(L),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;je(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Tt(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;G(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;_t(L),i.update();break;default:o=r.NONE}}function C(L){i.enabled!==!1&&L.preventDefault()}function E(L){S.push(L)}function Q(L){delete R[L.pointerId];for(let oe=0;oe<S.length;oe++)if(S[oe].pointerId==L.pointerId){S.splice(oe,1);return}}function ce(L){let oe=R[L.pointerId];oe===void 0&&(oe=new Fe,R[L.pointerId]=oe),oe.set(L.pageX,L.pageY)}function fe(L){const oe=L.pointerId===S[0].pointerId?S[1]:S[0];return R[oe.pointerId]}i.domElement.addEventListener("contextmenu",C),i.domElement.addEventListener("pointerdown",Ee),i.domElement.addEventListener("pointercancel",Te),i.domElement.addEventListener("wheel",Le,{passive:!1}),this.update()}}const V1="/btsui3.github.io/assets/Ben-16e0e886.png",W1="/btsui3.github.io/assets/moon-b246064f.jpg",X1="/btsui3.github.io/assets/normal-8e277ece.jpg";function j1(){const t=new I1,e=new hn(75,window.innerWidth/window.innerHeight,.1,1e3),n=new E_({canvas:document.querySelector("#bg")||void 0});n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),e.position.setZ(30),e.position.setX(-3),n.render(t,e);const i=new Ld(10,3,16,100),r=new hc({color:16737095}),o=new Rn(i,r);t.add(o);const s=new B1(16777215);s.position.set(5,5,5);const a=new H1(16777215);t.add(s,a);const l=new G1(e,n.domElement);function u(){const f=new kl(.25,24,24),_=new hc({color:16777215}),v=new Rn(f,_),[g,S,R]=Array(3).fill(null).map(()=>wS.randFloatSpread(100));v.position.set(g,S,R),t.add(v)}Array(200).fill(null).forEach(u);const c=new pc().load(V1),d=new Rn(new $o(3,3,3),new Ad({map:c}));t.add(d);const h=new pc().load(W1),m=new pc().load(X1),y=new Rn(new kl(3,32,32),new hc({map:h,normalMap:m}));t.add(y),y.position.z=30,y.position.setX(-10),d.position.z=-5,d.position.x=2;function x(){d.rotation.y+=.01,d.rotation.z+=.01}document.body.onscroll=x,x();function p(){requestAnimationFrame(p),o.rotation.x+=.01,o.rotation.y+=.005,o.rotation.z+=.01,l.update(),n.render(t,e)}return p(),gt.jsx("div",{})}/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rt(){return rt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},rt.apply(this,arguments)}var St;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(St||(St={}));const mm="popstate";function Y1(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return ia("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Ur(r)}return $1(e,n,null,t)}function We(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Wo(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function q1(){return Math.random().toString(36).substr(2,8)}function gm(t,e){return{usr:t.state,key:t.key,idx:e}}function ia(t,e,n,i){return n===void 0&&(n=null),rt({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ri(e):e,{state:n,key:e&&e.key||i||q1()})}function Ur(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ri(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function $1(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=St.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(rt({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=St.Pop;let p=c(),f=p==null?null:p-u;u=p,l&&l({action:a,location:x.location,delta:f})}function h(p,f){a=St.Push;let _=ia(x.location,p,f);n&&n(_,p),u=c()+1;let v=gm(_,u),g=x.createHref(_);try{s.pushState(v,"",g)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(g)}o&&l&&l({action:a,location:x.location,delta:1})}function m(p,f){a=St.Replace;let _=ia(x.location,p,f);n&&n(_,p),u=c();let v=gm(_,u),g=x.createHref(_);s.replaceState(v,"",g),o&&l&&l({action:a,location:x.location,delta:0})}function y(p){let f=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof p=="string"?p:Ur(p);return We(f,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,f)}let x={get action(){return a},get location(){return t(r,s)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(mm,d),l=p,()=>{r.removeEventListener(mm,d),l=null}},createHref(p){return e(r,p)},createURL:y,encodeLocation(p){let f=y(p);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:m,go(p){return s.go(p)}};return x}var wt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(wt||(wt={}));const K1=new Set(["lazy","caseSensitive","path","id","index","children"]);function Z1(t){return t.index===!0}function Ef(t,e,n,i){return n===void 0&&(n=[]),i===void 0&&(i={}),t.map((r,o)=>{let s=[...n,o],a=typeof r.id=="string"?r.id:s.join("-");if(We(r.index!==!0||!r.children,"Cannot specify children on an index route"),We(!i[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Z1(r)){let l=rt({},r,e(r),{id:a});return i[a]=l,l}else{let l=rt({},r,e(r),{id:a,children:void 0});return i[a]=l,r.children&&(l.children=Ef(r.children,e,s,i)),l}})}function Mo(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?Ri(e):e,r=Zo(i.pathname||"/",n);if(r==null)return null;let o=w_(t);Q1(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=aA(o[a],cA(r));return s}function w_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(We(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=xi([i,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(We(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),w_(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:oA(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of A_(o.path))r(o,s,l)}),e}function A_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=A_(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Q1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sA(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const J1=/^:\w+$/,eA=3,tA=2,nA=1,iA=10,rA=-2,vm=t=>t==="*";function oA(t,e){let n=t.split("/"),i=n.length;return n.some(vm)&&(i+=rA),e&&(i+=tA),n.filter(r=>!vm(r)).reduce((r,o)=>r+(J1.test(o)?eA:o===""?nA:iA),i)}function sA(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function aA(t,e){let{routesMeta:n}=t,i={},r="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",c=lA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(i,c.params);let d=a.route;o.push({params:i,pathname:xi([r,c.pathname]),pathnameBase:pA(xi([r,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(r=xi([r,c.pathnameBase]))}return o}function lA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=uA(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=fA(a[d]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:t}}function uA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Wo(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(i.push(a),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function cA(t){try{return decodeURI(t)}catch(e){return Wo(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function fA(t,e){try{return decodeURIComponent(t)}catch(n){return Wo(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Zo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function dA(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Ri(t):t;return{pathname:n?n.startsWith("/")?n:hA(n,e):e,search:mA(i),hash:gA(r)}}function hA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function _c(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ou(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Dd(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Ri(t):(r=rt({},t),We(!r.pathname||!r.pathname.includes("?"),_c("?","pathname","search",r)),We(!r.pathname||!r.pathname.includes("#"),_c("#","pathname","hash",r)),We(!r.search||!r.search.includes("#"),_c("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(i||s==null)a=n;else{let d=e.length-1;if(s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=dA(r,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const xi=t=>t.join("/").replace(/\/\/+/g,"/"),pA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),mA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,gA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Ud{constructor(e,n,i,r){r===void 0&&(r=!1),this.status=e,this.statusText=n||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function R_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const C_=["post","put","patch","delete"],vA=new Set(C_),_A=["get",...C_],yA=new Set(_A),xA=new Set([301,302,303,307,308]),SA=new Set([307,308]),yc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},MA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},hs={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},P_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,EA=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function TA(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",i=!n;We(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let r;if(t.mapRouteProperties)r=t.mapRouteProperties;else if(t.detectErrorBoundary){let b=t.detectErrorBoundary;r=D=>({hasErrorBoundary:b(D)})}else r=EA;let o={},s=Ef(t.routes,r,void 0,o),a,l=t.basename||"/",u=rt({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,h=null,m=null,y=null,x=t.hydrationData!=null,p=Mo(s,t.history.location,l),f=null;if(p==null){let b=Mn(404,{pathname:t.history.location.pathname}),{matches:D,route:k}=wm(s);p=D,f={[k.id]:b}}let _=!p.some(b=>b.route.lazy)&&(!p.some(b=>b.route.loader)||t.hydrationData!=null),v,g={historyAction:t.history.action,location:t.history.location,matches:p,initialized:_,navigation:yc,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||f,fetchers:new Map,blockers:new Map},S=St.Pop,R=!1,A,N=!1,M=!1,T=[],ne=[],te=new Map,H=0,q=-1,$=new Map,re=new Set,Z=new Map,I=new Map,j=new Map,W=!1;function B(){return c=t.history.listen(b=>{let{action:D,location:k,delta:ie}=b;if(W){W=!1;return}Wo(j.size===0||ie!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let de=fe({currentLocation:g.location,nextLocation:k,historyAction:D});if(de&&ie!=null){W=!0,t.history.go(ie*-1),ce(de,{state:"blocked",location:k,proceed(){ce(de,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),t.history.go(ie)},reset(){let P=new Map(g.blockers);P.set(de,hs),se({blockers:P})}});return}return Se(D,k)}),g.initialized||Se(St.Pop,g.location),v}function V(){c&&c(),d.clear(),A&&A.abort(),g.fetchers.forEach((b,D)=>Le(D)),g.blockers.forEach((b,D)=>Q(D))}function he(b){return d.add(b),()=>d.delete(b)}function se(b){g=rt({},g,b),d.forEach(D=>D(g))}function pe(b,D){var k,ie;let de=g.actionData!=null&&g.navigation.formMethod!=null&&Bn(g.navigation.formMethod)&&g.navigation.state==="loading"&&((k=b.state)==null?void 0:k._isRedirect)!==!0,P;D.actionData?Object.keys(D.actionData).length>0?P=D.actionData:P=null:de?P=g.actionData:P=null;let ee=D.loaderData?Tm(g.loaderData,D.loaderData,D.matches||[],D.errors):g.loaderData,U=g.blockers;U.size>0&&(U=new Map(U),U.forEach((ae,Pe)=>U.set(Pe,hs)));let X=R===!0||g.navigation.formMethod!=null&&Bn(g.navigation.formMethod)&&((ie=b.state)==null?void 0:ie._isRedirect)!==!0;a&&(s=a,a=void 0),N||S===St.Pop||(S===St.Push?t.history.push(b,b.state):S===St.Replace&&t.history.replace(b,b.state)),se(rt({},D,{actionData:P,loaderData:ee,historyAction:S,location:b,initialized:!0,navigation:yc,revalidation:"idle",restoreScrollPosition:_e(b,D.matches||g.matches),preventScrollReset:X,blockers:U})),S=St.Pop,R=!1,N=!1,M=!1,T=[],ne=[]}async function ye(b,D){if(typeof b=="number"){t.history.go(b);return}let k=Tf(g.location,g.matches,l,u.v7_prependBasename,b,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:ie,submission:de,error:P}=_m(u.v7_normalizeFormMethod,!1,k,D),ee=g.location,U=ia(g.location,ie,D&&D.state);U=rt({},U,t.history.encodeLocation(U));let X=D&&D.replace!=null?D.replace:void 0,ae=St.Push;X===!0?ae=St.Replace:X===!1||de!=null&&Bn(de.formMethod)&&de.formAction===g.location.pathname+g.location.search&&(ae=St.Replace);let Pe=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,we=fe({currentLocation:ee,nextLocation:U,historyAction:ae});if(we){ce(we,{state:"blocked",location:U,proceed(){ce(we,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),ye(b,D)},reset(){let ke=new Map(g.blockers);ke.set(we,hs),se({blockers:ke})}});return}return await Se(ae,U,{submission:de,pendingError:P,preventScrollReset:Pe,replace:D&&D.replace})}function Ce(){if(Ze(),se({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Se(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Se(S||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function Se(b,D,k){A&&A.abort(),A=null,S=b,N=(k&&k.startUninterruptedRevalidation)===!0,Y(g.location,g.matches),R=(k&&k.preventScrollReset)===!0;let ie=a||s,de=k&&k.overrideNavigation,P=Mo(ie,D,l);if(!P){let ke=Mn(404,{pathname:D.pathname}),{matches:Qe,route:$e}=wm(ie);L(),pe(D,{matches:Qe,loaderData:{},errors:{[$e.id]:ke}});return}if(g.initialized&&!M&&PA(g.location,D)&&!(k&&k.submission&&Bn(k.submission.formMethod))){pe(D,{matches:P});return}A=new AbortController;let ee=ms(t.history,D,A.signal,k&&k.submission),U,X;if(k&&k.pendingError)X={[Eo(P).route.id]:k.pendingError};else if(k&&k.submission&&Bn(k.submission.formMethod)){let ke=await je(ee,D,k.submission,P,{replace:k.replace});if(ke.shortCircuited)return;U=ke.pendingActionData,X=ke.pendingActionError,de=Qa(D,k.submission),ee=new Request(ee.url,{signal:ee.signal})}let{shortCircuited:ae,loaderData:Pe,errors:we}=await Tt(ee,D,P,de,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,U,X);ae||(A=null,pe(D,rt({matches:P},U?{actionData:U}:{},{loaderData:Pe,errors:we})))}async function je(b,D,k,ie,de){de===void 0&&(de={}),Ze();let P=IA(D,k);se({navigation:P});let ee,U=Af(ie,D);if(!U.route.action&&!U.route.lazy)ee={type:wt.error,error:Mn(405,{method:b.method,pathname:D.pathname,routeId:U.route.id})};else if(ee=await ps("action",b,U,ie,o,r,l),b.signal.aborted)return{shortCircuited:!0};if(Do(ee)){let X;return de&&de.replace!=null?X=de.replace:X=ee.location===g.location.pathname+g.location.search,await Ae(g,ee,{submission:k,replace:X}),{shortCircuited:!0}}if(Ns(ee)){let X=Eo(ie,U.route.id);return(de&&de.replace)!==!0&&(S=St.Push),{pendingActionData:{},pendingActionError:{[X.route.id]:ee.error}}}if(_r(ee))throw Mn(400,{type:"defer-action"});return{pendingActionData:{[U.route.id]:ee.data}}}async function Tt(b,D,k,ie,de,P,ee,U,X){let ae=ie||Qa(D,de),Pe=de||P||Cm(ae),we=a||s,[ke,Qe]=ym(t.history,g,k,Pe,D,M,T,ne,Z,re,we,l,U,X);if(L(Ke=>!(k&&k.some(ln=>ln.route.id===Ke))||ke&&ke.some(ln=>ln.route.id===Ke)),q=++H,ke.length===0&&Qe.length===0){let Ke=ht();return pe(D,rt({matches:k,loaderData:{},errors:X||null},U?{actionData:U}:{},Ke?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!N){Qe.forEach(ln=>{let qn=g.fetchers.get(ln.key),w=gs(void 0,qn?qn.data:void 0);g.fetchers.set(ln.key,w)});let Ke=U||g.actionData;se(rt({navigation:ae},Ke?Object.keys(Ke).length===0?{actionData:null}:{actionData:Ke}:{},Qe.length>0?{fetchers:new Map(g.fetchers)}:{}))}Qe.forEach(Ke=>{te.has(Ke.key)&&Oe(Ke.key),Ke.controller&&te.set(Ke.key,Ke.controller)});let $e=()=>Qe.forEach(Ke=>Oe(Ke.key));A&&A.signal.addEventListener("abort",$e);let{results:Lt,loaderResults:pt,fetcherResults:kr}=await Te(g.matches,k,ke,Qe,b);if(b.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",$e),Qe.forEach(Ke=>te.delete(Ke.key));let xn=Am(Lt);if(xn){if(xn.idx>=ke.length){let Ke=Qe[xn.idx-ke.length].key;re.add(Ke)}return await Ae(g,xn.result,{replace:ee}),{shortCircuited:!0}}let{loaderData:bn,errors:ii}=Em(g,k,ke,pt,X,Qe,kr,I);I.forEach((Ke,ln)=>{Ke.subscribe(qn=>{(qn||Ke.done)&&I.delete(ln)})});let zr=ht(),Ci=C(q),Br=zr||Ci||Qe.length>0;return rt({loaderData:bn,errors:ii},Br?{fetchers:new Map(g.fetchers)}:{})}function Ue(b){return g.fetchers.get(b)||MA}function G(b,D,k,ie){if(i)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");te.has(b)&&Oe(b);let de=a||s,P=Tf(g.location,g.matches,l,u.v7_prependBasename,k,D,ie==null?void 0:ie.relative),ee=Mo(de,P,l);if(!ee){Ie(b,D,Mn(404,{pathname:P}));return}let{path:U,submission:X,error:ae}=_m(u.v7_normalizeFormMethod,!0,P,ie);if(ae){Ie(b,D,ae);return}let Pe=Af(ee,U);if(R=(ie&&ie.preventScrollReset)===!0,X&&Bn(X.formMethod)){_t(b,D,U,Pe,ee,X);return}Z.set(b,{routeId:D,path:U}),Ee(b,D,U,Pe,ee,X)}async function _t(b,D,k,ie,de,P){if(Ze(),Z.delete(b),!ie.route.action&&!ie.route.lazy){let F=Mn(405,{method:P.formMethod,pathname:k,routeId:D});Ie(b,D,F);return}let ee=g.fetchers.get(b),U=NA(P,ee);g.fetchers.set(b,U),se({fetchers:new Map(g.fetchers)});let X=new AbortController,ae=ms(t.history,k,X.signal,P);te.set(b,X);let Pe=H,we=await ps("action",ae,ie,de,o,r,l);if(ae.signal.aborted){te.get(b)===X&&te.delete(b);return}if(Do(we))if(te.delete(b),q>Pe){let F=ao(void 0);g.fetchers.set(b,F),se({fetchers:new Map(g.fetchers)});return}else{re.add(b);let F=gs(P);return g.fetchers.set(b,F),se({fetchers:new Map(g.fetchers)}),Ae(g,we,{submission:P,isFetchActionRedirect:!0})}if(Ns(we)){Ie(b,D,we.error);return}if(_r(we))throw Mn(400,{type:"defer-action"});let ke=g.navigation.location||g.location,Qe=ms(t.history,ke,X.signal),$e=a||s,Lt=g.navigation.state!=="idle"?Mo($e,g.navigation.location,l):g.matches;We(Lt,"Didn't find any matches after fetcher action");let pt=++H;$.set(b,pt);let kr=gs(P,we.data);g.fetchers.set(b,kr);let[xn,bn]=ym(t.history,g,Lt,P,ke,M,T,ne,Z,re,$e,l,{[ie.route.id]:we.data},void 0);bn.filter(F=>F.key!==b).forEach(F=>{let K=F.key,z=g.fetchers.get(K),J=gs(void 0,z?z.data:void 0);g.fetchers.set(K,J),te.has(K)&&Oe(K),F.controller&&te.set(K,F.controller)}),se({fetchers:new Map(g.fetchers)});let ii=()=>bn.forEach(F=>Oe(F.key));X.signal.addEventListener("abort",ii);let{results:zr,loaderResults:Ci,fetcherResults:Br}=await Te(g.matches,Lt,xn,bn,Qe);if(X.signal.aborted)return;X.signal.removeEventListener("abort",ii),$.delete(b),te.delete(b),bn.forEach(F=>te.delete(F.key));let Ke=Am(zr);if(Ke){if(Ke.idx>=xn.length){let F=bn[Ke.idx-xn.length].key;re.add(F)}return Ae(g,Ke.result)}let{loaderData:ln,errors:qn}=Em(g,g.matches,xn,Ci,void 0,bn,Br,I);if(g.fetchers.has(b)){let F=ao(we.data);g.fetchers.set(b,F)}let w=C(pt);g.navigation.state==="loading"&&pt>q?(We(S,"Expected pending action"),A&&A.abort(),pe(g.navigation.location,{matches:Lt,loaderData:ln,errors:qn,fetchers:new Map(g.fetchers)})):(se(rt({errors:qn,loaderData:Tm(g.loaderData,ln,Lt,qn)},w||bn.length>0?{fetchers:new Map(g.fetchers)}:{})),M=!1)}async function Ee(b,D,k,ie,de,P){let ee=g.fetchers.get(b),U=gs(P,ee?ee.data:void 0);g.fetchers.set(b,U),se({fetchers:new Map(g.fetchers)});let X=new AbortController,ae=ms(t.history,k,X.signal);te.set(b,X);let Pe=H,we=await ps("loader",ae,ie,de,o,r,l);if(_r(we)&&(we=await D_(we,ae.signal,!0)||we),te.get(b)===X&&te.delete(b),ae.signal.aborted)return;if(Do(we))if(q>Pe){let Qe=ao(void 0);g.fetchers.set(b,Qe),se({fetchers:new Map(g.fetchers)});return}else{re.add(b),await Ae(g,we);return}if(Ns(we)){let Qe=Eo(g.matches,D);g.fetchers.delete(b),se({fetchers:new Map(g.fetchers),errors:{[Qe.route.id]:we.error}});return}We(!_r(we),"Unhandled fetcher deferred data");let ke=ao(we.data);g.fetchers.set(b,ke),se({fetchers:new Map(g.fetchers)})}async function Ae(b,D,k){let{submission:ie,replace:de,isFetchActionRedirect:P}=k===void 0?{}:k;D.revalidate&&(M=!0);let ee=ia(b.location,D.location,rt({_isRedirect:!0},P?{_isFetchActionRedirect:!0}:{}));if(We(ee,"Expected a location on the redirect navigation"),P_.test(D.location)&&n){let ae=t.history.createURL(D.location),Pe=Zo(ae.pathname,l)==null;if(e.location.origin!==ae.origin||Pe){de?e.location.replace(D.location):e.location.assign(D.location);return}}A=null;let U=de===!0?St.Replace:St.Push,X=ie||Cm(b.navigation);if(SA.has(D.status)&&X&&Bn(X.formMethod))await Se(U,ee,{submission:rt({},X,{formAction:D.location}),preventScrollReset:R});else if(P)await Se(U,ee,{overrideNavigation:Qa(ee),fetcherSubmission:X,preventScrollReset:R});else{let ae=Qa(ee,X);await Se(U,ee,{overrideNavigation:ae,preventScrollReset:R})}}async function Te(b,D,k,ie,de){let P=await Promise.all([...k.map(X=>ps("loader",de,X,D,o,r,l)),...ie.map(X=>X.matches&&X.match&&X.controller?ps("loader",ms(t.history,X.path,X.controller.signal),X.match,X.matches,o,r,l):{type:wt.error,error:Mn(404,{pathname:X.path})})]),ee=P.slice(0,k.length),U=P.slice(k.length);return await Promise.all([Rm(b,k,ee,ee.map(()=>de.signal),!1,g.loaderData),Rm(b,ie.map(X=>X.match),U,ie.map(X=>X.controller?X.controller.signal:null),!0)]),{results:P,loaderResults:ee,fetcherResults:U}}function Ze(){M=!0,T.push(...L()),Z.forEach((b,D)=>{te.has(D)&&(ne.push(D),Oe(D))})}function Ie(b,D,k){let ie=Eo(g.matches,D);Le(b),se({errors:{[ie.route.id]:k},fetchers:new Map(g.fetchers)})}function Le(b){let D=g.fetchers.get(b);te.has(b)&&!(D&&D.state==="loading"&&$.has(b))&&Oe(b),Z.delete(b),$.delete(b),re.delete(b),g.fetchers.delete(b)}function Oe(b){let D=te.get(b);We(D,"Expected fetch controller: "+b),D.abort(),te.delete(b)}function ct(b){for(let D of b){let k=Ue(D),ie=ao(k.data);g.fetchers.set(D,ie)}}function ht(){let b=[],D=!1;for(let k of re){let ie=g.fetchers.get(k);We(ie,"Expected fetcher: "+k),ie.state==="loading"&&(re.delete(k),b.push(k),D=!0)}return ct(b),D}function C(b){let D=[];for(let[k,ie]of $)if(ie<b){let de=g.fetchers.get(k);We(de,"Expected fetcher: "+k),de.state==="loading"&&(Oe(k),$.delete(k),D.push(k))}return ct(D),D.length>0}function E(b,D){let k=g.blockers.get(b)||hs;return j.get(b)!==D&&j.set(b,D),k}function Q(b){g.blockers.delete(b),j.delete(b)}function ce(b,D){let k=g.blockers.get(b)||hs;We(k.state==="unblocked"&&D.state==="blocked"||k.state==="blocked"&&D.state==="blocked"||k.state==="blocked"&&D.state==="proceeding"||k.state==="blocked"&&D.state==="unblocked"||k.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+D.state);let ie=new Map(g.blockers);ie.set(b,D),se({blockers:ie})}function fe(b){let{currentLocation:D,nextLocation:k,historyAction:ie}=b;if(j.size===0)return;j.size>1&&Wo(!1,"A router only supports one blocker at a time");let de=Array.from(j.entries()),[P,ee]=de[de.length-1],U=g.blockers.get(P);if(!(U&&U.state==="proceeding")&&ee({currentLocation:D,nextLocation:k,historyAction:ie}))return P}function L(b){let D=[];return I.forEach((k,ie)=>{(!b||b(ie))&&(k.cancel(),D.push(ie),I.delete(ie))}),D}function oe(b,D,k){if(h=b,y=D,m=k||null,!x&&g.navigation===yc){x=!0;let ie=_e(g.location,g.matches);ie!=null&&se({restoreScrollPosition:ie})}return()=>{h=null,y=null,m=null}}function le(b,D){return m&&m(b,D.map(ie=>UA(ie,g.loaderData)))||b.key}function Y(b,D){if(h&&y){let k=le(b,D);h[k]=y()}}function _e(b,D){if(h){let k=le(b,D),ie=h[k];if(typeof ie=="number")return ie}return null}function Me(b){o={},a=Ef(b,r,void 0,o)}return v={get basename(){return l},get state(){return g},get routes(){return s},initialize:B,subscribe:he,enableScrollRestoration:oe,navigate:ye,fetch:G,revalidate:Ce,createHref:b=>t.history.createHref(b),encodeLocation:b=>t.history.encodeLocation(b),getFetcher:Ue,deleteFetcher:Le,dispose:V,getBlocker:E,deleteBlocker:Q,_internalFetchControllers:te,_internalActiveDeferreds:I,_internalSetRoutes:Me},v}function wA(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Tf(t,e,n,i,r,o,s){let a,l;if(o!=null&&s!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===o){l=c;break}}else a=e,l=e[e.length-1];let u=Dd(r||".",ou(a).map(c=>c.pathnameBase),Zo(t.pathname,n)||t.pathname,s==="path");return r==null&&(u.search=t.search,u.hash=t.hash),(r==null||r===""||r===".")&&l&&l.route.index&&!Id(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i&&n!=="/"&&(u.pathname=u.pathname==="/"?n:xi([n,u.pathname])),Ur(u)}function _m(t,e,n,i){if(!i||!wA(i))return{path:n};if(i.formMethod&&!DA(i.formMethod))return{path:n,error:Mn(405,{method:i.formMethod})};let r=()=>({path:n,error:Mn(400,{type:"invalid-body"})}),o=i.formMethod||"get",s=t?o.toUpperCase():o.toLowerCase(),a=b_(n);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!Bn(s))return r();let h=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((m,y)=>{let[x,p]=y;return""+m+x+"="+p+`
`},""):String(i.body);return{path:n,submission:{formMethod:s,formAction:a,formEncType:i.formEncType,formData:void 0,json:void 0,text:h}}}else if(i.formEncType==="application/json"){if(!Bn(s))return r();try{let h=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:n,submission:{formMethod:s,formAction:a,formEncType:i.formEncType,formData:void 0,json:h,text:void 0}}}catch{return r()}}}We(typeof FormData=="function","FormData is not available in this environment");let l,u;if(i.formData)l=wf(i.formData),u=i.formData;else if(i.body instanceof FormData)l=wf(i.body),u=i.body;else if(i.body instanceof URLSearchParams)l=i.body,u=Mm(l);else if(i.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(i.body),u=Mm(l)}catch{return r()}let c={formMethod:s,formAction:a,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Bn(c.formMethod))return{path:n,submission:c};let d=Ri(n);return e&&d.search&&Id(d.search)&&l.append("index",""),d.search="?"+l,{path:Ur(d),submission:c}}function AA(t,e){let n=t;if(e){let i=t.findIndex(r=>r.route.id===e);i>=0&&(n=t.slice(0,i))}return n}function ym(t,e,n,i,r,o,s,a,l,u,c,d,h,m){let y=m?Object.values(m)[0]:h?Object.values(h)[0]:void 0,x=t.createURL(e.location),p=t.createURL(r),f=m?Object.keys(m)[0]:void 0,v=AA(n,f).filter((S,R)=>{if(S.route.lazy)return!0;if(S.route.loader==null)return!1;if(RA(e.loaderData,e.matches[R],S)||s.some(M=>M===S.route.id))return!0;let A=e.matches[R],N=S;return xm(S,rt({currentUrl:x,currentParams:A.params,nextUrl:p,nextParams:N.params},i,{actionResult:y,defaultShouldRevalidate:o||x.pathname+x.search===p.pathname+p.search||x.search!==p.search||L_(A,N)}))}),g=[];return l.forEach((S,R)=>{if(!n.some(ne=>ne.route.id===S.routeId))return;let A=Mo(c,S.path,d);if(!A){g.push({key:R,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let N=e.fetchers.get(R),M=Af(A,S.path),T=!1;u.has(R)?T=!1:a.includes(R)?T=!0:N&&N.state!=="idle"&&N.data===void 0?T=o:T=xm(M,rt({currentUrl:x,currentParams:e.matches[e.matches.length-1].params,nextUrl:p,nextParams:n[n.length-1].params},i,{actionResult:y,defaultShouldRevalidate:o})),T&&g.push({key:R,routeId:S.routeId,path:S.path,matches:A,match:M,controller:new AbortController})}),[v,g]}function RA(t,e,n){let i=!e||n.route.id!==e.route.id,r=t[n.route.id]===void 0;return i||r}function L_(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function xm(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Sm(t,e,n){if(!t.lazy)return;let i=await t.lazy();if(!t.lazy)return;let r=n[t.id];We(r,"No route found in manifest");let o={};for(let s in i){let l=r[s]!==void 0&&s!=="hasErrorBoundary";Wo(!l,'Route "'+r.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!l&&!K1.has(s)&&(o[s]=i[s])}Object.assign(r,o),Object.assign(r,rt({},e(r),{lazy:void 0}))}async function ps(t,e,n,i,r,o,s,a){a===void 0&&(a={});let l,u,c,d=y=>{let x,p=new Promise((f,_)=>x=_);return c=()=>x(),e.signal.addEventListener("abort",c),Promise.race([y({request:e,params:n.params,context:a.requestContext}),p])};try{let y=n.route[t];if(n.route.lazy)if(y)u=(await Promise.all([d(y),Sm(n.route,o,r)]))[0];else if(await Sm(n.route,o,r),y=n.route[t],y)u=await d(y);else if(t==="action"){let x=new URL(e.url),p=x.pathname+x.search;throw Mn(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:wt.data,data:void 0};else if(y)u=await d(y);else{let x=new URL(e.url),p=x.pathname+x.search;throw Mn(404,{pathname:p})}We(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(y){l=wt.error,u=y}finally{c&&e.signal.removeEventListener("abort",c)}if(bA(u)){let y=u.status;if(xA.has(y)){let f=u.headers.get("Location");if(We(f,"Redirects returned/thrown from loaders/actions must have a Location header"),!P_.test(f))f=Tf(new URL(e.url),i.slice(0,i.indexOf(n)+1),s,!0,f);else if(!a.isStaticRequest){let _=new URL(e.url),v=f.startsWith("//")?new URL(_.protocol+f):new URL(f),g=Zo(v.pathname,s)!=null;v.origin===_.origin&&g&&(f=v.pathname+v.search+v.hash)}if(a.isStaticRequest)throw u.headers.set("Location",f),u;return{type:wt.redirect,status:y,location:f,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||wt.data,response:u};let x,p=u.headers.get("Content-Type");return p&&/\bapplication\/json\b/.test(p)?x=await u.json():x=await u.text(),l===wt.error?{type:l,error:new Ud(y,u.statusText,x),headers:u.headers}:{type:wt.data,data:x,statusCode:u.status,headers:u.headers}}if(l===wt.error)return{type:l,error:u};if(LA(u)){var h,m;return{type:wt.deferred,deferredData:u,statusCode:(h=u.init)==null?void 0:h.status,headers:((m=u.init)==null?void 0:m.headers)&&new Headers(u.init.headers)}}return{type:wt.data,data:u}}function ms(t,e,n,i){let r=t.createURL(b_(e)).toString(),o={signal:n};if(i&&Bn(i.formMethod)){let{formMethod:s,formEncType:a}=i;o.method=s.toUpperCase(),a==="application/json"?(o.headers=new Headers({"Content-Type":a}),o.body=JSON.stringify(i.json)):a==="text/plain"?o.body=i.text:a==="application/x-www-form-urlencoded"&&i.formData?o.body=wf(i.formData):o.body=i.formData}return new Request(r,o)}function wf(t){let e=new URLSearchParams;for(let[n,i]of t.entries())e.append(n,typeof i=="string"?i:i.name);return e}function Mm(t){let e=new FormData;for(let[n,i]of t.entries())e.append(n,i);return e}function CA(t,e,n,i,r){let o={},s=null,a,l=!1,u={};return n.forEach((c,d)=>{let h=e[d].route.id;if(We(!Do(c),"Cannot handle redirect results in processLoaderData"),Ns(c)){let m=Eo(t,h),y=c.error;i&&(y=Object.values(i)[0],i=void 0),s=s||{},s[m.route.id]==null&&(s[m.route.id]=y),o[h]=void 0,l||(l=!0,a=R_(c.error)?c.error.status:500),c.headers&&(u[h]=c.headers)}else _r(c)?(r.set(h,c.deferredData),o[h]=c.deferredData.data):o[h]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[h]=c.headers)}),i&&(s=i,o[Object.keys(i)[0]]=void 0),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:u}}function Em(t,e,n,i,r,o,s,a){let{loaderData:l,errors:u}=CA(e,n,i,r,a);for(let c=0;c<o.length;c++){let{key:d,match:h,controller:m}=o[c];We(s!==void 0&&s[c]!==void 0,"Did not find corresponding fetcher result");let y=s[c];if(!(m&&m.signal.aborted))if(Ns(y)){let x=Eo(t.matches,h==null?void 0:h.route.id);u&&u[x.route.id]||(u=rt({},u,{[x.route.id]:y.error})),t.fetchers.delete(d)}else if(Do(y))We(!1,"Unhandled fetcher revalidation redirect");else if(_r(y))We(!1,"Unhandled fetcher deferred data");else{let x=ao(y.data);t.fetchers.set(d,x)}}return{loaderData:l,errors:u}}function Tm(t,e,n,i){let r=rt({},e);for(let o of n){let s=o.route.id;if(e.hasOwnProperty(s)?e[s]!==void 0&&(r[s]=e[s]):t[s]!==void 0&&o.route.loader&&(r[s]=t[s]),i&&i.hasOwnProperty(s))break}return r}function Eo(t,e){return(e?t.slice(0,t.findIndex(i=>i.route.id===e)+1):[...t]).reverse().find(i=>i.route.hasErrorBoundary===!0)||t[0]}function wm(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Mn(t,e){let{pathname:n,routeId:i,method:r,type:o}=e===void 0?{}:e,s="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(s="Bad Request",r&&n&&i?a="You made a "+r+' request to "'+n+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":o==="defer-action"?a="defer() is not supported in actions":o==="invalid-body"&&(a="Unable to encode submission body")):t===403?(s="Forbidden",a='Route "'+i+'" does not match URL "'+n+'"'):t===404?(s="Not Found",a='No route matches URL "'+n+'"'):t===405&&(s="Method Not Allowed",r&&n&&i?a="You made a "+r.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":r&&(a='Invalid request method "'+r.toUpperCase()+'"')),new Ud(t||500,s,new Error(a),!0)}function Am(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Do(n))return{result:n,idx:e}}}function b_(t){let e=typeof t=="string"?Ri(t):t;return Ur(rt({},e,{hash:""}))}function PA(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function _r(t){return t.type===wt.deferred}function Ns(t){return t.type===wt.error}function Do(t){return(t&&t.type)===wt.redirect}function LA(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function bA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function DA(t){return yA.has(t.toLowerCase())}function Bn(t){return vA.has(t.toLowerCase())}async function Rm(t,e,n,i,r,o){for(let s=0;s<n.length;s++){let a=n[s],l=e[s];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!L_(u,l)&&(o&&o[l.route.id])!==void 0;if(_r(a)&&(r||c)){let d=i[s];We(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await D_(a,d,r).then(h=>{h&&(n[s]=h||n[s])})}}}async function D_(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:wt.data,data:t.deferredData.unwrappedData}}catch(r){return{type:wt.error,error:r}}return{type:wt.data,data:t.deferredData.data}}}function Id(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function UA(t,e){let{route:n,pathname:i,params:r}=t;return{id:n.id,pathname:i,params:r,data:e[n.id],handle:n.handle}}function Af(t,e){let n=typeof e=="string"?Ri(e).search:e.search;if(t[t.length-1].route.index&&Id(n||""))return t[t.length-1];let i=ou(t);return i[i.length-1]}function Cm(t){let{formMethod:e,formAction:n,formEncType:i,text:r,formData:o,json:s}=t;if(!(!e||!n||!i)){if(r!=null)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:void 0,text:r};if(o!=null)return{formMethod:e,formAction:n,formEncType:i,formData:o,json:void 0,text:void 0};if(s!==void 0)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:s,text:void 0}}}function Qa(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function IA(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function gs(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function NA(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function ao(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zl(){return zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},zl.apply(this,arguments)}const su=ge.createContext(null),U_=ge.createContext(null),Qo=ge.createContext(null),au=ge.createContext(null),Or=ge.createContext({outlet:null,matches:[],isDataRoute:!1}),I_=ge.createContext(null);function FA(t,e){let{relative:n}=e===void 0?{}:e;ha()||We(!1);let{basename:i,navigator:r}=ge.useContext(Qo),{hash:o,pathname:s,search:a}=F_(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:xi([i,s])),r.createHref({pathname:l,search:a,hash:o})}function ha(){return ge.useContext(au)!=null}function lu(){return ha()||We(!1),ge.useContext(au).location}function N_(t){ge.useContext(Qo).static||ge.useLayoutEffect(t)}function OA(){let{isDataRoute:t}=ge.useContext(Or);return t?qA():kA()}function kA(){ha()||We(!1);let t=ge.useContext(su),{basename:e,navigator:n}=ge.useContext(Qo),{matches:i}=ge.useContext(Or),{pathname:r}=lu(),o=JSON.stringify(ou(i).map(l=>l.pathnameBase)),s=ge.useRef(!1);return N_(()=>{s.current=!0}),ge.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=Dd(l,JSON.parse(o),r,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:xi([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,o,r,t])}function F_(t,e){let{relative:n}=e===void 0?{}:e,{matches:i}=ge.useContext(Or),{pathname:r}=lu(),o=JSON.stringify(ou(i).map(s=>s.pathnameBase));return ge.useMemo(()=>Dd(t,JSON.parse(o),r,n==="path"),[t,o,r,n])}function zA(t,e,n){ha()||We(!1);let{navigator:i}=ge.useContext(Qo),{matches:r}=ge.useContext(Or),o=r[r.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=lu(),u;if(e){var c;let x=typeof e=="string"?Ri(e):e;a==="/"||(c=x.pathname)!=null&&c.startsWith(a)||We(!1),u=x}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",m=Mo(t,{pathname:h}),y=WA(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:xi([a,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:xi([a,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),r,n);return e&&y?ge.createElement(au.Provider,{value:{location:zl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:St.Pop}},y):y}function BA(){let t=k_(),e=R_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return ge.createElement(ge.Fragment,null,ge.createElement("h2",null,"Unexpected Application Error!"),ge.createElement("h3",{style:{fontStyle:"italic"}},e),n?ge.createElement("pre",{style:r},n):null,o)}const HA=ge.createElement(BA,null);class GA extends ge.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?ge.createElement(Or.Provider,{value:this.props.routeContext},ge.createElement(I_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function VA(t){let{routeContext:e,match:n,children:i}=t,r=ge.useContext(su);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ge.createElement(Or.Provider,{value:e},i)}function WA(t,e,n){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var r;if((r=n)!=null&&r.errors)t=n.matches;else return null}let o=t,s=(i=n)==null?void 0:i.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||We(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let c=l.route.id?s==null?void 0:s[l.route.id]:null,d=null;n&&(d=l.route.errorElement||HA);let h=e.concat(o.slice(0,u+1)),m=()=>{let y;return c?y=d:l.route.Component?y=ge.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,ge.createElement(VA,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?ge.createElement(GA,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var Rf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Rf||(Rf={}));var ra;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(ra||(ra={}));function XA(t){let e=ge.useContext(su);return e||We(!1),e}function jA(t){let e=ge.useContext(U_);return e||We(!1),e}function YA(t){let e=ge.useContext(Or);return e||We(!1),e}function O_(t){let e=YA(),n=e.matches[e.matches.length-1];return n.route.id||We(!1),n.route.id}function k_(){var t;let e=ge.useContext(I_),n=jA(ra.UseRouteError),i=O_(ra.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}function qA(){let{router:t}=XA(Rf.UseNavigateStable),e=O_(ra.UseNavigateStable),n=ge.useRef(!1);return N_(()=>{n.current=!0}),ge.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,zl({fromRouteId:e},o)))},[t,e])}const $A="startTransition",Pm=i0[$A];function KA(t){let{fallbackElement:e,router:n,future:i}=t,[r,o]=ge.useState(n.state),{v7_startTransition:s}=i||{},a=ge.useCallback(d=>{s&&Pm?Pm(()=>o(d)):o(d)},[o,s]);ge.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=ge.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,h,m)=>n.navigate(d,{state:h,preventScrollReset:m==null?void 0:m.preventScrollReset}),replace:(d,h,m)=>n.navigate(d,{replace:!0,state:h,preventScrollReset:m==null?void 0:m.preventScrollReset})}),[n]),u=n.basename||"/",c=ge.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return ge.createElement(ge.Fragment,null,ge.createElement(su.Provider,{value:c},ge.createElement(U_.Provider,{value:r},ge.createElement(QA,{basename:u,location:r.location,navigationType:r.historyAction,navigator:l},r.initialized?ge.createElement(ZA,{routes:n.routes,state:r}):e))),null)}function ZA(t){let{routes:e,state:n}=t;return zA(e,void 0,n)}function QA(t){let{basename:e="/",children:n=null,location:i,navigationType:r=St.Pop,navigator:o,static:s=!1}=t;ha()&&We(!1);let a=e.replace(/^\/*/,"/"),l=ge.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof i=="string"&&(i=Ri(i));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:m="default"}=i,y=ge.useMemo(()=>{let x=Zo(u,a);return x==null?null:{location:{pathname:x,search:c,hash:d,state:h,key:m},navigationType:r}},[a,u,c,d,h,m,r]);return y==null?null:ge.createElement(Qo.Provider,{value:l},ge.createElement(au.Provider,{children:n,value:y}))}var Lm;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Lm||(Lm={}));new Promise(()=>{});function JA(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:ge.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:ge.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},oa.apply(this,arguments)}function eR(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function tR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function nR(t,e){return t.button===0&&(!e||e==="_self")&&!tR(t)}const iR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function rR(t,e){return TA({basename:e==null?void 0:e.basename,future:oa({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:Y1({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||oR(),routes:t,mapRouteProperties:JA}).initialize()}function oR(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=oa({},e,{errors:sR(e.errors)})),e}function sR(t){if(!t)return null;let e=Object.entries(t),n={};for(let[i,r]of e)if(r&&r.__type==="RouteErrorResponse")n[i]=new Ud(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let o=window[r.__subType];if(typeof o=="function")try{let s=new o(r.message);s.stack="",n[i]=s}catch{}}if(n[i]==null){let o=new Error(r.message);o.stack="",n[i]=o}}else n[i]=r;return n}const aR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uR=ge.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c}=e,d=eR(e,iR),{basename:h}=ge.useContext(Qo),m,y=!1;if(typeof u=="string"&&lR.test(u)&&(m=u,aR))try{let _=new URL(window.location.href),v=u.startsWith("//")?new URL(_.protocol+u):new URL(u),g=Zo(v.pathname,h);v.origin===_.origin&&g!=null?u=g+v.search+v.hash:y=!0}catch{}let x=FA(u,{relative:r}),p=cR(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:r});function f(_){i&&i(_),_.defaultPrevented||p(_)}return ge.createElement("a",oa({},d,{href:m||x,onClick:y||o?i:f,ref:n,target:l}))});var bm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(bm||(bm={}));var Dm;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dm||(Dm={}));function cR(t,e){let{target:n,replace:i,state:r,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=OA(),l=lu(),u=F_(t,{relative:s});return ge.useCallback(c=>{if(nR(c,n)){c.preventDefault();let d=i!==void 0?i:Ur(l)===Ur(u);a(t,{replace:d,state:r,preventScrollReset:o,relative:s})}},[l,a,u,i,r,n,t,o,s])}function fR(){return gt.jsx(gt.Fragment,{children:gt.jsxs("div",{id:"sidebar",children:[gt.jsx("h1",{children:"Ben Testing in Production"}),gt.jsx("nav",{children:gt.jsx("ul",{children:gt.jsx("li",{children:gt.jsx(uR,{to:"/space",children:"Navigate Through Space"})})})})]})})}function xc(){const t=k_();console.error(t);function e(i){return i!==null&&typeof i=="object"&&("message"in i||"statusText"in i)}let n="An unknown error has occurred.";return e(t)&&(n=t.message||t.statusText||n),gt.jsxs("div",{id:"error-page",children:[gt.jsx("h1",{children:"uh oh!"}),gt.jsx("p",{children:"This is embarassing"}),gt.jsx("p",{children:gt.jsx("i",{children:n})})]})}const dR=rR([{path:"/",element:gt.jsx(fR,{}),errorElement:gt.jsx(xc,{})},{path:"/space",element:gt.jsx(j1,{}),errorElement:gt.jsx(xc,{})},{path:"*",element:gt.jsx(xc,{})}],{basename:"/btsui3.github.io/"});Sc.createRoot(document.getElementById("root")).render(gt.jsx(Gm.StrictMode,{children:gt.jsx(KA,{router:dR})}));
