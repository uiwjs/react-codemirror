import { Fragment, useState } from 'react';
import styled, { css } from 'styled-components';
import CodeMirror from '@uiw/react-codemirror';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import jsStr from 'code-example/txt/sample.javascript.txt';
import jsxStr from 'code-example/txt/sample.jsx.txt';
import typescriptStr from 'code-example/txt/sample.typescript.txt';
import tsxStr from 'code-example/txt/sample.tsx.txt';
import htmlStr from 'code-example/txt/sample.html.txt';
import cssStr from 'code-example/txt/sample.css.txt';
import phpStr from 'code-example/txt/sample.php.txt';
import rustStr from 'code-example/txt/sample.rust.txt';
import goStr from 'code-example/txt/sample.go.txt';
import mysqlStr from 'code-example/txt/sample.mysql.txt';
import pythonStr from 'code-example/txt/sample.python.txt';
import { Sider } from '../editor';
import { langs } from '../../../langs';

const Content = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 42px);
  padding: 30px 38px 120px 38px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding: 5px 0;
`;

const ThemeMenuItem = styled.div<{ active?: boolean }>`
  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-border-default);
      padding: 3px 8px;
      border-radius: 2px;
    `}
`;

export const ThemeOkaidia = () => {
  const [theme, setTheme] = useState(okaidia);
  return (
    <Fragment>
      <Sider>
        <ThemeMenuItem active={okaidia === theme} onClick={() => setTheme(okaidia)}>
          Okaidia
        </ThemeMenuItem>
      </Sider>
      <Content>
        <Title>JavaScript</Title>
        <CodeMirror value={jsStr} height="300px" theme={theme} extensions={[langs.javascript()]} />
        <Title>JSX</Title>
        <CodeMirror value={jsxStr} height="300px" theme={theme} extensions={[langs.jsx()]} />
        <Title>TypeScript</Title>
        <CodeMirror value={typescriptStr} height="300px" theme={theme} extensions={[langs.typescript()]} />
        <Title>TSX</Title>
        <CodeMirror value={tsxStr} height="300px" theme={theme} extensions={[langs.tsx()]} />
        <Title>HTML</Title>
        <CodeMirror value={htmlStr} height="300px" theme={theme} extensions={[langs.html()]} />
        <Title>CSS</Title>
        <CodeMirror value={cssStr} height="300px" theme={theme} extensions={[langs.css()]} />
        <Title>PHP</Title>
        <CodeMirror value={phpStr} height="300px" theme={theme} extensions={[langs.php()]} />
        <Title>Rust</Title>
        <CodeMirror value={rustStr} height="300px" theme={theme} extensions={[langs.rust()]} />
        <Title>Go</Title>
        <CodeMirror value={goStr} height="300px" theme={theme} extensions={[langs.go()]} />
        <Title>MySQL</Title>
        <CodeMirror value={mysqlStr} height="300px" theme={theme} extensions={[langs.mysql()]} />
        <Title>Python</Title>
        <CodeMirror value={pythonStr} height="300px" theme={theme} extensions={[langs.python()]} />
      </Content>
    </Fragment>
  );
};
