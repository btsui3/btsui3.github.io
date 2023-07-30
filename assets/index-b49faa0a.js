function N_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function F_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cm={exports:{}},Fl={},Pm={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=Symbol.for("react.element"),O_=Symbol.for("react.portal"),z_=Symbol.for("react.fragment"),k_=Symbol.for("react.strict_mode"),B_=Symbol.for("react.profiler"),H_=Symbol.for("react.provider"),G_=Symbol.for("react.context"),V_=Symbol.for("react.forward_ref"),W_=Symbol.for("react.suspense"),X_=Symbol.for("react.memo"),j_=Symbol.for("react.lazy"),Ld=Symbol.iterator;function Y_(t){return t===null||typeof t!="object"?null:(t=Ld&&t[Ld]||t["@@iterator"],typeof t=="function"?t:null)}var Lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bm=Object.assign,Dm={};function Vo(t,e,n){this.props=t,this.context=e,this.refs=Dm,this.updater=n||Lm}Vo.prototype.isReactComponent={};Vo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Um(){}Um.prototype=Vo.prototype;function Sf(t,e,n){this.props=t,this.context=e,this.refs=Dm,this.updater=n||Lm}var Mf=Sf.prototype=new Um;Mf.constructor=Sf;bm(Mf,Vo.prototype);Mf.isPureReactComponent=!0;var bd=Array.isArray,Im=Object.prototype.hasOwnProperty,Ef={current:null},Nm={key:!0,ref:!0,__self:!0,__source:!0};function Fm(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Im.call(e,i)&&!Nm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ea,type:t,key:o,ref:s,props:r,_owner:Ef.current}}function q_(t,e){return{$$typeof:ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ea}function $_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dd=/\/+/g;function au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$_(""+t.key):e.toString(36)}function qa(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ea:case O_:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+au(s,0):i,bd(r)?(n="",t!=null&&(n=t.replace(Dd,"$&/")+"/"),qa(r,e,n,"",function(u){return u})):r!=null&&(Tf(r)&&(r=q_(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Dd,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",bd(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+au(o,a);s+=qa(o,e,n,l,r)}else if(l=Y_(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+au(o,a++),s+=qa(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ua(t,e,n){if(t==null)return t;var i=[],r=0;return qa(t,i,"","",function(o){return e.call(n,o,r++)}),i}function K_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},$a={transition:null},Z_={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:$a,ReactCurrentOwner:Ef};We.Children={map:ua,forEach:function(t,e,n){ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ua(t,function(){e++}),e},toArray:function(t){return ua(t,function(e){return e})||[]},only:function(t){if(!Tf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Vo;We.Fragment=z_;We.Profiler=B_;We.PureComponent=Sf;We.StrictMode=k_;We.Suspense=W_;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z_;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=bm({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Ef.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Im.call(e,l)&&!Nm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ea,type:t.type,key:r,ref:o,props:i,_owner:s}};We.createContext=function(t){return t={$$typeof:G_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H_,_context:t},t.Consumer=t};We.createElement=Fm;We.createFactory=function(t){var e=Fm.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:V_,render:t}};We.isValidElement=Tf;We.lazy=function(t){return{$$typeof:j_,_payload:{_status:-1,_result:t},_init:K_}};We.memo=function(t,e){return{$$typeof:X_,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=$a.transition;$a.transition={};try{t()}finally{$a.transition=e}};We.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};We.useCallback=function(t,e){return Kt.current.useCallback(t,e)};We.useContext=function(t){return Kt.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};We.useEffect=function(t,e){return Kt.current.useEffect(t,e)};We.useId=function(){return Kt.current.useId()};We.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return Kt.current.useMemo(t,e)};We.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};We.useRef=function(t){return Kt.current.useRef(t)};We.useState=function(t){return Kt.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return Kt.current.useTransition()};We.version="18.2.0";Pm.exports=We;var Pe=Pm.exports;const Om=F_(Pe),Q_=N_({__proto__:null,default:Om},[Pe]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_=Pe,e0=Symbol.for("react.element"),t0=Symbol.for("react.fragment"),n0=Object.prototype.hasOwnProperty,i0=J_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r0={key:!0,ref:!0,__self:!0,__source:!0};function zm(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)n0.call(e,i)&&!r0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:e0,type:t,key:o,ref:s,props:r,_owner:i0.current}}Fl.Fragment=t0;Fl.jsx=zm;Fl.jsxs=zm;Cm.exports=Fl;var Ze=Cm.exports,pc={},km={exports:{}},_n={},Bm={exports:{}},Hm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,j){var W=I.length;I.push(j);e:for(;0<W;){var B=W-1>>>1,V=I[B];if(0<r(V,j))I[B]=j,I[W]=V,W=B;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var j=I[0],W=I.pop();if(W!==j){I[0]=W;e:for(var B=0,V=I.length,he=V>>>1;B<he;){var se=2*(B+1)-1,pe=I[se],_e=se+1,Re=I[_e];if(0>r(pe,W))_e<V&&0>r(Re,pe)?(I[B]=Re,I[_e]=W,B=_e):(I[B]=pe,I[se]=W,B=se);else if(_e<V&&0>r(Re,W))I[B]=Re,I[_e]=W,B=_e;else break e}}return j}function r(I,j){var W=I.sortIndex-j.sortIndex;return W!==0?W:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,d=null,h=3,m=!1,y=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var j=n(u);j!==null;){if(j.callback===null)i(u);else if(j.startTime<=I)i(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function g(I){if(x=!1,v(I),!y)if(n(l)!==null)y=!0,re(S);else{var j=n(u);j!==null&&Z(g,j.startTime-I)}}function S(I,j){y=!1,x&&(x=!1,c(N),N=-1),m=!0;var W=h;try{for(v(j),d=n(l);d!==null&&(!(d.expirationTime>j)||I&&!ne());){var B=d.callback;if(typeof B=="function"){d.callback=null,h=d.priorityLevel;var V=B(d.expirationTime<=j);j=t.unstable_now(),typeof V=="function"?d.callback=V:d===n(l)&&i(l),v(j)}else i(l);d=n(l)}if(d!==null)var he=!0;else{var se=n(u);se!==null&&Z(g,se.startTime-j),he=!1}return he}finally{d=null,h=W,m=!1}}var R=!1,A=null,N=-1,M=5,T=-1;function ne(){return!(t.unstable_now()-T<M)}function te(){if(A!==null){var I=t.unstable_now();T=I;var j=!0;try{j=A(!0,I)}finally{j?H():(R=!1,A=null)}}else R=!1}var H;if(typeof _=="function")H=function(){_(te)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,$=q.port2;q.port1.onmessage=te,H=function(){$.postMessage(null)}}else H=function(){p(te,0)};function re(I){A=I,R||(R=!0,H())}function Z(I,j){N=p(function(){I(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,re(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var W=h;h=j;try{return I()}finally{h=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=h;h=I;try{return j()}finally{h=W}},t.unstable_scheduleCallback=function(I,j,W){var B=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?B+W:B):W=B,I){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=W+V,I={id:f++,callback:j,priorityLevel:I,startTime:W,expirationTime:V,sortIndex:-1},W>B?(I.sortIndex=W,e(u,I),n(l)===null&&I===n(u)&&(x?(c(N),N=-1):x=!0,Z(g,W-B))):(I.sortIndex=V,e(l,I),y||m||(y=!0,re(S))),I},t.unstable_shouldYield=ne,t.unstable_wrapCallback=function(I){var j=h;return function(){var W=h;h=j;try{return I.apply(this,arguments)}finally{h=W}}}})(Hm);Bm.exports=Hm;var o0=Bm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm=Pe,vn=o0;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vm=new Set,Ds={};function Ur(t,e){bo(t,e),bo(t+"Capture",e)}function bo(t,e){for(Ds[t]=e,t=0;t<e.length;t++)Vm.add(e[t])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mc=Object.prototype.hasOwnProperty,s0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ud={},Id={};function a0(t){return mc.call(Id,t)?!0:mc.call(Ud,t)?!1:s0.test(t)?Id[t]=!0:(Ud[t]=!0,!1)}function l0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function u0(t,e,n,i){if(e===null||typeof e>"u"||l0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var wf=/[\-:]([a-z])/g;function Af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wf,Af);Ot[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wf,Af);Ot[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wf,Af);Ot[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rf(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(u0(e,n,r,i)&&(n=null),i||r===null?a0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ti=Gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),so=Symbol.for("react.portal"),ao=Symbol.for("react.fragment"),Cf=Symbol.for("react.strict_mode"),gc=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),Xm=Symbol.for("react.context"),Pf=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),_c=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),Ui=Symbol.for("react.lazy"),jm=Symbol.for("react.offscreen"),Nd=Symbol.iterator;function Ko(t){return t===null||typeof t!="object"?null:(t=Nd&&t[Nd]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,lu;function hs(t){if(lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lu=e&&e[1]||""}return`
`+lu+t}var uu=!1;function cu(t,e){if(!t||uu)return"";uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{uu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?hs(t):""}function c0(t){switch(t.tag){case 5:return hs(t.type);case 16:return hs("Lazy");case 13:return hs("Suspense");case 19:return hs("SuspenseList");case 0:case 2:case 15:return t=cu(t.type,!1),t;case 11:return t=cu(t.type.render,!1),t;case 1:return t=cu(t.type,!0),t;default:return""}}function yc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ao:return"Fragment";case so:return"Portal";case gc:return"Profiler";case Cf:return"StrictMode";case vc:return"Suspense";case _c:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xm:return(t.displayName||"Context")+".Consumer";case Wm:return(t._context.displayName||"Context")+".Provider";case Pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lf:return e=t.displayName||null,e!==null?e:yc(t.type)||"Memo";case Ui:e=t._payload,t=t._init;try{return yc(t(e))}catch{}}return null}function f0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yc(e);case 8:return e===Cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ym(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d0(t){var e=Ym(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fa(t){t._valueTracker||(t._valueTracker=d0(t))}function qm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ym(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xc(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $m(t,e){e=e.checked,e!=null&&Rf(t,"checked",e,!1)}function Sc(t,e){$m(t,e);var n=Zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mc(t,e.type,Zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Od(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mc(t,e,n){(e!=="number"||al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ps=Array.isArray;function Mo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ec(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(ps(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zi(n)}}function Km(t,e){var n=Zi(e.value),i=Zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function kd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var da,Qm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Us(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h0=["Webkit","ms","Moz","O"];Object.keys(ys).forEach(function(t){h0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ys[e]=ys[t]})});function Jm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ys.hasOwnProperty(t)&&ys[t]?(""+e).trim():e+"px"}function eg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Jm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var p0=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wc(t,e){if(e){if(p0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function Ac(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rc=null;function bf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cc=null,Eo=null,To=null;function Bd(t){if(t=ia(t)){if(typeof Cc!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=Hl(e),Cc(t.stateNode,t.type,e))}}function tg(t){Eo?To?To.push(t):To=[t]:Eo=t}function ng(){if(Eo){var t=Eo,e=To;if(To=Eo=null,Bd(t),e)for(t=0;t<e.length;t++)Bd(e[t])}}function ig(t,e){return t(e)}function rg(){}var fu=!1;function og(t,e,n){if(fu)return t(e,n);fu=!0;try{return ig(t,e,n)}finally{fu=!1,(Eo!==null||To!==null)&&(rg(),ng())}}function Is(t,e){var n=t.stateNode;if(n===null)return null;var i=Hl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var Pc=!1;if(xi)try{var Zo={};Object.defineProperty(Zo,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",Zo,Zo),window.removeEventListener("test",Zo,Zo)}catch{Pc=!1}function m0(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var xs=!1,ll=null,ul=!1,Lc=null,g0={onError:function(t){xs=!0,ll=t}};function v0(t,e,n,i,r,o,s,a,l){xs=!1,ll=null,m0.apply(g0,arguments)}function _0(t,e,n,i,r,o,s,a,l){if(v0.apply(this,arguments),xs){if(xs){var u=ll;xs=!1,ll=null}else throw Error(ue(198));ul||(ul=!0,Lc=u)}}function Ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hd(t){if(Ir(t)!==t)throw Error(ue(188))}function y0(t){var e=t.alternate;if(!e){if(e=Ir(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Hd(r),t;if(o===i)return Hd(r),e;o=o.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function ag(t){return t=y0(t),t!==null?lg(t):null}function lg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lg(t);if(e!==null)return e;t=t.sibling}return null}var ug=vn.unstable_scheduleCallback,Gd=vn.unstable_cancelCallback,x0=vn.unstable_shouldYield,S0=vn.unstable_requestPaint,vt=vn.unstable_now,M0=vn.unstable_getCurrentPriorityLevel,Df=vn.unstable_ImmediatePriority,cg=vn.unstable_UserBlockingPriority,cl=vn.unstable_NormalPriority,E0=vn.unstable_LowPriority,fg=vn.unstable_IdlePriority,Ol=null,Jn=null;function T0(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:R0,w0=Math.log,A0=Math.LN2;function R0(t){return t>>>=0,t===0?32:31-(w0(t)/A0|0)|0}var ha=64,pa=4194304;function ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=ms(a):(o&=s,o!==0&&(i=ms(o)))}else s=n&~r,s!==0?i=ms(s):o!==0&&(i=ms(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function C0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Xn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=C0(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function bc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dg(){var t=ha;return ha<<=1,!(ha&4194240)&&(ha=64),t}function du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function L0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Uf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function hg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pg,If,mg,gg,vg,Dc=!1,ma=[],Hi=null,Gi=null,Vi=null,Ns=new Map,Fs=new Map,Ni=[],b0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vd(t,e){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":Ns.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fs.delete(e.pointerId)}}function Qo(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=ia(e),e!==null&&If(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function D0(t,e,n,i,r){switch(e){case"focusin":return Hi=Qo(Hi,t,e,n,i,r),!0;case"dragenter":return Gi=Qo(Gi,t,e,n,i,r),!0;case"mouseover":return Vi=Qo(Vi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Ns.set(o,Qo(Ns.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Fs.set(o,Qo(Fs.get(o)||null,t,e,n,i,r)),!0}return!1}function _g(t){var e=pr(t.target);if(e!==null){var n=Ir(e);if(n!==null){if(e=n.tag,e===13){if(e=sg(n),e!==null){t.blockedOn=e,vg(t.priority,function(){mg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Rc=i,n.target.dispatchEvent(i),Rc=null}else return e=ia(n),e!==null&&If(e),t.blockedOn=n,!1;e.shift()}return!0}function Wd(t,e,n){Ka(t)&&n.delete(e)}function U0(){Dc=!1,Hi!==null&&Ka(Hi)&&(Hi=null),Gi!==null&&Ka(Gi)&&(Gi=null),Vi!==null&&Ka(Vi)&&(Vi=null),Ns.forEach(Wd),Fs.forEach(Wd)}function Jo(t,e){t.blockedOn===e&&(t.blockedOn=null,Dc||(Dc=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,U0)))}function Os(t){function e(r){return Jo(r,t)}if(0<ma.length){Jo(ma[0],t);for(var n=1;n<ma.length;n++){var i=ma[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Hi!==null&&Jo(Hi,t),Gi!==null&&Jo(Gi,t),Vi!==null&&Jo(Vi,t),Ns.forEach(e),Fs.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)_g(n),n.blockedOn===null&&Ni.shift()}var wo=Ti.ReactCurrentBatchConfig,dl=!0;function I0(t,e,n,i){var r=et,o=wo.transition;wo.transition=null;try{et=1,Nf(t,e,n,i)}finally{et=r,wo.transition=o}}function N0(t,e,n,i){var r=et,o=wo.transition;wo.transition=null;try{et=4,Nf(t,e,n,i)}finally{et=r,wo.transition=o}}function Nf(t,e,n,i){if(dl){var r=Uc(t,e,n,i);if(r===null)Mu(t,e,i,hl,n),Vd(t,i);else if(D0(r,t,e,n,i))i.stopPropagation();else if(Vd(t,i),e&4&&-1<b0.indexOf(t)){for(;r!==null;){var o=ia(r);if(o!==null&&pg(o),o=Uc(t,e,n,i),o===null&&Mu(t,e,i,hl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Mu(t,e,i,null,n)}}var hl=null;function Uc(t,e,n,i){if(hl=null,t=bf(i),t=pr(t),t!==null)if(e=Ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function yg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(M0()){case Df:return 1;case cg:return 4;case cl:case E0:return 16;case fg:return 536870912;default:return 16}default:return 16}}var Oi=null,Ff=null,Za=null;function xg(){if(Za)return Za;var t,e=Ff,n=e.length,i,r="value"in Oi?Oi.value:Oi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Za=r.slice(t,1<i?1-i:void 0)}function Qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ga(){return!0}function Xd(){return!1}function yn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ga:Xd,this.isPropagationStopped=Xd,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),e}var Wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Of=yn(Wo),na=ct({},Wo,{view:0,detail:0}),F0=yn(na),hu,pu,es,zl=ct({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==es&&(es&&t.type==="mousemove"?(hu=t.screenX-es.screenX,pu=t.screenY-es.screenY):pu=hu=0,es=t),hu)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),jd=yn(zl),O0=ct({},zl,{dataTransfer:0}),z0=yn(O0),k0=ct({},na,{relatedTarget:0}),mu=yn(k0),B0=ct({},Wo,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=yn(B0),G0=ct({},Wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V0=yn(G0),W0=ct({},Wo,{data:0}),Yd=yn(W0),X0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Y0[t])?!!e[t]:!1}function zf(){return q0}var $0=ct({},na,{key:function(t){if(t.key){var e=X0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?j0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zf,charCode:function(t){return t.type==="keypress"?Qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),K0=yn($0),Z0=ct({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=yn(Z0),Q0=ct({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zf}),J0=yn(Q0),ey=ct({},Wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ty=yn(ey),ny=ct({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iy=yn(ny),ry=[9,13,27,32],kf=xi&&"CompositionEvent"in window,Ss=null;xi&&"documentMode"in document&&(Ss=document.documentMode);var oy=xi&&"TextEvent"in window&&!Ss,Sg=xi&&(!kf||Ss&&8<Ss&&11>=Ss),$d=String.fromCharCode(32),Kd=!1;function Mg(t,e){switch(t){case"keyup":return ry.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lo=!1;function sy(t,e){switch(t){case"compositionend":return Eg(e);case"keypress":return e.which!==32?null:(Kd=!0,$d);case"textInput":return t=e.data,t===$d&&Kd?null:t;default:return null}}function ay(t,e){if(lo)return t==="compositionend"||!kf&&Mg(t,e)?(t=xg(),Za=Ff=Oi=null,lo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sg&&e.locale!=="ko"?null:e.data;default:return null}}var ly={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ly[t.type]:e==="textarea"}function Tg(t,e,n,i){tg(i),e=pl(e,"onChange"),0<e.length&&(n=new Of("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ms=null,zs=null;function uy(t){Ng(t,0)}function kl(t){var e=fo(t);if(qm(e))return t}function cy(t,e){if(t==="change")return e}var wg=!1;if(xi){var gu;if(xi){var vu="oninput"in document;if(!vu){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),vu=typeof Qd.oninput=="function"}gu=vu}else gu=!1;wg=gu&&(!document.documentMode||9<document.documentMode)}function Jd(){Ms&&(Ms.detachEvent("onpropertychange",Ag),zs=Ms=null)}function Ag(t){if(t.propertyName==="value"&&kl(zs)){var e=[];Tg(e,zs,t,bf(t)),og(uy,e)}}function fy(t,e,n){t==="focusin"?(Jd(),Ms=e,zs=n,Ms.attachEvent("onpropertychange",Ag)):t==="focusout"&&Jd()}function dy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(zs)}function hy(t,e){if(t==="click")return kl(e)}function py(t,e){if(t==="input"||t==="change")return kl(e)}function my(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:my;function ks(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!mc.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function eh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function th(t,e){var n=eh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eh(n)}}function Rg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cg(){for(var t=window,e=al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=al(t.document)}return e}function Bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gy(t){var e=Cg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rg(n.ownerDocument.documentElement,n)){if(i!==null&&Bf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=th(n,o);var s=th(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vy=xi&&"documentMode"in document&&11>=document.documentMode,uo=null,Ic=null,Es=null,Nc=!1;function nh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nc||uo==null||uo!==al(i)||(i=uo,"selectionStart"in i&&Bf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Es&&ks(Es,i)||(Es=i,i=pl(Ic,"onSelect"),0<i.length&&(e=new Of("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=uo)))}function va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var co={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},_u={},Pg={};xi&&(Pg=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);function Bl(t){if(_u[t])return _u[t];if(!co[t])return t;var e=co[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pg)return _u[t]=e[n];return t}var Lg=Bl("animationend"),bg=Bl("animationiteration"),Dg=Bl("animationstart"),Ug=Bl("transitionend"),Ig=new Map,ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){Ig.set(t,e),Ur(e,[t])}for(var yu=0;yu<ih.length;yu++){var xu=ih[yu],_y=xu.toLowerCase(),yy=xu[0].toUpperCase()+xu.slice(1);er(_y,"on"+yy)}er(Lg,"onAnimationEnd");er(bg,"onAnimationIteration");er(Dg,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(Ug,"onTransitionEnd");bo("onMouseEnter",["mouseout","mouseover"]);bo("onMouseLeave",["mouseout","mouseover"]);bo("onPointerEnter",["pointerout","pointerover"]);bo("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xy=new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));function rh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,_0(i,e,void 0,t),t.currentTarget=null}function Ng(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;rh(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;rh(r,a,u),o=l}}}if(ul)throw t=Lc,ul=!1,Lc=null,t}function it(t,e){var n=e[Bc];n===void 0&&(n=e[Bc]=new Set);var i=t+"__bubble";n.has(i)||(Fg(e,t,2,!1),n.add(i))}function Su(t,e,n){var i=0;e&&(i|=4),Fg(n,t,i,e)}var _a="_reactListening"+Math.random().toString(36).slice(2);function Bs(t){if(!t[_a]){t[_a]=!0,Vm.forEach(function(n){n!=="selectionchange"&&(xy.has(n)||Su(n,!1,t),Su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_a]||(e[_a]=!0,Su("selectionchange",!1,e))}}function Fg(t,e,n,i){switch(yg(e)){case 1:var r=I0;break;case 4:r=N0;break;default:r=Nf}n=r.bind(null,e,n,t),r=void 0,!Pc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Mu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=pr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}og(function(){var u=o,f=bf(n),d=[];e:{var h=Ig.get(t);if(h!==void 0){var m=Of,y=t;switch(t){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":m=K0;break;case"focusin":y="focus",m=mu;break;case"focusout":y="blur",m=mu;break;case"beforeblur":case"afterblur":m=mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=J0;break;case Lg:case bg:case Dg:m=H0;break;case Ug:m=ty;break;case"scroll":m=F0;break;case"wheel":m=iy;break;case"copy":case"cut":case"paste":m=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=qd}var x=(e&4)!==0,p=!x&&t==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var _=u,v;_!==null;){v=_;var g=v.stateNode;if(v.tag===5&&g!==null&&(v=g,c!==null&&(g=Is(_,c),g!=null&&x.push(Hs(_,g,v)))),p)break;_=_.return}0<x.length&&(h=new m(h,y,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Rc&&(y=n.relatedTarget||n.fromElement)&&(pr(y)||y[Si]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?pr(y):null,y!==null&&(p=Ir(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(x=jd,g="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=qd,g="onPointerLeave",c="onPointerEnter",_="pointer"),p=m==null?h:fo(m),v=y==null?h:fo(y),h=new x(g,_+"leave",m,n,f),h.target=p,h.relatedTarget=v,g=null,pr(f)===u&&(x=new x(c,_+"enter",y,n,f),x.target=v,x.relatedTarget=p,g=x),p=g,m&&y)t:{for(x=m,c=y,_=0,v=x;v;v=kr(v))_++;for(v=0,g=c;g;g=kr(g))v++;for(;0<_-v;)x=kr(x),_--;for(;0<v-_;)c=kr(c),v--;for(;_--;){if(x===c||c!==null&&x===c.alternate)break t;x=kr(x),c=kr(c)}x=null}else x=null;m!==null&&oh(d,h,m,x,!1),y!==null&&p!==null&&oh(d,p,y,x,!0)}}e:{if(h=u?fo(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var S=cy;else if(Zd(h))if(wg)S=py;else{S=dy;var R=fy}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=hy);if(S&&(S=S(t,u))){Tg(d,S,n,f);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Mc(h,"number",h.value)}switch(R=u?fo(u):window,t){case"focusin":(Zd(R)||R.contentEditable==="true")&&(uo=R,Ic=u,Es=null);break;case"focusout":Es=Ic=uo=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,nh(d,n,f);break;case"selectionchange":if(vy)break;case"keydown":case"keyup":nh(d,n,f)}var A;if(kf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else lo?Mg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Sg&&n.locale!=="ko"&&(lo||N!=="onCompositionStart"?N==="onCompositionEnd"&&lo&&(A=xg()):(Oi=f,Ff="value"in Oi?Oi.value:Oi.textContent,lo=!0)),R=pl(u,N),0<R.length&&(N=new Yd(N,t,null,n,f),d.push({event:N,listeners:R}),A?N.data=A:(A=Eg(n),A!==null&&(N.data=A)))),(A=oy?sy(t,n):ay(t,n))&&(u=pl(u,"onBeforeInput"),0<u.length&&(f=new Yd("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=A))}Ng(d,e)})}function Hs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Is(t,n),o!=null&&i.unshift(Hs(t,o,r)),o=Is(t,e),o!=null&&i.push(Hs(t,o,r))),t=t.return}return i}function kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function oh(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Is(n,o),l!=null&&s.unshift(Hs(n,l,a))):r||(l=Is(n,o),l!=null&&s.push(Hs(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Sy=/\r\n?/g,My=/\u0000|\uFFFD/g;function sh(t){return(typeof t=="string"?t:""+t).replace(Sy,`
`).replace(My,"")}function ya(t,e,n){if(e=sh(e),sh(t)!==e&&n)throw Error(ue(425))}function ml(){}var Fc=null,Oc=null;function zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kc=typeof setTimeout=="function"?setTimeout:void 0,Ey=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(t){return ah.resolve(null).then(t).catch(wy)}:kc;function wy(t){setTimeout(function(){throw t})}function Eu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Os(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Os(e)}function Wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xo=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Xo,Gs="__reactProps$"+Xo,Si="__reactContainer$"+Xo,Bc="__reactEvents$"+Xo,Ay="__reactListeners$"+Xo,Ry="__reactHandles$"+Xo;function pr(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Si]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lh(t);t!==null;){if(n=t[Qn])return n;t=lh(t)}return e}t=n,n=t.parentNode}return null}function ia(t){return t=t[Qn]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function Hl(t){return t[Gs]||null}var Hc=[],ho=-1;function tr(t){return{current:t}}function rt(t){0>ho||(t.current=Hc[ho],Hc[ho]=null,ho--)}function nt(t,e){ho++,Hc[ho]=t.current,t.current=e}var Qi={},Wt=tr(Qi),tn=tr(!1),wr=Qi;function Do(t,e){var n=t.type.contextTypes;if(!n)return Qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function gl(){rt(tn),rt(Wt)}function uh(t,e,n){if(Wt.current!==Qi)throw Error(ue(168));nt(Wt,e),nt(tn,n)}function Og(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,f0(t)||"Unknown",r));return ct({},n,i)}function vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,wr=Wt.current,nt(Wt,t),nt(tn,tn.current),!0}function ch(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=Og(t,e,wr),i.__reactInternalMemoizedMergedChildContext=t,rt(tn),rt(Wt),nt(Wt,t)):rt(tn),nt(tn,n)}var hi=null,Gl=!1,Tu=!1;function zg(t){hi===null?hi=[t]:hi.push(t)}function Cy(t){Gl=!0,zg(t)}function nr(){if(!Tu&&hi!==null){Tu=!0;var t=0,e=et;try{var n=hi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hi=null,Gl=!1}catch(r){throw hi!==null&&(hi=hi.slice(t+1)),ug(Df,nr),r}finally{et=e,Tu=!1}}return null}var po=[],mo=0,_l=null,yl=0,En=[],Tn=0,Ar=null,mi=1,gi="";function ur(t,e){po[mo++]=yl,po[mo++]=_l,_l=t,yl=e}function kg(t,e,n){En[Tn++]=mi,En[Tn++]=gi,En[Tn++]=Ar,Ar=t;var i=mi;t=gi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var o=32-Xn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,mi=1<<32-Xn(e)+r|n<<r|i,gi=o+t}else mi=1<<o|n<<r|i,gi=t}function Hf(t){t.return!==null&&(ur(t,1),kg(t,1,0))}function Gf(t){for(;t===_l;)_l=po[--mo],po[mo]=null,yl=po[--mo],po[mo]=null;for(;t===Ar;)Ar=En[--Tn],En[Tn]=null,gi=En[--Tn],En[Tn]=null,mi=En[--Tn],En[Tn]=null}var mn=null,pn=null,st=!1,Hn=null;function Bg(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:mi,overflow:gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vc(t){if(st){var e=pn;if(e){var n=e;if(!fh(t,e)){if(Gc(t))throw Error(ue(418));e=Wi(n.nextSibling);var i=mn;e&&fh(t,e)?Bg(i,n):(t.flags=t.flags&-4097|2,st=!1,mn=t)}}else{if(Gc(t))throw Error(ue(418));t.flags=t.flags&-4097|2,st=!1,mn=t}}}function dh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function xa(t){if(t!==mn)return!1;if(!st)return dh(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zc(t.type,t.memoizedProps)),e&&(e=pn)){if(Gc(t))throw Hg(),Error(ue(418));for(;e;)Bg(t,e),e=Wi(e.nextSibling)}if(dh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Wi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Wi(t.stateNode.nextSibling):null;return!0}function Hg(){for(var t=pn;t;)t=Wi(t.nextSibling)}function Uo(){pn=mn=null,st=!1}function Vf(t){Hn===null?Hn=[t]:Hn.push(t)}var Py=Ti.ReactCurrentBatchConfig;function zn(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var xl=tr(null),Sl=null,go=null,Wf=null;function Xf(){Wf=go=Sl=null}function jf(t){var e=xl.current;rt(xl),t._currentValue=e}function Wc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ao(t,e){Sl=t,Wf=go=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(Wf!==t)if(t={context:t,memoizedValue:e,next:null},go===null){if(Sl===null)throw Error(ue(308));go=t,Sl.dependencies={lanes:0,firstContext:t}}else go=go.next=t;return e}var mr=null;function Yf(t){mr===null?mr=[t]:mr.push(t)}function Gg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Yf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Mi(t,i)}function Mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ii=!1;function qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Mi(t,n)}return r=i.interleaved,r===null?(e.next=e,Yf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Mi(t,n)}function Ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uf(t,n)}}function hh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ml(t,e,n,i){var r=t.updateQueue;Ii=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,f=u=l=null,a=o;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,x=a;switch(h=e,m=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(m,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(m,d,h):y,h==null)break e;d=ct({},d,h);break e;case 2:Ii=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=d):f=f.next=m,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Cr|=s,t.lanes=s,t.memoizedState=d}}function ph(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var Wg=new Gm.Component().refs;function Xc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vl={isMounted:function(t){return(t=t._reactInternals)?Ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Yi(t),o=_i(i,r);o.payload=e,n!=null&&(o.callback=n),e=Xi(t,o,r),e!==null&&(jn(e,t,r,i),Ja(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Yi(t),o=_i(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Xi(t,o,r),e!==null&&(jn(e,t,r,i),Ja(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=Yi(t),r=_i(n,i);r.tag=2,e!=null&&(r.callback=e),e=Xi(t,r,i),e!==null&&(jn(e,t,i,n),Ja(e,t,i))}};function mh(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ks(n,i)||!ks(r,o):!0}function Xg(t,e,n){var i=!1,r=Qi,o=e.contextType;return typeof o=="object"&&o!==null?o=Pn(o):(r=nn(e)?wr:Wt.current,i=e.contextTypes,o=(i=i!=null)?Do(t,r):Qi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function gh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Vl.enqueueReplaceState(e,e.state,null)}function jc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Wg,qf(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Pn(o):(o=nn(e)?wr:Wt.current,r.context=Do(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Xc(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Vl.enqueueReplaceState(r,r.state,null),Ml(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ts(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===Wg&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vh(t){var e=t._init;return e(t._payload)}function jg(t){function e(c,_){if(t){var v=c.deletions;v===null?(c.deletions=[_],c.flags|=16):v.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=qi(c,_),c.index=0,c.sibling=null,c}function o(c,_,v){return c.index=v,t?(v=c.alternate,v!==null?(v=v.index,v<_?(c.flags|=2,_):v):(c.flags|=2,_)):(c.flags|=1048576,_)}function s(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,v,g){return _===null||_.tag!==6?(_=bu(v,c.mode,g),_.return=c,_):(_=r(_,v),_.return=c,_)}function l(c,_,v,g){var S=v.type;return S===ao?f(c,_,v.props.children,g,v.key):_!==null&&(_.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ui&&vh(S)===_.type)?(g=r(_,v.props),g.ref=ts(c,_,v),g.return=c,g):(g=ol(v.type,v.key,v.props,null,c.mode,g),g.ref=ts(c,_,v),g.return=c,g)}function u(c,_,v,g){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Du(v,c.mode,g),_.return=c,_):(_=r(_,v.children||[]),_.return=c,_)}function f(c,_,v,g,S){return _===null||_.tag!==7?(_=yr(v,c.mode,g,S),_.return=c,_):(_=r(_,v),_.return=c,_)}function d(c,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=bu(""+_,c.mode,v),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ca:return v=ol(_.type,_.key,_.props,null,c.mode,v),v.ref=ts(c,null,_),v.return=c,v;case so:return _=Du(_,c.mode,v),_.return=c,_;case Ui:var g=_._init;return d(c,g(_._payload),v)}if(ps(_)||Ko(_))return _=yr(_,c.mode,v,null),_.return=c,_;Sa(c,_)}return null}function h(c,_,v,g){var S=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(c,_,""+v,g);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ca:return v.key===S?l(c,_,v,g):null;case so:return v.key===S?u(c,_,v,g):null;case Ui:return S=v._init,h(c,_,S(v._payload),g)}if(ps(v)||Ko(v))return S!==null?null:f(c,_,v,g,null);Sa(c,v)}return null}function m(c,_,v,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return c=c.get(v)||null,a(_,c,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ca:return c=c.get(g.key===null?v:g.key)||null,l(_,c,g,S);case so:return c=c.get(g.key===null?v:g.key)||null,u(_,c,g,S);case Ui:var R=g._init;return m(c,_,v,R(g._payload),S)}if(ps(g)||Ko(g))return c=c.get(v)||null,f(_,c,g,S,null);Sa(_,g)}return null}function y(c,_,v,g){for(var S=null,R=null,A=_,N=_=0,M=null;A!==null&&N<v.length;N++){A.index>N?(M=A,A=null):M=A.sibling;var T=h(c,A,v[N],g);if(T===null){A===null&&(A=M);break}t&&A&&T.alternate===null&&e(c,A),_=o(T,_,N),R===null?S=T:R.sibling=T,R=T,A=M}if(N===v.length)return n(c,A),st&&ur(c,N),S;if(A===null){for(;N<v.length;N++)A=d(c,v[N],g),A!==null&&(_=o(A,_,N),R===null?S=A:R.sibling=A,R=A);return st&&ur(c,N),S}for(A=i(c,A);N<v.length;N++)M=m(A,c,N,v[N],g),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?N:M.key),_=o(M,_,N),R===null?S=M:R.sibling=M,R=M);return t&&A.forEach(function(ne){return e(c,ne)}),st&&ur(c,N),S}function x(c,_,v,g){var S=Ko(v);if(typeof S!="function")throw Error(ue(150));if(v=S.call(v),v==null)throw Error(ue(151));for(var R=S=null,A=_,N=_=0,M=null,T=v.next();A!==null&&!T.done;N++,T=v.next()){A.index>N?(M=A,A=null):M=A.sibling;var ne=h(c,A,T.value,g);if(ne===null){A===null&&(A=M);break}t&&A&&ne.alternate===null&&e(c,A),_=o(ne,_,N),R===null?S=ne:R.sibling=ne,R=ne,A=M}if(T.done)return n(c,A),st&&ur(c,N),S;if(A===null){for(;!T.done;N++,T=v.next())T=d(c,T.value,g),T!==null&&(_=o(T,_,N),R===null?S=T:R.sibling=T,R=T);return st&&ur(c,N),S}for(A=i(c,A);!T.done;N++,T=v.next())T=m(A,c,N,T.value,g),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?N:T.key),_=o(T,_,N),R===null?S=T:R.sibling=T,R=T);return t&&A.forEach(function(te){return e(c,te)}),st&&ur(c,N),S}function p(c,_,v,g){if(typeof v=="object"&&v!==null&&v.type===ao&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ca:e:{for(var S=v.key,R=_;R!==null;){if(R.key===S){if(S=v.type,S===ao){if(R.tag===7){n(c,R.sibling),_=r(R,v.props.children),_.return=c,c=_;break e}}else if(R.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ui&&vh(S)===R.type){n(c,R.sibling),_=r(R,v.props),_.ref=ts(c,R,v),_.return=c,c=_;break e}n(c,R);break}else e(c,R);R=R.sibling}v.type===ao?(_=yr(v.props.children,c.mode,g,v.key),_.return=c,c=_):(g=ol(v.type,v.key,v.props,null,c.mode,g),g.ref=ts(c,_,v),g.return=c,c=g)}return s(c);case so:e:{for(R=v.key;_!==null;){if(_.key===R)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(c,_.sibling),_=r(_,v.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=Du(v,c.mode,g),_.return=c,c=_}return s(c);case Ui:return R=v._init,p(c,_,R(v._payload),g)}if(ps(v))return y(c,_,v,g);if(Ko(v))return x(c,_,v,g);Sa(c,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,v),_.return=c,c=_):(n(c,_),_=bu(v,c.mode,g),_.return=c,c=_),s(c)):n(c,_)}return p}var Io=jg(!0),Yg=jg(!1),ra={},ei=tr(ra),Vs=tr(ra),Ws=tr(ra);function gr(t){if(t===ra)throw Error(ue(174));return t}function $f(t,e){switch(nt(Ws,e),nt(Vs,t),nt(ei,ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Tc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Tc(e,t)}rt(ei),nt(ei,e)}function No(){rt(ei),rt(Vs),rt(Ws)}function qg(t){gr(Ws.current);var e=gr(ei.current),n=Tc(e,t.type);e!==n&&(nt(Vs,t),nt(ei,n))}function Kf(t){Vs.current===t&&(rt(ei),rt(Vs))}var lt=tr(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wu=[];function Zf(){for(var t=0;t<wu.length;t++)wu[t]._workInProgressVersionPrimary=null;wu.length=0}var el=Ti.ReactCurrentDispatcher,Au=Ti.ReactCurrentBatchConfig,Rr=0,ut=null,At=null,Ut=null,Tl=!1,Ts=!1,Xs=0,Ly=0;function zt(){throw Error(ue(321))}function Qf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Jf(t,e,n,i,r,o){if(Rr=o,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?Iy:Ny,t=n(i,r),Ts){o=0;do{if(Ts=!1,Xs=0,25<=o)throw Error(ue(301));o+=1,Ut=At=null,e.updateQueue=null,el.current=Fy,t=n(i,r)}while(Ts)}if(el.current=wl,e=At!==null&&At.next!==null,Rr=0,Ut=At=ut=null,Tl=!1,e)throw Error(ue(300));return t}function ed(){var t=Xs!==0;return Xs=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?ut.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Ln(){if(At===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Ut===null?ut.memoizedState:Ut.next;if(e!==null)Ut=e,At=t;else{if(t===null)throw Error(ue(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Ut===null?ut.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function js(t,e){return typeof e=="function"?e(t):e}function Ru(t){var e=Ln(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((Rr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,ut.lanes|=f,Cr|=f}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,Yn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,ut.lanes|=o,Cr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cu(t){var e=Ln(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Yn(o,e.memoizedState)||(en=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function $g(){}function Kg(t,e){var n=ut,i=Ln(),r=e(),o=!Yn(i.memoizedState,r);if(o&&(i.memoizedState=r,en=!0),i=i.queue,td(Jg.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Ys(9,Qg.bind(null,n,i,r,e),void 0,null),It===null)throw Error(ue(349));Rr&30||Zg(n,e,r)}return r}function Zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qg(t,e,n,i){e.value=n,e.getSnapshot=i,ev(e)&&tv(t)}function Jg(t,e,n){return n(function(){ev(e)&&tv(t)})}function ev(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function tv(t){var e=Mi(t,1);e!==null&&jn(e,t,1,-1)}function _h(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:t},e.queue=t,t=t.dispatch=Uy.bind(null,ut,t),[e.memoizedState,t]}function Ys(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function nv(){return Ln().memoizedState}function tl(t,e,n,i){var r=Kn();ut.flags|=t,r.memoizedState=Ys(1|e,n,void 0,i===void 0?null:i)}function Wl(t,e,n,i){var r=Ln();i=i===void 0?null:i;var o=void 0;if(At!==null){var s=At.memoizedState;if(o=s.destroy,i!==null&&Qf(i,s.deps)){r.memoizedState=Ys(e,n,o,i);return}}ut.flags|=t,r.memoizedState=Ys(1|e,n,o,i)}function yh(t,e){return tl(8390656,8,t,e)}function td(t,e){return Wl(2048,8,t,e)}function iv(t,e){return Wl(4,2,t,e)}function rv(t,e){return Wl(4,4,t,e)}function ov(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sv(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,ov.bind(null,e,t),n)}function nd(){}function av(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function lv(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function uv(t,e,n){return Rr&21?(Yn(n,e)||(n=dg(),ut.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function by(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Au.transition;Au.transition={};try{t(!1),e()}finally{et=n,Au.transition=i}}function cv(){return Ln().memoizedState}function Dy(t,e,n){var i=Yi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},fv(t))dv(e,n);else if(n=Gg(t,e,n,i),n!==null){var r=$t();jn(n,t,i,r),hv(n,e,i)}}function Uy(t,e,n){var i=Yi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(fv(t))dv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,s)){var l=e.interleaved;l===null?(r.next=r,Yf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Gg(t,e,r,i),n!==null&&(r=$t(),jn(n,t,i,r),hv(n,e,i))}}function fv(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function dv(t,e){Ts=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uf(t,n)}}var wl={readContext:Pn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},Iy={readContext:Pn,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:yh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,ov.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Dy.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:_h,useDebugValue:nd,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=_h(!1),e=t[0];return t=by.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=Kn();if(st){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),It===null)throw Error(ue(349));Rr&30||Zg(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,yh(Jg.bind(null,i,o,t),[t]),i.flags|=2048,Ys(9,Qg.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Kn(),e=It.identifierPrefix;if(st){var n=gi,i=mi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ly++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ny={readContext:Pn,useCallback:av,useContext:Pn,useEffect:td,useImperativeHandle:sv,useInsertionEffect:iv,useLayoutEffect:rv,useMemo:lv,useReducer:Ru,useRef:nv,useState:function(){return Ru(js)},useDebugValue:nd,useDeferredValue:function(t){var e=Ln();return uv(e,At.memoizedState,t)},useTransition:function(){var t=Ru(js)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:Kg,useId:cv,unstable_isNewReconciler:!1},Fy={readContext:Pn,useCallback:av,useContext:Pn,useEffect:td,useImperativeHandle:sv,useInsertionEffect:iv,useLayoutEffect:rv,useMemo:lv,useReducer:Cu,useRef:nv,useState:function(){return Cu(js)},useDebugValue:nd,useDeferredValue:function(t){var e=Ln();return At===null?e.memoizedState=t:uv(e,At.memoizedState,t)},useTransition:function(){var t=Cu(js)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:Kg,useId:cv,unstable_isNewReconciler:!1};function Fo(t,e){try{var n="",i=e;do n+=c0(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Pu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Oy=typeof WeakMap=="function"?WeakMap:Map;function pv(t,e,n){n=_i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rl||(Rl=!0,rf=i),Yc(t,e)},n}function mv(t,e,n){n=_i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Yc(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Yc(t,e),typeof i!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function xh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Oy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Zy.bind(null,t,e,n),e.then(t,t))}function Sh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_i(-1,1),e.tag=2,Xi(n,e,1))),n.lanes|=1),t)}var zy=Ti.ReactCurrentOwner,en=!1;function Yt(t,e,n,i){e.child=t===null?Yg(e,null,n,i):Io(e,t.child,n,i)}function Eh(t,e,n,i,r){n=n.render;var o=e.ref;return Ao(e,r),i=Jf(t,e,n,i,o,r),n=ed(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(st&&n&&Hf(e),e.flags|=1,Yt(t,e,i,r),e.child)}function Th(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!cd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,gv(t,e,o,i,r)):(t=ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ks,n(s,i)&&t.ref===e.ref)return Ei(t,e,r)}return e.flags|=1,t=qi(o,i),t.ref=e.ref,t.return=e,e.child=t}function gv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ks(o,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,Ei(t,e,r)}return qc(t,e,n,i,r)}function vv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(_o,dn),dn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(_o,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,nt(_o,dn),dn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,nt(_o,dn),dn|=i;return Yt(t,e,r,n),e.child}function _v(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qc(t,e,n,i,r){var o=nn(n)?wr:Wt.current;return o=Do(e,o),Ao(e,r),n=Jf(t,e,n,i,o,r),i=ed(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(st&&i&&Hf(e),e.flags|=1,Yt(t,e,n,r),e.child)}function wh(t,e,n,i,r){if(nn(n)){var o=!0;vl(e)}else o=!1;if(Ao(e,r),e.stateNode===null)nl(t,e),Xg(e,n,i),jc(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=nn(n)?wr:Wt.current,u=Do(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&gh(e,s,i,u),Ii=!1;var h=e.memoizedState;s.state=h,Ml(e,i,s,r),l=e.memoizedState,a!==i||h!==l||tn.current||Ii?(typeof f=="function"&&(Xc(e,n,f,i),l=e.memoizedState),(a=Ii||mh(e,n,a,i,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,Vg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zn(e.type,a),s.props=u,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=nn(n)?wr:Wt.current,l=Do(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&gh(e,s,i,l),Ii=!1,h=e.memoizedState,s.state=h,Ml(e,i,s,r);var y=e.memoizedState;a!==d||h!==y||tn.current||Ii?(typeof m=="function"&&(Xc(e,n,m,i),y=e.memoizedState),(u=Ii||mh(e,n,u,i,h,y,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),s.props=i,s.state=y,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return $c(t,e,n,i,o,r)}function $c(t,e,n,i,r,o){_v(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&ch(e,n,!1),Ei(t,e,o);i=e.stateNode,zy.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Io(e,t.child,null,o),e.child=Io(e,null,a,o)):Yt(t,e,a,o),e.memoizedState=i.state,r&&ch(e,n,!0),e.child}function yv(t){var e=t.stateNode;e.pendingContext?uh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&uh(t,e.context,!1),$f(t,e.containerInfo)}function Ah(t,e,n,i,r){return Uo(),Vf(r),e.flags|=256,Yt(t,e,n,i),e.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function xv(t,e,n){var i=e.pendingProps,r=lt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(lt,r&1),t===null)return Vc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Yl(s,i,0,null),t=yr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Zc(n),e.memoizedState=Kc,t):id(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ky(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=qi(a,o):(o=yr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Zc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Kc,i}return o=t.child,t=o.sibling,i=qi(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function id(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,i){return i!==null&&Vf(i),Io(e,t.child,null,n),t=id(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ky(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Pu(Error(ue(422))),Ma(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Yl({mode:"visible",children:i.children},r,0,null),o=yr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Io(e,t.child,null,s),e.child.memoizedState=Zc(s),e.memoizedState=Kc,o);if(!(e.mode&1))return Ma(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ue(419)),i=Pu(o,i,void 0),Ma(t,e,s,i)}if(a=(s&t.childLanes)!==0,en||a){if(i=It,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Mi(t,r),jn(i,t,r,-1))}return ud(),i=Pu(Error(ue(421))),Ma(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Qy.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,pn=Wi(r.nextSibling),mn=e,st=!0,Hn=null,t!==null&&(En[Tn++]=mi,En[Tn++]=gi,En[Tn++]=Ar,mi=t.id,gi=t.overflow,Ar=e),e=id(e,i.children),e.flags|=4096,e)}function Rh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Wc(t.return,e,n)}function Lu(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Sv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Yt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rh(t,n,e);else if(t.tag===19)Rh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Lu(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&El(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Lu(e,!0,n,null,o);break;case"together":Lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ei(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function By(t,e,n){switch(e.tag){case 3:yv(e),Uo();break;case 5:qg(e);break;case 1:nn(e.type)&&vl(e);break;case 4:$f(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(xl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?xv(t,e,n):(nt(lt,lt.current&1),t=Ei(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Sv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,vv(t,e,n)}return Ei(t,e,n)}var Mv,Qc,Ev,Tv;Mv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qc=function(){};Ev=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,gr(ei.current);var o=null;switch(n){case"input":r=xc(t,r),i=xc(t,i),o=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),o=[];break;case"textarea":r=Ec(t,r),i=Ec(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ml)}wc(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ds.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ds.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Tv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ns(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Hy(t,e,n){var i=e.pendingProps;switch(Gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return nn(e.type)&&gl(),kt(e),null;case 3:return i=e.stateNode,No(),rt(tn),rt(Wt),Zf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(af(Hn),Hn=null))),Qc(t,e),kt(e),null;case 5:Kf(e);var r=gr(Ws.current);if(n=e.type,t!==null&&e.stateNode!=null)Ev(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return kt(e),null}if(t=gr(ei.current),xa(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Qn]=e,i[Gs]=o,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<gs.length;r++)it(gs[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Fd(i,o),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},it("invalid",i);break;case"textarea":zd(i,o),it("invalid",i)}wc(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&ya(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ya(i.textContent,a,t),r=["children",""+a]):Ds.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&it("scroll",i)}switch(n){case"input":fa(i),Od(i,o,!0);break;case"textarea":fa(i),kd(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Qn]=e,t[Gs]=i,Mv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Ac(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<gs.length;r++)it(gs[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Fd(t,i),r=xc(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),it("invalid",t);break;case"textarea":zd(t,i),r=Ec(t,i),it("invalid",t);break;default:r=i}wc(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?eg(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qm(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Us(t,l):typeof l=="number"&&Us(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ds.hasOwnProperty(o)?l!=null&&o==="onScroll"&&it("scroll",t):l!=null&&Rf(t,o,l,s))}switch(n){case"input":fa(t),Od(t,i,!1);break;case"textarea":fa(t),kd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Zi(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Mo(t,!!i.multiple,o,!1):i.defaultValue!=null&&Mo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)Tv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=gr(Ws.current),gr(ei.current),xa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(o=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:ya(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ya(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return kt(e),null;case 13:if(rt(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&pn!==null&&e.mode&1&&!(e.flags&128))Hg(),Uo(),e.flags|=98560,o=!1;else if(o=xa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ue(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ue(317));o[Qn]=e}else Uo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),o=!1}else Hn!==null&&(af(Hn),Hn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?Rt===0&&(Rt=3):ud())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return No(),Qc(t,e),t===null&&Bs(e.stateNode.containerInfo),kt(e),null;case 10:return jf(e.type._context),kt(e),null;case 17:return nn(e.type)&&gl(),kt(e),null;case 19:if(rt(lt),o=e.memoizedState,o===null)return kt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)ns(o,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=El(t),s!==null){for(e.flags|=128,ns(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}o.tail!==null&&vt()>Oo&&(e.flags|=128,i=!0,ns(o,!1),e.lanes=4194304)}else{if(!i)if(t=El(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ns(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!st)return kt(e),null}else 2*vt()-o.renderingStartTime>Oo&&n!==1073741824&&(e.flags|=128,i=!0,ns(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=vt(),e.sibling=null,n=lt.current,nt(lt,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return ld(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function Gy(t,e){switch(Gf(e),e.tag){case 1:return nn(e.type)&&gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return No(),rt(tn),rt(Wt),Zf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kf(e),null;case 13:if(rt(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));Uo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(lt),null;case 4:return No(),null;case 10:return jf(e.type._context),null;case 22:case 23:return ld(),null;case 24:return null;default:return null}}var Ea=!1,Gt=!1,Vy=typeof WeakSet=="function"?WeakSet:Set,ge=null;function vo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ht(t,e,i)}else n.current=null}function Jc(t,e,n){try{n()}catch(i){ht(t,e,i)}}var Ch=!1;function Wy(t,e){if(Fc=dl,t=Cg(),Bf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++f===i&&(l=s),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oc={focusedElem:t,selectionRange:n},dl=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,p=y.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:zn(e.type,x),p);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(g){ht(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return y=Ch,Ch=!1,y}function ws(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Jc(e,n,o)}r=r.next}while(r!==i)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ef(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wv(t){var e=t.alternate;e!==null&&(t.alternate=null,wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Gs],delete e[Bc],delete e[Ay],delete e[Ry])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Av(t){return t.tag===5||t.tag===3||t.tag===4}function Ph(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ml));else if(i!==4&&(t=t.child,t!==null))for(tf(t,e,n),t=t.sibling;t!==null;)tf(t,e,n),t=t.sibling}function nf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(nf(t,e,n),t=t.sibling;t!==null;)nf(t,e,n),t=t.sibling}var Nt=null,kn=!1;function Ci(t,e,n){for(n=n.child;n!==null;)Rv(t,e,n),n=n.sibling}function Rv(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 5:Gt||vo(n,e);case 6:var i=Nt,r=kn;Nt=null,Ci(t,e,n),Nt=i,kn=r,Nt!==null&&(kn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(kn?(t=Nt,n=n.stateNode,t.nodeType===8?Eu(t.parentNode,n):t.nodeType===1&&Eu(t,n),Os(t)):Eu(Nt,n.stateNode));break;case 4:i=Nt,r=kn,Nt=n.stateNode.containerInfo,kn=!0,Ci(t,e,n),Nt=i,kn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Jc(n,e,s),r=r.next}while(r!==i)}Ci(t,e,n);break;case 1:if(!Gt&&(vo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ht(n,e,a)}Ci(t,e,n);break;case 21:Ci(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Ci(t,e,n),Gt=i):Ci(t,e,n);break;default:Ci(t,e,n)}}function Lh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Vy),e.forEach(function(i){var r=Jy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,kn=!1;break e;case 3:Nt=a.stateNode.containerInfo,kn=!0;break e;case 4:Nt=a.stateNode.containerInfo,kn=!0;break e}a=a.return}if(Nt===null)throw Error(ue(160));Rv(o,s,r),Nt=null,kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ht(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cv(e,t),e=e.sibling}function Cv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),$n(t),i&4){try{ws(3,t,t.return),Xl(3,t)}catch(x){ht(t,t.return,x)}try{ws(5,t,t.return)}catch(x){ht(t,t.return,x)}}break;case 1:Un(e,t),$n(t),i&512&&n!==null&&vo(n,n.return);break;case 5:if(Un(e,t),$n(t),i&512&&n!==null&&vo(n,n.return),t.flags&32){var r=t.stateNode;try{Us(r,"")}catch(x){ht(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&$m(r,o),Ac(a,s);var u=Ac(a,o);for(s=0;s<l.length;s+=2){var f=l[s],d=l[s+1];f==="style"?eg(r,d):f==="dangerouslySetInnerHTML"?Qm(r,d):f==="children"?Us(r,d):Rf(r,f,d,u)}switch(a){case"input":Sc(r,o);break;case"textarea":Km(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Mo(r,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?Mo(r,!!o.multiple,o.defaultValue,!0):Mo(r,!!o.multiple,o.multiple?[]:"",!1))}r[Gs]=o}catch(x){ht(t,t.return,x)}}break;case 6:if(Un(e,t),$n(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){ht(t,t.return,x)}}break;case 3:if(Un(e,t),$n(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Os(e.containerInfo)}catch(x){ht(t,t.return,x)}break;case 4:Un(e,t),$n(t);break;case 13:Un(e,t),$n(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(sd=vt())),i&4&&Lh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||f,Un(e,t),Gt=u):Un(e,t),$n(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(ge=t,f=t.child;f!==null;){for(d=ge=f;ge!==null;){switch(h=ge,m=h.child,h.tag){case 0:case 11:case 14:case 15:ws(4,h,h.return);break;case 1:vo(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(x){ht(i,n,x)}}break;case 5:vo(h,h.return);break;case 22:if(h.memoizedState!==null){Dh(d);continue}}m!==null?(m.return=h,ge=m):Dh(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jm("display",s))}catch(x){ht(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ht(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Un(e,t),$n(t),i&4&&Lh(t);break;case 21:break;default:Un(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Av(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Us(r,""),i.flags&=-33);var o=Ph(t);nf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Ph(t);tf(t,a,s);break;default:throw Error(ue(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Xy(t,e,n){ge=t,Pv(t)}function Pv(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Ea;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=Ea;var u=Gt;if(Ea=s,(Gt=l)&&!u)for(ge=r;ge!==null;)s=ge,l=s.child,s.tag===22&&s.memoizedState!==null?Uh(r):l!==null?(l.return=s,ge=l):Uh(r);for(;o!==null;)ge=o,Pv(o),o=o.sibling;ge=r,Ea=a,Gt=u}bh(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,ge=o):bh(t)}}function bh(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||Xl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&ph(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ph(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Os(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Gt||e.flags&512&&ef(e)}catch(h){ht(e,e.return,h)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Dh(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Uh(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(l){ht(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ht(e,r,l)}}var o=e.return;try{ef(e)}catch(l){ht(e,o,l)}break;case 5:var s=e.return;try{ef(e)}catch(l){ht(e,s,l)}}}catch(l){ht(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var jy=Math.ceil,Al=Ti.ReactCurrentDispatcher,rd=Ti.ReactCurrentOwner,Cn=Ti.ReactCurrentBatchConfig,qe=0,It=null,Mt=null,Ft=0,dn=0,_o=tr(0),Rt=0,qs=null,Cr=0,jl=0,od=0,As=null,Jt=null,sd=0,Oo=1/0,di=null,Rl=!1,rf=null,ji=null,Ta=!1,zi=null,Cl=0,Rs=0,of=null,il=-1,rl=0;function $t(){return qe&6?vt():il!==-1?il:il=vt()}function Yi(t){return t.mode&1?qe&2&&Ft!==0?Ft&-Ft:Py.transition!==null?(rl===0&&(rl=dg()),rl):(t=et,t!==0||(t=window.event,t=t===void 0?16:yg(t.type)),t):1}function jn(t,e,n,i){if(50<Rs)throw Rs=0,of=null,Error(ue(185));ta(t,n,i),(!(qe&2)||t!==It)&&(t===It&&(!(qe&2)&&(jl|=n),Rt===4&&Fi(t,Ft)),rn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Oo=vt()+500,Gl&&nr()))}function rn(t,e){var n=t.callbackNode;P0(t,e);var i=fl(t,t===It?Ft:0);if(i===0)n!==null&&Gd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Gd(n),e===1)t.tag===0?Cy(Ih.bind(null,t)):zg(Ih.bind(null,t)),Ty(function(){!(qe&6)&&nr()}),n=null;else{switch(hg(i)){case 1:n=Df;break;case 4:n=cg;break;case 16:n=cl;break;case 536870912:n=fg;break;default:n=cl}n=Ov(n,Lv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Lv(t,e){if(il=-1,rl=0,qe&6)throw Error(ue(327));var n=t.callbackNode;if(Ro()&&t.callbackNode!==n)return null;var i=fl(t,t===It?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Pl(t,i);else{e=i;var r=qe;qe|=2;var o=Dv();(It!==t||Ft!==e)&&(di=null,Oo=vt()+500,_r(t,e));do try{$y();break}catch(a){bv(t,a)}while(1);Xf(),Al.current=o,qe=r,Mt!==null?e=0:(It=null,Ft=0,e=Rt)}if(e!==0){if(e===2&&(r=bc(t),r!==0&&(i=r,e=sf(t,r))),e===1)throw n=qs,_r(t,0),Fi(t,i),rn(t,vt()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Yy(r)&&(e=Pl(t,i),e===2&&(o=bc(t),o!==0&&(i=o,e=sf(t,o))),e===1))throw n=qs,_r(t,0),Fi(t,i),rn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:cr(t,Jt,di);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=sd+500-vt(),10<e)){if(fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=kc(cr.bind(null,t,Jt,di),e);break}cr(t,Jt,di);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Xn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*jy(i/1960))-i,10<i){t.timeoutHandle=kc(cr.bind(null,t,Jt,di),i);break}cr(t,Jt,di);break;case 5:cr(t,Jt,di);break;default:throw Error(ue(329))}}}return rn(t,vt()),t.callbackNode===n?Lv.bind(null,t):null}function sf(t,e){var n=As;return t.current.memoizedState.isDehydrated&&(_r(t,e).flags|=256),t=Pl(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&af(e)),t}function af(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function Yy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Yn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~od,e&=~jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function Ih(t){if(qe&6)throw Error(ue(327));Ro();var e=fl(t,0);if(!(e&1))return rn(t,vt()),null;var n=Pl(t,e);if(t.tag!==0&&n===2){var i=bc(t);i!==0&&(e=i,n=sf(t,i))}if(n===1)throw n=qs,_r(t,0),Fi(t,e),rn(t,vt()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cr(t,Jt,di),rn(t,vt()),null}function ad(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Oo=vt()+500,Gl&&nr())}}function Pr(t){zi!==null&&zi.tag===0&&!(qe&6)&&Ro();var e=qe;qe|=1;var n=Cn.transition,i=et;try{if(Cn.transition=null,et=1,t)return t()}finally{et=i,Cn.transition=n,qe=e,!(qe&6)&&nr()}}function ld(){dn=_o.current,rt(_o)}function _r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ey(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gl();break;case 3:No(),rt(tn),rt(Wt),Zf();break;case 5:Kf(i);break;case 4:No();break;case 13:rt(lt);break;case 19:rt(lt);break;case 10:jf(i.type._context);break;case 22:case 23:ld()}n=n.return}if(It=t,Mt=t=qi(t.current,null),Ft=dn=e,Rt=0,qs=null,od=jl=Cr=0,Jt=As=null,mr!==null){for(e=0;e<mr.length;e++)if(n=mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}mr=null}return t}function bv(t,e){do{var n=Mt;try{if(Xf(),el.current=wl,Tl){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tl=!1}if(Rr=0,Ut=At=ut=null,Ts=!1,Xs=0,rd.current=null,n===null||n.return===null){Rt=1,qs=e,Mt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Sh(s);if(m!==null){m.flags&=-257,Mh(m,s,a,o,e),m.mode&1&&xh(o,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var x=new Set;x.add(l),e.updateQueue=x}else y.add(l);break e}else{if(!(e&1)){xh(o,u,e),ud();break e}l=Error(ue(426))}}else if(st&&a.mode&1){var p=Sh(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Mh(p,s,a,o,e),Vf(Fo(l,a));break e}}o=l=Fo(l,a),Rt!==4&&(Rt=2),As===null?As=[o]:As.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var c=pv(o,l,e);hh(o,c);break e;case 1:a=l;var _=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ji===null||!ji.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var g=mv(o,a,e);hh(o,g);break e}}o=o.return}while(o!==null)}Iv(n)}catch(S){e=S,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(1)}function Dv(){var t=Al.current;return Al.current=wl,t===null?wl:t}function ud(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),It===null||!(Cr&268435455)&&!(jl&268435455)||Fi(It,Ft)}function Pl(t,e){var n=qe;qe|=2;var i=Dv();(It!==t||Ft!==e)&&(di=null,_r(t,e));do try{qy();break}catch(r){bv(t,r)}while(1);if(Xf(),qe=n,Al.current=i,Mt!==null)throw Error(ue(261));return It=null,Ft=0,Rt}function qy(){for(;Mt!==null;)Uv(Mt)}function $y(){for(;Mt!==null&&!x0();)Uv(Mt)}function Uv(t){var e=Fv(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?Iv(t):Mt=e,rd.current=null}function Iv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Gy(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Mt=null;return}}else if(n=Hy(n,e,dn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Rt===0&&(Rt=5)}function cr(t,e,n){var i=et,r=Cn.transition;try{Cn.transition=null,et=1,Ky(t,e,n,i)}finally{Cn.transition=r,et=i}return null}function Ky(t,e,n,i){do Ro();while(zi!==null);if(qe&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(L0(t,o),t===It&&(Mt=It=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ta||(Ta=!0,Ov(cl,function(){return Ro(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Cn.transition,Cn.transition=null;var s=et;et=1;var a=qe;qe|=4,rd.current=null,Wy(t,n),Cv(n,t),gy(Oc),dl=!!Fc,Oc=Fc=null,t.current=n,Xy(n),S0(),qe=a,et=s,Cn.transition=o}else t.current=n;if(Ta&&(Ta=!1,zi=t,Cl=r),o=t.pendingLanes,o===0&&(ji=null),T0(n.stateNode),rn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rl)throw Rl=!1,t=rf,rf=null,t;return Cl&1&&t.tag!==0&&Ro(),o=t.pendingLanes,o&1?t===of?Rs++:(Rs=0,of=t):Rs=0,nr(),null}function Ro(){if(zi!==null){var t=hg(Cl),e=Cn.transition,n=et;try{if(Cn.transition=null,et=16>t?16:t,zi===null)var i=!1;else{if(t=zi,zi=null,Cl=0,qe&6)throw Error(ue(331));var r=qe;for(qe|=4,ge=t.current;ge!==null;){var o=ge,s=o.child;if(ge.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ge=u;ge!==null;){var f=ge;switch(f.tag){case 0:case 11:case 15:ws(8,f,o)}var d=f.child;if(d!==null)d.return=f,ge=d;else for(;ge!==null;){f=ge;var h=f.sibling,m=f.return;if(wv(f),f===u){ge=null;break}if(h!==null){h.return=m,ge=h;break}ge=m}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}ge=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ge=s;else e:for(;ge!==null;){if(o=ge,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ws(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,ge=c;break e}ge=o.return}}var _=t.current;for(ge=_;ge!==null;){s=ge;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,ge=v;else e:for(s=_;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xl(9,a)}}catch(S){ht(a,a.return,S)}if(a===s){ge=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,ge=g;break e}ge=a.return}}if(qe=r,nr(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Ol,t)}catch{}i=!0}return i}finally{et=n,Cn.transition=e}}return!1}function Nh(t,e,n){e=Fo(n,e),e=pv(t,e,1),t=Xi(t,e,1),e=$t(),t!==null&&(ta(t,1,e),rn(t,e))}function ht(t,e,n){if(t.tag===3)Nh(t,t,n);else for(;e!==null;){if(e.tag===3){Nh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ji===null||!ji.has(i))){t=Fo(n,t),t=mv(e,t,1),e=Xi(e,t,1),t=$t(),e!==null&&(ta(e,1,t),rn(e,t));break}}e=e.return}}function Zy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(Ft&n)===n&&(Rt===4||Rt===3&&(Ft&130023424)===Ft&&500>vt()-sd?_r(t,0):od|=n),rn(t,e)}function Nv(t,e){e===0&&(t.mode&1?(e=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):e=1);var n=$t();t=Mi(t,e),t!==null&&(ta(t,e,n),rn(t,n))}function Qy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nv(t,n)}function Jy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),Nv(t,n)}var Fv;Fv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,By(t,e,n);en=!!(t.flags&131072)}else en=!1,st&&e.flags&1048576&&kg(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nl(t,e),t=e.pendingProps;var r=Do(e,Wt.current);Ao(e,n),r=Jf(null,e,i,t,r,n);var o=ed();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(o=!0,vl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qf(e),r.updater=Vl,e.stateNode=r,r._reactInternals=e,jc(e,i,t,n),e=$c(null,e,i,!0,o,n)):(e.tag=0,st&&o&&Hf(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tx(i),t=zn(i,t),r){case 0:e=qc(null,e,i,t,n);break e;case 1:e=wh(null,e,i,t,n);break e;case 11:e=Eh(null,e,i,t,n);break e;case 14:e=Th(null,e,i,zn(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),qc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),wh(t,e,i,r,n);case 3:e:{if(yv(e),t===null)throw Error(ue(387));i=e.pendingProps,o=e.memoizedState,r=o.element,Vg(t,e),Ml(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Fo(Error(ue(423)),e),e=Ah(t,e,i,n,r);break e}else if(i!==r){r=Fo(Error(ue(424)),e),e=Ah(t,e,i,n,r);break e}else for(pn=Wi(e.stateNode.containerInfo.firstChild),mn=e,st=!0,Hn=null,n=Yg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Uo(),i===r){e=Ei(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return qg(e),t===null&&Vc(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,zc(i,r)?s=null:o!==null&&zc(i,o)&&(e.flags|=32),_v(t,e),Yt(t,e,s,n),e.child;case 6:return t===null&&Vc(e),null;case 13:return xv(t,e,n);case 4:return $f(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Io(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Eh(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,nt(xl,i._currentValue),i._currentValue=s,o!==null)if(Yn(o.value,s)){if(o.children===r.children&&!tn.current){e=Ei(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=_i(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Wc(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ue(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Wc(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ao(e,n),r=Pn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),Th(t,e,i,r,n);case 15:return gv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),nl(t,e),e.tag=1,nn(i)?(t=!0,vl(e)):t=!1,Ao(e,n),Xg(e,i,r),jc(e,i,r,n),$c(null,e,i,!0,t,n);case 19:return Sv(t,e,n);case 22:return vv(t,e,n)}throw Error(ue(156,e.tag))};function Ov(t,e){return ug(t,e)}function ex(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new ex(t,e,n,i)}function cd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tx(t){if(typeof t=="function")return cd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pf)return 11;if(t===Lf)return 14}return 2}function qi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")cd(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ao:return yr(n.children,r,o,e);case Cf:s=8,r|=8;break;case gc:return t=An(12,n,e,r|2),t.elementType=gc,t.lanes=o,t;case vc:return t=An(13,n,e,r),t.elementType=vc,t.lanes=o,t;case _c:return t=An(19,n,e,r),t.elementType=_c,t.lanes=o,t;case jm:return Yl(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wm:s=10;break e;case Xm:s=9;break e;case Pf:s=11;break e;case Lf:s=14;break e;case Ui:s=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=An(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function yr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function Yl(t,e,n,i){return t=An(22,t,i,e),t.elementType=jm,t.lanes=n,t.stateNode={isHidden:!1},t}function bu(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function Du(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=du(0),this.expirationTimes=du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=du(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function fd(t,e,n,i,r,o,s,a,l){return t=new nx(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=An(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qf(o),t}function ix(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:so,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function zv(t){if(!t)return Qi;t=t._reactInternals;e:{if(Ir(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(nn(n))return Og(t,n,e)}return e}function kv(t,e,n,i,r,o,s,a,l){return t=fd(n,i,!0,t,r,o,s,a,l),t.context=zv(null),n=t.current,i=$t(),r=Yi(n),o=_i(i,r),o.callback=e??null,Xi(n,o,r),t.current.lanes=r,ta(t,r,i),rn(t,i),t}function ql(t,e,n,i){var r=e.current,o=$t(),s=Yi(r);return n=zv(n),e.context===null?e.context=n:e.pendingContext=n,e=_i(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Xi(r,e,s),t!==null&&(jn(t,r,s,o),Ja(t,r,s)),s}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dd(t,e){Fh(t,e),(t=t.alternate)&&Fh(t,e)}function rx(){return null}var Bv=typeof reportError=="function"?reportError:function(t){console.error(t)};function hd(t){this._internalRoot=t}$l.prototype.render=hd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));ql(t,e,null,null)};$l.prototype.unmount=hd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){ql(null,t,null,null)}),e[Si]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var e=gg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&_g(t)}};function pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Oh(){}function ox(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=Ll(s);o.call(u)}}var s=kv(e,i,t,0,null,!1,!1,"",Oh);return t._reactRootContainer=s,t[Si]=s.current,Bs(t.nodeType===8?t.parentNode:t),Pr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ll(l);a.call(u)}}var l=fd(t,0,!1,null,null,!1,!1,"",Oh);return t._reactRootContainer=l,t[Si]=l.current,Bs(t.nodeType===8?t.parentNode:t),Pr(function(){ql(e,l,n,i)}),l}function Zl(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Ll(s);a.call(l)}}ql(e,s,t,r)}else s=ox(n,e,t,r,i);return Ll(s)}pg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ms(e.pendingLanes);n!==0&&(Uf(e,n|1),rn(e,vt()),!(qe&6)&&(Oo=vt()+500,nr()))}break;case 13:Pr(function(){var i=Mi(t,1);if(i!==null){var r=$t();jn(i,t,1,r)}}),dd(t,1)}};If=function(t){if(t.tag===13){var e=Mi(t,134217728);if(e!==null){var n=$t();jn(e,t,134217728,n)}dd(t,134217728)}};mg=function(t){if(t.tag===13){var e=Yi(t),n=Mi(t,e);if(n!==null){var i=$t();jn(n,t,e,i)}dd(t,e)}};gg=function(){return et};vg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Cc=function(t,e,n){switch(e){case"input":if(Sc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Hl(i);if(!r)throw Error(ue(90));qm(i),Sc(i,r)}}}break;case"textarea":Km(t,n);break;case"select":e=n.value,e!=null&&Mo(t,!!n.multiple,e,!1)}};ig=ad;rg=Pr;var sx={usingClientEntryPoint:!1,Events:[ia,fo,Hl,tg,ng,ad]},is={findFiberByHostInstance:pr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ax={bundleType:is.bundleType,version:is.version,rendererPackageName:is.rendererPackageName,rendererConfig:is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ti.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ag(t),t===null?null:t.stateNode},findFiberByHostInstance:is.findFiberByHostInstance||rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wa.isDisabled&&wa.supportsFiber)try{Ol=wa.inject(ax),Jn=wa}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sx;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pd(e))throw Error(ue(200));return ix(t,e,null,n)};_n.createRoot=function(t,e){if(!pd(t))throw Error(ue(299));var n=!1,i="",r=Bv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=fd(t,1,!1,null,null,n,!1,i,r),t[Si]=e.current,Bs(t.nodeType===8?t.parentNode:t),new hd(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=ag(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Pr(t)};_n.hydrate=function(t,e,n){if(!Kl(e))throw Error(ue(200));return Zl(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!pd(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Bv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=kv(e,null,t,1,n??null,r,!1,o,s),t[Si]=e.current,Bs(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new $l(e)};_n.render=function(t,e,n){if(!Kl(e))throw Error(ue(200));return Zl(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!Kl(t))throw Error(ue(40));return t._reactRootContainer?(Pr(function(){Zl(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1};_n.unstable_batchedUpdates=ad;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Kl(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return Zl(t,e,n,!1,i)};_n.version="18.2.0-next-9e3b772b8-20220608";function Hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hv)}catch(t){console.error(t)}}Hv(),km.exports=_n;var lx=km.exports,zh=lx;pc.createRoot=zh.createRoot,pc.hydrateRoot=zh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const md="154",Br={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ux=0,kh=1,cx=2,Gv=1,fx=2,fi=3,Ji=0,on=1,pi=2,$i=0,Co=1,Bh=2,Hh=3,Gh=4,dx=5,ro=100,hx=101,px=102,Vh=103,Wh=104,mx=200,gx=201,vx=202,_x=203,Vv=204,Wv=205,yx=206,xx=207,Sx=208,Mx=209,Ex=210,Tx=0,wx=1,Ax=2,lf=3,Rx=4,Cx=5,Px=6,Lx=7,Xv=0,bx=1,Dx=2,yi=0,Ux=1,Ix=2,Nx=3,Fx=4,Ox=5,jv=300,zo=301,ko=302,uf=303,cf=304,Ql=306,ff=1e3,Vn=1001,df=1002,qt=1003,Xh=1004,Uu=1005,wn=1006,zx=1007,$s=1008,Ki=1009,kx=1010,Bx=1011,gd=1012,Yv=1013,ki=1014,Bi=1015,Ks=1016,qv=1017,$v=1018,xr=1020,Hx=1021,Wn=1023,Gx=1024,Vx=1025,Sr=1026,Bo=1027,Wx=1028,Kv=1029,Xx=1030,Zv=1031,Qv=1033,Iu=33776,Nu=33777,Fu=33778,Ou=33779,jh=35840,Yh=35841,qh=35842,$h=35843,jx=36196,Kh=37492,Zh=37496,Qh=37808,Jh=37809,ep=37810,tp=37811,np=37812,ip=37813,rp=37814,op=37815,sp=37816,ap=37817,lp=37818,up=37819,cp=37820,fp=37821,zu=36492,Yx=36283,dp=36284,hp=36285,pp=36286,Jv=3e3,Mr=3001,qx=3200,$x=3201,e_=0,Kx=1,Er="",He="srgb",ni="srgb-linear",t_="display-p3",ku=7680,Zx=519,Qx=512,Jx=513,eS=514,tS=515,nS=516,iS=517,rS=518,oS=519,mp=35044,gp="300 es",hf=1035,vi=2e3,bl=2001;class Nr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vp=1234567;const Cs=Math.PI/180,Zs=180/Math.PI;function jo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Vt(t,e,n){return Math.max(e,Math.min(n,t))}function vd(t,e){return(t%e+e)%e}function sS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function aS(t,e,n){return t!==e?(n-t)/(e-t):0}function Ps(t,e,n){return(1-n)*t+n*e}function lS(t,e,n,i){return Ps(t,e,1-Math.exp(-n*i))}function uS(t,e=1){return e-Math.abs(vd(t,e*2)-e)}function cS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function fS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function dS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function hS(t,e){return t+Math.random()*(e-t)}function pS(t){return t*(.5-Math.random())}function mS(t){t!==void 0&&(vp=t);let e=vp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gS(t){return t*Cs}function vS(t){return t*Zs}function pf(t){return(t&t-1)===0&&t!==0}function _S(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Dl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function yS(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),u=o((e+i)/2),f=s((e+i)/2),d=o((e-i)/2),h=s((e-i)/2),m=o((i-e)/2),y=s((i-e)/2);switch(r){case"XYX":t.set(a*f,l*d,l*h,a*u);break;case"YZY":t.set(l*h,a*f,l*d,a*u);break;case"ZXZ":t.set(l*d,l*h,a*f,a*u);break;case"XZX":t.set(a*f,l*y,l*m,a*u);break;case"YXY":t.set(l*m,a*f,l*y,a*u);break;case"ZYZ":t.set(l*y,l*m,a*f,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const xS={DEG2RAD:Cs,RAD2DEG:Zs,generateUUID:jo,clamp:Vt,euclideanModulo:vd,mapLinear:sS,inverseLerp:aS,lerp:Ps,damp:lS,pingpong:uS,smoothstep:cS,smootherstep:fS,randInt:dS,randFloat:hS,randFloatSpread:pS,seededRandom:mS,degToRad:gS,radToDeg:vS,isPowerOfTwo:pf,ceilPowerOfTwo:_S,floorPowerOfTwo:Dl,setQuaternionFromProperEuler:yS,normalize:Qt,denormalize:vs};class Fe{constructor(e=0,n=0){Fe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,o,s,a,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=o,f[5]=l,f[6]=i,f[7]=s,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],m=i[5],y=i[8],x=r[0],p=r[3],c=r[6],_=r[1],v=r[4],g=r[7],S=r[2],R=r[5],A=r[8];return o[0]=s*x+a*_+l*S,o[3]=s*p+a*v+l*R,o[6]=s*c+a*g+l*A,o[1]=u*x+f*_+d*S,o[4]=u*p+f*v+d*R,o[7]=u*c+f*g+d*A,o[2]=h*x+m*_+y*S,o[5]=h*p+m*v+y*R,o[8]=h*c+m*g+y*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*s*f-n*a*u-i*o*f+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*s-a*u,h=a*l-f*o,m=u*o-s*l,y=n*d+i*h+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=d*x,e[1]=(r*u-f*i)*x,e[2]=(a*i-r*s)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Bu.makeScale(e,n)),this}rotate(e){return this.premultiply(Bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bu=new Ge;function n_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Qs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const _p={};function Ls(t){t in _p||(_p[t]=!0,console.warn(t))}function Po(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Hu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const SS=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),MS=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ES(t){return t.convertSRGBToLinear().applyMatrix3(MS)}function TS(t){return t.applyMatrix3(SS).convertLinearToSRGB()}const wS={[ni]:t=>t,[He]:t=>t.convertSRGBToLinear(),[t_]:ES},AS={[ni]:t=>t,[He]:t=>t.convertLinearToSRGB(),[t_]:TS},In={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return ni},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=wS[e],r=AS[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Gr;class i_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gr===void 0&&(Gr=Qs("canvas")),Gr.width=e.width,Gr.height=e.height;const i=Gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Gr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Qs("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Po(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Po(n[i]/255)*255):n[i]=Po(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RS=0;class r_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=jo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Gu(r[s].image)):o.push(Gu(r[s]))}else o=Gu(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Gu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?i_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CS=0;class sn extends Nr{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Vn,r=Vn,o=wn,s=$s,a=Wn,l=Ki,u=sn.DEFAULT_ANISOTROPY,f=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=jo(),this.name="",this.source=new r_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Mr?He:Er),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ff:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ff:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===He?Mr:Jv}set encoding(e){Ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mr?He:Er}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=jv;sn.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,n=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],m=l[5],y=l[9],x=l[2],p=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(y-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(y+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,g=(m+1)/2,S=(c+1)/2,R=(f+h)/4,A=(d+x)/4,N=(y+p)/4;return v>g&&v>S?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=R/i,o=A/i):g>S?g<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(g),i=R/r,o=N/r):S<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(S),i=A/o,r=N/o),this.set(i,r,o,n),this}let _=Math.sqrt((p-y)*(p-y)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(p-y)/_,this.y=(d-x)/_,this.z=(h-f)/_,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lr extends Nr{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new at(0,0,e,n),this.scissorTest=!1,this.viewport=new at(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ls("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Mr?He:Er),this.texture=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:wn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new r_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class o_ extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class PS extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=o[s+0],m=o[s+1],y=o[s+2],x=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=y,e[n+3]=x;return}if(d!==x||l!==h||u!==m||f!==y){let p=1-a;const c=l*h+u*m+f*y+d*x,_=c>=0?1:-1,v=1-c*c;if(v>Number.EPSILON){const S=Math.sqrt(v),R=Math.atan2(S,c*_);p=Math.sin(p*R)/S,a=Math.sin(a*R)/S}const g=a*_;if(l=l*p+h*g,u=u*p+m*g,f=f*p+y*g,d=d*p+x*g,p===1-a){const S=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=S,u*=S,f*=S,d*=S}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=o[s],h=o[s+1],m=o[s+2],y=o[s+3];return e[n]=a*y+f*d+l*m-u*h,e[n+1]=l*y+f*h+u*d-a*m,e[n+2]=u*y+f*m+a*h-l*d,e[n+3]=f*y-a*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(o/2),h=l(i/2),m=l(r/2),y=l(o/2);switch(s){case"XYZ":this._x=h*f*d+u*m*y,this._y=u*m*d-h*f*y,this._z=u*f*y+h*m*d,this._w=u*f*d-h*m*y;break;case"YXZ":this._x=h*f*d+u*m*y,this._y=u*m*d-h*f*y,this._z=u*f*y-h*m*d,this._w=u*f*d+h*m*y;break;case"ZXY":this._x=h*f*d-u*m*y,this._y=u*m*d+h*f*y,this._z=u*f*y+h*m*d,this._w=u*f*d-h*m*y;break;case"ZYX":this._x=h*f*d-u*m*y,this._y=u*m*d+h*f*y,this._z=u*f*y-h*m*d,this._w=u*f*d+h*m*y;break;case"YZX":this._x=h*f*d+u*m*y,this._y=u*m*d+h*f*y,this._z=u*f*y-h*m*d,this._w=u*f*d-h*m*y;break;case"XZY":this._x=h*f*d-u*m*y,this._y=u*m*d-h*f*y,this._z=u*f*y+h*m*d,this._w=u*f*d+h*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(o-u)*m,this._z=(s-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(s-r)/m,this._x=(o+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+s*a+r*u-o*l,this._y=r*f+s*l+o*a-i*u,this._z=o*f+s*u+i*l-r*a,this._w=s*f-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(yp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(yp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=l*n+s*r-a*i,f=l*i+a*n-o*r,d=l*r+o*i-s*n,h=-o*n-s*i-a*r;return this.x=u*l+h*-o+f*-a-d*-s,this.y=f*l+h*-s+d*-o-u*-a,this.z=d*l+h*-a+u*-s-f*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vu.copy(this).projectOnVector(e),this.sub(Vu)}reflect(e){return this.sub(Vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vu=new O,yp=new br;class oa{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox),Vr.applyMatrix4(e.matrixWorld),this.union(Vr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let s=0,a=o.count;s<a;s++)si.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(si)}else r.boundingBox===null&&r.computeBoundingBox(),Vr.copy(r.boundingBox),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),Aa.subVectors(this.max,rs),Wr.subVectors(e.a,rs),Xr.subVectors(e.b,rs),jr.subVectors(e.c,rs),Pi.subVectors(Xr,Wr),Li.subVectors(jr,Xr),or.subVectors(Wr,jr);let n=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-or.z,or.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,or.z,0,-or.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-or.y,or.x,0];return!Wu(n,Wr,Xr,jr,Aa)||(n=[1,0,0,0,1,0,0,0,1],!Wu(n,Wr,Xr,jr,Aa))?!1:(Ra.crossVectors(Pi,Li),n=[Ra.x,Ra.y,Ra.z],Wu(n,Wr,Xr,jr,Aa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new O,new O,new O,new O,new O,new O,new O,new O],si=new O,Vr=new oa,Wr=new O,Xr=new O,jr=new O,Pi=new O,Li=new O,or=new O,rs=new O,Aa=new O,Ra=new O,sr=new O;function Wu(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){sr.fromArray(t,o);const a=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),u=n.dot(sr),f=i.dot(sr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const LS=new oa,os=new O,Xu=new O;class _d{constructor(e=new O,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):LS.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);const n=os.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(Xu)),this.expandByPoint(os.copy(e.center).sub(Xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new O,ju=new O,Ca=new O,bi=new O,Yu=new O,Pa=new O,qu=new O;class bS{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,n),ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ju.copy(e).add(n).multiplyScalar(.5),Ca.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(ju);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ca),a=bi.dot(this.direction),l=-bi.dot(Ca),u=bi.lengthSq(),f=Math.abs(1-s*s);let d,h,m,y;if(f>0)if(d=s*l-a,h=s*a-l,y=o*f,d>=0)if(h>=-y)if(h<=y){const x=1/f;d*=x,h*=x,m=d*(d+s*h+2*a)+h*(s*d+h+2*l)+u}else h=o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;else h=-o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;else h<=-y?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+u):h<=y?(d=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+u):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+u);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ju).addScaledVector(Ca,h),m}intersectSphere(e,n){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(o=(e.min.y-h.y)*f,s=(e.max.y-h.y)*f):(o=(e.max.y-h.y)*f,s=(e.min.y-h.y)*f),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,n,i,r,o){Yu.subVectors(n,e),Pa.subVectors(i,e),qu.crossVectors(Yu,Pa);let s=this.direction.dot(qu),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(Pa.crossVectors(bi,Pa));if(l<0)return null;const u=a*this.direction.dot(Yu.cross(bi));if(u<0||l+u>s)return null;const f=-a*bi.dot(qu);return f<0?null:this.at(f/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,o,s,a,l,u,f,d,h,m,y,x,p){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,f,d,h,m,y,x,p)}set(e,n,i,r,o,s,a,l,u,f,d,h,m,y,x,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=o,c[5]=s,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=m,c[7]=y,c[11]=x,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),o=1/Yr.setFromMatrixColumn(e,1).length(),s=1/Yr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*f,m=s*d,y=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=m+y*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=y+m*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,y=u*f,x=u*d;n[0]=h+x*a,n[4]=y*a-m,n[8]=s*u,n[1]=s*d,n[5]=s*f,n[9]=-a,n[2]=m*a-y,n[6]=x+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,y=u*f,x=u*d;n[0]=h-x*a,n[4]=-s*d,n[8]=y+m*a,n[1]=m+y*a,n[5]=s*f,n[9]=x-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*f,m=s*d,y=a*f,x=a*d;n[0]=l*f,n[4]=y*u-m,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=m*u-y,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*u,y=a*l,x=a*u;n[0]=l*f,n[4]=x-h*d,n[8]=y*d+m,n[1]=d,n[5]=s*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*d+y,n[10]=h-x*d}else if(e.order==="XZY"){const h=s*l,m=s*u,y=a*l,x=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+x,n[5]=s*f,n[9]=m*d-y,n[2]=y*d-m,n[6]=a*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DS,e,US)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Di.crossVectors(i,cn),Di.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Di.crossVectors(i,cn)),Di.normalize(),La.crossVectors(cn,Di),r[0]=Di.x,r[4]=La.x,r[8]=cn.x,r[1]=Di.y,r[5]=La.y,r[9]=cn.y,r[2]=Di.z,r[6]=La.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],m=i[13],y=i[2],x=i[6],p=i[10],c=i[14],_=i[3],v=i[7],g=i[11],S=i[15],R=r[0],A=r[4],N=r[8],M=r[12],T=r[1],ne=r[5],te=r[9],H=r[13],q=r[2],$=r[6],re=r[10],Z=r[14],I=r[3],j=r[7],W=r[11],B=r[15];return o[0]=s*R+a*T+l*q+u*I,o[4]=s*A+a*ne+l*$+u*j,o[8]=s*N+a*te+l*re+u*W,o[12]=s*M+a*H+l*Z+u*B,o[1]=f*R+d*T+h*q+m*I,o[5]=f*A+d*ne+h*$+m*j,o[9]=f*N+d*te+h*re+m*W,o[13]=f*M+d*H+h*Z+m*B,o[2]=y*R+x*T+p*q+c*I,o[6]=y*A+x*ne+p*$+c*j,o[10]=y*N+x*te+p*re+c*W,o[14]=y*M+x*H+p*Z+c*B,o[3]=_*R+v*T+g*q+S*I,o[7]=_*A+v*ne+g*$+S*j,o[11]=_*N+v*te+g*re+S*W,o[15]=_*M+v*H+g*Z+S*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],m=e[14],y=e[3],x=e[7],p=e[11],c=e[15];return y*(+o*l*d-r*u*d-o*a*h+i*u*h+r*a*m-i*l*m)+x*(+n*l*m-n*u*h+o*s*h-r*s*m+r*u*f-o*l*f)+p*(+n*u*d-n*a*m-o*s*d+i*s*m+o*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*s*d-i*s*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],m=e[11],y=e[12],x=e[13],p=e[14],c=e[15],_=d*p*u-x*h*u+x*l*m-a*p*m-d*l*c+a*h*c,v=y*h*u-f*p*u-y*l*m+s*p*m+f*l*c-s*h*c,g=f*x*u-y*d*u+y*a*m-s*x*m-f*a*c+s*d*c,S=y*d*l-f*x*l-y*a*h+s*x*h+f*a*p-s*d*p,R=n*_+i*v+r*g+o*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=_*A,e[1]=(x*h*o-d*p*o-x*r*m+i*p*m+d*r*c-i*h*c)*A,e[2]=(a*p*o-x*l*o+x*r*u-i*p*u-a*r*c+i*l*c)*A,e[3]=(d*l*o-a*h*o-d*r*u+i*h*u+a*r*m-i*l*m)*A,e[4]=v*A,e[5]=(f*p*o-y*h*o+y*r*m-n*p*m-f*r*c+n*h*c)*A,e[6]=(y*l*o-s*p*o-y*r*u+n*p*u+s*r*c-n*l*c)*A,e[7]=(s*h*o-f*l*o+f*r*u-n*h*u-s*r*m+n*l*m)*A,e[8]=g*A,e[9]=(y*d*o-f*x*o-y*i*m+n*x*m+f*i*c-n*d*c)*A,e[10]=(s*x*o-y*a*o+y*i*u-n*x*u-s*i*c+n*a*c)*A,e[11]=(f*a*o-s*d*o-f*i*u+n*d*u+s*i*m-n*a*m)*A,e[12]=S*A,e[13]=(f*x*r-y*d*r+y*i*h-n*x*h-f*i*p+n*d*p)*A,e[14]=(y*a*r-s*x*r-y*i*l+n*x*l+s*i*p-n*a*p)*A,e[15]=(s*d*r-f*a*r+f*i*l-n*d*l-s*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,f=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*s,0,u*l-r*a,f*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,f=s+s,d=a+a,h=o*u,m=o*f,y=o*d,x=s*f,p=s*d,c=a*d,_=l*u,v=l*f,g=l*d,S=i.x,R=i.y,A=i.z;return r[0]=(1-(x+c))*S,r[1]=(m+g)*S,r[2]=(y-v)*S,r[3]=0,r[4]=(m-g)*R,r[5]=(1-(h+c))*R,r[6]=(p+_)*R,r[7]=0,r[8]=(y+v)*A,r[9]=(p-_)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Yr.set(r[0],r[1],r[2]).length();const s=Yr.set(r[4],r[5],r[6]).length(),a=Yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/o,f=1/s,d=1/a;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=f,Nn.elements[5]*=f,Nn.elements[6]*=f,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,n.setFromRotationMatrix(Nn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=vi){const l=this.elements,u=2*o/(n-e),f=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,y;if(a===vi)m=-(s+o)/(s-o),y=-2*s*o/(s-o);else if(a===bl)m=-s/(s-o),y=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=vi){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(s-o),h=(n+e)*u,m=(i+r)*f;let y,x;if(a===vi)y=(s+o)*d,x=-2*d;else if(a===bl)y=o*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Yr=new O,Nn=new Et,DS=new O(0,0,0),US=new O(1,1,1),Di=new O,La=new O,cn=new O,xp=new Et,Sp=new br;class Jl{constructor(e=0,n=0,i=0,r=Jl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sp.setFromEuler(this),this.setFromQuaternion(Sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jl.DEFAULT_ORDER="XYZ";class s_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IS=0;const Mp=new O,qr=new br,li=new Et,ba=new O,ss=new O,NS=new O,FS=new br,Ep=new O(1,0,0),Tp=new O(0,1,0),wp=new O(0,0,1),OS={type:"added"},Ap={type:"removed"};class an extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new O,n=new Jl,i=new br,r=new O(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ge}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new s_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Ep,e)}rotateY(e){return this.rotateOnAxis(Tp,e)}rotateZ(e){return this.rotateOnAxis(wp,e)}translateOnAxis(e,n){return Mp.copy(e).applyQuaternion(this.quaternion),this.position.add(Mp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ep,e)}translateY(e){return this.translateOnAxis(Tp,e)}translateZ(e){return this.translateOnAxis(wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ba.copy(e):ba.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(ss,ba,this.up):li.lookAt(ba,ss,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(li),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(OS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ap)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Ap)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,NS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,FS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),f=s(e.images),d=s(e.shapes),h=s(e.skeletons),m=s(e.animations),y=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function s(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new O(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new O,ui=new O,$u=new O,ci=new O,$r=new O,Kr=new O,Rp=new O,Ku=new O,Zu=new O,Qu=new O;let Da=!1;class Gn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Fn.subVectors(r,n),ui.subVectors(i,n),$u.subVectors(e,n);const s=Fn.dot(Fn),a=Fn.dot(ui),l=Fn.dot($u),u=ui.dot(ui),f=ui.dot($u),d=s*u-a*a;if(d===0)return o.set(-2,-1,-1);const h=1/d,m=(u*l-a*f)*h,y=(s*f-a*l)*h;return o.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci),ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,n,i,r,o,s,a,l){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,ci),l.setScalar(0),l.addScaledVector(o,ci.x),l.addScaledVector(s,ci.y),l.addScaledVector(a,ci.z),l}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),ui.subVectors(e,n),Fn.cross(ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Fn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;$r.subVectors(r,i),Kr.subVectors(o,i),Ku.subVectors(e,i);const l=$r.dot(Ku),u=Kr.dot(Ku);if(l<=0&&u<=0)return n.copy(i);Zu.subVectors(e,r);const f=$r.dot(Zu),d=Kr.dot(Zu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector($r,s);Qu.subVectors(e,o);const m=$r.dot(Qu),y=Kr.dot(Qu);if(y>=0&&m<=y)return n.copy(o);const x=m*u-l*y;if(x<=0&&u>=0&&y<=0)return a=u/(u-y),n.copy(i).addScaledVector(Kr,a);const p=f*y-m*d;if(p<=0&&d-f>=0&&m-y>=0)return Rp.subVectors(o,r),a=(d-f)/(d-f+(m-y)),n.copy(r).addScaledVector(Rp,a);const c=1/(p+x+h);return s=x*c,a=h*c,n.copy(i).addScaledVector($r,s).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let zS=0;class sa extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Co,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vv,this.blendDst=Wv,this.blendEquation=ro,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=lf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ku,this.stencilZFail=ku,this.stencilZPass=ku,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Co&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const a_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function Ju(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,In.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=In.workingColorSpace){return this.r=e,this.g=n,this.b=i,In.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=In.workingColorSpace){if(e=vd(e,1),n=Vt(n,0,1),i=Vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Ju(s,o,e+1/3),this.g=Ju(s,o,e),this.b=Ju(s,o,e-1/3)}return In.toWorkingColorSpace(this,r),this}setStyle(e,n=He){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=He){const i=a_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Po(e.r),this.g=Po(e.g),this.b=Po(e.b),this}copyLinearToSRGB(e){return this.r=Hu(e.r),this.g=Hu(e.g),this.b=Hu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return In.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Vt(Ht.r*255,0,255))*65536+Math.round(Vt(Ht.g*255,0,255))*256+Math.round(Vt(Ht.b*255,0,255))}getHexString(e=He){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=In.workingColorSpace){In.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,o=Ht.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const f=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=f<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=In.workingColorSpace){return In.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=He){In.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==He?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(On),On.h+=e,On.s+=n,On.l+=i,this.setHSL(On.h,On.s,On.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(On),e.getHSL(Ua);const i=Ps(On.h,Ua.h,n),r=Ps(On.s,Ua.s,n),o=Ps(On.l,Ua.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new tt;tt.NAMES=a_;class yd extends sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new O,Ia=new Fe;class ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mp,this.updateRange={offset:0,count:-1},this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ia.fromBufferAttribute(this,n),Ia.applyMatrix3(e),this.setXY(n,Ia.x,Ia.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),o=Qt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class l_ extends ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class u_ extends ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gn extends ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let kS=0;const Sn=new Et,ec=new an,Zr=new O,fn=new oa,as=new oa,Dt=new O;class wi extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n_(e)?u_:l_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ge().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new gn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];fn.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _d);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];as.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(fn.min,as.min),fn.expandByPoint(Dt),Dt.addVectors(fn.max,as.max),fn.expandByPoint(Dt)):(fn.expandByPoint(as.min),fn.expandByPoint(as.max))}fn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Dt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Dt.fromBufferAttribute(a,u),l&&(Zr.fromBufferAttribute(e,u),Dt.add(Zr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let T=0;T<a;T++)u[T]=new O,f[T]=new O;const d=new O,h=new O,m=new O,y=new Fe,x=new Fe,p=new Fe,c=new O,_=new O;function v(T,ne,te){d.fromArray(r,T*3),h.fromArray(r,ne*3),m.fromArray(r,te*3),y.fromArray(s,T*2),x.fromArray(s,ne*2),p.fromArray(s,te*2),h.sub(d),m.sub(d),x.sub(y),p.sub(y);const H=1/(x.x*p.y-p.x*x.y);isFinite(H)&&(c.copy(h).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(H),_.copy(m).multiplyScalar(x.x).addScaledVector(h,-p.x).multiplyScalar(H),u[T].add(c),u[ne].add(c),u[te].add(c),f[T].add(_),f[ne].add(_),f[te].add(_))}let g=this.groups;g.length===0&&(g=[{start:0,count:i.length}]);for(let T=0,ne=g.length;T<ne;++T){const te=g[T],H=te.start,q=te.count;for(let $=H,re=H+q;$<re;$+=3)v(i[$+0],i[$+1],i[$+2])}const S=new O,R=new O,A=new O,N=new O;function M(T){A.fromArray(o,T*3),N.copy(A);const ne=u[T];S.copy(ne),S.sub(A.multiplyScalar(A.dot(ne))).normalize(),R.crossVectors(N,ne);const H=R.dot(f[T])<0?-1:1;l[T*4]=S.x,l[T*4+1]=S.y,l[T*4+2]=S.z,l[T*4+3]=H}for(let T=0,ne=g.length;T<ne;++T){const te=g[T],H=te.start,q=te.count;for(let $=H,re=H+q;$<re;$+=3)M(i[$+0]),M(i[$+1]),M(i[$+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,o=new O,s=new O,a=new O,l=new O,u=new O,f=new O,d=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const y=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,y),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,p),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let m=0,y=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*f;for(let c=0;c<f;c++)h[y++]=u[m++]}return new ti(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const o=e.morphAttributes;for(const u in o){const f=[],d=o[u];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,f=s.length;u<f;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cp=new Et,ar=new bS,Na=new _d,Pp=new O,Qr=new O,Jr=new O,eo=new O,tc=new O,Fa=new O,Oa=new Fe,za=new Fe,ka=new Fe,Lp=new O,bp=new O,Dp=new O,Ba=new O,Ha=new O;class Rn extends an{constructor(e=new wi,n=new yd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Fa.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const f=a[l],d=o[l];f!==0&&(tc.fromBufferAttribute(d,e),s?Fa.addScaledVector(tc,f):Fa.addScaledVector(tc.sub(n),f))}n.add(Fa)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(o),ar.copy(e.ray).recast(e.near),!(Na.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Na,Pp)===null||ar.origin.distanceToSquared(Pp)>(e.far-e.near)**2))&&(Cp.copy(o).invert(),ar.copy(e.ray).applyMatrix4(Cp),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,f=o.attributes.uv1,d=o.attributes.normal,h=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let y=0,x=h.length;y<x;y++){const p=h[y],c=s[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let g=_,S=v;g<S;g+=3){const R=a.getX(g),A=a.getX(g+1),N=a.getX(g+2);r=Ga(this,c,e,i,u,f,d,R,A,N),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=y,c=x;p<c;p+=3){const _=a.getX(p),v=a.getX(p+1),g=a.getX(p+2);r=Ga(this,s,e,i,u,f,d,_,v,g),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let y=0,x=h.length;y<x;y++){const p=h[y],c=s[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let g=_,S=v;g<S;g+=3){const R=g,A=g+1,N=g+2;r=Ga(this,c,e,i,u,f,d,R,A,N),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=y,c=x;p<c;p+=3){const _=p,v=p+1,g=p+2;r=Ga(this,s,e,i,u,f,d,_,v,g),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function BS(t,e,n,i,r,o,s,a){let l;if(e.side===on?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Ji,a),l===null)return null;Ha.copy(a),Ha.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ha);return u<n.near||u>n.far?null:{distance:u,point:Ha.clone(),object:t}}function Ga(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,Qr),t.getVertexPosition(l,Jr),t.getVertexPosition(u,eo);const f=BS(t,e,n,i,Qr,Jr,eo,Ba);if(f){r&&(Oa.fromBufferAttribute(r,a),za.fromBufferAttribute(r,l),ka.fromBufferAttribute(r,u),f.uv=Gn.getInterpolation(Ba,Qr,Jr,eo,Oa,za,ka,new Fe)),o&&(Oa.fromBufferAttribute(o,a),za.fromBufferAttribute(o,l),ka.fromBufferAttribute(o,u),f.uv1=Gn.getInterpolation(Ba,Qr,Jr,eo,Oa,za,ka,new Fe),f.uv2=f.uv1),s&&(Lp.fromBufferAttribute(s,a),bp.fromBufferAttribute(s,l),Dp.fromBufferAttribute(s,u),f.normal=Gn.getInterpolation(Ba,Qr,Jr,eo,Lp,bp,Dp,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new O,materialIndex:0};Gn.getNormal(Qr,Jr,eo,d.normal),f.face=d}return f}class Yo extends wi{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],f=[],d=[];let h=0,m=0;y("z","y","x",-1,-1,i,n,e,s,o,0),y("z","y","x",1,-1,i,n,-e,s,o,1),y("x","z","y",1,1,e,i,n,r,s,2),y("x","z","y",1,-1,e,i,-n,r,s,3),y("x","y","z",1,-1,e,n,i,r,o,4),y("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new gn(u,3)),this.setAttribute("normal",new gn(f,3)),this.setAttribute("uv",new gn(d,2));function y(x,p,c,_,v,g,S,R,A,N,M){const T=g/A,ne=S/N,te=g/2,H=S/2,q=R/2,$=A+1,re=N+1;let Z=0,I=0;const j=new O;for(let W=0;W<re;W++){const B=W*ne-H;for(let V=0;V<$;V++){const he=V*T-te;j[x]=he*_,j[p]=B*v,j[c]=q,u.push(j.x,j.y,j.z),j[x]=0,j[p]=0,j[c]=R>0?1:-1,f.push(j.x,j.y,j.z),d.push(V/A),d.push(1-W/N),Z+=1}}for(let W=0;W<N;W++)for(let B=0;B<A;B++){const V=h+B+$*W,he=h+B+$*(W+1),se=h+(B+1)+$*(W+1),pe=h+(B+1)+$*W;l.push(V,he,pe),l.push(he,se,pe),I+=6}a.addGroup(m,I,M),m+=I,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ho(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=Ho(t[n]);for(const r in i)e[r]=i[r]}return e}function HS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function c_(t){return t.getRenderTarget()===null?t.outputColorSpace:ni}const GS={clone:Ho,merge:jt};var VS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dr extends sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VS,this.fragmentShader=WS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ho(e.uniforms),this.uniformsGroups=HS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class f_ extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends f_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const to=-90,no=1;class XS extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new hn(to,no,e,n);r.layers=this.layers,this.add(r);const o=new hn(to,no,e,n);o.layers=this.layers,this.add(o);const s=new hn(to,no,e,n);s.layers=this.layers,this.add(s);const a=new hn(to,no,e,n);a.layers=this.layers,this.add(a);const l=new hn(to,no,e,n);l.layers=this.layers,this.add(l);const u=new hn(to,no,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,a,l,u]=this.children,f=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=yi,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,s),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(f),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class d_ extends sn{constructor(e,n,i,r,o,s,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:zo,super(e,n,i,r,o,s,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jS extends Lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ls("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Mr?He:Er),this.texture=new d_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yo(5,5,5),o=new Dr({name:"CubemapFromEquirect",uniforms:Ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:$i});o.uniforms.tEquirect.value=n;const s=new Rn(r,o),a=n.minFilter;return n.minFilter===$s&&(n.minFilter=wn),new XS(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const nc=new O,YS=new O,qS=new Ge;class fr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=nc.subVectors(i,n).cross(YS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(nc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||qS.getNormalMatrix(e),r=this.coplanarPoint(nc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new _d,Va=new O;class xd{constructor(e=new fr,n=new fr,i=new fr,r=new fr,o=new fr,s=new fr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],m=r[8],y=r[9],x=r[10],p=r[11],c=r[12],_=r[13],v=r[14],g=r[15];if(i[0].setComponents(l-o,h-u,p-m,g-c).normalize(),i[1].setComponents(l+o,h+u,p+m,g+c).normalize(),i[2].setComponents(l+s,h+f,p+y,g+_).normalize(),i[3].setComponents(l-s,h-f,p-y,g-_).normalize(),i[4].setComponents(l-a,h-d,p-x,g-v).normalize(),n===vi)i[5].setComponents(l+a,h+d,p+x,g+v).normalize();else if(n===bl)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Va.x=r.normal.x>0?e.max.x:e.min.x,Va.y=r.normal.y>0?e.max.y:e.min.y,Va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function h_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function $S(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const d=u.array,h=u.usage,m=t.createBuffer();t.bindBuffer(f,m),t.bufferData(f,d,h),u.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function o(u,f,d){const h=f.array,m=f.updateRange;t.bindBuffer(d,u),m.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,f)):d.version<u.version&&(o(d.buffer,u,f),d.version=u.version)}return{get:s,remove:a,update:l}}class Sd extends wi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,m=[],y=[],x=[],p=[];for(let c=0;c<f;c++){const _=c*h-s;for(let v=0;v<u;v++){const g=v*d-o;y.push(g,-_,0),x.push(0,0,1),p.push(v/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const v=_+u*c,g=_+u*(c+1),S=_+1+u*(c+1),R=_+1+u*c;m.push(v,g,R),m.push(g,S,R)}this.setIndex(m),this.setAttribute("position",new gn(y,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sd(e.width,e.height,e.widthSegments,e.heightSegments)}}var KS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZS=`#ifdef USE_ALPHAHASH
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
#endif`,QS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aM=`#ifdef USE_IRIDESCENCE
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
#endif`,lM=`#ifdef USE_BUMPMAP
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
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vM=`#define PI 3.141592653589793
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
} // validated`,_M=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yM=`vec3 transformedNormal = objectNormal;
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
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TM="gl_FragColor = linearToOutputTexel( gl_FragColor );",wM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AM=`#ifdef USE_ENVMAP
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
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NM=`#ifdef USE_GRADIENTMAP
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
}`,FM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,OM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BM=`uniform bool receiveShadow;
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
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jM=`PhysicalMaterial material;
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
#endif`,YM=`struct PhysicalMaterial {
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
}`,qM=`
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
#endif`,$M=`#if defined( RE_IndirectDiffuse )
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
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ZM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tE=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,nE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rE=`#if defined( USE_POINTS_UV )
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
#endif`,oE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lE=`#ifdef USE_MORPHNORMALS
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
#endif`,uE=`#ifdef USE_MORPHTARGETS
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
#endif`,cE=`#ifdef USE_MORPHTARGETS
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
#endif`,fE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,dE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gE=`#ifdef USE_NORMALMAP
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
#endif`,vE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,_E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ME=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,EE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,DE=`float getShadowMask() {
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
}`,UE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IE=`#ifdef USE_SKINNING
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
#endif`,NE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FE=`#ifdef USE_SKINNING
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
#endif`,OE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HE=`#ifdef USE_TRANSMISSION
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
#endif`,GE=`#ifdef USE_TRANSMISSION
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
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`#include <common>
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
}`,eT=`#if DEPTH_PACKING == 3200
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
}`,tT=`#define DISTANCE
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
}`,nT=`#define DISTANCE
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
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`uniform float scale;
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
}`,sT=`uniform vec3 diffuse;
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
}`,aT=`#include <common>
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
}`,lT=`uniform vec3 diffuse;
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
}`,uT=`#define LAMBERT
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
}`,cT=`#define LAMBERT
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
}`,fT=`#define MATCAP
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
}`,dT=`#define MATCAP
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
}`,hT=`#define NORMAL
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
}`,pT=`#define NORMAL
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
}`,mT=`#define PHONG
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
}`,gT=`#define PHONG
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
}`,vT=`#define STANDARD
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
}`,_T=`#define STANDARD
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
}`,yT=`#define TOON
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
}`,xT=`#define TOON
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
}`,ST=`uniform float size;
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
}`,MT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,TT=`uniform vec3 color;
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
}`,wT=`uniform float rotation;
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
}`,AT=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:KS,alphahash_pars_fragment:ZS,alphamap_fragment:QS,alphamap_pars_fragment:JS,alphatest_fragment:eM,alphatest_pars_fragment:tM,aomap_fragment:nM,aomap_pars_fragment:iM,begin_vertex:rM,beginnormal_vertex:oM,bsdfs:sM,iridescence_fragment:aM,bumpmap_pars_fragment:lM,clipping_planes_fragment:uM,clipping_planes_pars_fragment:cM,clipping_planes_pars_vertex:fM,clipping_planes_vertex:dM,color_fragment:hM,color_pars_fragment:pM,color_pars_vertex:mM,color_vertex:gM,common:vM,cube_uv_reflection_fragment:_M,defaultnormal_vertex:yM,displacementmap_pars_vertex:xM,displacementmap_vertex:SM,emissivemap_fragment:MM,emissivemap_pars_fragment:EM,colorspace_fragment:TM,colorspace_pars_fragment:wM,envmap_fragment:AM,envmap_common_pars_fragment:RM,envmap_pars_fragment:CM,envmap_pars_vertex:PM,envmap_physical_pars_fragment:HM,envmap_vertex:LM,fog_vertex:bM,fog_pars_vertex:DM,fog_fragment:UM,fog_pars_fragment:IM,gradientmap_pars_fragment:NM,lightmap_fragment:FM,lightmap_pars_fragment:OM,lights_lambert_fragment:zM,lights_lambert_pars_fragment:kM,lights_pars_begin:BM,lights_toon_fragment:GM,lights_toon_pars_fragment:VM,lights_phong_fragment:WM,lights_phong_pars_fragment:XM,lights_physical_fragment:jM,lights_physical_pars_fragment:YM,lights_fragment_begin:qM,lights_fragment_maps:$M,lights_fragment_end:KM,logdepthbuf_fragment:ZM,logdepthbuf_pars_fragment:QM,logdepthbuf_pars_vertex:JM,logdepthbuf_vertex:eE,map_fragment:tE,map_pars_fragment:nE,map_particle_fragment:iE,map_particle_pars_fragment:rE,metalnessmap_fragment:oE,metalnessmap_pars_fragment:sE,morphcolor_vertex:aE,morphnormal_vertex:lE,morphtarget_pars_vertex:uE,morphtarget_vertex:cE,normal_fragment_begin:fE,normal_fragment_maps:dE,normal_pars_fragment:hE,normal_pars_vertex:pE,normal_vertex:mE,normalmap_pars_fragment:gE,clearcoat_normal_fragment_begin:vE,clearcoat_normal_fragment_maps:_E,clearcoat_pars_fragment:yE,iridescence_pars_fragment:xE,opaque_fragment:SE,packing:ME,premultiplied_alpha_fragment:EE,project_vertex:TE,dithering_fragment:wE,dithering_pars_fragment:AE,roughnessmap_fragment:RE,roughnessmap_pars_fragment:CE,shadowmap_pars_fragment:PE,shadowmap_pars_vertex:LE,shadowmap_vertex:bE,shadowmask_pars_fragment:DE,skinbase_vertex:UE,skinning_pars_vertex:IE,skinning_vertex:NE,skinnormal_vertex:FE,specularmap_fragment:OE,specularmap_pars_fragment:zE,tonemapping_fragment:kE,tonemapping_pars_fragment:BE,transmission_fragment:HE,transmission_pars_fragment:GE,uv_pars_fragment:VE,uv_pars_vertex:WE,uv_vertex:XE,worldpos_vertex:jE,background_vert:YE,background_frag:qE,backgroundCube_vert:$E,backgroundCube_frag:KE,cube_vert:ZE,cube_frag:QE,depth_vert:JE,depth_frag:eT,distanceRGBA_vert:tT,distanceRGBA_frag:nT,equirect_vert:iT,equirect_frag:rT,linedashed_vert:oT,linedashed_frag:sT,meshbasic_vert:aT,meshbasic_frag:lT,meshlambert_vert:uT,meshlambert_frag:cT,meshmatcap_vert:fT,meshmatcap_frag:dT,meshnormal_vert:hT,meshnormal_frag:pT,meshphong_vert:mT,meshphong_frag:gT,meshphysical_vert:vT,meshphysical_frag:_T,meshtoon_vert:yT,meshtoon_frag:xT,points_vert:ST,points_frag:MT,shadow_vert:ET,shadow_frag:TT,sprite_vert:wT,sprite_frag:AT},me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Zn={basic:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:jt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:jt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:jt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:jt([me.points,me.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:jt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:jt([me.common,me.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:jt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:jt([me.sprite,me.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:jt([me.common,me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:jt([me.lights,me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Zn.physical={uniforms:jt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Wa={r:0,b:0,g:0};function RT(t,e,n,i,r,o,s){const a=new tt(0);let l=o===!0?0:1,u,f,d=null,h=0,m=null;function y(p,c){let _=!1,v=c.isScene===!0?c.background:null;switch(v&&v.isTexture&&(v=(c.backgroundBlurriness>0?n:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),_=!0),t.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,s),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,s),_=!0;break}(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ql)?(f===void 0&&(f=new Rn(new Yo(1,1,1),new Dr({name:"BackgroundCubeMaterial",uniforms:Ho(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=v.colorSpace!==He,(d!==v||h!==v.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Rn(new Sd(2,2),new Dr({name:"BackgroundMaterial",uniforms:Ho(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=v.colorSpace!==He,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function x(p,c){p.getRGB(Wa,c_(t)),i.buffers.color.setClear(Wa.r,Wa.g,Wa.b,c,s)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),l=c,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:y}}function CT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=p(null);let u=l,f=!1;function d(q,$,re,Z,I){let j=!1;if(s){const W=x(Z,re,$);u!==W&&(u=W,m(u.object)),j=c(q,Z,re,I),j&&_(q,Z,re,I)}else{const W=$.wireframe===!0;(u.geometry!==Z.id||u.program!==re.id||u.wireframe!==W)&&(u.geometry=Z.id,u.program=re.id,u.wireframe=W,j=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(j||f)&&(f=!1,N(q,$,re,Z),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function m(q){return i.isWebGL2?t.bindVertexArray(q):o.bindVertexArrayOES(q)}function y(q){return i.isWebGL2?t.deleteVertexArray(q):o.deleteVertexArrayOES(q)}function x(q,$,re){const Z=re.wireframe===!0;let I=a[q.id];I===void 0&&(I={},a[q.id]=I);let j=I[$.id];j===void 0&&(j={},I[$.id]=j);let W=j[Z];return W===void 0&&(W=p(h()),j[Z]=W),W}function p(q){const $=[],re=[],Z=[];for(let I=0;I<r;I++)$[I]=0,re[I]=0,Z[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:re,attributeDivisors:Z,object:q,attributes:{},index:null}}function c(q,$,re,Z){const I=u.attributes,j=$.attributes;let W=0;const B=re.getAttributes();for(const V in B)if(B[V].location>=0){const se=I[V];let pe=j[V];if(pe===void 0&&(V==="instanceMatrix"&&q.instanceMatrix&&(pe=q.instanceMatrix),V==="instanceColor"&&q.instanceColor&&(pe=q.instanceColor)),se===void 0||se.attribute!==pe||pe&&se.data!==pe.data)return!0;W++}return u.attributesNum!==W||u.index!==Z}function _(q,$,re,Z){const I={},j=$.attributes;let W=0;const B=re.getAttributes();for(const V in B)if(B[V].location>=0){let se=j[V];se===void 0&&(V==="instanceMatrix"&&q.instanceMatrix&&(se=q.instanceMatrix),V==="instanceColor"&&q.instanceColor&&(se=q.instanceColor));const pe={};pe.attribute=se,se&&se.data&&(pe.data=se.data),I[V]=pe,W++}u.attributes=I,u.attributesNum=W,u.index=Z}function v(){const q=u.newAttributes;for(let $=0,re=q.length;$<re;$++)q[$]=0}function g(q){S(q,0)}function S(q,$){const re=u.newAttributes,Z=u.enabledAttributes,I=u.attributeDivisors;re[q]=1,Z[q]===0&&(t.enableVertexAttribArray(q),Z[q]=1),I[q]!==$&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](q,$),I[q]=$)}function R(){const q=u.newAttributes,$=u.enabledAttributes;for(let re=0,Z=$.length;re<Z;re++)$[re]!==q[re]&&(t.disableVertexAttribArray(re),$[re]=0)}function A(q,$,re,Z,I,j,W){W===!0?t.vertexAttribIPointer(q,$,re,I,j):t.vertexAttribPointer(q,$,re,Z,I,j)}function N(q,$,re,Z){if(i.isWebGL2===!1&&(q.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const I=Z.attributes,j=re.getAttributes(),W=$.defaultAttributeValues;for(const B in j){const V=j[B];if(V.location>=0){let he=I[B];if(he===void 0&&(B==="instanceMatrix"&&q.instanceMatrix&&(he=q.instanceMatrix),B==="instanceColor"&&q.instanceColor&&(he=q.instanceColor)),he!==void 0){const se=he.normalized,pe=he.itemSize,_e=n.get(he);if(_e===void 0)continue;const Re=_e.buffer,xe=_e.type,Xe=_e.bytesPerElement,Tt=i.isWebGL2===!0&&(xe===t.INT||xe===t.UNSIGNED_INT||he.gpuType===Yv);if(he.isInterleavedBufferAttribute){const Ue=he.data,G=Ue.stride,_t=he.offset;if(Ue.isInstancedInterleavedBuffer){for(let Me=0;Me<V.locationSize;Me++)S(V.location+Me,Ue.meshPerAttribute);q.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Me=0;Me<V.locationSize;Me++)g(V.location+Me);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let Me=0;Me<V.locationSize;Me++)A(V.location+Me,pe/V.locationSize,xe,se,G*Xe,(_t+pe/V.locationSize*Me)*Xe,Tt)}else{if(he.isInstancedBufferAttribute){for(let Ue=0;Ue<V.locationSize;Ue++)S(V.location+Ue,he.meshPerAttribute);q.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ue=0;Ue<V.locationSize;Ue++)g(V.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let Ue=0;Ue<V.locationSize;Ue++)A(V.location+Ue,pe/V.locationSize,xe,se,pe*Xe,pe/V.locationSize*Ue*Xe,Tt)}}else if(W!==void 0){const se=W[B];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(V.location,se);break;case 3:t.vertexAttrib3fv(V.location,se);break;case 4:t.vertexAttrib4fv(V.location,se);break;default:t.vertexAttrib1fv(V.location,se)}}}}R()}function M(){te();for(const q in a){const $=a[q];for(const re in $){const Z=$[re];for(const I in Z)y(Z[I].object),delete Z[I];delete $[re]}delete a[q]}}function T(q){if(a[q.id]===void 0)return;const $=a[q.id];for(const re in $){const Z=$[re];for(const I in Z)y(Z[I].object),delete Z[I];delete $[re]}delete a[q.id]}function ne(q){for(const $ in a){const re=a[$];if(re[q.id]===void 0)continue;const Z=re[q.id];for(const I in Z)y(Z[I].object),delete Z[I];delete re[q.id]}}function te(){H(),f=!0,u!==l&&(u=l,m(u.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:te,resetDefaultState:H,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:ne,initAttributes:v,enableAttribute:g,disableUnusedAttributes:R}}function PT(t,e,n,i){const r=i.isWebGL2;let o;function s(u){o=u}function a(u,f){t.drawArrays(o,u,f),n.update(f,o,1)}function l(u,f,d){if(d===0)return;let h,m;if(r)h=t,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](o,u,f,d),n.update(f,o,d)}this.setMode=s,this.render=a,this.renderInstances=l}function LT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,g=s||e.has("OES_texture_float"),S=v&&g,R=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:g,floatVertexTextures:S,maxSamples:R}}function bT(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new fr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const y=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,c=t.get(d);if(!r||y===null||y.length===0||o&&!p)o?f(null):u();else{const _=o?0:i,v=_*4;let g=c.clippingState||null;l.value=g,g=f(y,h,v,m);for(let S=0;S!==v;++S)g[S]=n[S];c.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,y){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,y!==!0||p===null){const c=m+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<c)&&(p=new Float32Array(c));for(let v=0,g=m;v!==x;++v,g+=4)s.copy(d[v]).applyMatrix4(_,a),s.normal.toArray(p,g),p[g+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function DT(t){let e=new WeakMap;function n(s,a){return a===uf?s.mapping=zo:a===cf&&(s.mapping=ko),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===uf||a===cf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new jS(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class UT extends f_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const yo=4,Up=[.125,.215,.35,.446,.526,.582],hr=20,ic=new UT,Ip=new tt;let rc=null;const dr=(1+Math.sqrt(5))/2,io=1/dr,Np=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,dr,io),new O(0,dr,-io),new O(io,0,dr),new O(-io,0,dr),new O(dr,io,0),new O(-dr,io,0)];class Fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){rc=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rc),e.scissorTest=!1,Xa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zo||e.mapping===ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ks,format:Wn,colorSpace:ni,depthBuffer:!1},r=Op(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Op(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IT(o)),this._blurMaterial=NT(o,e,n)}return r}_compileMaterial(e){const n=new Rn(this._lodPlanes[0],e);this._renderer.compile(n,ic)}_sceneToCubeUV(e,n,i,r){const a=new hn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Ip),f.toneMapping=yi,f.autoClear=!1;const m=new yd({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),y=new Rn(new Yo,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Ip),x=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const v=this._cubeSize;Xa(r,_*v,c>2?v:0,v,v),f.setRenderTarget(r),x&&f.render(y,a),f.render(e,a)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===zo||e.mapping===ko;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Rn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Xa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,ic)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Np[(r-1)%Np.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Rn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*hr-1),x=o/y,p=isFinite(o)?1+Math.floor(f*x):hr;p>hr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hr}`);const c=[];let _=0;for(let A=0;A<hr;++A){const N=A/x,M=Math.exp(-N*N/2);c.push(M),A===0?_+=M:A<p&&(_+=2*M)}for(let A=0;A<c.length;A++)c[A]=c[A]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=c,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=y,h.mipInt.value=v-i;const g=this._sizeLods[r],S=3*g*(r>v-yo?r-v+yo:0),R=4*(this._cubeSize-g);Xa(n,S,R,3*g,2*g),l.setRenderTarget(n),l.render(d,ic)}}function IT(t){const e=[],n=[],i=[];let r=t;const o=t-yo+1+Up.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-yo?l=Up[s-t+yo-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,y=6,x=3,p=2,c=1,_=new Float32Array(x*y*m),v=new Float32Array(p*y*m),g=new Float32Array(c*y*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,N=R>2?0:-1,M=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];_.set(M,x*y*R),v.set(h,p*y*R);const T=[R,R,R,R,R,R];g.set(T,c*y*R)}const S=new wi;S.setAttribute("position",new ti(_,x)),S.setAttribute("uv",new ti(v,p)),S.setAttribute("faceIndex",new ti(g,c)),e.push(S),r>yo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Op(t,e,n){const i=new Lr(t,e,n);return i.texture.mapping=Ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function NT(t,e,n){const i=new Float32Array(hr),r=new O(0,1,0);return new Dr({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Md(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function zp(){return new Dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Md(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function kp(){return new Dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Md(){return`

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
	`}function FT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===uf||l===cf,f=l===zo||l===ko;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Fp(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new Fp(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function OT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zT(t,e,n,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const x=h.morphAttributes[y];for(let p=0,c=x.length;p<c;p++)e.remove(x[p])}h.removeEventListener("dispose",s),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const y in m){const x=m[y];for(let p=0,c=x.length;p<c;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(d){const h=[],m=d.index,y=d.attributes.position;let x=0;if(m!==null){const _=m.array;x=m.version;for(let v=0,g=_.length;v<g;v+=3){const S=_[v+0],R=_[v+1],A=_[v+2];h.push(S,R,R,A,A,S)}}else{const _=y.array;x=y.version;for(let v=0,g=_.length/3-1;v<g;v+=3){const S=v+0,R=v+1,A=v+2;h.push(S,R,R,A,A,S)}}const p=new(n_(h)?u_:l_)(h,1);p.version=x;const c=o.get(d);c&&e.remove(c),o.set(d,p)}function f(d){const h=o.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function kT(t,e,n,i){const r=i.isWebGL2;let o;function s(h){o=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function f(h,m){t.drawElements(o,m,a,h*l),n.update(m,o,1)}function d(h,m,y){if(y===0)return;let x,p;if(r)x=t,p="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[p](o,m,a,h*l,y),n.update(m,o,y)}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=d}function BT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function HT(t,e){return t[0]-e[0]}function GT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function VT(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new at,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=y!==void 0?y.length:0;let p=o.get(f);if(p===void 0||p.count!==x){let $=function(){H.dispose(),o.delete(f),f.removeEventListener("dispose",$)};var m=$;p!==void 0&&p.texture.dispose();const v=f.morphAttributes.position!==void 0,g=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let M=0;v===!0&&(M=1),g===!0&&(M=2),S===!0&&(M=3);let T=f.attributes.position.count*M,ne=1;T>e.maxTextureSize&&(ne=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const te=new Float32Array(T*ne*4*x),H=new o_(te,T,ne,x);H.type=Bi,H.needsUpdate=!0;const q=M*4;for(let re=0;re<x;re++){const Z=R[re],I=A[re],j=N[re],W=T*ne*4*re;for(let B=0;B<Z.count;B++){const V=B*q;v===!0&&(s.fromBufferAttribute(Z,B),te[W+V+0]=s.x,te[W+V+1]=s.y,te[W+V+2]=s.z,te[W+V+3]=0),g===!0&&(s.fromBufferAttribute(I,B),te[W+V+4]=s.x,te[W+V+5]=s.y,te[W+V+6]=s.z,te[W+V+7]=0),S===!0&&(s.fromBufferAttribute(j,B),te[W+V+8]=s.x,te[W+V+9]=s.y,te[W+V+10]=s.z,te[W+V+11]=j.itemSize===4?s.w:1)}}p={count:x,texture:H,size:new Fe(T,ne)},o.set(f,p),f.addEventListener("dispose",$)}let c=0;for(let v=0;v<h.length;v++)c+=h[v];const _=f.morphTargetsRelative?1:1-c;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const y=h===void 0?0:h.length;let x=i[f.id];if(x===void 0||x.length!==y){x=[];for(let g=0;g<y;g++)x[g]=[g,0];i[f.id]=x}for(let g=0;g<y;g++){const S=x[g];S[0]=g,S[1]=h[g]}x.sort(GT);for(let g=0;g<8;g++)g<y&&x[g][1]?(a[g][0]=x[g][0],a[g][1]=x[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(HT);const p=f.morphAttributes.position,c=f.morphAttributes.normal;let _=0;for(let g=0;g<8;g++){const S=a[g],R=S[0],A=S[1];R!==Number.MAX_SAFE_INTEGER&&A?(p&&f.getAttribute("morphTarget"+g)!==p[R]&&f.setAttribute("morphTarget"+g,p[R]),c&&f.getAttribute("morphNormal"+g)!==c[R]&&f.setAttribute("morphNormal"+g,c[R]),r[g]=A,_+=A):(p&&f.hasAttribute("morphTarget"+g)===!0&&f.deleteAttribute("morphTarget"+g),c&&f.hasAttribute("morphNormal"+g)===!0&&f.deleteAttribute("morphNormal"+g),r[g]=0)}const v=f.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function WT(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}const p_=new sn,m_=new o_,g_=new PS,v_=new d_,Bp=[],Hp=[],Gp=new Float32Array(16),Vp=new Float32Array(9),Wp=new Float32Array(4);function qo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Bp[r];if(o===void 0&&(o=new Float32Array(r),Bp[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function eu(t,e){let n=Hp[e];n===void 0&&(n=new Int32Array(e),Hp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function XT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function $T(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Wp.set(i),t.uniformMatrix2fv(this.addr,!1,Wp),Pt(n,i)}}function KT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Vp.set(i),t.uniformMatrix3fv(this.addr,!1,Vp),Pt(n,i)}}function ZT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Gp.set(i),t.uniformMatrix4fv(this.addr,!1,Gp),Pt(n,i)}}function QT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function nw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||p_,r)}function aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||g_,r)}function lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||v_,r)}function uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||m_,r)}function cw(t){switch(t){case 5126:return XT;case 35664:return jT;case 35665:return YT;case 35666:return qT;case 35674:return $T;case 35675:return KT;case 35676:return ZT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return ew;case 35669:case 35673:return tw;case 5125:return nw;case 36294:return iw;case 36295:return rw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return sw;case 35679:case 36299:case 36307:return aw;case 35680:case 36300:case 36308:case 36293:return lw;case 36289:case 36303:case 36311:case 36292:return uw}}function fw(t,e){t.uniform1fv(this.addr,e)}function dw(t,e){const n=qo(e,this.size,2);t.uniform2fv(this.addr,n)}function hw(t,e){const n=qo(e,this.size,3);t.uniform3fv(this.addr,n)}function pw(t,e){const n=qo(e,this.size,4);t.uniform4fv(this.addr,n)}function mw(t,e){const n=qo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function gw(t,e){const n=qo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function vw(t,e){const n=qo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _w(t,e){t.uniform1iv(this.addr,e)}function yw(t,e){t.uniform2iv(this.addr,e)}function xw(t,e){t.uniform3iv(this.addr,e)}function Sw(t,e){t.uniform4iv(this.addr,e)}function Mw(t,e){t.uniform1uiv(this.addr,e)}function Ew(t,e){t.uniform2uiv(this.addr,e)}function Tw(t,e){t.uniform3uiv(this.addr,e)}function ww(t,e){t.uniform4uiv(this.addr,e)}function Aw(t,e,n){const i=this.cache,r=e.length,o=eu(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||p_,o[s])}function Rw(t,e,n){const i=this.cache,r=e.length,o=eu(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||g_,o[s])}function Cw(t,e,n){const i=this.cache,r=e.length,o=eu(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||v_,o[s])}function Pw(t,e,n){const i=this.cache,r=e.length,o=eu(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),Pt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||m_,o[s])}function Lw(t){switch(t){case 5126:return fw;case 35664:return dw;case 35665:return hw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return vw;case 5124:case 35670:return _w;case 35667:case 35671:return yw;case 35668:case 35672:return xw;case 35669:case 35673:return Sw;case 5125:return Mw;case 36294:return Ew;case 36295:return Tw;case 36296:return ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return Rw;case 35680:case 36300:case 36308:case 36293:return Cw;case 36289:case 36303:case 36311:case 36292:return Pw}}class bw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=cw(n.type)}}class Dw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=Lw(n.type)}}class Uw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const oc=/(\w+)(\])?(\[|\.)?/g;function Xp(t,e){t.seq.push(e),t.map[e.id]=e}function Iw(t,e,n){const i=t.name,r=i.length;for(oc.lastIndex=0;;){const o=oc.exec(i),s=oc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Xp(n,u===void 0?new bw(a,t,e):new Dw(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Uw(a),Xp(n,d)),n=d}}}class sl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);Iw(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function jp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let Nw=0;function Fw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function Ow(t){switch(t){case ni:return["Linear","( value )"];case He:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Yp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Fw(t.getShaderSource(e),s)}else return r}function zw(t,e){const n=Ow(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function kw(t,e){let n;switch(e){case Ux:n="Linear";break;case Ix:n="Reinhard";break;case Nx:n="OptimizedCineon";break;case Fx:n="ACESFilmic";break;case Ox:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Bw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_s).join(`
`)}function Hw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Gw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function _s(t){return t!==""}function qp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $p(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function mf(t){return t.replace(Vw,Xw)}const Ww=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Xw(t,e){let n=Be[e];if(n===void 0){const i=Ww.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mf(n)}const jw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kp(t){return t.replace(jw,Yw)}function Yw(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Zp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Gv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===fx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function $w(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case zo:case ko:e="ENVMAP_TYPE_CUBE";break;case Ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ko:e="ENVMAP_MODE_REFRACTION";break}return e}function Zw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Xv:e="ENVMAP_BLENDING_MULTIPLY";break;case bx:e="ENVMAP_BLENDING_MIX";break;case Dx:e="ENVMAP_BLENDING_ADD";break}return e}function Qw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Jw(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=qw(n),u=$w(n),f=Kw(n),d=Zw(n),h=Qw(n),m=n.isWebGL2?"":Bw(n),y=Hw(o),x=r.createProgram();let p,c,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(_s).join(`
`),p.length>0&&(p+=`
`),c=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(_s).join(`
`),c.length>0&&(c+=`
`)):(p=[Zp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),c=[m,Zp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yi?"#define TONE_MAPPING":"",n.toneMapping!==yi?Be.tonemapping_pars_fragment:"",n.toneMapping!==yi?kw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,zw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_s).join(`
`)),s=mf(s),s=qp(s,n),s=$p(s,n),a=mf(a),a=qp(a,n),a=$p(a,n),s=Kp(s),a=Kp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",n.glslVersion===gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const v=_+p+s,g=_+c+a,S=jp(r,r.VERTEX_SHADER,v),R=jp(r,r.FRAGMENT_SHADER,g);if(r.attachShader(x,S),r.attachShader(x,R),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),t.debug.checkShaderErrors){const M=r.getProgramInfoLog(x).trim(),T=r.getShaderInfoLog(S).trim(),ne=r.getShaderInfoLog(R).trim();let te=!0,H=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(te=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,S,R);else{const q=Yp(r,S,"vertex"),$=Yp(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+q+`
`+$)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(T===""||ne==="")&&(H=!1);H&&(this.diagnostics={runnable:te,programLog:M,vertexShader:{log:T,prefix:p},fragmentShader:{log:ne,prefix:c}})}r.deleteShader(S),r.deleteShader(R);let A;this.getUniforms=function(){return A===void 0&&(A=new sl(r,x)),A};let N;return this.getAttributes=function(){return N===void 0&&(N=Gw(r,x)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Nw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=R,this}let e1=0;class t1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new n1(e),n.set(e,i)),i}}class n1{constructor(e){this.id=e1++,this.code=e,this.usedTimes=0}}function i1(t,e,n,i,r,o,s){const a=new s_,l=new t1,u=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function p(M,T,ne,te,H){const q=te.fog,$=H.geometry,re=M.isMeshStandardMaterial?te.environment:null,Z=(M.isMeshStandardMaterial?n:e).get(M.envMap||re),I=Z&&Z.mapping===Ql?Z.image.height:null,j=y[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const W=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,B=W!==void 0?W.length:0;let V=0;$.morphAttributes.position!==void 0&&(V=1),$.morphAttributes.normal!==void 0&&(V=2),$.morphAttributes.color!==void 0&&(V=3);let he,se,pe,_e;if(j){const Je=Zn[j];he=Je.vertexShader,se=Je.fragmentShader}else he=M.vertexShader,se=M.fragmentShader,l.update(M),pe=l.getVertexShaderID(M),_e=l.getFragmentShaderID(M);const Re=t.getRenderTarget(),xe=H.isInstancedMesh===!0,Xe=!!M.map,Tt=!!M.matcap,Ue=!!Z,G=!!M.aoMap,_t=!!M.lightMap,Me=!!M.bumpMap,we=!!M.normalMap,Ee=!!M.displacementMap,Qe=!!M.emissiveMap,Ie=!!M.metalnessMap,Le=!!M.roughnessMap,Oe=M.anisotropy>0,ft=M.clearcoat>0,pt=M.iridescence>0,C=M.sheen>0,E=M.transmission>0,Q=Oe&&!!M.anisotropyMap,ce=ft&&!!M.clearcoatMap,fe=ft&&!!M.clearcoatNormalMap,L=ft&&!!M.clearcoatRoughnessMap,oe=pt&&!!M.iridescenceMap,le=pt&&!!M.iridescenceThicknessMap,Y=C&&!!M.sheenColorMap,ve=C&&!!M.sheenRoughnessMap,Se=!!M.specularMap,b=!!M.specularColorMap,D=!!M.specularIntensityMap,z=E&&!!M.transmissionMap,ie=E&&!!M.thicknessMap,de=!!M.gradientMap,P=!!M.alphaMap,ee=M.alphaTest>0,U=!!M.alphaHash,X=!!M.extensions,ae=!!$.attributes.uv1,Ce=!!$.attributes.uv2,Te=!!$.attributes.uv3;return{isWebGL2:f,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:he,fragmentShader:se,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:xe,instancingColor:xe&&H.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Re===null?t.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:ni,map:Xe,matcap:Tt,envMap:Ue,envMapMode:Ue&&Z.mapping,envMapCubeUVHeight:I,aoMap:G,lightMap:_t,bumpMap:Me,normalMap:we,displacementMap:h&&Ee,emissiveMap:Qe,normalMapObjectSpace:we&&M.normalMapType===Kx,normalMapTangentSpace:we&&M.normalMapType===e_,metalnessMap:Ie,roughnessMap:Le,anisotropy:Oe,anisotropyMap:Q,clearcoat:ft,clearcoatMap:ce,clearcoatNormalMap:fe,clearcoatRoughnessMap:L,iridescence:pt,iridescenceMap:oe,iridescenceThicknessMap:le,sheen:C,sheenColorMap:Y,sheenRoughnessMap:ve,specularMap:Se,specularColorMap:b,specularIntensityMap:D,transmission:E,transmissionMap:z,thicknessMap:ie,gradientMap:de,opaque:M.transparent===!1&&M.blending===Co,alphaMap:P,alphaTest:ee,alphaHash:U,combine:M.combine,mapUv:Xe&&x(M.map.channel),aoMapUv:G&&x(M.aoMap.channel),lightMapUv:_t&&x(M.lightMap.channel),bumpMapUv:Me&&x(M.bumpMap.channel),normalMapUv:we&&x(M.normalMap.channel),displacementMapUv:Ee&&x(M.displacementMap.channel),emissiveMapUv:Qe&&x(M.emissiveMap.channel),metalnessMapUv:Ie&&x(M.metalnessMap.channel),roughnessMapUv:Le&&x(M.roughnessMap.channel),anisotropyMapUv:Q&&x(M.anisotropyMap.channel),clearcoatMapUv:ce&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:ve&&x(M.sheenRoughnessMap.channel),specularMapUv:Se&&x(M.specularMap.channel),specularColorMapUv:b&&x(M.specularColorMap.channel),specularIntensityMapUv:D&&x(M.specularIntensityMap.channel),transmissionMapUv:z&&x(M.transmissionMap.channel),thicknessMapUv:ie&&x(M.thicknessMap.channel),alphaMapUv:P&&x(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(we||Oe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:Ce,vertexUv3s:Te,pointsUvs:H.isPoints===!0&&!!$.attributes.uv&&(Xe||P),fog:!!q,useFog:M.fog===!0,fogExp2:q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:V,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&ne.length>0,shadowMapType:t.shadowMap.type,toneMapping:M.toneMapped?t.toneMapping:yi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pi,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:X&&M.extensions.derivatives===!0,extensionFragDepth:X&&M.extensions.fragDepth===!0,extensionDrawBuffers:X&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:X&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function c(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const ne in M.defines)T.push(ne),T.push(M.defines[ne]);return M.isRawShaderMaterial===!1&&(_(T,M),v(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),M.push(a.mask)}function g(M){const T=y[M.type];let ne;if(T){const te=Zn[T];ne=GS.clone(te.uniforms)}else ne=M.uniforms;return ne}function S(M,T){let ne;for(let te=0,H=u.length;te<H;te++){const q=u[te];if(q.cacheKey===T){ne=q,++ne.usedTimes;break}}return ne===void 0&&(ne=new Jw(t,T,M,o),u.push(ne)),ne}function R(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:g,acquireProgram:S,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:N}}function r1(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function o1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Qp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jp(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,m,y,x,p){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:m,groupOrder:y,renderOrder:d.renderOrder,z:x,group:p},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=m,c.groupOrder=y,c.renderOrder=d.renderOrder,c.z=x,c.group=p),e++,c}function a(d,h,m,y,x,p){const c=s(d,h,m,y,x,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(d,h,m,y,x,p){const c=s(d,h,m,y,x,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||o1),i.length>1&&i.sort(h||Qp),r.length>1&&r.sort(h||Qp)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:f,sort:u}}function s1(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Jp,t.set(i,[s])):r>=o.length?(s=new Jp,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function a1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new tt};break;case"SpotLight":n={position:new O,direction:new O,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function l1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let u1=0;function c1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function f1(t,e){const n=new a1,i=l1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new O);const o=new O,s=new Et,a=new Et;function l(f,d){let h=0,m=0,y=0;for(let ne=0;ne<9;ne++)r.probe[ne].set(0,0,0);let x=0,p=0,c=0,_=0,v=0,g=0,S=0,R=0,A=0,N=0;f.sort(c1);const M=d===!0?Math.PI:1;for(let ne=0,te=f.length;ne<te;ne++){const H=f[ne],q=H.color,$=H.intensity,re=H.distance,Z=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)h+=q.r*$*M,m+=q.g*$*M,y+=q.b*$*M;else if(H.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(H.sh.coefficients[I],$);else if(H.isDirectionalLight){const I=n.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity*M),H.castShadow){const j=H.shadow,W=i.get(H);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,r.directionalShadow[x]=W,r.directionalShadowMap[x]=Z,r.directionalShadowMatrix[x]=H.shadow.matrix,g++}r.directional[x]=I,x++}else if(H.isSpotLight){const I=n.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(q).multiplyScalar($*M),I.distance=re,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,r.spot[c]=I;const j=H.shadow;if(H.map&&(r.spotLightMap[A]=H.map,A++,j.updateMatrices(H),H.castShadow&&N++),r.spotLightMatrix[c]=j.matrix,H.castShadow){const W=i.get(H);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,r.spotShadow[c]=W,r.spotShadowMap[c]=Z,R++}c++}else if(H.isRectAreaLight){const I=n.get(H);I.color.copy(q).multiplyScalar($),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),r.rectArea[_]=I,_++}else if(H.isPointLight){const I=n.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity*M),I.distance=H.distance,I.decay=H.decay,H.castShadow){const j=H.shadow,W=i.get(H);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,r.pointShadow[p]=W,r.pointShadowMap[p]=Z,r.pointShadowMatrix[p]=H.shadow.matrix,S++}r.point[p]=I,p++}else if(H.isHemisphereLight){const I=n.get(H);I.skyColor.copy(H.color).multiplyScalar($*M),I.groundColor.copy(H.groundColor).multiplyScalar($*M),r.hemi[v]=I,v++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=y;const T=r.hash;(T.directionalLength!==x||T.pointLength!==p||T.spotLength!==c||T.rectAreaLength!==_||T.hemiLength!==v||T.numDirectionalShadows!==g||T.numPointShadows!==S||T.numSpotShadows!==R||T.numSpotMaps!==A)&&(r.directional.length=x,r.spot.length=c,r.rectArea.length=_,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=g,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=R+A-N,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=N,T.directionalLength=x,T.pointLength=p,T.spotLength=c,T.rectAreaLength=_,T.hemiLength=v,T.numDirectionalShadows=g,T.numPointShadows=S,T.numSpotShadows=R,T.numSpotMaps=A,r.version=u1++)}function u(f,d){let h=0,m=0,y=0,x=0,p=0;const c=d.matrixWorldInverse;for(let _=0,v=f.length;_<v;_++){const g=f[_];if(g.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(g.matrixWorld),o.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(c),h++}else if(g.isSpotLight){const S=r.spot[y];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(c),S.direction.setFromMatrixPosition(g.matrixWorld),o.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(c),y++}else if(g.isRectAreaLight){const S=r.rectArea[x];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(c),a.identity(),s.copy(g.matrixWorld),s.premultiply(c),a.extractRotation(s),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(g.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(c),m++}else if(g.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:r}}function em(t,e){const n=new f1(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function d1(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new em(t,e),n.set(o,[l])):s>=a.length?(l=new em(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class h1 extends sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p1 extends sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
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
}`;function v1(t,e,n){let i=new xd;const r=new Fe,o=new Fe,s=new at,a=new h1({depthPacking:$x}),l=new p1,u={},f=n.maxTextureSize,d={[Ji]:on,[on]:Ji,[pi]:pi},h=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const y=new wi;y.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Rn(y,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gv;let c=this.type;this.render=function(S,R,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const N=t.getRenderTarget(),M=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),ne=t.state;ne.setBlending($i),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const te=c!==fi&&this.type===fi,H=c===fi&&this.type!==fi;for(let q=0,$=S.length;q<$;q++){const re=S[q],Z=re.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const I=Z.getFrameExtents();if(r.multiply(I),o.copy(Z.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/I.x),r.x=o.x*I.x,Z.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/I.y),r.y=o.y*I.y,Z.mapSize.y=o.y)),Z.map===null||te===!0||H===!0){const W=this.type!==fi?{minFilter:qt,magFilter:qt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Lr(r.x,r.y,W),Z.map.texture.name=re.name+".shadowMap",Z.camera.updateProjectionMatrix()}t.setRenderTarget(Z.map),t.clear();const j=Z.getViewportCount();for(let W=0;W<j;W++){const B=Z.getViewport(W);s.set(o.x*B.x,o.y*B.y,o.x*B.z,o.y*B.w),ne.viewport(s),Z.updateMatrices(re,W),i=Z.getFrustum(),g(R,A,Z.camera,re,this.type)}Z.isPointLightShadow!==!0&&this.type===fi&&_(Z,A),Z.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(N,M,T)};function _(S,R){const A=e.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Lr(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(R,null,A,h,x,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(R,null,A,m,x,null)}function v(S,R,A,N){let M=null;const T=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)M=T;else if(M=A.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const ne=M.uuid,te=R.uuid;let H=u[ne];H===void 0&&(H={},u[ne]=H);let q=H[te];q===void 0&&(q=M.clone(),H[te]=q),M=q}if(M.visible=R.visible,M.wireframe=R.wireframe,N===fi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const ne=t.properties.get(M);ne.light=A}return M}function g(S,R,A,N,M){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===fi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const te=e.update(S),H=S.material;if(Array.isArray(H)){const q=te.groups;for(let $=0,re=q.length;$<re;$++){const Z=q[$],I=H[Z.materialIndex];if(I&&I.visible){const j=v(S,I,N,M);t.renderBufferDirect(A,null,te,j,S,Z)}}}else if(H.visible){const q=v(S,H,N,M);t.renderBufferDirect(A,null,te,q,S,null)}}const ne=S.children;for(let te=0,H=ne.length;te<H;te++)g(ne[te],R,A,N,M)}}function _1(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const ee=new at;let U=null;const X=new at(0,0,0,0);return{setMask:function(ae){U!==ae&&!P&&(t.colorMask(ae,ae,ae,ae),U=ae)},setLocked:function(ae){P=ae},setClear:function(ae,Ce,Te,ze,Je){Je===!0&&(ae*=ze,Ce*=ze,Te*=ze),ee.set(ae,Ce,Te,ze),X.equals(ee)===!1&&(t.clearColor(ae,Ce,Te,ze),X.copy(ee))},reset:function(){P=!1,U=null,X.set(-1,0,0,0)}}}function o(){let P=!1,ee=null,U=null,X=null;return{setTest:function(ae){ae?Re(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(ae){ee!==ae&&!P&&(t.depthMask(ae),ee=ae)},setFunc:function(ae){if(U!==ae){switch(ae){case Tx:t.depthFunc(t.NEVER);break;case wx:t.depthFunc(t.ALWAYS);break;case Ax:t.depthFunc(t.LESS);break;case lf:t.depthFunc(t.LEQUAL);break;case Rx:t.depthFunc(t.EQUAL);break;case Cx:t.depthFunc(t.GEQUAL);break;case Px:t.depthFunc(t.GREATER);break;case Lx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}U=ae}},setLocked:function(ae){P=ae},setClear:function(ae){X!==ae&&(t.clearDepth(ae),X=ae)},reset:function(){P=!1,ee=null,U=null,X=null}}}function s(){let P=!1,ee=null,U=null,X=null,ae=null,Ce=null,Te=null,ze=null,Je=null;return{setTest:function($e){P||($e?Re(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function($e){ee!==$e&&!P&&(t.stencilMask($e),ee=$e)},setFunc:function($e,Lt,mt){(U!==$e||X!==Lt||ae!==mt)&&(t.stencilFunc($e,Lt,mt),U=$e,X=Lt,ae=mt)},setOp:function($e,Lt,mt){(Ce!==$e||Te!==Lt||ze!==mt)&&(t.stencilOp($e,Lt,mt),Ce=$e,Te=Lt,ze=mt)},setLocked:function($e){P=$e},setClear:function($e){Je!==$e&&(t.clearStencil($e),Je=$e)},reset:function(){P=!1,ee=null,U=null,X=null,ae=null,Ce=null,Te=null,ze=null,Je=null}}}const a=new r,l=new o,u=new s,f=new WeakMap,d=new WeakMap;let h={},m={},y=new WeakMap,x=[],p=null,c=!1,_=null,v=null,g=null,S=null,R=null,A=null,N=null,M=!1,T=null,ne=null,te=null,H=null,q=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,Z=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(I)[1]),re=Z>=1):I.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),re=Z>=2);let j=null,W={};const B=t.getParameter(t.SCISSOR_BOX),V=t.getParameter(t.VIEWPORT),he=new at().fromArray(B),se=new at().fromArray(V);function pe(P,ee,U,X){const ae=new Uint8Array(4),Ce=t.createTexture();t.bindTexture(P,Ce),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<U;Te++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(ee,0,t.RGBA,1,1,X,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(ee+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Ce}const _e={};_e[t.TEXTURE_2D]=pe(t.TEXTURE_2D,t.TEXTURE_2D,1),_e[t.TEXTURE_CUBE_MAP]=pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_e[t.TEXTURE_2D_ARRAY]=pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),_e[t.TEXTURE_3D]=pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Re(t.DEPTH_TEST),l.setFunc(lf),Ee(!1),Qe(kh),Re(t.CULL_FACE),Me($i);function Re(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function xe(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function Xe(P,ee){return m[P]!==ee?(t.bindFramebuffer(P,ee),m[P]=ee,i&&(P===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ee),P===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ee)),!0):!1}function Tt(P,ee){let U=x,X=!1;if(P)if(U=y.get(ee),U===void 0&&(U=[],y.set(ee,U)),P.isWebGLMultipleRenderTargets){const ae=P.texture;if(U.length!==ae.length||U[0]!==t.COLOR_ATTACHMENT0){for(let Ce=0,Te=ae.length;Ce<Te;Ce++)U[Ce]=t.COLOR_ATTACHMENT0+Ce;U.length=ae.length,X=!0}}else U[0]!==t.COLOR_ATTACHMENT0&&(U[0]=t.COLOR_ATTACHMENT0,X=!0);else U[0]!==t.BACK&&(U[0]=t.BACK,X=!0);X&&(n.isWebGL2?t.drawBuffers(U):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(U))}function Ue(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const G={[ro]:t.FUNC_ADD,[hx]:t.FUNC_SUBTRACT,[px]:t.FUNC_REVERSE_SUBTRACT};if(i)G[Vh]=t.MIN,G[Wh]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(G[Vh]=P.MIN_EXT,G[Wh]=P.MAX_EXT)}const _t={[mx]:t.ZERO,[gx]:t.ONE,[vx]:t.SRC_COLOR,[Vv]:t.SRC_ALPHA,[Ex]:t.SRC_ALPHA_SATURATE,[Sx]:t.DST_COLOR,[yx]:t.DST_ALPHA,[_x]:t.ONE_MINUS_SRC_COLOR,[Wv]:t.ONE_MINUS_SRC_ALPHA,[Mx]:t.ONE_MINUS_DST_COLOR,[xx]:t.ONE_MINUS_DST_ALPHA};function Me(P,ee,U,X,ae,Ce,Te,ze){if(P===$i){c===!0&&(xe(t.BLEND),c=!1);return}if(c===!1&&(Re(t.BLEND),c=!0),P!==dx){if(P!==_||ze!==M){if((v!==ro||R!==ro)&&(t.blendEquation(t.FUNC_ADD),v=ro,R=ro),ze)switch(P){case Co:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bh:t.blendFunc(t.ONE,t.ONE);break;case Hh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Co:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Hh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}g=null,S=null,A=null,N=null,_=P,M=ze}return}ae=ae||ee,Ce=Ce||U,Te=Te||X,(ee!==v||ae!==R)&&(t.blendEquationSeparate(G[ee],G[ae]),v=ee,R=ae),(U!==g||X!==S||Ce!==A||Te!==N)&&(t.blendFuncSeparate(_t[U],_t[X],_t[Ce],_t[Te]),g=U,S=X,A=Ce,N=Te),_=P,M=!1}function we(P,ee){P.side===pi?xe(t.CULL_FACE):Re(t.CULL_FACE);let U=P.side===on;ee&&(U=!U),Ee(U),P.blending===Co&&P.transparent===!1?Me($i):Me(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const X=P.stencilWrite;u.setTest(X),X&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Le(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Re(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(P){T!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),T=P)}function Qe(P){P!==ux?(Re(t.CULL_FACE),P!==ne&&(P===kh?t.cullFace(t.BACK):P===cx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),ne=P}function Ie(P){P!==te&&(re&&t.lineWidth(P),te=P)}function Le(P,ee,U){P?(Re(t.POLYGON_OFFSET_FILL),(H!==ee||q!==U)&&(t.polygonOffset(ee,U),H=ee,q=U)):xe(t.POLYGON_OFFSET_FILL)}function Oe(P){P?Re(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function ft(P){P===void 0&&(P=t.TEXTURE0+$-1),j!==P&&(t.activeTexture(P),j=P)}function pt(P,ee,U){U===void 0&&(j===null?U=t.TEXTURE0+$-1:U=j);let X=W[U];X===void 0&&(X={type:void 0,texture:void 0},W[U]=X),(X.type!==P||X.texture!==ee)&&(j!==U&&(t.activeTexture(U),j=U),t.bindTexture(P,ee||_e[P]),X.type=P,X.texture=ee)}function C(){const P=W[j];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function E(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function L(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function b(P){he.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),he.copy(P))}function D(P){se.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),se.copy(P))}function z(P,ee){let U=d.get(ee);U===void 0&&(U=new WeakMap,d.set(ee,U));let X=U.get(P);X===void 0&&(X=t.getUniformBlockIndex(ee,P.name),U.set(P,X))}function ie(P,ee){const X=d.get(ee).get(P);f.get(ee)!==X&&(t.uniformBlockBinding(ee,X,P.__bindingPointIndex),f.set(ee,X))}function de(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},j=null,W={},m={},y=new WeakMap,x=[],p=null,c=!1,_=null,v=null,g=null,S=null,R=null,A=null,N=null,M=!1,T=null,ne=null,te=null,H=null,q=null,he.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Re,disable:xe,bindFramebuffer:Xe,drawBuffers:Tt,useProgram:Ue,setBlending:Me,setMaterial:we,setFlipSided:Ee,setCullFace:Qe,setLineWidth:Ie,setPolygonOffset:Le,setScissorTest:Oe,activeTexture:ft,bindTexture:pt,unbindTexture:C,compressedTexImage2D:E,compressedTexImage3D:Q,texImage2D:ve,texImage3D:Se,updateUBOMapping:z,uniformBlockBinding:ie,texStorage2D:le,texStorage3D:Y,texSubImage2D:ce,texSubImage3D:fe,compressedTexSubImage2D:L,compressedTexSubImage3D:oe,scissor:b,viewport:D,reset:de}}function y1(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let x;const p=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return c?new OffscreenCanvas(C,E):Qs("canvas")}function v(C,E,Q,ce){let fe=1;if((C.width>ce||C.height>ce)&&(fe=ce/Math.max(C.width,C.height)),fe<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const L=E?Dl:Math.floor,oe=L(fe*C.width),le=L(fe*C.height);x===void 0&&(x=_(oe,le));const Y=Q?_(oe,le):x;return Y.width=oe,Y.height=le,Y.getContext("2d").drawImage(C,0,0,oe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+oe+"x"+le+")."),Y}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return pf(C.width)&&pf(C.height)}function S(C){return a?!1:C.wrapS!==Vn||C.wrapT!==Vn||C.minFilter!==qt&&C.minFilter!==wn}function R(C,E){return C.generateMipmaps&&E&&C.minFilter!==qt&&C.minFilter!==wn}function A(C){t.generateMipmap(C)}function N(C,E,Q,ce,fe=!1){if(a===!1)return E;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let L=E;return E===t.RED&&(Q===t.FLOAT&&(L=t.R32F),Q===t.HALF_FLOAT&&(L=t.R16F),Q===t.UNSIGNED_BYTE&&(L=t.R8)),E===t.RG&&(Q===t.FLOAT&&(L=t.RG32F),Q===t.HALF_FLOAT&&(L=t.RG16F),Q===t.UNSIGNED_BYTE&&(L=t.RG8)),E===t.RGBA&&(Q===t.FLOAT&&(L=t.RGBA32F),Q===t.HALF_FLOAT&&(L=t.RGBA16F),Q===t.UNSIGNED_BYTE&&(L=ce===He&&fe===!1?t.SRGB8_ALPHA8:t.RGBA8),Q===t.UNSIGNED_SHORT_4_4_4_4&&(L=t.RGBA4),Q===t.UNSIGNED_SHORT_5_5_5_1&&(L=t.RGB5_A1)),(L===t.R16F||L===t.R32F||L===t.RG16F||L===t.RG32F||L===t.RGBA16F||L===t.RGBA32F)&&e.get("EXT_color_buffer_float"),L}function M(C,E,Q){return R(C,Q)===!0||C.isFramebufferTexture&&C.minFilter!==qt&&C.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function T(C){return C===qt||C===Xh||C===Uu?t.NEAREST:t.LINEAR}function ne(C){const E=C.target;E.removeEventListener("dispose",ne),H(E),E.isVideoTexture&&y.delete(E)}function te(C){const E=C.target;E.removeEventListener("dispose",te),$(E)}function H(C){const E=i.get(C);if(E.__webglInit===void 0)return;const Q=C.source,ce=p.get(Q);if(ce){const fe=ce[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&q(C),Object.keys(ce).length===0&&p.delete(Q)}i.remove(C)}function q(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const Q=C.source,ce=p.get(Q);delete ce[E.__cacheKey],s.memory.textures--}function $(C){const E=C.texture,Q=i.get(C),ce=i.get(E);if(ce.__webglTexture!==void 0&&(t.deleteTexture(ce.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++)t.deleteFramebuffer(Q.__webglFramebuffer[fe]),Q.__webglDepthbuffer&&t.deleteRenderbuffer(Q.__webglDepthbuffer[fe]);else{if(t.deleteFramebuffer(Q.__webglFramebuffer),Q.__webglDepthbuffer&&t.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&t.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let fe=0;fe<Q.__webglColorRenderbuffer.length;fe++)Q.__webglColorRenderbuffer[fe]&&t.deleteRenderbuffer(Q.__webglColorRenderbuffer[fe]);Q.__webglDepthRenderbuffer&&t.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let fe=0,L=E.length;fe<L;fe++){const oe=i.get(E[fe]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),s.memory.textures--),i.remove(E[fe])}i.remove(E),i.remove(C)}let re=0;function Z(){re=0}function I(){const C=re;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),re+=1,C}function j(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function W(C,E){const Q=i.get(C);if(C.isVideoTexture&&ft(C),C.isRenderTargetTexture===!1&&C.version>0&&Q.__version!==C.version){const ce=C.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(Q,C,E);return}}n.bindTexture(t.TEXTURE_2D,Q.__webglTexture,t.TEXTURE0+E)}function B(C,E){const Q=i.get(C);if(C.version>0&&Q.__version!==C.version){Xe(Q,C,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Q.__webglTexture,t.TEXTURE0+E)}function V(C,E){const Q=i.get(C);if(C.version>0&&Q.__version!==C.version){Xe(Q,C,E);return}n.bindTexture(t.TEXTURE_3D,Q.__webglTexture,t.TEXTURE0+E)}function he(C,E){const Q=i.get(C);if(C.version>0&&Q.__version!==C.version){Tt(Q,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture,t.TEXTURE0+E)}const se={[ff]:t.REPEAT,[Vn]:t.CLAMP_TO_EDGE,[df]:t.MIRRORED_REPEAT},pe={[qt]:t.NEAREST,[Xh]:t.NEAREST_MIPMAP_NEAREST,[Uu]:t.NEAREST_MIPMAP_LINEAR,[wn]:t.LINEAR,[zx]:t.LINEAR_MIPMAP_NEAREST,[$s]:t.LINEAR_MIPMAP_LINEAR},_e={[Qx]:t.NEVER,[oS]:t.ALWAYS,[Jx]:t.LESS,[tS]:t.LEQUAL,[eS]:t.EQUAL,[rS]:t.GEQUAL,[nS]:t.GREATER,[iS]:t.NOTEQUAL};function Re(C,E,Q){if(Q?(t.texParameteri(C,t.TEXTURE_WRAP_S,se[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,se[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,se[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,pe[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,pe[E.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Vn||E.wrapT!==Vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,T(E.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==qt&&E.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,_e[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===qt||E.minFilter!==Uu&&E.minFilter!==$s||E.type===Bi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ks&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(C,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function xe(C,E){let Q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",ne));const ce=E.source;let fe=p.get(ce);fe===void 0&&(fe={},p.set(ce,fe));const L=j(E);if(L!==C.__cacheKey){fe[L]===void 0&&(fe[L]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,Q=!0),fe[L].usedTimes++;const oe=fe[C.__cacheKey];oe!==void 0&&(fe[C.__cacheKey].usedTimes--,oe.usedTimes===0&&q(E)),C.__cacheKey=L,C.__webglTexture=fe[L].texture}return Q}function Xe(C,E,Q){let ce=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=t.TEXTURE_3D);const fe=xe(C,E),L=E.source;n.bindTexture(ce,C.__webglTexture,t.TEXTURE0+Q);const oe=i.get(L);if(L.version!==oe.__version||fe===!0){n.activeTexture(t.TEXTURE0+Q),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const le=S(E)&&g(E.image)===!1;let Y=v(E.image,le,!1,f);Y=pt(E,Y);const ve=g(Y)||a,Se=o.convert(E.format,E.colorSpace);let b=o.convert(E.type),D=N(E.internalFormat,Se,b,E.colorSpace);Re(ce,E,ve);let z;const ie=E.mipmaps,de=a&&E.isVideoTexture!==!0,P=oe.__version===void 0||fe===!0,ee=M(E,Y,ve);if(E.isDepthTexture)D=t.DEPTH_COMPONENT,a?E.type===Bi?D=t.DEPTH_COMPONENT32F:E.type===ki?D=t.DEPTH_COMPONENT24:E.type===xr?D=t.DEPTH24_STENCIL8:D=t.DEPTH_COMPONENT16:E.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Sr&&D===t.DEPTH_COMPONENT&&E.type!==gd&&E.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ki,b=o.convert(E.type)),E.format===Bo&&D===t.DEPTH_COMPONENT&&(D=t.DEPTH_STENCIL,E.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=xr,b=o.convert(E.type))),P&&(de?n.texStorage2D(t.TEXTURE_2D,1,D,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,D,Y.width,Y.height,0,Se,b,null));else if(E.isDataTexture)if(ie.length>0&&ve){de&&P&&n.texStorage2D(t.TEXTURE_2D,ee,D,ie[0].width,ie[0].height);for(let U=0,X=ie.length;U<X;U++)z=ie[U],de?n.texSubImage2D(t.TEXTURE_2D,U,0,0,z.width,z.height,Se,b,z.data):n.texImage2D(t.TEXTURE_2D,U,D,z.width,z.height,0,Se,b,z.data);E.generateMipmaps=!1}else de?(P&&n.texStorage2D(t.TEXTURE_2D,ee,D,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,Se,b,Y.data)):n.texImage2D(t.TEXTURE_2D,0,D,Y.width,Y.height,0,Se,b,Y.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){de&&P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ee,D,ie[0].width,ie[0].height,Y.depth);for(let U=0,X=ie.length;U<X;U++)z=ie[U],E.format!==Wn?Se!==null?de?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,U,0,0,0,z.width,z.height,Y.depth,Se,z.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,U,D,z.width,z.height,Y.depth,0,z.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?n.texSubImage3D(t.TEXTURE_2D_ARRAY,U,0,0,0,z.width,z.height,Y.depth,Se,b,z.data):n.texImage3D(t.TEXTURE_2D_ARRAY,U,D,z.width,z.height,Y.depth,0,Se,b,z.data)}else{de&&P&&n.texStorage2D(t.TEXTURE_2D,ee,D,ie[0].width,ie[0].height);for(let U=0,X=ie.length;U<X;U++)z=ie[U],E.format!==Wn?Se!==null?de?n.compressedTexSubImage2D(t.TEXTURE_2D,U,0,0,z.width,z.height,Se,z.data):n.compressedTexImage2D(t.TEXTURE_2D,U,D,z.width,z.height,0,z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?n.texSubImage2D(t.TEXTURE_2D,U,0,0,z.width,z.height,Se,b,z.data):n.texImage2D(t.TEXTURE_2D,U,D,z.width,z.height,0,Se,b,z.data)}else if(E.isDataArrayTexture)de?(P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ee,D,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Se,b,Y.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,D,Y.width,Y.height,Y.depth,0,Se,b,Y.data);else if(E.isData3DTexture)de?(P&&n.texStorage3D(t.TEXTURE_3D,ee,D,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Se,b,Y.data)):n.texImage3D(t.TEXTURE_3D,0,D,Y.width,Y.height,Y.depth,0,Se,b,Y.data);else if(E.isFramebufferTexture){if(P)if(de)n.texStorage2D(t.TEXTURE_2D,ee,D,Y.width,Y.height);else{let U=Y.width,X=Y.height;for(let ae=0;ae<ee;ae++)n.texImage2D(t.TEXTURE_2D,ae,D,U,X,0,Se,b,null),U>>=1,X>>=1}}else if(ie.length>0&&ve){de&&P&&n.texStorage2D(t.TEXTURE_2D,ee,D,ie[0].width,ie[0].height);for(let U=0,X=ie.length;U<X;U++)z=ie[U],de?n.texSubImage2D(t.TEXTURE_2D,U,0,0,Se,b,z):n.texImage2D(t.TEXTURE_2D,U,D,Se,b,z);E.generateMipmaps=!1}else de?(P&&n.texStorage2D(t.TEXTURE_2D,ee,D,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,b,Y)):n.texImage2D(t.TEXTURE_2D,0,D,Se,b,Y);R(E,ve)&&A(ce),oe.__version=L.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Tt(C,E,Q){if(E.image.length!==6)return;const ce=xe(C,E),fe=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+Q);const L=i.get(fe);if(fe.version!==L.__version||ce===!0){n.activeTexture(t.TEXTURE0+Q),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const oe=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,Y=[];for(let U=0;U<6;U++)!oe&&!le?Y[U]=v(E.image[U],!1,!0,u):Y[U]=le?E.image[U].image:E.image[U],Y[U]=pt(E,Y[U]);const ve=Y[0],Se=g(ve)||a,b=o.convert(E.format,E.colorSpace),D=o.convert(E.type),z=N(E.internalFormat,b,D,E.colorSpace),ie=a&&E.isVideoTexture!==!0,de=L.__version===void 0||ce===!0;let P=M(E,ve,Se);Re(t.TEXTURE_CUBE_MAP,E,Se);let ee;if(oe){ie&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,P,z,ve.width,ve.height);for(let U=0;U<6;U++){ee=Y[U].mipmaps;for(let X=0;X<ee.length;X++){const ae=ee[X];E.format!==Wn?b!==null?ie?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X,0,0,ae.width,ae.height,b,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X,z,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X,0,0,ae.width,ae.height,b,D,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X,z,ae.width,ae.height,0,b,D,ae.data)}}}else{ee=E.mipmaps,ie&&de&&(ee.length>0&&P++,n.texStorage2D(t.TEXTURE_CUBE_MAP,P,z,Y[0].width,Y[0].height));for(let U=0;U<6;U++)if(le){ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Y[U].width,Y[U].height,b,D,Y[U].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,z,Y[U].width,Y[U].height,0,b,D,Y[U].data);for(let X=0;X<ee.length;X++){const Ce=ee[X].image[U].image;ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X+1,0,0,Ce.width,Ce.height,b,D,Ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X+1,z,Ce.width,Ce.height,0,b,D,Ce.data)}}else{ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,b,D,Y[U]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,z,b,D,Y[U]);for(let X=0;X<ee.length;X++){const ae=ee[X];ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X+1,0,0,b,D,ae.image[U]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X+1,z,b,D,ae.image[U])}}}R(E,Se)&&A(t.TEXTURE_CUBE_MAP),L.__version=fe.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ue(C,E,Q,ce,fe){const L=o.convert(Q.format,Q.colorSpace),oe=o.convert(Q.type),le=N(Q.internalFormat,L,oe,Q.colorSpace);i.get(E).__hasExternalTextures||(fe===t.TEXTURE_3D||fe===t.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,le,E.width,E.height,E.depth,0,L,oe,null):n.texImage2D(fe,0,le,E.width,E.height,0,L,oe,null)),n.bindFramebuffer(t.FRAMEBUFFER,C),Oe(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,fe,i.get(Q).__webglTexture,0,Le(E)):(fe===t.TEXTURE_2D||fe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ce,fe,i.get(Q).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function G(C,E,Q){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let ce=t.DEPTH_COMPONENT16;if(Q||Oe(E)){const fe=E.depthTexture;fe&&fe.isDepthTexture&&(fe.type===Bi?ce=t.DEPTH_COMPONENT32F:fe.type===ki&&(ce=t.DEPTH_COMPONENT24));const L=Le(E);Oe(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L,ce,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,L,ce,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ce,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const ce=Le(E);Q&&Oe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,t.DEPTH24_STENCIL8,E.width,E.height):Oe(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const ce=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let fe=0;fe<ce.length;fe++){const L=ce[fe],oe=o.convert(L.format,L.colorSpace),le=o.convert(L.type),Y=N(L.internalFormat,oe,le,L.colorSpace),ve=Le(E);Q&&Oe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Y,E.width,E.height):Oe(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,Y,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Y,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function _t(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const ce=i.get(E.depthTexture).__webglTexture,fe=Le(E);if(E.depthTexture.format===Sr)Oe(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ce,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ce,0);else if(E.depthTexture.format===Bo)Oe(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ce,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Me(C){const E=i.get(C),Q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");_t(E.__webglFramebuffer,C)}else if(Q){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]=t.createRenderbuffer(),G(E.__webglDepthbuffer[ce],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),G(E.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(C,E,Q){const ce=i.get(C);E!==void 0&&Ue(ce.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),Q!==void 0&&Me(C)}function Ee(C){const E=C.texture,Q=i.get(C),ce=i.get(E);C.addEventListener("dispose",te),C.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture()),ce.__version=E.version,s.memory.textures++);const fe=C.isWebGLCubeRenderTarget===!0,L=C.isWebGLMultipleRenderTargets===!0,oe=g(C)||a;if(fe){Q.__webglFramebuffer=[];for(let le=0;le<6;le++)Q.__webglFramebuffer[le]=t.createFramebuffer()}else{if(Q.__webglFramebuffer=t.createFramebuffer(),L)if(r.drawBuffers){const le=C.texture;for(let Y=0,ve=le.length;Y<ve;Y++){const Se=i.get(le[Y]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Oe(C)===!1){const le=L?E:[E];Q.__webglMultisampledFramebuffer=t.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Y=0;Y<le.length;Y++){const ve=le[Y];Q.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Q.__webglColorRenderbuffer[Y]);const Se=o.convert(ve.format,ve.colorSpace),b=o.convert(ve.type),D=N(ve.internalFormat,Se,b,ve.colorSpace,C.isXRRenderTarget===!0),z=Le(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,z,D,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,Q.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(Q.__webglDepthRenderbuffer=t.createRenderbuffer(),G(Q.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(fe){n.bindTexture(t.TEXTURE_CUBE_MAP,ce.__webglTexture),Re(t.TEXTURE_CUBE_MAP,E,oe);for(let le=0;le<6;le++)Ue(Q.__webglFramebuffer[le],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le);R(E,oe)&&A(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(L){const le=C.texture;for(let Y=0,ve=le.length;Y<ve;Y++){const Se=le[Y],b=i.get(Se);n.bindTexture(t.TEXTURE_2D,b.__webglTexture),Re(t.TEXTURE_2D,Se,oe),Ue(Q.__webglFramebuffer,C,Se,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D),R(Se,oe)&&A(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,ce.__webglTexture),Re(le,E,oe),Ue(Q.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,le),R(E,oe)&&A(le),n.unbindTexture()}C.depthBuffer&&Me(C)}function Qe(C){const E=g(C)||a,Q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ce=0,fe=Q.length;ce<fe;ce++){const L=Q[ce];if(R(L,E)){const oe=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(L).__webglTexture;n.bindTexture(oe,le),A(oe),n.unbindTexture()}}}function Ie(C){if(a&&C.samples>0&&Oe(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Q=C.width,ce=C.height;let fe=t.COLOR_BUFFER_BIT;const L=[],oe=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(C),Y=C.isWebGLMultipleRenderTargets===!0;if(Y)for(let ve=0;ve<E.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){L.push(t.COLOR_ATTACHMENT0+ve),C.depthBuffer&&L.push(oe);const Se=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Se===!1&&(C.depthBuffer&&(fe|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(fe|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[ve]),Se===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[oe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[oe])),Y){const b=i.get(E[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,b,0)}t.blitFramebuffer(0,0,Q,ce,0,0,Q,ce,fe,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let ve=0;ve<E.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,le.__webglColorRenderbuffer[ve]);const Se=i.get(E[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Le(C){return Math.min(d,C.samples)}function Oe(C){const E=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ft(C){const E=s.render.frame;y.get(C)!==E&&(y.set(C,E),C.update())}function pt(C,E){const Q=C.colorSpace,ce=C.format,fe=C.type;return C.isCompressedTexture===!0||C.format===hf||Q!==ni&&Q!==Er&&(Q===He?a===!1?e.has("EXT_sRGB")===!0&&ce===Wn?(C.format=hf,C.minFilter=wn,C.generateMipmaps=!1):E=i_.sRGBToLinear(E):(ce!==Wn||fe!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),E}this.allocateTextureUnit=I,this.resetTextureUnits=Z,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=he,this.rebindTextures=we,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Oe}function x1(t,e,n){const i=n.isWebGL2;function r(o,s=Er){let a;if(o===Ki)return t.UNSIGNED_BYTE;if(o===qv)return t.UNSIGNED_SHORT_4_4_4_4;if(o===$v)return t.UNSIGNED_SHORT_5_5_5_1;if(o===kx)return t.BYTE;if(o===Bx)return t.SHORT;if(o===gd)return t.UNSIGNED_SHORT;if(o===Yv)return t.INT;if(o===ki)return t.UNSIGNED_INT;if(o===Bi)return t.FLOAT;if(o===Ks)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Hx)return t.ALPHA;if(o===Wn)return t.RGBA;if(o===Gx)return t.LUMINANCE;if(o===Vx)return t.LUMINANCE_ALPHA;if(o===Sr)return t.DEPTH_COMPONENT;if(o===Bo)return t.DEPTH_STENCIL;if(o===hf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Wx)return t.RED;if(o===Kv)return t.RED_INTEGER;if(o===Xx)return t.RG;if(o===Zv)return t.RG_INTEGER;if(o===Qv)return t.RGBA_INTEGER;if(o===Iu||o===Nu||o===Fu||o===Ou)if(s===He)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Iu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Fu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Ou)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Iu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Nu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Fu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Ou)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===jh||o===Yh||o===qh||o===$h)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===jh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Yh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===qh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===$h)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===jx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Kh||o===Zh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Kh)return s===He?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Zh)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Qh||o===Jh||o===ep||o===tp||o===np||o===ip||o===rp||o===op||o===sp||o===ap||o===lp||o===up||o===cp||o===fp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Qh)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Jh)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===ep)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===tp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===np)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===ip)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===rp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===op)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===sp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===ap)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===lp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===up)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===cp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===fp)return s===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===zu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===zu)return s===He?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===Yx||o===dp||o===hp||o===pp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===zu)return a.COMPRESSED_RED_RGTC1_EXT;if(o===dp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===hp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===pp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===xr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class S1 extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ja extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M1={type:"move"};class sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),c=this._getHandJoint(u,x);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,y=.005;u.inputState.pinching&&h>m+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ja;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class E1 extends sn{constructor(e,n,i,r,o,s,a,l,u,f){if(f=f!==void 0?f:Sr,f!==Sr&&f!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Sr&&(i=ki),i===void 0&&f===Bo&&(i=xr),super(null,r,o,s,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class T1 extends Nr{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,m=null,y=null;const x=n.getContextAttributes();let p=null,c=null;const _=[],v=[],g=new hn;g.layers.enable(1),g.viewport=new at;const S=new hn;S.layers.enable(2),S.viewport=new at;const R=[g,S],A=new S1;A.layers.enable(1),A.layers.enable(2);let N=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let V=_[B];return V===void 0&&(V=new sc,_[B]=V),V.getTargetRaySpace()},this.getControllerGrip=function(B){let V=_[B];return V===void 0&&(V=new sc,_[B]=V),V.getGripSpace()},this.getHand=function(B){let V=_[B];return V===void 0&&(V=new sc,_[B]=V),V.getHandSpace()};function T(B){const V=v.indexOf(B.inputSource);if(V===-1)return;const he=_[V];he!==void 0&&(he.update(B.inputSource,B.frame,u||s),he.dispatchEvent({type:B.type,data:B.inputSource}))}function ne(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",te);for(let B=0;B<_.length;B++){const V=v[B];V!==null&&(v[B]=null,_[B].disconnect(V))}N=null,M=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,c=null,W.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",te),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,V),r.updateRenderState({baseLayer:m}),c=new Lr(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let V=null,he=null,se=null;x.depth&&(se=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,V=x.stencil?Bo:Sr,he=x.stencil?xr:ki);const pe={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(pe),r.updateRenderState({layers:[h]}),c=new Lr(h.textureWidth,h.textureHeight,{format:Wn,type:Ki,depthTexture:new E1(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const _e=e.properties.get(c);_e.__ignoreDepthValues=h.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),W.setContext(r),W.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(B){for(let V=0;V<B.removed.length;V++){const he=B.removed[V],se=v.indexOf(he);se>=0&&(v[se]=null,_[se].disconnect(he))}for(let V=0;V<B.added.length;V++){const he=B.added[V];let se=v.indexOf(he);if(se===-1){for(let _e=0;_e<_.length;_e++)if(_e>=v.length){v.push(he),se=_e;break}else if(v[_e]===null){v[_e]=he,se=_e;break}if(se===-1)break}const pe=_[se];pe&&pe.connect(he)}}const H=new O,q=new O;function $(B,V,he){H.setFromMatrixPosition(V.matrixWorld),q.setFromMatrixPosition(he.matrixWorld);const se=H.distanceTo(q),pe=V.projectionMatrix.elements,_e=he.projectionMatrix.elements,Re=pe[14]/(pe[10]-1),xe=pe[14]/(pe[10]+1),Xe=(pe[9]+1)/pe[5],Tt=(pe[9]-1)/pe[5],Ue=(pe[8]-1)/pe[0],G=(_e[8]+1)/_e[0],_t=Re*Ue,Me=Re*G,we=se/(-Ue+G),Ee=we*-Ue;V.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ee),B.translateZ(we),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Qe=Re+we,Ie=xe+we,Le=_t-Ee,Oe=Me+(se-Ee),ft=Xe*xe/Ie*Qe,pt=Tt*xe/Ie*Qe;B.projectionMatrix.makePerspective(Le,Oe,ft,pt,Qe,Ie),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function re(B,V){V===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(V.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;A.near=S.near=g.near=B.near,A.far=S.far=g.far=B.far,(N!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),N=A.near,M=A.far);const V=B.parent,he=A.cameras;re(A,V);for(let se=0;se<he.length;se++)re(he[se],V);he.length===2?$(A,g,S):A.projectionMatrix.copy(g.projectionMatrix),Z(B,A,V)};function Z(B,V,he){he===null?B.matrix.copy(V.matrixWorld):(B.matrix.copy(he.matrixWorld),B.matrix.invert(),B.matrix.multiply(V.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0);const se=B.children;for(let pe=0,_e=se.length;pe<_e;pe++)se[pe].updateMatrixWorld(!0);B.projectionMatrix.copy(V.projectionMatrix),B.projectionMatrixInverse.copy(V.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Zs*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let I=null;function j(B,V){if(f=V.getViewerPose(u||s),y=V,f!==null){const he=f.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let se=!1;he.length!==A.cameras.length&&(A.cameras.length=0,se=!0);for(let pe=0;pe<he.length;pe++){const _e=he[pe];let Re=null;if(m!==null)Re=m.getViewport(_e);else{const Xe=d.getViewSubImage(h,_e);Re=Xe.viewport,pe===0&&(e.setRenderTargetTextures(c,Xe.colorTexture,h.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(c))}let xe=R[pe];xe===void 0&&(xe=new hn,xe.layers.enable(pe),xe.viewport=new at,R[pe]=xe),xe.matrix.fromArray(_e.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(_e.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Re.x,Re.y,Re.width,Re.height),pe===0&&(A.matrix.copy(xe.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),se===!0&&A.cameras.push(xe)}}for(let he=0;he<_.length;he++){const se=v[he],pe=_[he];se!==null&&pe!==void 0&&pe.update(se,V,u||s)}I&&I(B,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),y=null}const W=new h_;W.setAnimationLoop(j),this.setAnimationLoop=function(B){I=B},this.dispose=function(){}}}function w1(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,c_(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,_,v,g){c.isMeshBasicMaterial||c.isMeshLambertMaterial?o(p,c):c.isMeshToonMaterial?(o(p,c),d(p,c)):c.isMeshPhongMaterial?(o(p,c),f(p,c)):c.isMeshStandardMaterial?(o(p,c),h(p,c),c.isMeshPhysicalMaterial&&m(p,c,g)):c.isMeshMatcapMaterial?(o(p,c),y(p,c)):c.isMeshDepthMaterial?o(p,c):c.isMeshDistanceMaterial?(o(p,c),x(p,c)):c.isMeshNormalMaterial?o(p,c):c.isLineBasicMaterial?(s(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,_,v):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function o(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===on&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===on&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const _=e.get(c).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const v=t.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*v,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function s(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,_,v){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*_,p.scale.value=v*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function d(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function h(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,_){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===on&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,c){c.matcap&&(p.matcap.value=c.matcap)}function x(p,c){const _=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function A1(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const g=v.program;i.uniformBlockBinding(_,g)}function u(_,v){let g=r[_.id];g===void 0&&(y(_),g=f(_),r[_.id]=g,_.addEventListener("dispose",p));const S=v.program;i.updateUBOMapping(_,S);const R=e.render.frame;o[_.id]!==R&&(h(_),o[_.id]=R)}function f(_){const v=d();_.__bindingPointIndex=v;const g=t.createBuffer(),S=_.__size,R=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,g),t.bufferData(t.UNIFORM_BUFFER,S,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,g),g}function d(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],g=_.uniforms,S=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,A=g.length;R<A;R++){const N=g[R];if(m(N,R,S)===!0){const M=N.__offset,T=Array.isArray(N.value)?N.value:[N.value];let ne=0;for(let te=0;te<T.length;te++){const H=T[te],q=x(H);typeof H=="number"?(N.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,M+ne,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=H.elements[0],N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=H.elements[0],N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=H.elements[0]):(H.toArray(N.__data,ne),ne+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,N.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,v,g){const S=_.value;if(g[v]===void 0){if(typeof S=="number")g[v]=S;else{const R=Array.isArray(S)?S:[S],A=[];for(let N=0;N<R.length;N++)A.push(R[N].clone());g[v]=A}return!0}else if(typeof S=="number"){if(g[v]!==S)return g[v]=S,!0}else{const R=Array.isArray(g[v])?g[v]:[g[v]],A=Array.isArray(S)?S:[S];for(let N=0;N<R.length;N++){const M=R[N];if(M.equals(A[N])===!1)return M.copy(A[N]),!0}}return!1}function y(_){const v=_.uniforms;let g=0;const S=16;let R=0;for(let A=0,N=v.length;A<N;A++){const M=v[A],T={boundary:0,storage:0},ne=Array.isArray(M.value)?M.value:[M.value];for(let te=0,H=ne.length;te<H;te++){const q=ne[te],$=x(q);T.boundary+=$.boundary,T.storage+=$.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=g,A>0){R=g%S;const te=S-R;R!==0&&te-T.boundary<0&&(g+=S-R,M.__offset=g)}g+=T.storage}return R=g%S,R>0&&(g+=S-R),_.__size=g,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const g=s.indexOf(v.__bindingPointIndex);s.splice(g,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:l,update:u,dispose:c}}function R1(){const t=Qs("canvas");return t.style.display="block",t}class __{constructor(e={}){const{canvas:n=R1(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const m=new Uint32Array(4),y=new Int32Array(4);let x=null,p=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=He,this.useLegacyLights=!0,this.toneMapping=yi,this.toneMappingExposure=1;const v=this;let g=!1,S=0,R=0,A=null,N=-1,M=null;const T=new at,ne=new at;let te=null;const H=new tt(0);let q=0,$=n.width,re=n.height,Z=1,I=null,j=null;const W=new at(0,0,$,re),B=new at(0,0,$,re);let V=!1;const he=new xd;let se=!1,pe=!1,_e=null;const Re=new Et,xe=new Fe,Xe=new O,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return A===null?Z:1}let G=i;function _t(w,F){for(let K=0;K<w.length;K++){const k=w[K],J=n.getContext(k,F);if(J!==null)return J}return null}try{const w={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${md}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",U,!1),n.addEventListener("webglcontextcreationerror",X,!1),G===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),G=_t(F,w),G===null)throw _t(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Me,we,Ee,Qe,Ie,Le,Oe,ft,pt,C,E,Q,ce,fe,L,oe,le,Y,ve,Se,b,D,z,ie;function de(){Me=new OT(G),we=new LT(G,Me,e),Me.init(we),D=new x1(G,Me,we),Ee=new _1(G,Me,we),Qe=new BT(G),Ie=new r1,Le=new y1(G,Me,Ee,Ie,we,D,Qe),Oe=new DT(v),ft=new FT(v),pt=new $S(G,we),z=new CT(G,Me,pt,we),C=new zT(G,pt,Qe,z),E=new WT(G,C,pt,Qe),ve=new VT(G,we,Le),oe=new bT(Ie),Q=new i1(v,Oe,ft,Me,we,z,oe),ce=new w1(v,Ie),fe=new s1,L=new d1(Me,we),Y=new RT(v,Oe,ft,Ee,E,h,l),le=new v1(v,E,we),ie=new A1(G,Qe,we,Ee),Se=new PT(G,Me,Qe,we),b=new kT(G,Me,Qe,we),Qe.programs=Q.programs,v.capabilities=we,v.extensions=Me,v.properties=Ie,v.renderLists=fe,v.shadowMap=le,v.state=Ee,v.info=Qe}de();const P=new T1(v,G);this.xr=P,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize($,re,!1))},this.getSize=function(w){return w.set($,re)},this.setSize=function(w,F,K=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,re=F,n.width=Math.floor(w*Z),n.height=Math.floor(F*Z),K===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set($*Z,re*Z).floor()},this.setDrawingBufferSize=function(w,F,K){$=w,re=F,Z=K,n.width=Math.floor(w*K),n.height=Math.floor(F*K),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(W)},this.setViewport=function(w,F,K,k){w.isVector4?W.set(w.x,w.y,w.z,w.w):W.set(w,F,K,k),Ee.viewport(T.copy(W).multiplyScalar(Z).floor())},this.getScissor=function(w){return w.copy(B)},this.setScissor=function(w,F,K,k){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,F,K,k),Ee.scissor(ne.copy(B).multiplyScalar(Z).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(w){Ee.setScissorTest(V=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){j=w},this.getClearColor=function(w){return w.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(w=!0,F=!0,K=!0){let k=0;if(w){let J=!1;if(A!==null){const ye=A.texture.format;J=ye===Qv||ye===Zv||ye===Kv}if(J){const ye=A.texture.type,Ae=ye===Ki||ye===ki||ye===gd||ye===xr||ye===qv||ye===$v,be=Y.getClearColor(),De=Y.getClearAlpha(),Ve=be.r,Ne=be.g,ke=be.b;Ae?(m[0]=Ve,m[1]=Ne,m[2]=ke,m[3]=De,G.clearBufferuiv(G.COLOR,0,m)):(y[0]=Ve,y[1]=Ne,y[2]=ke,y[3]=De,G.clearBufferiv(G.COLOR,0,y))}else k|=G.COLOR_BUFFER_BIT}F&&(k|=G.DEPTH_BUFFER_BIT),K&&(k|=G.STENCIL_BUFFER_BIT),G.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",U,!1),n.removeEventListener("webglcontextcreationerror",X,!1),fe.dispose(),L.dispose(),Ie.dispose(),Oe.dispose(),ft.dispose(),E.dispose(),z.dispose(),ie.dispose(),Q.dispose(),P.dispose(),P.removeEventListener("sessionstart",$e),P.removeEventListener("sessionend",Lt),_e&&(_e.dispose(),_e=null),mt.stop()};function ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const w=Qe.autoReset,F=le.enabled,K=le.autoUpdate,k=le.needsUpdate,J=le.type;de(),Qe.autoReset=w,le.enabled=F,le.autoUpdate=K,le.needsUpdate=k,le.type=J}function X(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ae(w){const F=w.target;F.removeEventListener("dispose",ae),Ce(F)}function Ce(w){Te(w),Ie.remove(w)}function Te(w){const F=Ie.get(w).programs;F!==void 0&&(F.forEach(function(K){Q.releaseProgram(K)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,K,k,J,ye){F===null&&(F=Tt);const Ae=J.isMesh&&J.matrixWorld.determinant()<0,be=Ke(w,F,K,k,J);Ee.setMaterial(k,Ae);let De=K.index,Ve=1;k.wireframe===!0&&(De=C.getWireframeAttribute(K),Ve=2);const Ne=K.drawRange,ke=K.attributes.position;let dt=Ne.start*Ve,gt=(Ne.start+Ne.count)*Ve;ye!==null&&(dt=Math.max(dt,ye.start*Ve),gt=Math.min(gt,(ye.start+ye.count)*Ve)),De!==null?(dt=Math.max(dt,0),gt=Math.min(gt,De.count)):ke!=null&&(dt=Math.max(dt,0),gt=Math.min(gt,ke.count));const Dn=gt-dt;if(Dn<0||Dn===1/0)return;z.setup(J,k,be,K,De);let ri,yt=Se;if(De!==null&&(ri=pt.get(De),yt=b,yt.setIndex(ri)),J.isMesh)k.wireframe===!0?(Ee.setLineWidth(k.wireframeLinewidth*Ue()),yt.setMode(G.LINES)):yt.setMode(G.TRIANGLES);else if(J.isLine){let je=k.linewidth;je===void 0&&(je=1),Ee.setLineWidth(je*Ue()),J.isLineSegments?yt.setMode(G.LINES):J.isLineLoop?yt.setMode(G.LINE_LOOP):yt.setMode(G.LINE_STRIP)}else J.isPoints?yt.setMode(G.POINTS):J.isSprite&&yt.setMode(G.TRIANGLES);if(J.isInstancedMesh)yt.renderInstances(dt,Dn,J.count);else if(K.isInstancedBufferGeometry){const je=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,iu=Math.min(K.instanceCount,je);yt.renderInstances(dt,Dn,iu)}else yt.render(dt,Dn)},this.compile=function(w,F){function K(k,J,ye){k.transparent===!0&&k.side===pi&&k.forceSinglePass===!1?(k.side=on,k.needsUpdate=!0,Ri(k,J,ye),k.side=Ji,k.needsUpdate=!0,Ri(k,J,ye),k.side=pi):Ri(k,J,ye)}p=L.get(w),p.init(),_.push(p),w.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(v.useLegacyLights),w.traverse(function(k){const J=k.material;if(J)if(Array.isArray(J))for(let ye=0;ye<J.length;ye++){const Ae=J[ye];K(Ae,w,k)}else K(J,w,k)}),_.pop(),p=null};let ze=null;function Je(w){ze&&ze(w)}function $e(){mt.stop()}function Lt(){mt.start()}const mt=new h_;mt.setAnimationLoop(Je),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(w){ze=w,P.setAnimationLoop(w),w===null?mt.stop():mt.start()},P.addEventListener("sessionstart",$e),P.addEventListener("sessionend",Lt),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(F),F=P.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,F,A),p=L.get(w,_.length),p.init(),_.push(p),Re.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),he.setFromProjectionMatrix(Re),pe=this.localClippingEnabled,se=oe.init(this.clippingPlanes,pe),x=fe.get(w,c.length),x.init(),c.push(x),Fr(w,F,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(I,j),this.info.render.frame++,se===!0&&oe.beginShadows();const K=p.state.shadowsArray;if(le.render(K,w,F),se===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(x,w),p.setupLights(v.useLegacyLights),F.isArrayCamera){const k=F.cameras;for(let J=0,ye=k.length;J<ye;J++){const Ae=k[J];xn(x,w,Ae,Ae.viewport)}}else xn(x,w,F);A!==null&&(Le.updateMultisampleRenderTarget(A),Le.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,F),z.resetDefaultState(),N=-1,M=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function Fr(w,F,K,k){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||he.intersectsSprite(w)){k&&Xe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Re);const Ae=E.update(w),be=w.material;be.visible&&x.push(w,Ae,be,K,Xe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||he.intersectsObject(w))){const Ae=E.update(w),be=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Xe.copy(w.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Xe.copy(Ae.boundingSphere.center)),Xe.applyMatrix4(w.matrixWorld).applyMatrix4(Re)),Array.isArray(be)){const De=Ae.groups;for(let Ve=0,Ne=De.length;Ve<Ne;Ve++){const ke=De[Ve],dt=be[ke.materialIndex];dt&&dt.visible&&x.push(w,Ae,dt,K,Xe.z,ke)}}else be.visible&&x.push(w,Ae,be,K,Xe.z,null)}}const ye=w.children;for(let Ae=0,be=ye.length;Ae<be;Ae++)Fr(ye[Ae],F,K,k)}function xn(w,F,K,k){const J=w.opaque,ye=w.transmissive,Ae=w.transparent;p.setupLightsView(K),se===!0&&oe.setGlobalState(v.clippingPlanes,K),ye.length>0&&bn(J,ye,F,K),k&&Ee.viewport(T.copy(k)),J.length>0&&ii(J,F,K),ye.length>0&&ii(ye,F,K),Ae.length>0&&ii(Ae,F,K),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function bn(w,F,K,k){const J=we.isWebGL2;_e===null&&(_e=new Lr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Ks:Ki,minFilter:$s,samples:J?4:0})),v.getDrawingBufferSize(xe),J?_e.setSize(xe.x,xe.y):_e.setSize(Dl(xe.x),Dl(xe.y));const ye=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(H),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear();const Ae=v.toneMapping;v.toneMapping=yi,ii(w,K,k),Le.updateMultisampleRenderTarget(_e),Le.updateRenderTargetMipmap(_e);let be=!1;for(let De=0,Ve=F.length;De<Ve;De++){const Ne=F[De],ke=Ne.object,dt=Ne.geometry,gt=Ne.material,Dn=Ne.group;if(gt.side===pi&&ke.layers.test(k.layers)){const ri=gt.side;gt.side=on,gt.needsUpdate=!0,Or(ke,K,k,dt,gt,Dn),gt.side=ri,gt.needsUpdate=!0,be=!0}}be===!0&&(Le.updateMultisampleRenderTarget(_e),Le.updateRenderTargetMipmap(_e)),v.setRenderTarget(ye),v.setClearColor(H,q),v.toneMapping=Ae}function ii(w,F,K){const k=F.isScene===!0?F.overrideMaterial:null;for(let J=0,ye=w.length;J<ye;J++){const Ae=w[J],be=Ae.object,De=Ae.geometry,Ve=k===null?Ae.material:k,Ne=Ae.group;be.layers.test(K.layers)&&Or(be,F,K,De,Ve,Ne)}}function Or(w,F,K,k,J,ye){w.onBeforeRender(v,F,K,k,J,ye),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(v,F,K,k,w,ye),J.transparent===!0&&J.side===pi&&J.forceSinglePass===!1?(J.side=on,J.needsUpdate=!0,v.renderBufferDirect(K,F,k,J,w,ye),J.side=Ji,J.needsUpdate=!0,v.renderBufferDirect(K,F,k,J,w,ye),J.side=pi):v.renderBufferDirect(K,F,k,J,w,ye),w.onAfterRender(v,F,K,k,J,ye)}function Ri(w,F,K){F.isScene!==!0&&(F=Tt);const k=Ie.get(w),J=p.state.lights,ye=p.state.shadowsArray,Ae=J.state.version,be=Q.getParameters(w,J.state,ye,F,K),De=Q.getProgramCacheKey(be);let Ve=k.programs;k.environment=w.isMeshStandardMaterial?F.environment:null,k.fog=F.fog,k.envMap=(w.isMeshStandardMaterial?ft:Oe).get(w.envMap||k.environment),Ve===void 0&&(w.addEventListener("dispose",ae),Ve=new Map,k.programs=Ve);let Ne=Ve.get(De);if(Ne!==void 0){if(k.currentProgram===Ne&&k.lightsStateVersion===Ae)return zr(w,be),Ne}else be.uniforms=Q.getUniforms(w),w.onBuild(K,be,v),w.onBeforeCompile(be,v),Ne=Q.acquireProgram(be,De),Ve.set(De,Ne),k.uniforms=be.uniforms;const ke=k.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=oe.uniform),zr(w,be),k.needsLights=qn(w),k.lightsStateVersion=Ae,k.needsLights&&(ke.ambientLightColor.value=J.state.ambient,ke.lightProbe.value=J.state.probe,ke.directionalLights.value=J.state.directional,ke.directionalLightShadows.value=J.state.directionalShadow,ke.spotLights.value=J.state.spot,ke.spotLightShadows.value=J.state.spotShadow,ke.rectAreaLights.value=J.state.rectArea,ke.ltc_1.value=J.state.rectAreaLTC1,ke.ltc_2.value=J.state.rectAreaLTC2,ke.pointLights.value=J.state.point,ke.pointLightShadows.value=J.state.pointShadow,ke.hemisphereLights.value=J.state.hemi,ke.directionalShadowMap.value=J.state.directionalShadowMap,ke.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ke.spotShadowMap.value=J.state.spotShadowMap,ke.spotLightMatrix.value=J.state.spotLightMatrix,ke.spotLightMap.value=J.state.spotLightMap,ke.pointShadowMap.value=J.state.pointShadowMap,ke.pointShadowMatrix.value=J.state.pointShadowMatrix);const dt=Ne.getUniforms(),gt=sl.seqWithValue(dt.seq,ke);return k.currentProgram=Ne,k.uniformsList=gt,Ne}function zr(w,F){const K=Ie.get(w);K.outputColorSpace=F.outputColorSpace,K.instancing=F.instancing,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function Ke(w,F,K,k,J){F.isScene!==!0&&(F=Tt),Le.resetTextureUnits();const ye=F.fog,Ae=k.isMeshStandardMaterial?F.environment:null,be=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ni,De=(k.isMeshStandardMaterial?ft:Oe).get(k.envMap||Ae),Ve=k.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ne=!!K.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ke=!!K.morphAttributes.position,dt=!!K.morphAttributes.normal,gt=!!K.morphAttributes.color,Dn=k.toneMapped?v.toneMapping:yi,ri=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,yt=ri!==void 0?ri.length:0,je=Ie.get(k),iu=p.state.lights;if(se===!0&&(pe===!0||w!==M)){const un=w===M&&k.id===N;oe.setState(k,w,un)}let bt=!1;k.version===je.__version?(je.needsLights&&je.lightsStateVersion!==iu.state.version||je.outputColorSpace!==be||J.isInstancedMesh&&je.instancing===!1||!J.isInstancedMesh&&je.instancing===!0||J.isSkinnedMesh&&je.skinning===!1||!J.isSkinnedMesh&&je.skinning===!0||je.envMap!==De||k.fog===!0&&je.fog!==ye||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==oe.numPlanes||je.numIntersection!==oe.numIntersection)||je.vertexAlphas!==Ve||je.vertexTangents!==Ne||je.morphTargets!==ke||je.morphNormals!==dt||je.morphColors!==gt||je.toneMapping!==Dn||we.isWebGL2===!0&&je.morphTargetsCount!==yt)&&(bt=!0):(bt=!0,je.__version=k.version);let ir=je.currentProgram;bt===!0&&(ir=Ri(k,F,J));let Cd=!1,$o=!1,ru=!1;const Xt=ir.getUniforms(),rr=je.uniforms;if(Ee.useProgram(ir.program)&&(Cd=!0,$o=!0,ru=!0),k.id!==N&&(N=k.id,$o=!0),Cd||M!==w){if(Xt.setValue(G,"projectionMatrix",w.projectionMatrix),we.logarithmicDepthBuffer&&Xt.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),M!==w&&(M=w,$o=!0,ru=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const un=Xt.map.cameraPosition;un!==void 0&&un.setValue(G,Xe.setFromMatrixPosition(w.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Xt.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||J.isSkinnedMesh)&&Xt.setValue(G,"viewMatrix",w.matrixWorldInverse)}if(J.isSkinnedMesh){Xt.setOptional(G,J,"bindMatrix"),Xt.setOptional(G,J,"bindMatrixInverse");const un=J.skeleton;un&&(we.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),Xt.setValue(G,"boneTexture",un.boneTexture,Le),Xt.setValue(G,"boneTextureSize",un.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ou=K.morphAttributes;if((ou.position!==void 0||ou.normal!==void 0||ou.color!==void 0&&we.isWebGL2===!0)&&ve.update(J,K,ir),($o||je.receiveShadow!==J.receiveShadow)&&(je.receiveShadow=J.receiveShadow,Xt.setValue(G,"receiveShadow",J.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(rr.envMap.value=De,rr.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),$o&&(Xt.setValue(G,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&ln(rr,ru),ye&&k.fog===!0&&ce.refreshFogUniforms(rr,ye),ce.refreshMaterialUniforms(rr,k,Z,re,_e),sl.upload(G,je.uniformsList,rr,Le)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(sl.upload(G,je.uniformsList,rr,Le),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Xt.setValue(G,"center",J.center),Xt.setValue(G,"modelViewMatrix",J.modelViewMatrix),Xt.setValue(G,"normalMatrix",J.normalMatrix),Xt.setValue(G,"modelMatrix",J.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const un=k.uniformsGroups;for(let su=0,I_=un.length;su<I_;su++)if(we.isWebGL2){const Pd=un[su];ie.update(Pd,ir),ie.bind(Pd,ir)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ir}function ln(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function qn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,F,K){Ie.get(w.texture).__webglTexture=F,Ie.get(w.depthTexture).__webglTexture=K;const k=Ie.get(w);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=K===void 0,k.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){const K=Ie.get(w);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,K=0){A=w,S=F,R=K;let k=!0,J=null,ye=!1,Ae=!1;if(w){const De=Ie.get(w);De.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(G.FRAMEBUFFER,null),k=!1):De.__webglFramebuffer===void 0?Le.setupRenderTarget(w):De.__hasExternalTextures&&Le.rebindTextures(w,Ie.get(w.texture).__webglTexture,Ie.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const Ne=Ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(J=Ne[F],ye=!0):we.isWebGL2&&w.samples>0&&Le.useMultisampledRTT(w)===!1?J=Ie.get(w).__webglMultisampledFramebuffer:J=Ne,T.copy(w.viewport),ne.copy(w.scissor),te=w.scissorTest}else T.copy(W).multiplyScalar(Z).floor(),ne.copy(B).multiplyScalar(Z).floor(),te=V;if(Ee.bindFramebuffer(G.FRAMEBUFFER,J)&&we.drawBuffers&&k&&Ee.drawBuffers(w,J),Ee.viewport(T),Ee.scissor(ne),Ee.setScissorTest(te),ye){const De=Ie.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+F,De.__webglTexture,K)}else if(Ae){const De=Ie.get(w.texture),Ve=F||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,De.__webglTexture,K||0,Ve)}N=-1},this.readRenderTargetPixels=function(w,F,K,k,J,ye,Ae){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(be=be[Ae]),be){Ee.bindFramebuffer(G.FRAMEBUFFER,be);try{const De=w.texture,Ve=De.format,Ne=De.type;if(Ve!==Wn&&D.convert(Ve)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ne===Ks&&(Me.has("EXT_color_buffer_half_float")||we.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ne!==Ki&&D.convert(Ne)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Bi&&(we.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-k&&K>=0&&K<=w.height-J&&G.readPixels(F,K,k,J,D.convert(Ve),D.convert(Ne),ye)}finally{const De=A!==null?Ie.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(G.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(w,F,K=0){const k=Math.pow(2,-K),J=Math.floor(F.image.width*k),ye=Math.floor(F.image.height*k);Le.setTexture2D(F,0),G.copyTexSubImage2D(G.TEXTURE_2D,K,0,0,w.x,w.y,J,ye),Ee.unbindTexture()},this.copyTextureToTexture=function(w,F,K,k=0){const J=F.image.width,ye=F.image.height,Ae=D.convert(K.format),be=D.convert(K.type);Le.setTexture2D(K,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment),F.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,k,w.x,w.y,J,ye,Ae,be,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,k,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,Ae,F.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,k,w.x,w.y,Ae,be,F.image),k===0&&K.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(w,F,K,k,J=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=w.max.x-w.min.x+1,Ae=w.max.y-w.min.y+1,be=w.max.z-w.min.z+1,De=D.convert(k.format),Ve=D.convert(k.type);let Ne;if(k.isData3DTexture)Le.setTexture3D(k,0),Ne=G.TEXTURE_3D;else if(k.isDataArrayTexture)Le.setTexture2DArray(k,0),Ne=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment);const ke=G.getParameter(G.UNPACK_ROW_LENGTH),dt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),gt=G.getParameter(G.UNPACK_SKIP_PIXELS),Dn=G.getParameter(G.UNPACK_SKIP_ROWS),ri=G.getParameter(G.UNPACK_SKIP_IMAGES),yt=K.isCompressedTexture?K.mipmaps[0]:K.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,yt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,w.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,w.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,w.min.z),K.isDataTexture||K.isData3DTexture?G.texSubImage3D(Ne,J,F.x,F.y,F.z,ye,Ae,be,De,Ve,yt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ne,J,F.x,F.y,F.z,ye,Ae,be,De,yt.data)):G.texSubImage3D(Ne,J,F.x,F.y,F.z,ye,Ae,be,De,Ve,yt),G.pixelStorei(G.UNPACK_ROW_LENGTH,ke),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,dt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,gt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Dn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ri),J===0&&k.generateMipmaps&&G.generateMipmap(Ne),Ee.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Le.setTextureCube(w,0):w.isData3DTexture?Le.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Le.setTexture2DArray(w,0):Le.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){S=0,R=0,A=null,Ee.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===He?Mr:Jv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mr?He:ni}}class C1 extends __{}C1.prototype.isWebGL1Renderer=!0;class P1 extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Ul extends wi{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let u=0;const f=[],d=new O,h=new O,m=[],y=[],x=[],p=[];for(let c=0;c<=i;c++){const _=[],v=c/i;let g=0;c===0&&s===0?g=.5/n:c===i&&l===Math.PI&&(g=-.5/n);for(let S=0;S<=n;S++){const R=S/n;d.x=-e*Math.cos(r+R*o)*Math.sin(s+v*a),d.y=e*Math.cos(s+v*a),d.z=e*Math.sin(r+R*o)*Math.sin(s+v*a),y.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(R+g,1-v),_.push(u++)}f.push(_)}for(let c=0;c<i;c++)for(let _=0;_<n;_++){const v=f[c][_+1],g=f[c][_],S=f[c+1][_],R=f[c+1][_+1];(c!==0||s>0)&&m.push(v,g,R),(c!==i-1||l<Math.PI)&&m.push(g,S,R)}this.setIndex(m),this.setAttribute("position",new gn(y,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ed extends wi{constructor(e=1,n=.4,i=12,r=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:o},i=Math.floor(i),r=Math.floor(r);const s=[],a=[],l=[],u=[],f=new O,d=new O,h=new O;for(let m=0;m<=i;m++)for(let y=0;y<=r;y++){const x=y/r*o,p=m/i*Math.PI*2;d.x=(e+n*Math.cos(p))*Math.cos(x),d.y=(e+n*Math.cos(p))*Math.sin(x),d.z=n*Math.sin(p),a.push(d.x,d.y,d.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),u.push(y/r),u.push(m/i)}for(let m=1;m<=i;m++)for(let y=1;y<=r;y++){const x=(r+1)*m+y-1,p=(r+1)*(m-1)+y-1,c=(r+1)*(m-1)+y,_=(r+1)*m+y;s.push(x,p,_),s.push(p,c,_)}this.setIndex(s),this.setAttribute("position",new gn(a,3)),this.setAttribute("normal",new gn(l,3)),this.setAttribute("uv",new gn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ed(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ac extends sa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e_,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const tm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class L1{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,o===!1&&r.onStart!==void 0&&r.onStart(f,s,a),o=!0},this.itemEnd=function(f){s++,r.onProgress!==void 0&&r.onProgress(f,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return u.push(f,d),this},this.removeHandler=function(f){const d=u.indexOf(f);return d!==-1&&u.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=u.length;d<h;d+=2){const m=u[d],y=u[d+1];if(m.global&&(m.lastIndex=0),m.test(f))return y}return null}}}const b1=new L1;class Td{constructor(e){this.manager=e!==void 0?e:b1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Td.DEFAULT_MATERIAL_NAME="__DEFAULT";class D1 extends Td{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=tm.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=Qs("img");function l(){f(),tm.add(e,this),n&&n(this),o.manager.itemEnd(e)}function u(d){f(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class lc extends Td{constructor(e){super(e)}load(e,n,i,r){const o=new sn,s=new D1(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class y_ extends an{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const uc=new Et,nm=new O,im=new O;class U1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xd,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;nm.setFromMatrixPosition(e.matrixWorld),n.position.copy(nm),im.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(im),n.updateMatrixWorld(),uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rm=new Et,ls=new O,cc=new O;class I1 extends U1{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ls.setFromMatrixPosition(e.matrixWorld),i.position.copy(ls),cc.copy(i.position),cc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(cc),i.updateMatrixWorld(),r.makeTranslation(-ls.x,-ls.y,-ls.z),rm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rm)}}class N1 extends y_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new I1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class F1 extends y_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class om{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Vt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=md);const sm={type:"change"},fc={type:"start"},am={type:"end"};class O1 extends Nr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:Hr.ROTATE,TWO:Hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Oe),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Oe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(sm),i.update(),o=r.NONE},this.update=function(){const L=new O,oe=new br().setFromUnitVectors(e.up,new O(0,1,0)),le=oe.clone().invert(),Y=new O,ve=new br,Se=new O,b=2*Math.PI;return function(){const z=i.object.position;L.copy(z).sub(i.target),L.applyQuaternion(oe),a.setFromVector3(L),i.autoRotate&&o===r.NONE&&M(A()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ie=i.minAzimuthAngle,de=i.maxAzimuthAngle;return isFinite(ie)&&isFinite(de)&&(ie<-Math.PI?ie+=b:ie>Math.PI&&(ie-=b),de<-Math.PI?de+=b:de>Math.PI&&(de-=b),ie<=de?a.theta=Math.max(ie,Math.min(de,a.theta)):a.theta=a.theta>(ie+de)/2?Math.max(ie,a.theta):Math.min(de,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),L.setFromSpherical(a),L.applyQuaternion(le),z.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),u=1,d||Y.distanceToSquared(i.object.position)>s||8*(1-ve.dot(i.object.quaternion))>s||Se.distanceToSquared(i.target)>0?(i.dispatchEvent(sm),Y.copy(i.object.position),ve.copy(i.object.quaternion),Se.copy(i.target),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",C),i.domElement.removeEventListener("pointerdown",Me),i.domElement.removeEventListener("pointercancel",Ee),i.domElement.removeEventListener("wheel",Le),i.domElement.removeEventListener("pointermove",we),i.domElement.removeEventListener("pointerup",Ee),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Oe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new om,l=new om;let u=1;const f=new O;let d=!1;const h=new Fe,m=new Fe,y=new Fe,x=new Fe,p=new Fe,c=new Fe,_=new Fe,v=new Fe,g=new Fe,S=[],R={};function A(){return 2*Math.PI/60/60*i.autoRotateSpeed}function N(){return Math.pow(.95,i.zoomSpeed)}function M(L){l.theta-=L}function T(L){l.phi-=L}const ne=function(){const L=new O;return function(le,Y){L.setFromMatrixColumn(Y,0),L.multiplyScalar(-le),f.add(L)}}(),te=function(){const L=new O;return function(le,Y){i.screenSpacePanning===!0?L.setFromMatrixColumn(Y,1):(L.setFromMatrixColumn(Y,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(le),f.add(L)}}(),H=function(){const L=new O;return function(le,Y){const ve=i.domElement;if(i.object.isPerspectiveCamera){const Se=i.object.position;L.copy(Se).sub(i.target);let b=L.length();b*=Math.tan(i.object.fov/2*Math.PI/180),ne(2*le*b/ve.clientHeight,i.object.matrix),te(2*Y*b/ve.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ne(le*(i.object.right-i.object.left)/i.object.zoom/ve.clientWidth,i.object.matrix),te(Y*(i.object.top-i.object.bottom)/i.object.zoom/ve.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(L){i.object.isPerspectiveCamera?u/=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*L)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(L){i.object.isPerspectiveCamera?u*=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/L)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(L){h.set(L.clientX,L.clientY)}function Z(L){_.set(L.clientX,L.clientY)}function I(L){x.set(L.clientX,L.clientY)}function j(L){m.set(L.clientX,L.clientY),y.subVectors(m,h).multiplyScalar(i.rotateSpeed);const oe=i.domElement;M(2*Math.PI*y.x/oe.clientHeight),T(2*Math.PI*y.y/oe.clientHeight),h.copy(m),i.update()}function W(L){v.set(L.clientX,L.clientY),g.subVectors(v,_),g.y>0?q(N()):g.y<0&&$(N()),_.copy(v),i.update()}function B(L){p.set(L.clientX,L.clientY),c.subVectors(p,x).multiplyScalar(i.panSpeed),H(c.x,c.y),x.copy(p),i.update()}function V(L){L.deltaY<0?$(N()):L.deltaY>0&&q(N()),i.update()}function he(L){let oe=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),oe=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),oe=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?M(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),oe=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?M(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),oe=!0;break}oe&&(L.preventDefault(),i.update())}function se(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),oe=.5*(S[0].pageY+S[1].pageY);h.set(L,oe)}}function pe(){if(S.length===1)x.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),oe=.5*(S[0].pageY+S[1].pageY);x.set(L,oe)}}function _e(){const L=S[0].pageX-S[1].pageX,oe=S[0].pageY-S[1].pageY,le=Math.sqrt(L*L+oe*oe);_.set(0,le)}function Re(){i.enableZoom&&_e(),i.enablePan&&pe()}function xe(){i.enableZoom&&_e(),i.enableRotate&&se()}function Xe(L){if(S.length==1)m.set(L.pageX,L.pageY);else{const le=fe(L),Y=.5*(L.pageX+le.x),ve=.5*(L.pageY+le.y);m.set(Y,ve)}y.subVectors(m,h).multiplyScalar(i.rotateSpeed);const oe=i.domElement;M(2*Math.PI*y.x/oe.clientHeight),T(2*Math.PI*y.y/oe.clientHeight),h.copy(m)}function Tt(L){if(S.length===1)p.set(L.pageX,L.pageY);else{const oe=fe(L),le=.5*(L.pageX+oe.x),Y=.5*(L.pageY+oe.y);p.set(le,Y)}c.subVectors(p,x).multiplyScalar(i.panSpeed),H(c.x,c.y),x.copy(p)}function Ue(L){const oe=fe(L),le=L.pageX-oe.x,Y=L.pageY-oe.y,ve=Math.sqrt(le*le+Y*Y);v.set(0,ve),g.set(0,Math.pow(v.y/_.y,i.zoomSpeed)),q(g.y),_.copy(v)}function G(L){i.enableZoom&&Ue(L),i.enablePan&&Tt(L)}function _t(L){i.enableZoom&&Ue(L),i.enableRotate&&Xe(L)}function Me(L){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",we),i.domElement.addEventListener("pointerup",Ee)),E(L),L.pointerType==="touch"?ft(L):Qe(L))}function we(L){i.enabled!==!1&&(L.pointerType==="touch"?pt(L):Ie(L))}function Ee(L){Q(L),S.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",we),i.domElement.removeEventListener("pointerup",Ee)),i.dispatchEvent(am),o=r.NONE}function Qe(L){let oe;switch(L.button){case 0:oe=i.mouseButtons.LEFT;break;case 1:oe=i.mouseButtons.MIDDLE;break;case 2:oe=i.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case Br.DOLLY:if(i.enableZoom===!1)return;Z(L),o=r.DOLLY;break;case Br.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;I(L),o=r.PAN}else{if(i.enableRotate===!1)return;re(L),o=r.ROTATE}break;case Br.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;re(L),o=r.ROTATE}else{if(i.enablePan===!1)return;I(L),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(fc)}function Ie(L){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;j(L);break;case r.DOLLY:if(i.enableZoom===!1)return;W(L);break;case r.PAN:if(i.enablePan===!1)return;B(L);break}}function Le(L){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(L.preventDefault(),i.dispatchEvent(fc),V(L),i.dispatchEvent(am))}function Oe(L){i.enabled===!1||i.enablePan===!1||he(L)}function ft(L){switch(ce(L),S.length){case 1:switch(i.touches.ONE){case Hr.ROTATE:if(i.enableRotate===!1)return;se(),o=r.TOUCH_ROTATE;break;case Hr.PAN:if(i.enablePan===!1)return;pe(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Hr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Re(),o=r.TOUCH_DOLLY_PAN;break;case Hr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;xe(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(fc)}function pt(L){switch(ce(L),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Xe(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Tt(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;G(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;_t(L),i.update();break;default:o=r.NONE}}function C(L){i.enabled!==!1&&L.preventDefault()}function E(L){S.push(L)}function Q(L){delete R[L.pointerId];for(let oe=0;oe<S.length;oe++)if(S[oe].pointerId==L.pointerId){S.splice(oe,1);return}}function ce(L){let oe=R[L.pointerId];oe===void 0&&(oe=new Fe,R[L.pointerId]=oe),oe.set(L.pageX,L.pageY)}function fe(L){const oe=L.pointerId===S[0].pointerId?S[1]:S[0];return R[oe.pointerId]}i.domElement.addEventListener("contextmenu",C),i.domElement.addEventListener("pointerdown",Me),i.domElement.addEventListener("pointercancel",Ee),i.domElement.addEventListener("wheel",Le,{passive:!1}),this.update()}}const z1="/btsui3.github.io/assets/Ben-16e0e886.png",k1="/btsui3.github.io/assets/moon-b246064f.jpg",B1="/btsui3.github.io/assets/normal-8e277ece.jpg";function H1(){const t=new P1,e=new hn(75,window.innerWidth/window.innerHeight,.1,1e3),n=new __({canvas:document.querySelector("#bg")||void 0});n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),e.position.setZ(30),e.position.setX(-3),n.render(t,e);const i=new Ed(10,3,16,100),r=new ac({color:16737095}),o=new Rn(i,r);t.add(o);const s=new N1(16777215);s.position.set(5,5,5);const a=new F1(16777215);t.add(s,a);const l=new O1(e,n.domElement);function u(){const c=new Ul(.25,24,24),_=new ac({color:16777215}),v=new Rn(c,_),[g,S,R]=Array(3).fill(null).map(()=>xS.randFloatSpread(100));v.position.set(g,S,R),t.add(v)}Array(200).fill(null).forEach(u);const f=new lc().load(z1),d=new Rn(new Yo(3,3,3),new yd({map:f}));t.add(d);const h=new lc().load(k1),m=new lc().load(B1),y=new Rn(new Ul(3,32,32),new ac({map:h,normalMap:m}));t.add(y),y.position.z=30,y.position.setX(-10),d.position.z=-5,d.position.x=2;function x(){d.rotation.y+=.01,d.rotation.z+=.01}document.body.onscroll=x,x();function p(){requestAnimationFrame(p),o.rotation.x+=.01,o.rotation.y+=.005,o.rotation.z+=.01,l.update(),n.render(t,e)}return p(),Ze.jsx("div",{})}function G1(){return Ze.jsxs(Ze.Fragment,{children:[Ze.jsxs("div",{id:"sidebar",children:[Ze.jsx("h1",{children:"React Router Contacts"}),Ze.jsxs("div",{children:[Ze.jsxs("form",{id:"search-form",role:"search",children:[Ze.jsx("input",{id:"q","aria-label":"Search contacts",placeholder:"Search",type:"search",name:"q"}),Ze.jsx("div",{id:"search-spinner","aria-hidden":!0,hidden:!0}),Ze.jsx("div",{className:"sr-only","aria-live":"polite"})]}),Ze.jsx("form",{method:"post",children:Ze.jsx("button",{type:"submit",children:"New"})})]}),Ze.jsx("nav",{children:Ze.jsxs("ul",{children:[Ze.jsx("li",{children:Ze.jsx("a",{href:"/contacts/1",children:"Your Name"})}),Ze.jsx("li",{children:Ze.jsx("a",{href:"/contacts/2",children:"Your Friend"})})]})})]}),Ze.jsx("div",{id:"detail"})]})}/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ot(){return ot=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ot.apply(this,arguments)}var St;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(St||(St={}));const lm="popstate";function V1(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return Js("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:aa(r)}return X1(e,n,null,t)}function Ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Go(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function W1(){return Math.random().toString(36).substr(2,8)}function um(t,e){return{usr:t.state,key:t.key,idx:e}}function Js(t,e,n,i){return n===void 0&&(n=null),ot({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ai(e):e,{state:n,key:e&&e.key||i||W1()})}function aa(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ai(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function X1(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=St.Pop,l=null,u=f();u==null&&(u=0,s.replaceState(ot({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function d(){a=St.Pop;let p=f(),c=p==null?null:p-u;u=p,l&&l({action:a,location:x.location,delta:c})}function h(p,c){a=St.Push;let _=Js(x.location,p,c);n&&n(_,p),u=f()+1;let v=um(_,u),g=x.createHref(_);try{s.pushState(v,"",g)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(g)}o&&l&&l({action:a,location:x.location,delta:1})}function m(p,c){a=St.Replace;let _=Js(x.location,p,c);n&&n(_,p),u=f();let v=um(_,u),g=x.createHref(_);s.replaceState(v,"",g),o&&l&&l({action:a,location:x.location,delta:0})}function y(p){let c=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof p=="string"?p:aa(p);return Ye(c,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,c)}let x={get action(){return a},get location(){return t(r,s)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(lm,d),l=p,()=>{r.removeEventListener(lm,d),l=null}},createHref(p){return e(r,p)},createURL:y,encodeLocation(p){let c=y(p);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:m,go(p){return s.go(p)}};return x}var wt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(wt||(wt={}));const j1=new Set(["lazy","caseSensitive","path","id","index","children"]);function Y1(t){return t.index===!0}function gf(t,e,n,i){return n===void 0&&(n=[]),i===void 0&&(i={}),t.map((r,o)=>{let s=[...n,o],a=typeof r.id=="string"?r.id:s.join("-");if(Ye(r.index!==!0||!r.children,"Cannot specify children on an index route"),Ye(!i[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Y1(r)){let l=ot({},r,e(r),{id:a});return i[a]=l,l}else{let l=ot({},r,e(r),{id:a,children:void 0});return i[a]=l,r.children&&(l.children=gf(r.children,e,s,i)),l}})}function xo(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?Ai(e):e,r=la(i.pathname||"/",n);if(r==null)return null;let o=x_(t);q1(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=iA(o[a],sA(r));return s}function x_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ye(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Tr([i,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(Ye(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),x_(o.children,e,f,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:tA(u,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of S_(o.path))r(o,s,l)}),e}function S_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=S_(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function q1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:nA(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const $1=/^:\w+$/,K1=3,Z1=2,Q1=1,J1=10,eA=-2,cm=t=>t==="*";function tA(t,e){let n=t.split("/"),i=n.length;return n.some(cm)&&(i+=eA),e&&(i+=Z1),n.filter(r=>!cm(r)).reduce((r,o)=>r+($1.test(o)?K1:o===""?Q1:J1),i)}function nA(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function iA(t,e){let{routesMeta:n}=t,i={},r="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",f=rA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(i,f.params);let d=a.route;o.push({params:i,pathname:Tr([r,f.pathname]),pathnameBase:fA(Tr([r,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(r=Tr([r,f.pathnameBase]))}return o}function rA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=oA(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,f,d)=>{if(f==="*"){let h=a[d]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[f]=aA(a[d]||"",f),u},{}),pathname:o,pathnameBase:s,pattern:t}}function oA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Go(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(i.push(a),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function sA(t){try{return decodeURI(t)}catch(e){return Go(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function aA(t,e){try{return decodeURIComponent(t)}catch(n){return Go(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function la(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function lA(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Ai(t):t;return{pathname:n?n.startsWith("/")?n:uA(n,e):e,search:dA(i),hash:hA(r)}}function uA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function dc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function M_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cA(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Ai(t):(r=ot({},t),Ye(!r.pathname||!r.pathname.includes("?"),dc("?","pathname","search",r)),Ye(!r.pathname||!r.pathname.includes("#"),dc("#","pathname","hash",r)),Ye(!r.search||!r.search.includes("#"),dc("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(i||s==null)a=n;else{let d=e.length-1;if(s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=lA(r,a),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Tr=t=>t.join("/").replace(/\/\/+/g,"/"),fA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),dA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,hA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class wd{constructor(e,n,i,r){r===void 0&&(r=!1),this.status=e,this.statusText=n||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function E_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const T_=["post","put","patch","delete"],pA=new Set(T_),mA=["get",...T_],gA=new Set(mA),vA=new Set([301,302,303,307,308]),_A=new Set([307,308]),hc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},yA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},us={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},w_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xA=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function SA(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",i=!n;Ye(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let r;if(t.mapRouteProperties)r=t.mapRouteProperties;else if(t.detectErrorBoundary){let b=t.detectErrorBoundary;r=D=>({hasErrorBoundary:b(D)})}else r=xA;let o={},s=gf(t.routes,r,void 0,o),a,l=t.basename||"/",u=ot({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),f=null,d=new Set,h=null,m=null,y=null,x=t.hydrationData!=null,p=xo(s,t.history.location,l),c=null;if(p==null){let b=Mn(404,{pathname:t.history.location.pathname}),{matches:D,route:z}=_m(s);p=D,c={[z.id]:b}}let _=!p.some(b=>b.route.lazy)&&(!p.some(b=>b.route.loader)||t.hydrationData!=null),v,g={historyAction:t.history.action,location:t.history.location,matches:p,initialized:_,navigation:hc,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||c,fetchers:new Map,blockers:new Map},S=St.Pop,R=!1,A,N=!1,M=!1,T=[],ne=[],te=new Map,H=0,q=-1,$=new Map,re=new Set,Z=new Map,I=new Map,j=new Map,W=!1;function B(){return f=t.history.listen(b=>{let{action:D,location:z,delta:ie}=b;if(W){W=!1;return}Go(j.size===0||ie!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let de=fe({currentLocation:g.location,nextLocation:z,historyAction:D});if(de&&ie!=null){W=!0,t.history.go(ie*-1),ce(de,{state:"blocked",location:z,proceed(){ce(de,{state:"proceeding",proceed:void 0,reset:void 0,location:z}),t.history.go(ie)},reset(){let P=new Map(g.blockers);P.set(de,us),se({blockers:P})}});return}return xe(D,z)}),g.initialized||xe(St.Pop,g.location),v}function V(){f&&f(),d.clear(),A&&A.abort(),g.fetchers.forEach((b,D)=>Le(D)),g.blockers.forEach((b,D)=>Q(D))}function he(b){return d.add(b),()=>d.delete(b)}function se(b){g=ot({},g,b),d.forEach(D=>D(g))}function pe(b,D){var z,ie;let de=g.actionData!=null&&g.navigation.formMethod!=null&&Bn(g.navigation.formMethod)&&g.navigation.state==="loading"&&((z=b.state)==null?void 0:z._isRedirect)!==!0,P;D.actionData?Object.keys(D.actionData).length>0?P=D.actionData:P=null:de?P=g.actionData:P=null;let ee=D.loaderData?vm(g.loaderData,D.loaderData,D.matches||[],D.errors):g.loaderData,U=g.blockers;U.size>0&&(U=new Map(U),U.forEach((ae,Ce)=>U.set(Ce,us)));let X=R===!0||g.navigation.formMethod!=null&&Bn(g.navigation.formMethod)&&((ie=b.state)==null?void 0:ie._isRedirect)!==!0;a&&(s=a,a=void 0),N||S===St.Pop||(S===St.Push?t.history.push(b,b.state):S===St.Replace&&t.history.replace(b,b.state)),se(ot({},D,{actionData:P,loaderData:ee,historyAction:S,location:b,initialized:!0,navigation:hc,revalidation:"idle",restoreScrollPosition:ve(b,D.matches||g.matches),preventScrollReset:X,blockers:U})),S=St.Pop,R=!1,N=!1,M=!1,T=[],ne=[]}async function _e(b,D){if(typeof b=="number"){t.history.go(b);return}let z=vf(g.location,g.matches,l,u.v7_prependBasename,b,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:ie,submission:de,error:P}=fm(u.v7_normalizeFormMethod,!1,z,D),ee=g.location,U=Js(g.location,ie,D&&D.state);U=ot({},U,t.history.encodeLocation(U));let X=D&&D.replace!=null?D.replace:void 0,ae=St.Push;X===!0?ae=St.Replace:X===!1||de!=null&&Bn(de.formMethod)&&de.formAction===g.location.pathname+g.location.search&&(ae=St.Replace);let Ce=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,Te=fe({currentLocation:ee,nextLocation:U,historyAction:ae});if(Te){ce(Te,{state:"blocked",location:U,proceed(){ce(Te,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),_e(b,D)},reset(){let ze=new Map(g.blockers);ze.set(Te,us),se({blockers:ze})}});return}return await xe(ae,U,{submission:de,pendingError:P,preventScrollReset:Ce,replace:D&&D.replace})}function Re(){if(Qe(),se({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){xe(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}xe(S||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function xe(b,D,z){A&&A.abort(),A=null,S=b,N=(z&&z.startUninterruptedRevalidation)===!0,Y(g.location,g.matches),R=(z&&z.preventScrollReset)===!0;let ie=a||s,de=z&&z.overrideNavigation,P=xo(ie,D,l);if(!P){let ze=Mn(404,{pathname:D.pathname}),{matches:Je,route:$e}=_m(ie);L(),pe(D,{matches:Je,loaderData:{},errors:{[$e.id]:ze}});return}if(g.initialized&&!M&&AA(g.location,D)&&!(z&&z.submission&&Bn(z.submission.formMethod))){pe(D,{matches:P});return}A=new AbortController;let ee=fs(t.history,D,A.signal,z&&z.submission),U,X;if(z&&z.pendingError)X={[So(P).route.id]:z.pendingError};else if(z&&z.submission&&Bn(z.submission.formMethod)){let ze=await Xe(ee,D,z.submission,P,{replace:z.replace});if(ze.shortCircuited)return;U=ze.pendingActionData,X=ze.pendingActionError,de=Ya(D,z.submission),ee=new Request(ee.url,{signal:ee.signal})}let{shortCircuited:ae,loaderData:Ce,errors:Te}=await Tt(ee,D,P,de,z&&z.submission,z&&z.fetcherSubmission,z&&z.replace,U,X);ae||(A=null,pe(D,ot({matches:P},U?{actionData:U}:{},{loaderData:Ce,errors:Te})))}async function Xe(b,D,z,ie,de){de===void 0&&(de={}),Qe();let P=bA(D,z);se({navigation:P});let ee,U=yf(ie,D);if(!U.route.action&&!U.route.lazy)ee={type:wt.error,error:Mn(405,{method:b.method,pathname:D.pathname,routeId:U.route.id})};else if(ee=await cs("action",b,U,ie,o,r,l),b.signal.aborted)return{shortCircuited:!0};if(Lo(ee)){let X;return de&&de.replace!=null?X=de.replace:X=ee.location===g.location.pathname+g.location.search,await we(g,ee,{submission:z,replace:X}),{shortCircuited:!0}}if(bs(ee)){let X=So(ie,U.route.id);return(de&&de.replace)!==!0&&(S=St.Push),{pendingActionData:{},pendingActionError:{[X.route.id]:ee.error}}}if(vr(ee))throw Mn(400,{type:"defer-action"});return{pendingActionData:{[U.route.id]:ee.data}}}async function Tt(b,D,z,ie,de,P,ee,U,X){let ae=ie||Ya(D,de),Ce=de||P||Sm(ae),Te=a||s,[ze,Je]=dm(t.history,g,z,Ce,D,M,T,ne,Z,re,Te,l,U,X);if(L(Ke=>!(z&&z.some(ln=>ln.route.id===Ke))||ze&&ze.some(ln=>ln.route.id===Ke)),q=++H,ze.length===0&&Je.length===0){let Ke=pt();return pe(D,ot({matches:z,loaderData:{},errors:X||null},U?{actionData:U}:{},Ke?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!N){Je.forEach(ln=>{let qn=g.fetchers.get(ln.key),w=ds(void 0,qn?qn.data:void 0);g.fetchers.set(ln.key,w)});let Ke=U||g.actionData;se(ot({navigation:ae},Ke?Object.keys(Ke).length===0?{actionData:null}:{actionData:Ke}:{},Je.length>0?{fetchers:new Map(g.fetchers)}:{}))}Je.forEach(Ke=>{te.has(Ke.key)&&Oe(Ke.key),Ke.controller&&te.set(Ke.key,Ke.controller)});let $e=()=>Je.forEach(Ke=>Oe(Ke.key));A&&A.signal.addEventListener("abort",$e);let{results:Lt,loaderResults:mt,fetcherResults:Fr}=await Ee(g.matches,z,ze,Je,b);if(b.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",$e),Je.forEach(Ke=>te.delete(Ke.key));let xn=ym(Lt);if(xn){if(xn.idx>=ze.length){let Ke=Je[xn.idx-ze.length].key;re.add(Ke)}return await we(g,xn.result,{replace:ee}),{shortCircuited:!0}}let{loaderData:bn,errors:ii}=gm(g,z,ze,mt,X,Je,Fr,I);I.forEach((Ke,ln)=>{Ke.subscribe(qn=>{(qn||Ke.done)&&I.delete(ln)})});let Or=pt(),Ri=C(q),zr=Or||Ri||Je.length>0;return ot({loaderData:bn,errors:ii},zr?{fetchers:new Map(g.fetchers)}:{})}function Ue(b){return g.fetchers.get(b)||yA}function G(b,D,z,ie){if(i)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");te.has(b)&&Oe(b);let de=a||s,P=vf(g.location,g.matches,l,u.v7_prependBasename,z,D,ie==null?void 0:ie.relative),ee=xo(de,P,l);if(!ee){Ie(b,D,Mn(404,{pathname:P}));return}let{path:U,submission:X,error:ae}=fm(u.v7_normalizeFormMethod,!0,P,ie);if(ae){Ie(b,D,ae);return}let Ce=yf(ee,U);if(R=(ie&&ie.preventScrollReset)===!0,X&&Bn(X.formMethod)){_t(b,D,U,Ce,ee,X);return}Z.set(b,{routeId:D,path:U}),Me(b,D,U,Ce,ee,X)}async function _t(b,D,z,ie,de,P){if(Qe(),Z.delete(b),!ie.route.action&&!ie.route.lazy){let F=Mn(405,{method:P.formMethod,pathname:z,routeId:D});Ie(b,D,F);return}let ee=g.fetchers.get(b),U=DA(P,ee);g.fetchers.set(b,U),se({fetchers:new Map(g.fetchers)});let X=new AbortController,ae=fs(t.history,z,X.signal,P);te.set(b,X);let Ce=H,Te=await cs("action",ae,ie,de,o,r,l);if(ae.signal.aborted){te.get(b)===X&&te.delete(b);return}if(Lo(Te))if(te.delete(b),q>Ce){let F=oo(void 0);g.fetchers.set(b,F),se({fetchers:new Map(g.fetchers)});return}else{re.add(b);let F=ds(P);return g.fetchers.set(b,F),se({fetchers:new Map(g.fetchers)}),we(g,Te,{submission:P,isFetchActionRedirect:!0})}if(bs(Te)){Ie(b,D,Te.error);return}if(vr(Te))throw Mn(400,{type:"defer-action"});let ze=g.navigation.location||g.location,Je=fs(t.history,ze,X.signal),$e=a||s,Lt=g.navigation.state!=="idle"?xo($e,g.navigation.location,l):g.matches;Ye(Lt,"Didn't find any matches after fetcher action");let mt=++H;$.set(b,mt);let Fr=ds(P,Te.data);g.fetchers.set(b,Fr);let[xn,bn]=dm(t.history,g,Lt,P,ze,M,T,ne,Z,re,$e,l,{[ie.route.id]:Te.data},void 0);bn.filter(F=>F.key!==b).forEach(F=>{let K=F.key,k=g.fetchers.get(K),J=ds(void 0,k?k.data:void 0);g.fetchers.set(K,J),te.has(K)&&Oe(K),F.controller&&te.set(K,F.controller)}),se({fetchers:new Map(g.fetchers)});let ii=()=>bn.forEach(F=>Oe(F.key));X.signal.addEventListener("abort",ii);let{results:Or,loaderResults:Ri,fetcherResults:zr}=await Ee(g.matches,Lt,xn,bn,Je);if(X.signal.aborted)return;X.signal.removeEventListener("abort",ii),$.delete(b),te.delete(b),bn.forEach(F=>te.delete(F.key));let Ke=ym(Or);if(Ke){if(Ke.idx>=xn.length){let F=bn[Ke.idx-xn.length].key;re.add(F)}return we(g,Ke.result)}let{loaderData:ln,errors:qn}=gm(g,g.matches,xn,Ri,void 0,bn,zr,I);if(g.fetchers.has(b)){let F=oo(Te.data);g.fetchers.set(b,F)}let w=C(mt);g.navigation.state==="loading"&&mt>q?(Ye(S,"Expected pending action"),A&&A.abort(),pe(g.navigation.location,{matches:Lt,loaderData:ln,errors:qn,fetchers:new Map(g.fetchers)})):(se(ot({errors:qn,loaderData:vm(g.loaderData,ln,Lt,qn)},w||bn.length>0?{fetchers:new Map(g.fetchers)}:{})),M=!1)}async function Me(b,D,z,ie,de,P){let ee=g.fetchers.get(b),U=ds(P,ee?ee.data:void 0);g.fetchers.set(b,U),se({fetchers:new Map(g.fetchers)});let X=new AbortController,ae=fs(t.history,z,X.signal);te.set(b,X);let Ce=H,Te=await cs("loader",ae,ie,de,o,r,l);if(vr(Te)&&(Te=await C_(Te,ae.signal,!0)||Te),te.get(b)===X&&te.delete(b),ae.signal.aborted)return;if(Lo(Te))if(q>Ce){let Je=oo(void 0);g.fetchers.set(b,Je),se({fetchers:new Map(g.fetchers)});return}else{re.add(b),await we(g,Te);return}if(bs(Te)){let Je=So(g.matches,D);g.fetchers.delete(b),se({fetchers:new Map(g.fetchers),errors:{[Je.route.id]:Te.error}});return}Ye(!vr(Te),"Unhandled fetcher deferred data");let ze=oo(Te.data);g.fetchers.set(b,ze),se({fetchers:new Map(g.fetchers)})}async function we(b,D,z){let{submission:ie,replace:de,isFetchActionRedirect:P}=z===void 0?{}:z;D.revalidate&&(M=!0);let ee=Js(b.location,D.location,ot({_isRedirect:!0},P?{_isFetchActionRedirect:!0}:{}));if(Ye(ee,"Expected a location on the redirect navigation"),w_.test(D.location)&&n){let ae=t.history.createURL(D.location),Ce=la(ae.pathname,l)==null;if(e.location.origin!==ae.origin||Ce){de?e.location.replace(D.location):e.location.assign(D.location);return}}A=null;let U=de===!0?St.Replace:St.Push,X=ie||Sm(b.navigation);if(_A.has(D.status)&&X&&Bn(X.formMethod))await xe(U,ee,{submission:ot({},X,{formAction:D.location}),preventScrollReset:R});else if(P)await xe(U,ee,{overrideNavigation:Ya(ee),fetcherSubmission:X,preventScrollReset:R});else{let ae=Ya(ee,X);await xe(U,ee,{overrideNavigation:ae,preventScrollReset:R})}}async function Ee(b,D,z,ie,de){let P=await Promise.all([...z.map(X=>cs("loader",de,X,D,o,r,l)),...ie.map(X=>X.matches&&X.match&&X.controller?cs("loader",fs(t.history,X.path,X.controller.signal),X.match,X.matches,o,r,l):{type:wt.error,error:Mn(404,{pathname:X.path})})]),ee=P.slice(0,z.length),U=P.slice(z.length);return await Promise.all([xm(b,z,ee,ee.map(()=>de.signal),!1,g.loaderData),xm(b,ie.map(X=>X.match),U,ie.map(X=>X.controller?X.controller.signal:null),!0)]),{results:P,loaderResults:ee,fetcherResults:U}}function Qe(){M=!0,T.push(...L()),Z.forEach((b,D)=>{te.has(D)&&(ne.push(D),Oe(D))})}function Ie(b,D,z){let ie=So(g.matches,D);Le(b),se({errors:{[ie.route.id]:z},fetchers:new Map(g.fetchers)})}function Le(b){let D=g.fetchers.get(b);te.has(b)&&!(D&&D.state==="loading"&&$.has(b))&&Oe(b),Z.delete(b),$.delete(b),re.delete(b),g.fetchers.delete(b)}function Oe(b){let D=te.get(b);Ye(D,"Expected fetch controller: "+b),D.abort(),te.delete(b)}function ft(b){for(let D of b){let z=Ue(D),ie=oo(z.data);g.fetchers.set(D,ie)}}function pt(){let b=[],D=!1;for(let z of re){let ie=g.fetchers.get(z);Ye(ie,"Expected fetcher: "+z),ie.state==="loading"&&(re.delete(z),b.push(z),D=!0)}return ft(b),D}function C(b){let D=[];for(let[z,ie]of $)if(ie<b){let de=g.fetchers.get(z);Ye(de,"Expected fetcher: "+z),de.state==="loading"&&(Oe(z),$.delete(z),D.push(z))}return ft(D),D.length>0}function E(b,D){let z=g.blockers.get(b)||us;return j.get(b)!==D&&j.set(b,D),z}function Q(b){g.blockers.delete(b),j.delete(b)}function ce(b,D){let z=g.blockers.get(b)||us;Ye(z.state==="unblocked"&&D.state==="blocked"||z.state==="blocked"&&D.state==="blocked"||z.state==="blocked"&&D.state==="proceeding"||z.state==="blocked"&&D.state==="unblocked"||z.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+z.state+" -> "+D.state);let ie=new Map(g.blockers);ie.set(b,D),se({blockers:ie})}function fe(b){let{currentLocation:D,nextLocation:z,historyAction:ie}=b;if(j.size===0)return;j.size>1&&Go(!1,"A router only supports one blocker at a time");let de=Array.from(j.entries()),[P,ee]=de[de.length-1],U=g.blockers.get(P);if(!(U&&U.state==="proceeding")&&ee({currentLocation:D,nextLocation:z,historyAction:ie}))return P}function L(b){let D=[];return I.forEach((z,ie)=>{(!b||b(ie))&&(z.cancel(),D.push(ie),I.delete(ie))}),D}function oe(b,D,z){if(h=b,y=D,m=z||null,!x&&g.navigation===hc){x=!0;let ie=ve(g.location,g.matches);ie!=null&&se({restoreScrollPosition:ie})}return()=>{h=null,y=null,m=null}}function le(b,D){return m&&m(b,D.map(ie=>LA(ie,g.loaderData)))||b.key}function Y(b,D){if(h&&y){let z=le(b,D);h[z]=y()}}function ve(b,D){if(h){let z=le(b,D),ie=h[z];if(typeof ie=="number")return ie}return null}function Se(b){o={},a=gf(b,r,void 0,o)}return v={get basename(){return l},get state(){return g},get routes(){return s},initialize:B,subscribe:he,enableScrollRestoration:oe,navigate:_e,fetch:G,revalidate:Re,createHref:b=>t.history.createHref(b),encodeLocation:b=>t.history.encodeLocation(b),getFetcher:Ue,deleteFetcher:Le,dispose:V,getBlocker:E,deleteBlocker:Q,_internalFetchControllers:te,_internalActiveDeferreds:I,_internalSetRoutes:Se},v}function MA(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function vf(t,e,n,i,r,o,s){let a,l;if(o!=null&&s!=="path"){a=[];for(let f of e)if(a.push(f),f.route.id===o){l=f;break}}else a=e,l=e[e.length-1];let u=cA(r||".",M_(a).map(f=>f.pathnameBase),la(t.pathname,n)||t.pathname,s==="path");return r==null&&(u.search=t.search,u.hash=t.hash),(r==null||r===""||r===".")&&l&&l.route.index&&!Ad(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Tr([n,u.pathname])),aa(u)}function fm(t,e,n,i){if(!i||!MA(i))return{path:n};if(i.formMethod&&!PA(i.formMethod))return{path:n,error:Mn(405,{method:i.formMethod})};let r=()=>({path:n,error:Mn(400,{type:"invalid-body"})}),o=i.formMethod||"get",s=t?o.toUpperCase():o.toLowerCase(),a=R_(n);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!Bn(s))return r();let h=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((m,y)=>{let[x,p]=y;return""+m+x+"="+p+`
`},""):String(i.body);return{path:n,submission:{formMethod:s,formAction:a,formEncType:i.formEncType,formData:void 0,json:void 0,text:h}}}else if(i.formEncType==="application/json"){if(!Bn(s))return r();try{let h=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:n,submission:{formMethod:s,formAction:a,formEncType:i.formEncType,formData:void 0,json:h,text:void 0}}}catch{return r()}}}Ye(typeof FormData=="function","FormData is not available in this environment");let l,u;if(i.formData)l=_f(i.formData),u=i.formData;else if(i.body instanceof FormData)l=_f(i.body),u=i.body;else if(i.body instanceof URLSearchParams)l=i.body,u=mm(l);else if(i.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(i.body),u=mm(l)}catch{return r()}let f={formMethod:s,formAction:a,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Bn(f.formMethod))return{path:n,submission:f};let d=Ai(n);return e&&d.search&&Ad(d.search)&&l.append("index",""),d.search="?"+l,{path:aa(d),submission:f}}function EA(t,e){let n=t;if(e){let i=t.findIndex(r=>r.route.id===e);i>=0&&(n=t.slice(0,i))}return n}function dm(t,e,n,i,r,o,s,a,l,u,f,d,h,m){let y=m?Object.values(m)[0]:h?Object.values(h)[0]:void 0,x=t.createURL(e.location),p=t.createURL(r),c=m?Object.keys(m)[0]:void 0,v=EA(n,c).filter((S,R)=>{if(S.route.lazy)return!0;if(S.route.loader==null)return!1;if(TA(e.loaderData,e.matches[R],S)||s.some(M=>M===S.route.id))return!0;let A=e.matches[R],N=S;return hm(S,ot({currentUrl:x,currentParams:A.params,nextUrl:p,nextParams:N.params},i,{actionResult:y,defaultShouldRevalidate:o||x.pathname+x.search===p.pathname+p.search||x.search!==p.search||A_(A,N)}))}),g=[];return l.forEach((S,R)=>{if(!n.some(ne=>ne.route.id===S.routeId))return;let A=xo(f,S.path,d);if(!A){g.push({key:R,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let N=e.fetchers.get(R),M=yf(A,S.path),T=!1;u.has(R)?T=!1:a.includes(R)?T=!0:N&&N.state!=="idle"&&N.data===void 0?T=o:T=hm(M,ot({currentUrl:x,currentParams:e.matches[e.matches.length-1].params,nextUrl:p,nextParams:n[n.length-1].params},i,{actionResult:y,defaultShouldRevalidate:o})),T&&g.push({key:R,routeId:S.routeId,path:S.path,matches:A,match:M,controller:new AbortController})}),[v,g]}function TA(t,e,n){let i=!e||n.route.id!==e.route.id,r=t[n.route.id]===void 0;return i||r}function A_(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function hm(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function pm(t,e,n){if(!t.lazy)return;let i=await t.lazy();if(!t.lazy)return;let r=n[t.id];Ye(r,"No route found in manifest");let o={};for(let s in i){let l=r[s]!==void 0&&s!=="hasErrorBoundary";Go(!l,'Route "'+r.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!l&&!j1.has(s)&&(o[s]=i[s])}Object.assign(r,o),Object.assign(r,ot({},e(r),{lazy:void 0}))}async function cs(t,e,n,i,r,o,s,a){a===void 0&&(a={});let l,u,f,d=y=>{let x,p=new Promise((c,_)=>x=_);return f=()=>x(),e.signal.addEventListener("abort",f),Promise.race([y({request:e,params:n.params,context:a.requestContext}),p])};try{let y=n.route[t];if(n.route.lazy)if(y)u=(await Promise.all([d(y),pm(n.route,o,r)]))[0];else if(await pm(n.route,o,r),y=n.route[t],y)u=await d(y);else if(t==="action"){let x=new URL(e.url),p=x.pathname+x.search;throw Mn(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:wt.data,data:void 0};else if(y)u=await d(y);else{let x=new URL(e.url),p=x.pathname+x.search;throw Mn(404,{pathname:p})}Ye(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(y){l=wt.error,u=y}finally{f&&e.signal.removeEventListener("abort",f)}if(CA(u)){let y=u.status;if(vA.has(y)){let c=u.headers.get("Location");if(Ye(c,"Redirects returned/thrown from loaders/actions must have a Location header"),!w_.test(c))c=vf(new URL(e.url),i.slice(0,i.indexOf(n)+1),s,!0,c);else if(!a.isStaticRequest){let _=new URL(e.url),v=c.startsWith("//")?new URL(_.protocol+c):new URL(c),g=la(v.pathname,s)!=null;v.origin===_.origin&&g&&(c=v.pathname+v.search+v.hash)}if(a.isStaticRequest)throw u.headers.set("Location",c),u;return{type:wt.redirect,status:y,location:c,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||wt.data,response:u};let x,p=u.headers.get("Content-Type");return p&&/\bapplication\/json\b/.test(p)?x=await u.json():x=await u.text(),l===wt.error?{type:l,error:new wd(y,u.statusText,x),headers:u.headers}:{type:wt.data,data:x,statusCode:u.status,headers:u.headers}}if(l===wt.error)return{type:l,error:u};if(RA(u)){var h,m;return{type:wt.deferred,deferredData:u,statusCode:(h=u.init)==null?void 0:h.status,headers:((m=u.init)==null?void 0:m.headers)&&new Headers(u.init.headers)}}return{type:wt.data,data:u}}function fs(t,e,n,i){let r=t.createURL(R_(e)).toString(),o={signal:n};if(i&&Bn(i.formMethod)){let{formMethod:s,formEncType:a}=i;o.method=s.toUpperCase(),a==="application/json"?(o.headers=new Headers({"Content-Type":a}),o.body=JSON.stringify(i.json)):a==="text/plain"?o.body=i.text:a==="application/x-www-form-urlencoded"&&i.formData?o.body=_f(i.formData):o.body=i.formData}return new Request(r,o)}function _f(t){let e=new URLSearchParams;for(let[n,i]of t.entries())e.append(n,typeof i=="string"?i:i.name);return e}function mm(t){let e=new FormData;for(let[n,i]of t.entries())e.append(n,i);return e}function wA(t,e,n,i,r){let o={},s=null,a,l=!1,u={};return n.forEach((f,d)=>{let h=e[d].route.id;if(Ye(!Lo(f),"Cannot handle redirect results in processLoaderData"),bs(f)){let m=So(t,h),y=f.error;i&&(y=Object.values(i)[0],i=void 0),s=s||{},s[m.route.id]==null&&(s[m.route.id]=y),o[h]=void 0,l||(l=!0,a=E_(f.error)?f.error.status:500),f.headers&&(u[h]=f.headers)}else vr(f)?(r.set(h,f.deferredData),o[h]=f.deferredData.data):o[h]=f.data,f.statusCode!=null&&f.statusCode!==200&&!l&&(a=f.statusCode),f.headers&&(u[h]=f.headers)}),i&&(s=i,o[Object.keys(i)[0]]=void 0),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:u}}function gm(t,e,n,i,r,o,s,a){let{loaderData:l,errors:u}=wA(e,n,i,r,a);for(let f=0;f<o.length;f++){let{key:d,match:h,controller:m}=o[f];Ye(s!==void 0&&s[f]!==void 0,"Did not find corresponding fetcher result");let y=s[f];if(!(m&&m.signal.aborted))if(bs(y)){let x=So(t.matches,h==null?void 0:h.route.id);u&&u[x.route.id]||(u=ot({},u,{[x.route.id]:y.error})),t.fetchers.delete(d)}else if(Lo(y))Ye(!1,"Unhandled fetcher revalidation redirect");else if(vr(y))Ye(!1,"Unhandled fetcher deferred data");else{let x=oo(y.data);t.fetchers.set(d,x)}}return{loaderData:l,errors:u}}function vm(t,e,n,i){let r=ot({},e);for(let o of n){let s=o.route.id;if(e.hasOwnProperty(s)?e[s]!==void 0&&(r[s]=e[s]):t[s]!==void 0&&o.route.loader&&(r[s]=t[s]),i&&i.hasOwnProperty(s))break}return r}function So(t,e){return(e?t.slice(0,t.findIndex(i=>i.route.id===e)+1):[...t]).reverse().find(i=>i.route.hasErrorBoundary===!0)||t[0]}function _m(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Mn(t,e){let{pathname:n,routeId:i,method:r,type:o}=e===void 0?{}:e,s="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(s="Bad Request",r&&n&&i?a="You made a "+r+' request to "'+n+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":o==="defer-action"?a="defer() is not supported in actions":o==="invalid-body"&&(a="Unable to encode submission body")):t===403?(s="Forbidden",a='Route "'+i+'" does not match URL "'+n+'"'):t===404?(s="Not Found",a='No route matches URL "'+n+'"'):t===405&&(s="Method Not Allowed",r&&n&&i?a="You made a "+r.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":r&&(a='Invalid request method "'+r.toUpperCase()+'"')),new wd(t||500,s,new Error(a),!0)}function ym(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Lo(n))return{result:n,idx:e}}}function R_(t){let e=typeof t=="string"?Ai(t):t;return aa(ot({},e,{hash:""}))}function AA(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function vr(t){return t.type===wt.deferred}function bs(t){return t.type===wt.error}function Lo(t){return(t&&t.type)===wt.redirect}function RA(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function CA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function PA(t){return gA.has(t.toLowerCase())}function Bn(t){return pA.has(t.toLowerCase())}async function xm(t,e,n,i,r,o){for(let s=0;s<n.length;s++){let a=n[s],l=e[s];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),f=u!=null&&!A_(u,l)&&(o&&o[l.route.id])!==void 0;if(vr(a)&&(r||f)){let d=i[s];Ye(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await C_(a,d,r).then(h=>{h&&(n[s]=h||n[s])})}}}async function C_(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:wt.data,data:t.deferredData.unwrappedData}}catch(r){return{type:wt.error,error:r}}return{type:wt.data,data:t.deferredData.data}}}function Ad(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function LA(t,e){let{route:n,pathname:i,params:r}=t;return{id:n.id,pathname:i,params:r,data:e[n.id],handle:n.handle}}function yf(t,e){let n=typeof e=="string"?Ai(e).search:e.search;if(t[t.length-1].route.index&&Ad(n||""))return t[t.length-1];let i=M_(t);return i[i.length-1]}function Sm(t){let{formMethod:e,formAction:n,formEncType:i,text:r,formData:o,json:s}=t;if(!(!e||!n||!i)){if(r!=null)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:void 0,text:r};if(o!=null)return{formMethod:e,formAction:n,formEncType:i,formData:o,json:void 0,text:void 0};if(s!==void 0)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:s,text:void 0}}}function Ya(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function bA(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function ds(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function DA(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function oo(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xf(){return xf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xf.apply(this,arguments)}const P_=Pe.createContext(null),L_=Pe.createContext(null),b_=Pe.createContext(null),tu=Pe.createContext(null),nu=Pe.createContext({outlet:null,matches:[],isDataRoute:!1}),D_=Pe.createContext(null);function Rd(){return Pe.useContext(tu)!=null}function UA(){return Rd()||Ye(!1),Pe.useContext(tu).location}function IA(t,e,n){Rd()||Ye(!1);let{navigator:i}=Pe.useContext(b_),{matches:r}=Pe.useContext(nu),o=r[r.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=UA(),u;if(e){var f;let x=typeof e=="string"?Ai(e):e;a==="/"||(f=x.pathname)!=null&&f.startsWith(a)||Ye(!1),u=x}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",m=xo(t,{pathname:h}),y=kA(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:Tr([a,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:Tr([a,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),r,n);return e&&y?Pe.createElement(tu.Provider,{value:{location:xf({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:St.Pop}},y):y}function NA(){let t=U_(),e=E_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return Pe.createElement(Pe.Fragment,null,Pe.createElement("h2",null,"Unexpected Application Error!"),Pe.createElement("h3",{style:{fontStyle:"italic"}},e),n?Pe.createElement("pre",{style:r},n):null,o)}const FA=Pe.createElement(NA,null);class OA extends Pe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?Pe.createElement(nu.Provider,{value:this.props.routeContext},Pe.createElement(D_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zA(t){let{routeContext:e,match:n,children:i}=t,r=Pe.useContext(P_);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),Pe.createElement(nu.Provider,{value:e},i)}function kA(t,e,n){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var r;if((r=n)!=null&&r.errors)t=n.matches;else return null}let o=t,s=(i=n)==null?void 0:i.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||Ye(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let f=l.route.id?s==null?void 0:s[l.route.id]:null,d=null;n&&(d=l.route.errorElement||FA);let h=e.concat(o.slice(0,u+1)),m=()=>{let y;return f?y=d:l.route.Component?y=Pe.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,Pe.createElement(zA,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?Pe.createElement(OA,{location:n.location,revalidation:n.revalidation,component:d,error:f,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var Mm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Mm||(Mm={}));var Il;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Il||(Il={}));function BA(t){let e=Pe.useContext(L_);return e||Ye(!1),e}function HA(t){let e=Pe.useContext(nu);return e||Ye(!1),e}function GA(t){let e=HA(),n=e.matches[e.matches.length-1];return n.route.id||Ye(!1),n.route.id}function U_(){var t;let e=Pe.useContext(D_),n=BA(Il.UseRouteError),i=GA(Il.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}const VA="startTransition",Em=Q_[VA];function WA(t){let{fallbackElement:e,router:n,future:i}=t,[r,o]=Pe.useState(n.state),{v7_startTransition:s}=i||{},a=Pe.useCallback(d=>{s&&Em?Em(()=>o(d)):o(d)},[o,s]);Pe.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=Pe.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,h,m)=>n.navigate(d,{state:h,preventScrollReset:m==null?void 0:m.preventScrollReset}),replace:(d,h,m)=>n.navigate(d,{replace:!0,state:h,preventScrollReset:m==null?void 0:m.preventScrollReset})}),[n]),u=n.basename||"/",f=Pe.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return Pe.createElement(Pe.Fragment,null,Pe.createElement(P_.Provider,{value:f},Pe.createElement(L_.Provider,{value:r},Pe.createElement(jA,{basename:u,location:r.location,navigationType:r.historyAction,navigator:l},r.initialized?Pe.createElement(XA,{routes:n.routes,state:r}):e))),null)}function XA(t){let{routes:e,state:n}=t;return IA(e,void 0,n)}function jA(t){let{basename:e="/",children:n=null,location:i,navigationType:r=St.Pop,navigator:o,static:s=!1}=t;Rd()&&Ye(!1);let a=e.replace(/^\/*/,"/"),l=Pe.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof i=="string"&&(i=Ai(i));let{pathname:u="/",search:f="",hash:d="",state:h=null,key:m="default"}=i,y=Pe.useMemo(()=>{let x=la(u,a);return x==null?null:{location:{pathname:x,search:f,hash:d,state:h,key:m},navigationType:r}},[a,u,f,d,h,m,r]);return y==null?null:Pe.createElement(b_.Provider,{value:l},Pe.createElement(tu.Provider,{children:n,value:y}))}var Tm;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Tm||(Tm={}));new Promise(()=>{});function YA(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:Pe.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:Pe.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nl(){return Nl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Nl.apply(this,arguments)}function qA(t,e){return SA({basename:e==null?void 0:e.basename,future:Nl({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:V1({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||$A(),routes:t,mapRouteProperties:YA}).initialize()}function $A(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Nl({},e,{errors:KA(e.errors)})),e}function KA(t){if(!t)return null;let e=Object.entries(t),n={};for(let[i,r]of e)if(r&&r.__type==="RouteErrorResponse")n[i]=new wd(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let o=window[r.__subType];if(typeof o=="function")try{let s=new o(r.message);s.stack="",n[i]=s}catch{}}if(n[i]==null){let o=new Error(r.message);o.stack="",n[i]=o}}else n[i]=r;return n}var wm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(wm||(wm={}));var Am;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Am||(Am={}));function Rm(){const t=U_();console.error(t);function e(i){return i!==null&&typeof i=="object"&&("message"in i||"statusText"in i)}let n="An unknown error has occurred.";return e(t)&&(n=t.message||t.statusText||n),Ze.jsxs("div",{id:"error-page",children:[Ze.jsx("h1",{children:"uh oh!"}),Ze.jsx("p",{children:"This is embarassing"}),Ze.jsx("p",{children:Ze.jsx("i",{children:n})})]})}const ZA=qA([{path:"/",element:Ze.jsx(G1,{}),errorElement:Ze.jsx(Rm,{})},{path:"/btsui3.github.io/",element:Ze.jsx(H1,{}),errorElement:Ze.jsx(Rm,{})}]);pc.createRoot(document.getElementById("root")).render(Ze.jsx(Om.StrictMode,{children:Ze.jsx(WA,{router:ZA})}));
