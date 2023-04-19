import{r as o}from"./index.45a47ed6.js";const _=typeof window<"u"?o.useLayoutEffect:o.useEffect;function m(t,e){const s=o.useRef(t);_(()=>{s.current=t},[t]),o.useEffect(()=>{if(!e&&e!==0)return;const r=setInterval(()=>s.current(),e);return()=>clearInterval(r)},[e])}var l={},v={get exports(){return l},set exports(t){l=t}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=o,E=Symbol.for("react.element"),I=Symbol.for("react.fragment"),w=Object.prototype.hasOwnProperty,R=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function x(t,e,s){var r,n={},f=null,u=null;s!==void 0&&(f=""+s),e.key!==void 0&&(f=""+e.key),e.ref!==void 0&&(u=e.ref);for(r in e)w.call(e,r)&&!h.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:E,type:t,key:f,ref:u,props:n,_owner:R.current}}c.Fragment=I;c.jsx=x;c.jsxs=x;(function(t){t.exports=c})(v);const S=({messagePrefix:t="",messages:e,speed:s=120,delay:r=10})=>{const[n,f]=o.useState(0),[u,a]=o.useState(0),[d,p]=o.useState(!1);return m(()=>{d?(f(i=>i-1),n<=0&&(p(!1),u<e.length-1?a(i=>i+1):a(0))):(f(i=>i+1),n>=e[u].length+r&&p(!0))},s),l.jsx("div",{className:"text-3xl text-white text-center mt-2 after:content-['|'] after:animate-blink",children:t+e[u].substring(0,n)})};export{S as default};
