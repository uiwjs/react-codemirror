<!--rehype:ignore:start-->

# Basic Setup Extensions

<!--rehype:ignore:end-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-basic-setup.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-basic-setup)

Basic configuration for the CodeMirror6 code editor. This is the official [basic-setup](https://github.com/codemirror/basic-setup) package fork, making configuration optional.

## Install

```bash
npm install @uiw/codemirror-extensions-basic-setup --save
```

## Usage

⚠️ Integrated into [**@uiw/react-codemirror**](https://npmjs.com/@uiw/react-codemirror) package

```jsx
import CodeMirror from '@uiw/react-codemirror';

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      basicSetup={{
        foldGutter: false,
        dropCursor: false,
        allowMultipleSelections: false,
        indentOnInput: false,
      }}
    />
  );
}
export default App;
```

```js
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { basicSetup, minimalSetup } from '@uiw/codemirror-extensions-basic-setup';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [
    basicSetup({
      foldGutter: false,
      dropCursor: false,
      allowMultipleSelections: false,
      indentOnInput: false,
    }),
  ],
});

const view = new EditorView({
  parent: document.querySelector('#editor'),
  state,
});
```

```diff
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
- import { basicSetup, minimalSetup } from 'codemirror';
+ import { basicSetup, minimalSetup } from '@uiw/codemirror-extensions-basic-setup';

const state = EditorState.create({
  doc: 'my source code',
  extensions: [
-    basicSetup
+    basicSetup({
+      foldGutter: false,
+      dropCursor: false,
+    })
  ],
});

const view = new EditorView({
  parent: document.querySelector('#editor'),
  state,
});
```

## API

```ts
import { Extension } from '@codemirror/state';
export interface BasicSetupOptions extends MinimalSetupOptions {
  lineNumbers?: boolean;
  highlightActiveLineGutter?: boolean;
  foldGutter?: boolean;
  dropCursor?: boolean;
  allowMultipleSelections?: boolean;
  indentOnInput?: boolean;
  bracketMatching?: boolean;
  closeBrackets?: boolean;
  autocompletion?: boolean;
  rectangularSelection?: boolean;
  crosshairCursor?: boolean;
  highlightActiveLine?: boolean;
  highlightSelectionMatches?: boolean;
  closeBracketsKeymap?: boolean;
  searchKeymap?: boolean;
  foldKeymap?: boolean;
  completionKeymap?: boolean;
  lintKeymap?: boolean;
  /**
   * Facet for overriding the unit by which indentation happens. Should be a string consisting either entirely of spaces or entirely of tabs. When not set, this defaults to 2 spaces
   * https://codemirror.net/docs/ref/#language.indentUnit
   * @default 2
   */
  tabSize?: number;
}
/**
This is an extension value that just pulls together a number of
extensions that you might want in a basic editor. It is meant as a
convenient helper to quickly set up CodeMirror without installing
and importing a lot of separate packages.

Specifically, it includes...

- [the default command bindings](https://codemirror.net/6/docs/ref/#commands.defaultKeymap)
- [line numbers](https://codemirror.net/6/docs/ref/#view.lineNumbers)
- [special character highlighting](https://codemirror.net/6/docs/ref/#view.highlightSpecialChars)
- [the undo history](https://codemirror.net/6/docs/ref/#commands.history)
- [a fold gutter](https://codemirror.net/6/docs/ref/#language.foldGutter)
- [custom selection drawing](https://codemirror.net/6/docs/ref/#view.drawSelection)
- [drop cursor](https://codemirror.net/6/docs/ref/#view.dropCursor)
- [multiple selections](https://codemirror.net/6/docs/ref/#state.EditorState^allowMultipleSelections)
- [reindentation on input](https://codemirror.net/6/docs/ref/#language.indentOnInput)
- [the default highlight style](https://codemirror.net/6/docs/ref/#language.defaultHighlightStyle) (as fallback)
- [bracket matching](https://codemirror.net/6/docs/ref/#language.bracketMatching)
- [bracket closing](https://codemirror.net/6/docs/ref/#autocomplete.closeBrackets)
- [autocompletion](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion)
- [rectangular selection](https://codemirror.net/6/docs/ref/#view.rectangularSelection) and [crosshair cursor](https://codemirror.net/6/docs/ref/#view.crosshairCursor)
- [active line highlighting](https://codemirror.net/6/docs/ref/#view.highlightActiveLine)
- [active line gutter highlighting](https://codemirror.net/6/docs/ref/#view.highlightActiveLineGutter)
- [selection match highlighting](https://codemirror.net/6/docs/ref/#search.highlightSelectionMatches)
- [search](https://codemirror.net/6/docs/ref/#search.searchKeymap)
- [linting](https://codemirror.net/6/docs/ref/#lint.lintKeymap)

(You'll probably want to add some language package to your setup
too.)

This extension does not allow customization. The idea is that,
once you decide you want to configure your editor more precisely,
you take this package's source (which is just a bunch of imports
and an array literal), copy it into your own code, and adjust it
as desired.
*/
export declare const basicSetup: (options?: BasicSetupOptions) => Extension[];
export interface MinimalSetupOptions {
  highlightSpecialChars?: boolean;
  history?: boolean;
  drawSelection?: boolean;
  syntaxHighlighting?: boolean;
  defaultKeymap?: boolean;
  historyKeymap?: boolean;
}
/**
A minimal set of extensions to create a functional editor. Only
includes [the default keymap](https://codemirror.net/6/docs/ref/#commands.defaultKeymap), [undo
history](https://codemirror.net/6/docs/ref/#commands.history), [special character
highlighting](https://codemirror.net/6/docs/ref/#view.highlightSpecialChars), [custom selection
drawing](https://codemirror.net/6/docs/ref/#view.drawSelection), and [default highlight
style](https://codemirror.net/6/docs/ref/#language.defaultHighlightStyle).
*/
export declare const minimalSetup: (options?: MinimalSetupOptions) => Extension[];
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-codemirror/graphs/contributors">
  <img src="https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
