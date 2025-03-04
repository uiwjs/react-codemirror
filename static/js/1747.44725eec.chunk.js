"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1747],{81747:(r,e,t)=>{t.r(e),t.d(e,{default:()=>o});const o={components:{},data:{},source:"\x3c!--rehype:ignore:start--\x3e\n\n# Gruvbox Dark Theme\n\n\x3c!--rehype:ignore:end--\x3e\n\n[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)\n[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-gruvbox-dark.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-gruvbox-dark)\n\nThis package implements the [gruvbox](https://github.com/morhetz/gruvbox) light theme for the CodeMirror code editor.\n\n<a href=\"https://uiwjs.github.io/react-codemirror/#/theme/data/gruvbox/dark\">\n  <img width=\"436\" alt=\"codemirror-theme-gruvbox-dark\" src=\"https://user-images.githubusercontent.com/1680273/206087857-d0a85219-34ad-4e79-9cdf-183f67e1085d.png\">\n</a>\n\n<a href=\"https://uiwjs.github.io/react-codemirror/#/theme/data/gruvbox/light\">\n  <img width=\"436\" alt=\"codemirror-theme-eclipse\" src=\"https://user-images.githubusercontent.com/1680273/206087911-49db6624-ab8c-434e-9b8a-84132fe206f9.png\">\n</a>\n\n## Install\n\n```bash\nnpm install @uiw/codemirror-theme-gruvbox-dark --save\n```\n\n```js\nimport { EditorState } from '@codemirror/state';\nimport { javascript } from '@codemirror/lang-javascript';\nimport { gruvboxDark } from '@uiw/codemirror-theme-gruvbox-dark';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [gruvboxDark, javascript({ jsx: true })],\n});\n```\n\nUsing in React:\n\n```jsx\nimport { gruvboxDark, gruvboxDarkInit, gruvboxLight, gruvboxLightInit } from '@uiw/codemirror-theme-nord';\n\n<CodeMirror theme={gruvboxDark} />\n<CodeMirror\n  theme={gruvboxDarkInit({\n    settings: {\n      caret: '#c6c6c6',\n      fontFamily: 'monospace',\n    }\n  })}\n/>\n```\n\n## API\n\n```tsx\nimport { CreateThemeOptions } from '@uiw/codemirror-themes';\nexport declare const defaultSettingsGruvboxDark: CreateThemeOptions['settings'];\nexport declare const gruvboxDarkInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;\nexport declare const gruvboxDark: import('@codemirror/state').Extension;\nexport declare const defaultSettingsGruvboxLight: CreateThemeOptions['settings'];\nexport declare const gruvboxLightInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;\nexport declare const gruvboxLight: import('@codemirror/state').Extension;\n```\n\n## Usage\n\n```jsx\nimport CodeMirror from '@uiw/react-codemirror';\nimport { gruvboxDark, gruvboxLight } from '@uiw/codemirror-theme-gruvbox-dark';\nimport { javascript } from '@codemirror/lang-javascript';\n\nfunction App() {\n  return (\n    <CodeMirror\n      value=\"console.log('hello world!');\"\n      height=\"200px\"\n      theme={gruvboxDark}\n      extensions={[javascript({ jsx: true })]}\n    />\n  );\n}\nexport default App;\n```\n\n```js\nimport { EditorView } from '@codemirror/view';\nimport { EditorState } from '@codemirror/state';\nimport { javascript } from '@codemirror/lang-javascript';\nimport { gruvboxDark } from '@uiw/codemirror-theme-gruvbox-dark';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [gruvboxDark, javascript({ jsx: true })],\n});\n\nconst view = new EditorView({\n  parent: document.querySelector('#editor'),\n  state,\n});\n```\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://github.com/uiwjs/react-codemirror/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n",headings:[],headingsList:[]}}}]);
//# sourceMappingURL=1747.44725eec.chunk.js.map