# Custom Codemirror Themes

[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-themes.svg)](https://www.npmjs.com/package/@uiw/codemirror-themes)

Themes for CodeMirror.

## Install

```bash
npm install @uiw/codemirror-themes --save
```

## Usage

```js
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';
import { tags as t } from '@lezer/highlight';

const myTheme = createTheme({
  theme: 'light',
  settings: {
    background: '#ffffff',
    foreground: '#75baff',
    caret: '#5d00ff',
    selection: '#036dd626',
    selectionMatch: '#036dd626',
    lineHighlight: '#8a91991a',
    gutterBackground: '#fff',
    gutterForeground: '#8a919966',
  },
  styles: [
    { tag: t.comment, color: '#787b8099' },
    { tag: t.variableName, color: '#0080ff' },
    { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
    { tag: t.number, color: '#5c6166' },
    { tag: t.bool, color: '#5c6166' },
    { tag: t.null, color: '#5c6166' },
    { tag: t.keyword, color: '#5c6166' },
    { tag: t.operator, color: '#5c6166' },
    { tag: t.className, color: '#5c6166' },
    { tag: t.definition(t.typeName), color: '#5c6166' },
    { tag: t.typeName, color: '#5c6166' },
    { tag: t.angleBracket, color: '#5c6166' },
    { tag: t.tagName, color: '#5c6166' },
    { tag: t.attributeName, color: '#5c6166' },
  ],
});

const state = EditorState.create({
  doc: 'my source code',
  extensions: [myTheme, javascript({ jsx: true })],
});

const view = new EditorView({
  parent: document.querySelector('#editor'),
  state,
});
```

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';
import { tags as t } from '@lezer/highlight';

const myTheme = createTheme({
  theme: 'light',
  settings: {
    background: '#ffffff',
    foreground: '#75baff',
    caret: '#5d00ff',
    selection: '#036dd626',
    selectionMatch: '#036dd626',
    lineHighlight: '#8a91991a',
    gutterBackground: '#fff',
    gutterForeground: '#8a919966',
  },
  styles: [
    { tag: t.comment, color: '#787b8099' },
    { tag: t.variableName, color: '#0080ff' },
    { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
    { tag: t.number, color: '#5c6166' },
    { tag: t.bool, color: '#5c6166' },
    { tag: t.null, color: '#5c6166' },
    { tag: t.keyword, color: '#5c6166' },
    { tag: t.operator, color: '#5c6166' },
    { tag: t.className, color: '#5c6166' },
    { tag: t.definition(t.typeName), color: '#5c6166' },
    { tag: t.typeName, color: '#5c6166' },
    { tag: t.angleBracket, color: '#5c6166' },
    { tag: t.tagName, color: '#5c6166' },
    { tag: t.attributeName, color: '#5c6166' },
  ],
});

function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={myTheme}
      extensions={[javascript({ jsx: true })]}
      onChange={(value, viewUpdate) => {
        console.log('value:', value);
      }}
    />
  );
}
export default App;
```

## Themes

**abcdef**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/abcdef">
  <img width="436" alt="codemirror-theme-abcdef" src="https://user-images.githubusercontent.com/1680273/176573508-705562ad-16ec-4b16-994e-f235a9331a3f.png">
</a>

**android studio**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/xcode/light">
  <img width="436" alt="codemirror-theme-androidstudio" src="https://user-images.githubusercontent.com/1680273/177484354-0a4fa43e-de96-409f-83e2-61808f2347e6.png">
</a>

**atom one**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/xcode/light">
  <img width="436" alt="codemirror-theme-androidstudio" src="https://user-images.githubusercontent.com/1680273/181795374-7a25cb90-5d77-4f86-9cbc-b1e12dc939d3.png">
</a>

**aura**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/aura">
  <img width="436" alt="codemirror-theme-aura" src="https://user-images.githubusercontent.com/1680273/206092773-8140fc6b-119f-4271-a821-7dc6bcbc1c63.png">
</a>

**bbedit**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/bbedit">
  <img width="436" alt="codemirror-theme-bbedit" src="https://user-images.githubusercontent.com/1680273/183550552-df398e5b-fab2-4ce5-bdd0-5e3612e3e5d9.png">
</a>

**bespin**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/bespin">
  <img width="436" alt="codemirror-theme-bespin" src="https://user-images.githubusercontent.com/1680273/176573408-0fd54981-471a-4ef8-91d4-8ad4b159c1e0.png">
</a>

**darcula**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/darcula">
  <img width="436" alt="codemirror-theme-darcula" src="https://user-images.githubusercontent.com/1680273/176573321-3015b1b4-3455-497f-ad16-dd2090d7848d.png">
</a>

**dracula**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/dracula">
  <img width="436" alt="codemirror-theme-dracula" src="https://user-images.githubusercontent.com/1680273/176573236-43928ba2-0eb1-4b59-9495-d39b6e3df81c.png">
</a>

**duotone**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/duotone/dark">
  <img width="436" alt="codemirror-theme-duotone dark" src="https://user-images.githubusercontent.com/1680273/176572959-adfc1284-4c70-48df-8aeb-9a47ff76b2f2.png">
</a>

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/duotone/light">
  <img width="436" alt="codemirror-theme-duotone light" src="https://user-images.githubusercontent.com/1680273/176573139-5c22ed62-6000-40da-b080-59c83e6181e2.png">
</a>

**eclipse**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/eclipse">
  <img width="436" alt="codemirror-theme-eclipse" src="https://user-images.githubusercontent.com/1680273/176572785-4f56f11a-018b-4f86-9088-e6f71f745cfb.png">
</a>

**github**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/github/dark">
  <img width="436" alt="codemirror-theme-github dark" src="https://user-images.githubusercontent.com/1680273/177048035-644af599-aaf1-41d8-86ea-9ea8c3a1a0c5.png">
</a>

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/github/light">
  <img width="436" alt="codemirror-theme-github light" src="https://user-images.githubusercontent.com/1680273/177048005-32794f23-8bff-4059-babf-21316d886e65.png">
</a>

**gruvbox**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/gruvbox/dark">
  <img width="436" alt="codemirror-theme-gruvbox-dark" src="https://user-images.githubusercontent.com/1680273/206087857-d0a85219-34ad-4e79-9cdf-183f67e1085d.png">
</a>

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/gruvbox/light">
  <img width="436" alt="codemirror-theme-eclipse" src="https://user-images.githubusercontent.com/1680273/206087911-49db6624-ab8c-434e-9b8a-84132fe206f9.png">
</a>

**material**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/material/dark">
  <img width="436" alt="codemirror-theme-material" src="https://user-images.githubusercontent.com/1680273/205537793-79f9c99c-831a-4ce3-8189-78b42896656f.png">
</a>

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/material/light">
  <img width="436" alt="codemirror-theme-material" src="https://user-images.githubusercontent.com/1680273/206124615-b3896e2c-d299-4609-b1d9-523ea1cf9f5b.png">
</a>

**noctis-lilac**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/noctis-lilac">
  <img width="436" alt="codemirror-theme-noctis-lilac" src="https://user-images.githubusercontent.com/1680273/206088068-55e9a25b-eb77-4e1a-91bb-f39cbba84981.png">
</a>

**nord**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/nord">
  <img width="436" alt="codemirror-theme-nord" src="https://user-images.githubusercontent.com/1680273/205498304-956bc719-1472-40f0-9c3f-21ac5b9f97a6.png">
</a>

**okaidia**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/okaidia">
  <img width="436" alt="codemirror-theme-okaidia" src="https://user-images.githubusercontent.com/1680273/176572694-b9aface9-9646-4e0e-a211-a8aa92dabc31.png">
</a>

**solarized**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/solarized/light">
  <img width="436" alt="codemirror-theme-solarized" src="https://user-images.githubusercontent.com/1680273/205544435-a080d1d4-6da9-4f1d-aa10-5f2207d31176.png">
</a>

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/solarized/dark">
  <img width="436" alt="codemirror-theme-solarized" src="https://user-images.githubusercontent.com/1680273/205547403-96db62c3-d061-4dee-88d0-c86ed17e7489.png">
</a>

**sublime**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/sublime">
  <img width="436" alt="codemirror-theme-sublime" src="https://user-images.githubusercontent.com/1680273/176572314-cc296f81-0763-485c-8fa2-7d61b24ad09b.png">
</a>

**tokyo-night**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/tokyo-night">
  <img width="436" alt="codemirror-theme-tokyo-night" src="https://user-images.githubusercontent.com/1680273/206094521-c3a51de1-8cb7-4f01-a9bd-6cfd04a3aa0d.png">
</a>

**tokyo-night-day**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/tokyo-night-day">
  <img width="436" alt="codemirror-theme-tokyo-night-day" src="https://user-images.githubusercontent.com/1680273/206104544-ca4db2e0-caac-4804-9321-c269fe660245.png">
</a>

**tokyo-night-storm**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/tokyo-night-storm">
  <img width="436" alt="codemirror-theme-tokyo-night-storm" src="https://user-images.githubusercontent.com/1680273/206097179-8a490b97-87da-4285-a9bc-b0c9f510e7ed.png">
</a>

**vscode**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/vscode/dark">
  <img width="436" alt="codemirror-theme-vscode dark" src="https://user-images.githubusercontent.com/1680273/202690670-385808e2-6346-4e36-a3d6-6d9fc1f216dc.png">
</a>

**xcode**

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/xcode/dark">
  <img width="436" alt="codemirror-theme-xcode dark" src="https://user-images.githubusercontent.com/1680273/206087681-537b9c1f-0dce-42a4-854d-036147935e82.png">
</a>

<a href="https://uiwjs.github.io/react-codemirror/#/theme/data/xcode/light">
  <img width="436" alt="codemirror-theme-xcode light" src="https://user-images.githubusercontent.com/1680273/206087526-9613a546-f129-4e01-9263-5a75f3f039a7.png">
</a>

## Props

```ts
import { Extension } from '@codemirror/state';
import { TagStyle } from '@codemirror/language';
export interface CreateThemeOptions {
  /**
   * Theme inheritance. Determines which styles CodeMirror will apply by default.
   */
  theme: Theme;
  /**
   * Settings to customize the look of the editor, like background, gutter, selection and others.
   */
  settings: Settings;
  /**
   * Syntax highlighting styles.
   */
  styles: TagStyle[];
}
declare type Theme = 'light' | 'dark';
export interface Settings {
  /** Editor background. */
  background: string;
  /** Default text color. */
  foreground: string;
  /** Caret color. */
  caret?: string;
  /** Selection background. */
  selection?: string;
  /** Selection match background. */
  selectionMatch?: string;
  /** Background of highlighted lines. */
  lineHighlight?: string;
  /** Gutter background. */
  gutterBackground?: string;
  /** Text color inside gutter. */
  gutterForeground?: string;
  /** Text active color inside gutter. */
  gutterActiveForeground?: string;
  /** Gutter right border color. */
  gutterBorder?: string;
  /** set editor font */
  fontFamily?: string;
}
declare const createTheme: ({ dark, settings, styles }: CreateThemeOptions) => Extension;
export default createTheme;
```

### Related

- [@uiw/react-textarea-code-editor](https://github.com/uiwjs/react-textarea-code-editor): A simple code editor with syntax highlighting.
- [@uiw/react-md-editor](https://github.com/uiwjs/react-md-editor): A simple markdown editor with preview, implemented with React.js and TypeScript.
- [@uiw/react-monacoeditor](https://github.com/jaywcjlove/react-monacoeditor): Monaco Editor component for React.
- [@uiw/react-markdown-editor](https://github.com/uiwjs/react-markdown-editor): A markdown editor with preview, implemented with React.js and TypeScript.
- [@uiw/react-markdown-preview](https://github.com/uiwjs/react-markdown-preview): React component preview markdown text in web browser.
- [Online JSON Viewer](https://github.com/uiwjs/json-viewer) Online JSON Viewer, JSON Beautifier to beautify and tree view of JSON data - It works as JSON Pretty Print to pretty print JSON data.

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-codemirror/graphs/contributors">
  <img src="https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
