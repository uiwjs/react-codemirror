<p align="center">
  <a href="https://uiwjs.github.io/react-codemirror/">
    <img alt="react-codemirror logo" src="https://user-images.githubusercontent.com/1680273/177491470-c31a6d7e-f676-4914-a027-2fbeebfeb5b4.svg">
  </a>
</p>

# react-codemirror

[![jsdelivr CDN](https://data.jsdelivr.com/v1/package/npm/@uiw/react-codemirror/badge?style=rounded)](https://www.jsdelivr.com/package/npm/@uiw/react-codemirror)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-codemirror.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-codemirror)
[![Build & Deploy](https://github.com/uiwjs/react-codemirror/workflows/Build%20&%20Deploy/badge.svg)](https://github.com/uiwjs/react-codemirror/actions)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-codemirror/file/README.md)
[![npm version](https://img.shields.io/npm/v/@uiw/react-codemirror.svg)](https://www.npmjs.com/package/@uiw/react-codemirror)
[![Coverage Status](https://uiwjs.github.io/react-codemirror/coverage/badges.svg)](https://uiwjs.github.io/react-codemirror/coverage/lcov-report/)
[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/uiwjs/react-codemirror)

CodeMirror component for React. Demo Preview: [@uiwjs.github.io/react-codemirror](https://uiwjs.github.io/react-codemirror/)

<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

**Features:**

🚀 Quickly and easily configure the API.  
🌱 Versions after `@uiw/react-codemirror@v4`<!--rehype:style=background-color: #ffe564; padding: 1px 4px;--> use [codemirror 6](https://codemirror.net/). [#88](https://github.com/uiwjs/react-codemirror/issues/88#issuecomment-914185563).  
⚛️ Support the features of React Hook(requires React 16.8+).  
📚 Use Typescript to write, better code hints.  
🌐 The bundled version supports use directly in the browser [#267](https://github.com/uiwjs/react-codemirror/issues/267#issuecomment-1041227592).  
🌎 There are better [sample previews](https://uiwjs.github.io/react-codemirror).  
🎨 Support [theme](https://uiwjs.github.io/react-codemirror/#/theme/data/dracula) customization, provide theme [editor](https://uiwjs.github.io/react-codemirror/#/editor/theme).

## Install

**Not dependent on uiw.**

```bash
npm install @uiw/react-codemirror --save
```

**All Packages**

| Name                                               | NPM Version                                                                                                                                                                                                                                                                                                                                                                           | Website                                                                                   |
| :------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `@uiw/react-codemirror`                            | [![npm version](https://img.shields.io/npm/v/@uiw/react-codemirror.svg)](https://www.npmjs.com/package/@uiw/react-codemirror) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-codemirror.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-codemirror)                                                                                                             | [`#preview`](https://uiwjs.github.io/react-codemirror/)                                   |
| `react-codemirror-merge`                           | [![npm version](https://img.shields.io/npm/v/react-codemirror-merge.svg)](https://www.npmjs.com/package/react-codemirror-merge) [![NPM Downloads](https://img.shields.io/npm/dm/react-codemirror-merge.svg?style=flat)](https://www.npmjs.com/package/react-codemirror-merge)                                                                                                         | [`#preview`](https://uiwjs.github.io/react-codemirror/#/merge/document)                   |
| `@uiw/codemirror-extensions-basic-setup`           | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-basic-setup.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-basic-setup) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-extensions-basic-setup.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-extensions-basic-setup)                                         | [`#preview`](https://uiwjs.github.io/react-codemirror/#/extensions/basic-setup)           |
| `@uiw/codemirror-extensions-color`                 | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-color.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-color) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-extensions-color.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-extensions-color)                                                                 | [`#preview`](https://uiwjs.github.io/react-codemirror/#/extensions/color)                 |
| `@uiw/codemirror-extensions-classname`             | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-classname.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-classname) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-extensions-classname.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-extensions-classname)                                                 | [`#preview`](https://uiwjs.github.io/react-codemirror/#/extensions/classname)             |
| `@uiw/codemirror-extensions-events`                | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-events.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-events) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-extensions-events.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-extensions-events)                                                             | [`#preview`](https://uiwjs.github.io/react-codemirror/#/extensions/events)                |
| `@uiw/codemirror-extensions-hyper-link`            | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-hyper-link.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-hyper-link) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-extensions-hyper-link.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-extensions-hyper-link)                                             | [`#preview`](https://uiwjs.github.io/react-codemirror/#/extensions/hyper-link)            |
| `@uiw/codemirror-extensions-langs`                 | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-langs.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-langs) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-extensions-langs.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-extensions-langs)                                                                 | [`#preview`](https://uiwjs.github.io/react-codemirror/#/extensions/languages)             |
| `@uiw/codemirror-extensions-line-numbers-relative` | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-line-numbers-relative.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-line-numbers-relative) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-extensions-line-numbers-relative.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-extensions-line-numbers-relative) | [`#preview`](https://uiwjs.github.io/react-codemirror/#/extensions/line-numbers-relative) |
| `@uiw/codemirror-extensions-mentions`              | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-mentions.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-mentions) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-extensions-mentions.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-extensions-mentions)                                                     | [`#preview`](https://uiwjs.github.io/react-codemirror/#/extensions/mentions)              |
| `@uiw/codemirror-extensions-zebra-stripes`         | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-extensions-zebra-stripes.svg)](https://www.npmjs.com/package/@uiw/codemirror-extensions-zebra-stripes) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-extensions-zebra-stripes.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-extensions-zebra-stripes)                                 | [`#preview`](https://uiwjs.github.io/react-codemirror/#/extensions/zebra-stripes)         |
| `@uiw/codemirror-themes`                           | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-themes.svg)](https://www.npmjs.com/package/@uiw/codemirror-themes) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-themes.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-themes)                                                                                                         | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/doc)                        |

| Name                                      | NPM Version                                                                                                                                                                                                                                                                                                                                       | Website                                                                               |
| :---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `@uiw/codemirror-themes-all`              | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-themes-all.svg)](https://www.npmjs.com/package/@uiw/codemirror-themes-all) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-themes-all.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-themes-all)                                                     | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/all)                    |
| `@uiw/codemirror-theme-abcdef`            | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-abcdef.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-abcdef) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-abcdef.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-abcdef)                                             | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/abcdef)            |
| `@uiw/codemirror-theme-androidstudio`     | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-androidstudio.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-androidstudio) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-androidstudio.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-androidstudio)                 | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/androidstudio)     |
| `@uiw/codemirror-theme-atomone`           | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-atomone.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-atomone) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-atomone.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-atomone)                                         | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/atomone)           |
| `@uiw/codemirror-theme-aura`              | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-aura.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-aura) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-aura.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-aura)                                                     | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/aura)              |
| `@uiw/codemirror-theme-bbedit`            | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-bbedit.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-bbedit) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-bbedit.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-bbedit)                                             | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/bbedit)            |
| `@uiw/codemirror-theme-bespin`            | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-bespin.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-bespin) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-bespin.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-bespin)                                             | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/bespin)            |
| `@uiw/codemirror-theme-duotone`           | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-duotone.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-duotone) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-duotone.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-duotone)                                         | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/duotone/light)     |
| `@uiw/codemirror-theme-dracula`           | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-dracula.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-dracula) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-dracula.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-dracula)                                         | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/dracula)           |
| `@uiw/codemirror-theme-darcula`           | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-darcula.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-darcula) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-darcula.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-darcula)                                         | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/darcula)           |
| `@uiw/codemirror-theme-eclipse`           | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-eclipse.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-eclipse) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-eclipse.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-eclipse)                                         | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/eclipse)           |
| `@uiw/codemirror-theme-github`            | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-github.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-github) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-github.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-github)                                             | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/github)            |
| `@uiw/codemirror-theme-gruvbox-dark`      | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-gruvbox-dark.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-gruvbox-dark) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-gruvbox-dark.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-gruvbox-dark)                     | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/gruvbox/dark)      |
| `@uiw/codemirror-theme-material`          | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-material.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-material) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-material.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-material)                                     | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/material/dark)     |
| `@uiw/codemirror-theme-noctis-lilac`      | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-noctis-lilac.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-noctis-lilac) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-noctis-lilac.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-noctis-lilac)                     | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/noctis-lilac)      |
| `@uiw/codemirror-theme-nord`              | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-nord.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-nord) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-nord.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-nord)                                                     | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/nord)              |
| `@uiw/codemirror-theme-okaidia`           | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-okaidia.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-okaidia) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-okaidia.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-okaidia)                                         | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/okaidia)           |
| `@uiw/codemirror-theme-solarized`         | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-solarized.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-solarized) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-solarized.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-solarized)                                 | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/solarized/dark)    |
| `@uiw/codemirror-theme-sublime`           | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-sublime.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-sublime) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-sublime.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-sublime)                                         | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/sublime)           |
| `@uiw/codemirror-theme-tokyo-night`       | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-tokyo-night.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-tokyo-night) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-tokyo-night.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-tokyo-night)                         | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/tokyo-night)       |
| `@uiw/codemirror-theme-tokyo-night-storm` | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-tokyo-night-storm.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-tokyo-night-storm) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-tokyo-night-storm.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-tokyo-night-storm) | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/tokyo-night-storm) |
| `@uiw/codemirror-theme-tokyo-night-day`   | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-tokyo-night-day.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-tokyo-night-day) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-tokyo-night-day.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-tokyo-night-day)         | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/tokyo-night-day)   |
| `@uiw/codemirror-theme-vscode`            | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-vscode.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-vscode) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-vscode.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-vscode)                                             | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/vscode)            |
| `@uiw/codemirror-theme-xcode`             | [![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-xcode.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-xcode) [![NPM Downloads](https://img.shields.io/npm/dm/@uiw/codemirror-theme-xcode.svg?style=flat)](https://www.npmjs.com/package/@uiw/codemirror-theme-xcode)                                                 | [`#preview`](https://uiwjs.github.io/react-codemirror/#/theme/data/xcode)             |

<!--rehype:style=width: 100%; display: inline-table;-->

## Usage

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-codemirror-example-codemirror-6-slvju?fontsize=14&hidenavigation=1&theme=dark)

```jsx mdx:preview
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function App() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
}
export default App;
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
- ~~`@codemirror/legacy-modes/mode/css`~~ => [`@codemirror/lang-css`](https://www.npmjs.com/package/@codemirror/lang-css)
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
- ~~`@codemirror/legacy-modes/mode/wast`~~ => [`@codemirror/lang-wast`](https://www.npmjs.com/package/@codemirror/lang-wast)

### Markdown Example

Markdown language code is automatically highlighted.

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-codemirror-example-codemirror-6-markdown-auto-languages-iudnj?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';

const code = `## Title

\`\`\`jsx
function Demo() {
  return <div>demo</div>
}
\`\`\`

\`\`\`bash
# Not dependent on uiw.
npm install @codemirror/lang-markdown --save
npm install @codemirror/language-data --save
\`\`\`

[weisit ulr](https://uiwjs.github.io/react-codemirror/)

\`\`\`go
package main
import "fmt"
func main() {
  fmt.Println("Hello, 世界")
}
\`\`\`
`;

export default function App() {
  return <CodeMirror value={code} extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]} />;
}
```

## Codemirror Merge

```jsx
import CodeMirrorMerge from 'react-codemirror-merge';
import { EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';

const Original = CodeMirrorMerge.Original;
const Modified = CodeMirrorMerge.Modified;
let doc = `one
two
three
four
five`;

export const Example = () => {
  return (
    <CodeMirrorMerge>
      <Original value={doc} />
      <Modified
        value={doc.replace(/t/g, 'T') + 'Six'}
        extensions={[EditorView.editable.of(false), EditorState.readOnly.of(true)]}
      />
    </CodeMirrorMerge>
  );
};
```

## Support Hook

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-codemirror-example-codemirror-6-hook-yr4vg?fontsize=14&hidenavigation=1&theme=dark)

```jsx
import { useEffect, useMemo, useRef } from 'react';
import { useCodeMirror } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const code = "console.log('hello world!');\n\n\n";
// Define the extensions outside the component for the best performance.
// If you need dynamic extensions, use React.useMemo to minimize reference changes
// which cause costly re-renders.
const extensions = [javascript()];

export default function App() {
  const editor = useRef();
  const { setContainer } = useCodeMirror({
    container: editor.current,
    extensions,
    value: code,
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current]);

  return <div ref={editor} />;
}
```

## Using Theme

We have created a [`theme editor`](https://uiwjs.github.io/react-codemirror/#/editor/theme) where you can define your own theme. We have also defined [some themes](https://uiwjs.github.io/react-codemirror/#/theme/data/okaidia) ourselves, which can be installed and used directly. Below is a usage example:

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

const extensions = [javascript({ jsx: true })];

export default function App() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={okaidia}
      extensions={[javascript({ jsx: true })]}
    />
  );
}
```

## Using custom theme

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
const extensions = [javascript({ jsx: true })];

export default function App() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={myTheme}
      extensions={extensions}
      onChange={onChange}
    />
  );
}
```

## Use `initialState` to restore state from JSON-serialized representation

CodeMirror allows to serialize editor state to JSON representation with [toJSON](https://codemirror.net/docs/ref/#state.EditorState.toJSON) function for persistency or other needs. This JSON representation can be later used to recreate ReactCodeMirror component with the same internal state.

For example, this is how undo history can be saved in the local storage, so that it remains after the page reloads

```jsx
import CodeMirror from '@uiw/react-codemirror';
import { historyField } from '@codemirror/commands';

// When custom fields should be serialized, you can pass them in as an object mapping property names to fields.
// See [toJSON](https://codemirror.net/docs/ref/#state.EditorState.toJSON) documentation for more details
const stateFields = { history: historyField };

export function EditorWithInitialState() {
  const serializedState = localStorage.getItem('myEditorState');
  const value = localStorage.getItem('myValue') || '';

  return (
    <CodeMirror
      value={value}
      initialState={
        serializedState
          ? {
              json: JSON.parse(serializedState || ''),
              fields: stateFields,
            }
          : undefined
      }
      onChange={(value, viewUpdate) => {
        localStorage.setItem('myValue', value);

        const state = viewUpdate.state.toJSON(stateFields);
        localStorage.setItem('myEditorState', JSON.stringify(state));
      }}
    />
  );
}
```

## Props

<!--rehype:style=background-color: #ffe564; display: inline-block; border-bottom: 0; padding: 3px 12px;-->

- `value?: string` value of the auto created model in the editor.
- `width?: string` width of editor. Defaults to `auto`.
- `height?: string` height of editor. Defaults to `auto`.
- `theme?`: `'light'` / `'dark'` / `Extension` Defaults to `'light'`.

```ts
import React from 'react';
import { EditorState, EditorStateConfig, Extension } from '@codemirror/state';
import { EditorView, ViewUpdate } from '@codemirror/view';
export * from '@codemirror/view';
export * from '@codemirror/basic-setup';
export * from '@codemirror/state';
export interface UseCodeMirror extends ReactCodeMirrorProps {
  container?: HTMLDivElement | null;
}
export declare function useCodeMirror(props: UseCodeMirror): {
  state: EditorState | undefined;
  setState: import('react').Dispatch<import('react').SetStateAction<EditorState | undefined>>;
  view: EditorView | undefined;
  setView: import('react').Dispatch<import('react').SetStateAction<EditorView | undefined>>;
  container: HTMLDivElement | null | undefined;
  setContainer: import('react').Dispatch<import('react').SetStateAction<HTMLDivElement | null | undefined>>;
};
export interface ReactCodeMirrorProps
  extends Omit<EditorStateConfig, 'doc' | 'extensions'>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'placeholder'> {
  /** value of the auto created model in the editor. */
  value?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  /** focus on the editor. */
  autoFocus?: boolean;
  /** Enables a placeholder—a piece of example content to show when the editor is empty. */
  placeholder?: string | HTMLElement;
  /**
   * `light` / `dark` / `Extension` Defaults to `light`.
   * @default light
   */
  theme?: 'light' | 'dark' | Extension;
  /**
   * Whether to optional basicSetup by default
   * @default true
   */
  basicSetup?: boolean | BasicSetupOptions;
  /**
   * This disables editing of the editor content by the user.
   * @default true
   */
  editable?: boolean;
  /**
   * This disables editing of the editor content by the user.
   * @default false
   */
  readOnly?: boolean;
  /**
   * Controls whether pressing the `Tab` key inserts a tab character and indents the text (`true`)
   * or behaves according to the browser's default behavior (`false`).
   * @default true
   */
  indentWithTab?: boolean;
  /** Fired whenever a change occurs to the document. */
  onChange?(value: string, viewUpdate: ViewUpdate): void;
  /** Some data on the statistics editor. */
  onStatistics?(data: Statistics): void;
  /** The first time the editor executes the event. */
  onCreateEditor?(view: EditorView, state: EditorState): void;
  /** Fired whenever any state change occurs within the editor, including non-document changes like lint results. */
  onUpdate?(viewUpdate: ViewUpdate): void;
  /**
   * Extension values can be [provided](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions) when creating a state to attach various kinds of configuration and behavior information.
   * They can either be built-in extension-providing objects,
   * such as [state fields](https://codemirror.net/6/docs/ref/#state.StateField) or [facet providers](https://codemirror.net/6/docs/ref/#state.Facet.of),
   * or objects with an extension in its `extension` property. Extensions can be nested in arrays arbitrarily deep—they will be flattened when processed.
   */
  extensions?: Extension[];
  /**
   * If the view is going to be mounted in a shadow root or document other than the one held by the global variable document (the default), you should pass it here.
   * Originally from the [config of EditorView](https://codemirror.net/6/docs/ref/#view.EditorView.constructor%5Econfig.root)
   */
  root?: ShadowRoot | Document;
  /**
   * Create a state from its JSON representation serialized with [toJSON](https://codemirror.net/docs/ref/#state.EditorState.toJSON) function
   */
  initialState?: {
    json: any;
    fields?: Record<'string', StateField<any>>;
  };
}
export interface ReactCodeMirrorRef {
  editor?: HTMLDivElement | null;
  state?: EditorState;
  view?: EditorView;
}
declare const ReactCodeMirror: React.ForwardRefExoticComponent<
  ReactCodeMirrorProps & React.RefAttributes<ReactCodeMirrorRef>
>;
export default ReactCodeMirror;
export interface BasicSetupOptions {
  lineNumbers?: boolean;
  highlightActiveLineGutter?: boolean;
  highlightSpecialChars?: boolean;
  history?: boolean;
  foldGutter?: boolean;
  drawSelection?: boolean;
  dropCursor?: boolean;
  allowMultipleSelections?: boolean;
  indentOnInput?: boolean;
  syntaxHighlighting?: boolean;
  bracketMatching?: boolean;
  closeBrackets?: boolean;
  autocompletion?: boolean;
  rectangularSelection?: boolean;
  crosshairCursor?: boolean;
  highlightActiveLine?: boolean;
  highlightSelectionMatches?: boolean;
  closeBracketsKeymap?: boolean;
  defaultKeymap?: boolean;
  searchKeymap?: boolean;
  historyKeymap?: boolean;
  foldKeymap?: boolean;
  completionKeymap?: boolean;
  lintKeymap?: boolean;
}
```

```ts
import { EditorSelection, SelectionRange } from '@codemirror/state';
import { ViewUpdate } from '@codemirror/view';
export interface Statistics {
  /** Get the number of lines in the editor. */
  lineCount: number;
  /** total length of the document */
  length: number;
  /** Get the proper [line-break](https://codemirror.net/docs/ref/#state.EditorState^lineSeparator) string for this state. */
  lineBreak: string;
  /** Returns true when the editor is [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only. */
  readOnly: boolean;
  /** The size (in columns) of a tab in the document, determined by the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet. */
  tabSize: number;
  /** Cursor Position */
  selection: EditorSelection;
  /** Make sure the selection only has one range. */
  selectionAsSingle: SelectionRange;
  /** Retrieves a list of all current selections. */
  ranges: readonly SelectionRange[];
  /** Get the currently selected code. */
  selectionCode: string;
  /**
   * The length of the given array should be the same as the number of active selections.
   * Replaces the content of the selections with the strings in the array.
   */
  selections: string[];
  /** Return true if any text is selected. */
  selectedText: boolean;
}
export declare const getStatistics: (view: ViewUpdate) => Statistics;
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
