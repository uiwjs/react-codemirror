<!--rehype:ignore:start-->

# Color Extensions

<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-color.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-color)

Color Extensions for CodeMirror6.

[![Codemirror Extensions Color](https://user-images.githubusercontent.com/1680273/178143104-26e0564b-bd3e-42cd-a8d4-b40edf9ec44d.png)](https://uiwjs.github.io/react-codemirror/#/extensions/color)

## Install

```bash
npm install @uiw/codemirror-extensions-color --save
```

## Usage

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { color, colorView, colorTheme } from '@uiw/codemirror-extensions-color';

function App() {
  return (
    <CodeMirror
      value="body { color: #333; }"
      extensions={[color]}
      // ------ Or ------
      // extensions={[colorView(false), colorTheme]}
      height="200px"
    />
  );
}
export default App;
```

```js
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { color } from '@uiw/codemirror-extensions-color';

const state = EditorState.create({
  doc: 'body { color: #333; }',
  extensions: [color],
});

const view = new EditorView({
  parent: document.querySelector('#editor'),
  state,
});
```

## API

```ts
import { ViewPlugin, EditorView, ViewUpdate, DecorationSet } from '@codemirror/view';
import { Extension } from '@codemirror/state';
export declare enum ColorType {
  rgb = 'RGB',
  hex = 'HEX',
  named = 'NAMED',
  hsl = 'HSL',
}
export interface ColorState {
  from: number;
  to: number;
  alpha: string;
  colorType: ColorType;
}
export declare const colorView: (showPicker?: boolean) => ViewPlugin<{
  decorations: DecorationSet;
  update(update: ViewUpdate): void;
  changePicker(view: EditorView, canBeEdited: boolean): void;
}>;
export declare const colorTheme: Extension;
export declare const color: Extension;
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-codemirror/graphs/contributors">
  <img src="https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg" />
</a>

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
