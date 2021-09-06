/// <reference types="react-scripts" />

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.md' {
  const src: string;
  export default src;
}

declare module '*.txt' {
  const src: string;
  export default src;
}
