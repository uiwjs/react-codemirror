import React, { useEffect, useState } from 'react';
import GitHubCorners from '@uiw/react-github-corners';
import Github from '@uiw/react-shields/esm/github';
import Npm from '@uiw/react-shields/esm/npm';
import MarkdownPreview from '@uiw/react-markdown-preview';
import '@wcj/dark-mode';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { json } from '@codemirror/lang-json';
import { python } from '@codemirror/lang-python';
import { markdown } from '@codemirror/lang-markdown';
import { xml } from '@codemirror/lang-xml';
import { sql, MySQL, PostgreSQL } from '@codemirror/lang-sql';
import { java } from '@codemirror/lang-java';
import { rust } from '@codemirror/lang-rust';
import { cpp } from '@codemirror/lang-cpp';
import { lezer } from '@codemirror/lang-lezer';
import { php } from '@codemirror/lang-php';
import { StreamLanguage } from '@codemirror/stream-parser';
import { go } from '@codemirror/legacy-modes/mode/go';
import { ruby } from '@codemirror/legacy-modes/mode/ruby';
import { shell } from '@codemirror/legacy-modes/mode/shell';
import { lua } from '@codemirror/legacy-modes/mode/lua';
import { swift } from '@codemirror/legacy-modes/mode/swift';
import { tcl } from '@codemirror/legacy-modes/mode/tcl';
import { yaml } from '@codemirror/legacy-modes/mode/yaml';
import { vb } from '@codemirror/legacy-modes/mode/vb';
import { powerShell } from '@codemirror/legacy-modes/mode/powershell';
import { brainfuck } from '@codemirror/legacy-modes/mode/brainfuck';
// import { clike } from '@codemirror/legacy-modes/mode/clike';
import { stylus } from '@codemirror/legacy-modes/mode/stylus';
import { erlang } from '@codemirror/legacy-modes/mode/erlang';
import { nginx } from '@codemirror/legacy-modes/mode/nginx';
import { perl } from '@codemirror/legacy-modes/mode/perl';
import { pascal } from '@codemirror/legacy-modes/mode/pascal';
import { liveScript } from '@codemirror/legacy-modes/mode/livescript';
import { scheme } from '@codemirror/legacy-modes/mode/scheme';
import { toml } from '@codemirror/legacy-modes/mode/toml';
import { vbScript } from '@codemirror/legacy-modes/mode/vbscript';
import { clojure } from '@codemirror/legacy-modes/mode/clojure';
import { coffeeScript } from '@codemirror/legacy-modes/mode/coffeescript';
import { dockerFile } from '@codemirror/legacy-modes/mode/dockerfile';
import { julia } from '@codemirror/legacy-modes/mode/julia';
import { r } from '@codemirror/legacy-modes/mode/r';
import logo from './logo.png';
import styles from './App.module.less';
import DocumentStr from '../README.md';
import CodeMirror, { ReactCodeMirrorProps, Extension } from '..';
import { Select } from './Select';

const langs: Record<string, any> = {
  javascript,
  jsx: () => javascript({ jsx: true }),
  typescript: () => javascript({ typescript: true }),
  tsx: () => javascript({ jsx: true, typescript: true }),
  json,
  html,
  css,
  python,
  markdown,
  xml,
  sql,
  mysql: () => sql({ dialect: MySQL }),
  pgsql: () => sql({ dialect: PostgreSQL }),
  java,
  rust,
  cpp,
  lezer,
  php,
  go: () => StreamLanguage.define(go),
  shell: () => StreamLanguage.define(shell),
  lua: () => StreamLanguage.define(lua),
  swift: () => StreamLanguage.define(swift),
  tcl: () => StreamLanguage.define(tcl),
  yaml: () => StreamLanguage.define(yaml),
  vb: () => StreamLanguage.define(vb),
  powershell: () => StreamLanguage.define(powerShell),
  brainfuck: () => StreamLanguage.define(brainfuck),
  stylus: () => StreamLanguage.define(stylus),
  erlang: () => StreamLanguage.define(erlang),
  nginx: () => StreamLanguage.define(nginx),
  perl: () => StreamLanguage.define(perl),
  ruby: () => StreamLanguage.define(ruby),
  pascal: () => StreamLanguage.define(pascal),
  livescript: () => StreamLanguage.define(liveScript),
  scheme: () => StreamLanguage.define(scheme),
  toml: () => StreamLanguage.define(toml),
  vbscript: () => StreamLanguage.define(vbScript),
  clojure: () => StreamLanguage.define(clojure),
  coffeescript: () => StreamLanguage.define(coffeeScript),
  julia: () => StreamLanguage.define(julia),
  dockerfile: () => StreamLanguage.define(dockerFile),
  r: () => StreamLanguage.define(r),
  // clike: () => StreamLanguage.define(clike),
  // clike: () => clike({ }),
};

const hyperlink: {
  href: string;
  label: string;
  style?: React.CSSProperties;
}[] = [
  {
    href: 'https://www.npmjs.com/package/@uiw/react-codemirror',
    label: 'View on NPM',
  },
  {
    href: 'https://codemirror.net/6/docs/',
    label: 'CM Documentation',
  },
  {
    href: 'https://github.com/codemirror/codemirror.next/',
    label: 'CodeMirror GitHub',
  },
  {
    href: 'https://raw.githack.com/uiwjs/react-codemirror/doc3/index.html',
    label: 'V3 Doc',
    style: { color: 'red' },
  },
];

const themeOptions = ['dark', 'light'];
const heightOptions = ['auto', '200px', '300px', '500px'];

let count = 0;

export default function App() {
  const dark = document.documentElement.getAttribute('data-color-mode');
  const [mode, setMode] = useState('javascript');
  const [placeholder, setPlaceholder] = useState('Please enter the code.');
  const [autofocus, setAutofocus] = useState(false);
  const [editable, setEditable] = useState(true);
  const [theme, setTheme] = useState<ReactCodeMirrorProps['theme']>(dark === 'dark' ? 'dark' : 'light');
  const [code, setCode] = useState('');
  const [extensions, setExtensions] = useState<Extension[]>();
  const [height, setHeight] = useState('500px');

  function handleLangChange(lang: string) {
    try {
      import(`code-example/txt/sample.${lang.toLocaleLowerCase()}.txt`)
        .then((data) => {
          setCode(data.default);
          if (langs[lang]) {
            setExtensions([langs[lang]()]);
          }
          setMode(lang);
        })
        .catch((err) => {
          if (langs[lang]) {
            setExtensions([langs[lang]()]);
          } else {
            setExtensions([]);
          }
          setMode(lang);
          setCode('');
        });
      if (lang === 'html') {
      }
    } catch (error) {}
  }
  useEffect(() => {
    handleLangChange('javascript');
    setTheme(document.documentElement.getAttribute('data-color-mode') === 'dark' ? 'dark' : 'light');
    document.addEventListener('colorschemechange', (e) => {
      setTheme(e.detail.colorScheme as ReactCodeMirrorProps['theme']);
    });
  }, []);

  // @ts-ignore
  const version = VERSION;
  return (
    <div className={`${styles.App} wmde-markdown-var`}>
      <dark-mode
        permanent
        dark="Dark"
        light="Light"
        style={{ position: 'fixed', top: 8, left: 8, zIndex: 99 }}
      ></dark-mode>
      <GitHubCorners fixed target="__blank" zIndex={10} href="https://github.com/uiwjs/react-codemirror" />
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <h1 className={styles.AppTitle}>
          React-CodeMirror <sup>v{version}</sup>
        </h1>
        <p className={styles.content}>CodeMirror component for React. </p>
        <div className={styles.button}>
          {hyperlink.map(({ href, label, style }, idx) => {
            return (
              <a key={idx} target="_blank" rel="noopener noreferrer" href={href} style={style}>
                {label}
              </a>
            );
          })}
        </div>
        <div className={styles.select}></div>
      </header>
      <CodeMirror
        value={code}
        height={height}
        theme={theme}
        editable={editable}
        extensions={extensions}
        autoFocus={autofocus}
        className={styles.codemirror}
        placeholder={placeholder}
        onChange={(value) => setCode(value)}
        style={{
          maxWidth: '995px',
          margin: '-18px auto 0 auto',
          position: 'relative',
          zIndex: 999,
        }}
      />
      <div className={styles.select}>
        <Select
          label="Lang"
          options={Object.keys(langs)}
          value={mode}
          onChange={(evn) => handleLangChange(evn.target.value)}
        />
        <Select
          label="Theme"
          options={themeOptions}
          value={theme as string}
          onChange={(evn) => {
            document.documentElement.setAttribute('data-color-mode', evn.target.value);
            setTheme(evn.target.value as ReactCodeMirrorProps['theme']);
          }}
        />
        <Select label="Height" options={heightOptions} value={height} onChange={(evn) => setHeight(evn.target.value)} />
        <button
          onClick={() => {
            count++;
            setCode(`console.log("Hello World! ${count}")`);
          }}
        >
          change code
        </button>
        <label>
          <input type="checkbox" checked={autofocus} onChange={(evn) => setAutofocus(evn.target.checked)} />
          autoFocus
        </label>
        <label>
          <input type="checkbox" checked={editable} onChange={(evn) => setEditable(evn.target.checked)} />
          editable
        </label>
        <label>
          placeholder:
          <input type="text" value={placeholder} onChange={(evn) => setPlaceholder(evn.target.value)} />
        </label>
      </div>
      <MarkdownPreview className={styles.markdown} source={DocumentStr.replace(/([\s\S]*)<!--dividing-->/, '')} />
      <div className={styles.footer}>
        <Github user="uiwjs" repo="react-codemirror">
          <Github.Social type="forks" href="https://github.com/uiwjs/react-codemirror" />
          <Github.Social type="stars" href="https://github.com/uiwjs/react-codemirror/stargazers" />
          <Github.Social type="watchers" href="https://github.com/uiwjs/react-codemirror/watchers" />
          <a href="https://www.npmjs.com/package/@uiw/react-codemirror" target="__blank">
            <img src="https://img.shields.io/npm/dm/@uiw/react-codemirror.svg?style=flat" alt="NPM Downloads" />
          </a>
        </Github>
        <Npm.Version
          scope="@uiw"
          packageName="react-shields"
          href="https://www.npmjs.com/package/@uiw/react-codemirror"
        />
      </div>
    </div>
  );
}
