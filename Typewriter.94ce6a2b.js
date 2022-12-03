import{r as o}from"./chunks/index.188fa55c.js";const _=typeof window<"u"?o.exports.useLayoutEffect:o.exports.useEffect;function m(r,e){const s=o.exports.useRef(r);_(()=>{s.current=r},[r]),o.exports.useEffect(()=>{if(!e&&e!==0)return;const t=setInterval(()=>s.current(),e);return()=>clearInterval(t)},[e])}var x={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=o.exports,y=Symbol.for("react.element"),I=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,w=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function a(r,e,s){var t,n={},f=null,i=null;s!==void 0&&(f=""+s),e.key!==void 0&&(f=""+e.key),e.ref!==void 0&&(i=e.ref);for(t in e)E.call(e,t)&&!h.hasOwnProperty(t)&&(n[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:y,type:r,key:f,ref:i,props:n,_owner:w.current}}p.Fragment=I;p.jsx=a;p.jsxs=a;x.exports=p;const R=({messagePrefix:r="",messages:e,speed:s=120,delay:t=10})=>{const[n,f]=o.exports.useState(0),[i,l]=o.exports.useState(0),[d,c]=o.exports.useState(!1);return m(()=>{d?(f(u=>u-1),n<=0&&(c(!1),i<e.length-1?l(u=>u+1):l(0))):(f(u=>u+1),n>=e[i].length+t&&c(!0))},s),x.exports.jsx("div",{className:"text-3xl text-white text-center mt-2 after:content-['|'] after:animate-blink",children:r+e[i].substring(0,n)})};export{R as default};
