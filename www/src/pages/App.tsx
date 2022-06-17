import React from 'react';
import { Link } from 'react-router-dom';
import GitHubCorners from '@uiw/react-github-corners';
import Github from '@uiw/react-shields/esm/github';
import Npm from '@uiw/react-shields/esm/npm';
import logo from '../logo.png';
import styles from './App.module.less';
import Example from './Example';

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

export default function App() {
  const version = VERSION;
  return (
    <div className={`${styles.App} wmde-markdown-var`}>
      <dark-mode permanent dark="Dark" light="Light" style={{ position: 'fixed', top: 8, left: 8, zIndex: 99 }} />
      <GitHubCorners fixed target="__blank" zIndex={10} href="https://github.com/uiwjs/react-codemirror" />
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <h1 className={styles.AppTitle}>
          React-CodeMirror <sup>v{version}</sup>
        </h1>
        <p className={styles.content}>CodeMirror component for React. </p>
        <div className={styles.button}>
          <Link to="/theme/editor">Theme Editor</Link>
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
      <Example />
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
