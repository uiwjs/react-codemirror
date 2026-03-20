"use strict";(globalThis.webpackChunkwww=globalThis.webpackChunkwww||[]).push([[8004],{68004(e,t,n){n.r(t),n.d(t,{Component:()=>g});var r=n(6008),a=n(28169),o=n(96742),i=n(52050),s=n(9632),d=n(8942),l=n(43662);const c=function(){var e;return null===(e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g))||void 0===e?void 0:e.map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")};var p=n(98557);const u=r.Ay.div`
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  display: grid;
  padding: 2.6rem;
  a {
    text-decoration: none;
  }
`,m=r.Ay.div`
  padding: 1rem;
  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 0 #0000,
    0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  border: 1px solid var(--color-neutral-muted);
  background-color: var(--color-canvas-subtle);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;
  &:hover {
    transform: translate(0, -0.25rem) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
  }
`,h=r.Ay.div`
  font-weight: 600;
  padding-bottom: 0.68rem;
`,v=r.Ay.div`
  border-radius: 0.375rem;
  overflow: hidden;
  position: relative;
  &::before {
    content: '';
    display: block;
    height: 100%;
    background: transparent;
    width: 100%;
    position: absolute;
    z-index: 1;
  }
`;function g(){return(0,p.jsx)(d.U,{children:(0,p.jsx)(u,{children:Object.keys(l.K).map((e,t)=>{const n=(function(){var e;return null===(e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g))||void 0===e?void 0:e.map(e=>e.toLowerCase()).join(",").split(",")}(e)||[]).join("-").replace(/-light$/,"/light").replace(/-dark$/,"/dark"),r=l.K[e];return(0,p.jsx)(a.N_,{to:`/theme/data/${n}`,children:(0,p.jsxs)(m,{children:[(0,p.jsx)(h,{children:c(e)}),(0,p.jsx)(v,{children:(0,p.jsx)(o.Ay,{theme:r,value:"import React, { useState } from 'react';\n\n// My favorite component\nconst Counter = () => {\n  const [value, setValue] = useState(0);\n  return (\n    <span>{value}</span>\n  );\n};",height:"185px !important",extensions:[i.yW,s.cg.jsx()]})})]})},t)})})})}}}]);
//# sourceMappingURL=8004.7e2b423b.chunk.js.map