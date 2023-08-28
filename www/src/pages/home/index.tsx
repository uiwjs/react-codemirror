import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import GitHubCorners from '@uiw/react-github-corners';
import Github from '@uiw/react-shields/github';
import Npm from '@uiw/react-shields/npm';
import BackToUp from '@uiw/react-back-to-top';
import logo from '../../logo.png';
import Example from './Example';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 80px;
`;

const AppTitle = styled.h1`
  font-size: 30px;
  sup {
    position: absolute;
    background: var(--color-neutral-muted);
    padding: 1px 5px;
    font-size: 12px;
    border-radius: 3px;
  }
`;

const Describe = styled.p`
  font-size: 18px;
  color: #a5a5a5;
  font-weight: 200;
`;

const Buttons = styled.div`
  a {
    outline: none;
    min-height: 30px;
    margin: 6px 5px;
    padding: 0 10px;
    font-size: 14px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    user-select: none;
    border-radius: 3px;
    cursor: pointer;
    background: var(--color-neutral-muted);
    color: var(--color-theme-text);
    line-height: 30px;
    text-decoration: none;
    &.themes {
      background-color: var(--color-prettylights-syntax-variable);
      color: var(--color-prettylights-syntax-carriage-return-text);
    }
    &.special {
      background: var(--color-prettylights-syntax-markup-ignored-bg);
      color: var(--color-prettylights-syntax-carriage-return-text);
    }
    &.extensions {
      background: var(--color-prettylights-syntax-brackethighlighter-unmatched);
      color: var(--color-prettylights-syntax-carriage-return-text);
    }
    &:hover {
      background-color: var(--color-fg-muted);
      color: var(--color-theme-bg);
      transition:
        background-color 0.25s linear,
        color 0.05s linear,
        opacity 0.25s linear,
        filter 0.25s linear,
        visibility 0.25s linear,
        transform 0.25s linear;
    }
    &:last-child {
      color: var(--color-prettylights-syntax-keyword);
    }
  }
`;

const Footer = styled.div`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 160px;
  a {
    text-decoration: none;
  }
`;

const AppHeader = styled.div`
  background-color: var(--color-canvas-subtle);
  box-shadow:
    0px 2px 10px 0px rgba(0, 0, 0, 0.1),
    0 1px rgba(0, 0, 0, 0.1);
  padding: 120px 20px 40px 20px;
  border-bottom: 1px solid var(--color-canvas-default);
  position: relative;
  z-index: 9;
  text-align: center;
`;

const hyperlink: {
  href: string;
  label: string;
  style?: React.CSSProperties;
}[] = [
  {
    href: 'https://www.npmjs.com/package/@uiw/react-codemirror',
    label: 'On NPM',
  },
  {
    href: 'https://codemirror.net/docs/',
    label: 'CM Documentation',
  },
  {
    href: 'https://github.com/uiwjs/react-codemirror',
    label: 'Github',
  },
  // {
  //   href: 'https://github.com/codemirror/dev',
  //   label: 'CodeMirror GitHub',
  // },
  {
    href: 'https://raw.githack.com/uiwjs/react-codemirror/doc3/index.html',
    label: 'V3 Doc',
    style: { color: 'red' },
  },
];

export function Component() {
  const version = VERSION;
  return (
    <div className="wmde-markdown-var">
      <BackToUp>Top</BackToUp>
      <dark-mode permanent dark="Dark" light="Light" style={{ position: 'fixed', top: 8, left: 8, zIndex: 99 }} />
      <GitHubCorners fixed target="__blank" zIndex={10} href="https://github.com/uiwjs/react-codemirror" />
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <AppTitle>
          React CodeMirror <sup>v{version}</sup>
        </AppTitle>
        <Describe>CodeMirror component for React. </Describe>
        <Buttons>
          <Link to="/editor/theme" className="special">
            Theme Editor
          </Link>
          <Link to="/theme" className="themes">
            Themes
          </Link>
          <Link to="/extensions" className="extensions">
            Extensions
          </Link>
          <Link to="/merge/document">Merge</Link>
          {hyperlink.map(({ href, label, style }, idx) => {
            return (
              <a key={idx} target="_blank" rel="noopener noreferrer" href={href} style={style}>
                {label}
              </a>
            );
          })}
        </Buttons>
      </AppHeader>
      <Example />
      <Footer>
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
          packageName="react-codemirror"
          href="https://www.npmjs.com/package/@uiw/react-codemirror"
        />
      </Footer>
    </div>
  );
}
