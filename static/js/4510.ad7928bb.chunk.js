"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4510],{14510:(e,n,r)=>{r.r(n),r.d(n,{default:()=>i});const i={components:{},data:{},source:"\x3c!--rehype:ignore:start--\x3e\n\n# Relative Line Numbers Extensions\n\n\x3c!--rehype:ignore:end--\x3e\n\n[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)\n[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-line-numbers-relative.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-line-numbers-relative)\n\nRelative line numbers Extensions for CodeMirror6.\n\n[![Relative line numbers Extensions](https://user-images.githubusercontent.com/1680273/178180348-c53b4b91-527c-4a90-9e60-20269ef9a598.png)](https://uiwjs.github.io/react-codemirror/#/extensions/line-numbers-relative)\n\n## Install\n\n```bash\nnpm install @uiw/codemirror-extensions-line-numbers-relative --save\n```\n\n## Usage\n\n```jsx\nimport CodeMirror from '@uiw/react-codemirror';\nimport { lineNumbersRelative } from '@uiw/codemirror-extensions-line-numbers-relative';\n\nfunction App() {\n  return <CodeMirror value=\"console.log('hello world!');\" height=\"200px\" extensions={[lineNumbersRelative]} />;\n}\nexport default App;\n```\n\n```js\nimport { EditorView } from '@codemirror/view';\nimport { EditorState } from '@codemirror/state';\nimport { lineNumbersRelative } from '@uiw/codemirror-extensions-line-numbers-relative';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [lineNumbersRelative],\n});\n\nconst view = new EditorView({\n  parent: document.querySelector('#editor'),\n  state,\n});\n```\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://github.com/uiwjs/react-codemirror/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n",headings:[],headingsList:[]}}}]);
//# sourceMappingURL=4510.ad7928bb.chunk.js.map