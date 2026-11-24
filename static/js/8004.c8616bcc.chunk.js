"use strict";(Array.isArray(globalThis.webpackChunkwww)?globalThis.webpackChunkwww:globalThis.webpackChunkwww=[]).push([[8004],{68004(e,r,t){t.r(r),t.d(r,{Component:()=>g});var a=t(19232),n=t(28169),o=t(1190),i=t(52050),s=t(9632),l=t(8942),d=t(43662);const c=(e="")=>{var r;return null===(r=e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g))||void 0===r?void 0:r.map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")};var p=t(98557);const u=a.Ay.div`
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  display: grid;
  padding: 2.6rem;
  a {
    text-decoration: none;
  }
`,m=a.Ay.div`
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
`,h=a.Ay.div`
  font-weight: 600;
  padding-bottom: 0.68rem;
`,b=a.Ay.div`
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
`;function g(){return(0,p.jsx)(l.U,{children:(0,p.jsx)(u,{children:Object.keys(d.K).map((e,r)=>{const t=(((e="")=>{var r;return null===(r=e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g))||void 0===r?void 0:r.map(e=>e.toLowerCase()).join(",").split(",")})(e)||[]).join("-").replace(/-light$/,"/light").replace(/-dark$/,"/dark"),a=d.K[e];return(0,p.jsx)(n.N_,{to:`/theme/data/${t}`,children:(0,p.jsxs)(m,{children:[(0,p.jsx)(h,{children:c(e)}),(0,p.jsx)(b,{children:(0,p.jsx)(o.Ay,{theme:a,value:"import React, { useState } from 'react';\n\n// My favorite component\nconst Counter = () => {\n  const [value, setValue] = useState(0);\n  return (\n    <span>{value}</span>\n  );\n};",height:"185px !important",extensions:[i.yW,s.cg.jsx()]})})]})},r)})})})}}}]);
//# sourceMappingURL=8004.c8616bcc.chunk.js.map