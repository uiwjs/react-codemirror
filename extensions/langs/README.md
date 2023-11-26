<!--rehype:ignore:start-->

# Load languages Extensions

<!--rehype:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-langs.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-langs)

Load languages Extensions for CodeMirror6.

## Install

```bash
npm install @uiw/codemirror-extensions-langs --save
```

```jsx
import { loadLanguage, langNames, langs } from '@uiw/codemirror-extensions-langs';

loadLanguage('tsx');

langs.tsx();

console.log('langNames:', langNames); // => "jsx" | "typescript" | "javascript" | "tsx"
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';

function App() {
  return <CodeMirror value="console.log('hello world!');" height="200px" extensions={[langs.tsx()]} />;
}
export default App;
```

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';

function App() {
  return <CodeMirror value="console.log('hello world!');" height="200px" extensions={[loadLanguage('tsx')]} />;
}
export default App;
```

```js
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { loadLanguage, langs } from '@uiw/codemirror-extensions-langs';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [langs.jsx()],
});

const view = new EditorView({
  parent: document.querySelector('#editor'),
  state,
});
```

## Support Language

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-codemirror-example-codemirror-6-language-rz4rh?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';

const goLang = `package main
import "fmt"

func main() {
  fmt.Println("Hello, 世界")
}`;

export default function App() {
  return <CodeMirror value={goLang} height="200px" extensions={[StreamLanguage.define(go)]} />;
}
```

- ~~`@codemirror/legacy-modes/mode/cpp`~~ => [`@codemirror/lang-cpp`](https://www.npmjs.com/package/@codemirror/lang-cpp)
- ~~`@codemirror/legacy-modes/mode/html`~~ => [`@codemirror/lang-html`](https://www.npmjs.com/package/@codemirror/lang-html)
- ~~`@codemirror/legacy-modes/mode/java`~~ => [`@codemirror/lang-java`](https://www.npmjs.com/package/@codemirror/lang-java)
- ~~`@codemirror/legacy-modes/mode/javascript`~~ => [`@codemirror/lang-javascript`](https://www.npmjs.com/package/@codemirror/lang-javascript)
- ~~`@codemirror/legacy-modes/mode/json`~~ => [`@codemirror/lang-json`](https://www.npmjs.com/package/@codemirror/lang-json)
- ~~`@codemirror/legacy-modes/mode/lezer`~~ => [`@codemirror/lang-lezer`](https://www.npmjs.com/package/@codemirror/lang-lezer)
- ~~`@codemirror/legacy-modes/mode/markdown`~~ => [`@codemirror/lang-markdown`](https://www.npmjs.com/package/@codemirror/lang-markdown)
- ~~`@codemirror/legacy-modes/mode/php`~~ => [`@codemirror/lang-php`](https://www.npmjs.com/package/@codemirror/lang-php)
- ~~`@codemirror/legacy-modes/mode/python`~~ => [`@codemirror/lang-python`](https://www.npmjs.com/package/@codemirror/lang-python)
- ~~`@codemirror/legacy-modes/mode/rust`~~ => [`@codemirror/lang-rust`](https://www.npmjs.com/package/@codemirror/lang-rust)
- ~~`@codemirror/legacy-modes/mode/sql`~~ => [`@codemirror/lang-sql`](https://www.npmjs.com/package/@codemirror/lang-sql)
- ~~`@codemirror/legacy-modes/mode/xml`~~ => [`@codemirror/lang-xml`](https://www.npmjs.com/package/@codemirror/lang-xml)
- ~~`@codemirror/legacy-modes/mode/css`~~ => [`@codemirror/lang-less`](https://www.npmjs.com/package/@codemirror/lang-less)
- ~~`@codemirror/legacy-modes/mode/sass`~~ => [`@codemirror/lang-sass`](https://www.npmjs.com/package/@codemirror/lang-sass)
- ~~`@codemirror/legacy-modes/mode/clojure`~~ => [`@nextjournal/lang-clojure`](https://www.npmjs.com/package/@nextjournal/lang-clojure)
- ~~`@codemirror/legacy-modes/mode/clike`~~ => [`@replit/codemirror-lang-csharp`](https://www.npmjs.com/package/@replit/codemirror-lang-csharp)

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-codemirror/graphs/contributors">
  <img src="https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
