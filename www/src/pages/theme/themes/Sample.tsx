import { FC, PropsWithoutRef } from 'react';
import styled from 'styled-components';
import CodeMirror from '@uiw/react-codemirror';
import { Extension } from '@codemirror/state';
import jsStr from 'code-example/txt/sample.javascript.txt';
import jsxStr from 'code-example/txt/sample.jsx.txt';
import typescriptStr from 'code-example/txt/sample.typescript.txt';
import tsxStr from 'code-example/txt/sample.tsx.txt';
import jsonStr from 'code-example/txt/sample.json.txt';
import htmlStr from 'code-example/txt/sample.html.txt';
import cssStr from 'code-example/txt/sample.css.txt';
import phpStr from 'code-example/txt/sample.php.txt';
import rustStr from 'code-example/txt/sample.rust.txt';
import javaStr from 'code-example/txt/sample.java.txt';
import goStr from 'code-example/txt/sample.go.txt';
import mysqlStr from 'code-example/txt/sample.mysql.txt';
import pythonStr from 'code-example/txt/sample.python.txt';
import shellStr from 'code-example/txt/sample.shell.txt';
import swiftStr from 'code-example/txt/sample.swift.txt';
import markdownStr from 'code-example/txt/sample.markdown.txt';
import { langs } from '../../../langs';

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding: 5px 0;
`;

const Warpper = styled.div`
  max-width: 980px;
`;

interface SampleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  theme?: Extension;
}

export const Sample: FC<PropsWithoutRef<SampleProps>> = ({ theme, ...props }) => {
  return (
    <Warpper {...props}>
      <Title>JavaScript</Title>
      <CodeMirror value={jsStr} height="300px" theme={theme} extensions={[langs.javascript()]} />
      <Title>JSX</Title>
      <CodeMirror value={jsxStr} height="300px" theme={theme} extensions={[langs.jsx()]} />
      <Title>TypeScript</Title>
      <CodeMirror value={typescriptStr} height="300px" theme={theme} extensions={[langs.typescript()]} />
      <Title>TSX</Title>
      <CodeMirror value={tsxStr} height="300px" theme={theme} extensions={[langs.tsx()]} />
      <Title>JSON</Title>
      <CodeMirror value={jsonStr} height="300px" theme={theme} extensions={[langs.json()]} />
      <Title>HTML</Title>
      <CodeMirror value={htmlStr} height="300px" theme={theme} extensions={[langs.html()]} />
      <Title>Markdown</Title>
      <CodeMirror value={markdownStr} height="300px" theme={theme} extensions={[langs.markdown()]} />
      <Title>CSS</Title>
      <CodeMirror value={cssStr} height="300px" theme={theme} extensions={[langs.css()]} />
      <Title>PHP</Title>
      <CodeMirror value={phpStr} height="300px" theme={theme} extensions={[langs.php()]} />
      <Title>JAVA</Title>
      <CodeMirror value={javaStr} height="300px" theme={theme} extensions={[langs.java()]} />
      <Title>Rust</Title>
      <CodeMirror value={rustStr} height="300px" theme={theme} extensions={[langs.rust()]} />
      <Title>Go</Title>
      <CodeMirror value={goStr} height="300px" theme={theme} extensions={[langs.go()]} />
      <Title>MySQL</Title>
      <CodeMirror value={mysqlStr} height="300px" theme={theme} extensions={[langs.mysql()]} />
      <Title>Python</Title>
      <CodeMirror value={pythonStr} height="300px" theme={theme} extensions={[langs.python()]} />
      <Title>Shell</Title>
      <CodeMirror value={shellStr} height="300px" theme={theme} extensions={[langs.shell()]} />
      <Title>Swift</Title>
      <CodeMirror value={swiftStr} height="300px" theme={theme} extensions={[langs.swift()]} />
    </Warpper>
  );
};
