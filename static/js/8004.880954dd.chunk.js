"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8004],{68004:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>x});var r=n(17234),a=n(28169),o=n(73562),i=n(88118),s=n(69332),d=n(8942),l=n(5428);const c=function(){var e;return null===(e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g))||void 0===e?void 0:e.map((e=>e.toLowerCase())).join(",").split(",")},p=function(){var e;return null===(e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g))||void 0===e?void 0:e.map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ")};var u=n(98557);const m=r.Ay.div`
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  display: grid;
  padding: 2.6rem;
  a {
    text-decoration: none;
  }
`,h=r.Ay.div`
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
`,v=r.Ay.div`
  font-weight: 600;
  padding-bottom: 0.68rem;
`,g="import React, { useState } from 'react';\n\n// My favorite component\nconst Counter = () => {\n  const [value, setValue] = useState(0);\n  return (\n    <span>{value}</span>\n  );\n};",b=r.Ay.div`
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
`;function x(){return(0,u.jsx)(d.U,{children:(0,u.jsx)(m,{children:Object.keys(l.K).map(((e,t)=>{const n=(c(e)||[]).join("-").replace(/-light$/,"/light").replace(/-dark$/,"/dark"),r=l.K[e];return(0,u.jsx)(a.N_,{to:`/theme/data/${n}`,children:(0,u.jsxs)(h,{children:[(0,u.jsx)(v,{children:p(e)}),(0,u.jsx)(b,{children:(0,u.jsx)(o.Ay,{theme:r,value:g,height:"185px !important",extensions:[i.yW,s.cg.jsx()]})})]})},t)}))})})}}}]);
//# sourceMappingURL=8004.880954dd.chunk.js.map