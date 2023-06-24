<!--rehype:ignore:start-->

# Zebra Stripes Extensions

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-zebra-stripes.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-zebra-stripes)

Styles alternating lines for CodeMirror6.

[![Zebra Stripes Extensions](https://user-images.githubusercontent.com/1680273/205496628-e7e6f83f-18e9-4bff-8bc8-71a913c60687.png)](https://uiwjs.github.io/react-codemirror/#/extensions/zebra-stripes)

## Install

```bash
npm install @uiw/codemirror-extensions-zebra-stripes --save
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { zebraStripes } from '@uiw/codemirror-extensions-zebra-stripes';

function App() {
  return <CodeMirror value="" height="200px" extensions={[zebraStripes({ step: 2 })]} />;
}
export default App;
```

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { zebraStripes } from '@uiw/codemirror-extensions-zebra-stripes';

function App() {
  return (
    <CodeMirror
      value=""
      height="200px"
      extensions={[
        zebraStripes({
          lineNumber: [1, [3, 6], 10],
          lightColor: '#aca2ff33',
          darkColor: '#aca2ff40',
        }),
      ]}
    />
  );
}
export default App;
```

```js
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { zebraStripes } from '@uiw/codemirror-extensions-zebra-stripes';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [zebraStripes({ step: 2 })],
});

const view = new EditorView({
  parent: document.querySelector('#editor'),
  state,
});
```

## API

```ts
import { Extension } from '@codemirror/state';
export declare type ZebraStripesOptions = {
  step?: number | null;
  lightColor?: string;
  darkColor?: string;
  /**
   * @example `[1,[2,6], 10]`
   */
  lineNumber?: (number | number[])[] | null;
  /** @default `cm-zebra-stripe` */
  className?: string;
};
export declare function zebraStripes(options?: ZebraStripesOptions): Extension;
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-codemirror/graphs/contributors">
  <img src="https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
