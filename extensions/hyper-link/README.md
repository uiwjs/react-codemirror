<!--rehype:ignore:start-->

# Hyper link Extensions

<!--rehype:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-hyper-link.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-hyper-link)

Hyper link Extensions for CodeMirror6.

## Install

```bash
npm install @uiw/codemirror-extensions-hyper-link --save
```

```jsx
import { hyperLink, hyperLinkExtension, hyperLinkStyle } from '@uiw/codemirror-extensions-hyper-link';
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { hyperLink } from '@uiw/codemirror-extensions-hyper-link';

const code = `https://uiwjs.github.io/react-codemirror`;

function App() {
  return <CodeMirror value={code} height="200px" extensions={[hyperLink]} />;
}
export default App;
```

```js
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { hyperLink } from '@uiw/codemirror-extensions-hyper-link';

const code = `https://uiwjs.github.io/react-codemirror`;

const state = EditorState.create({
  doc: code,
  extensions: [hyperLink],
});

const view = new EditorView({
  parent: document.querySelector('#editor'),
  state,
});
```

Custom match content

```tsx
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { hyperLinkExtension, hyperLinkStyle } from '@uiw/codemirror-extensions-hyper-link';

const code = `Hyper Link\n====`;

export const hyperLink: Extension = [
  hyperLinkExtension({
    regexp: /Hyper/gi,
    match: { Hyper: 'https://google.com' },
    handle: (value, input, from, to) => {
      if (value === 'Hyper') return 'https://google.com';
      return value;
    },
  }),
  hyperLinkStyle,
];

const state = EditorState.create({
  doc: code,
  extensions: [hyperLink],
});

const view = new EditorView({
  parent: document.querySelector('#editor'),
  state,
});
```

## API

```ts
import { ViewPlugin, DecorationSet, MatchDecorator, ViewUpdate } from '@codemirror/view';
import { Extension } from '@codemirror/state';
export interface HyperLinkState {
  at: number;
  url: string;
  anchor: HyperLinkExtensionOptions['anchor'];
}
export type HyperLinkExtensionOptions = {
  regexp?: RegExp;
  match?: Record<string, string>;
  handle?: (value: string, input: string, from: number, to: number) => string;
  anchor?: (dom: HTMLAnchorElement) => HTMLAnchorElement;
};
export declare function hyperLinkExtension({ regexp, match, handle, anchor }?: HyperLinkExtensionOptions): ViewPlugin<{
  decorator?: MatchDecorator | undefined;
  decorations: DecorationSet;
  update(update: ViewUpdate): void;
}>;
export declare const hyperLinkStyle: Extension;
export declare const hyperLink: Extension;
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-codemirror/graphs/contributors">
  <img src="https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
