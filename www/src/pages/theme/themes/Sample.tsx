import { FC, PropsWithChildren, PropsWithoutRef } from 'react';
import styled from 'styled-components';
import CodeMirror, { type ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { color } from '@uiw/codemirror-extensions-color';
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
import { langs } from '@uiw/codemirror-extensions-langs';

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding: 5px 0;
`;

const Warpper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 10px;
`;

const ExampleWarpper = styled.div``;

interface ExampleProps extends ReactCodeMirrorProps {
  title: string;
}

const Example: FC<PropsWithChildren<ExampleProps>> = ({ title, ...other }) => {
  return (
    <ExampleWarpper>
      <Title>{title}</Title>
      <CodeMirror {...other} />
    </ExampleWarpper>
  );
};

interface SampleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  theme?: Extension;
}

export const Sample: FC<PropsWithoutRef<SampleProps>> = ({ theme, ...props }) => {
  const editProps = {
    height: '300px !important',
    theme,
  };
  return (
    <Warpper {...props}>
      <Example title="JavaScript" value={jsStr} extensions={[color, langs.javascript()]} {...editProps} />
      <Example title="JSX" value={jsxStr} extensions={[color, langs.jsx()]} {...editProps} />
      <Example title="TypeScript" value={typescriptStr} extensions={[color, langs.typescript()]} {...editProps} />
      <Example title="TSX" value={tsxStr} extensions={[color, langs.tsx()]} {...editProps} />
      <Example title="JSON" value={jsonStr} extensions={[color, langs.json()]} {...editProps} />
      <Example title="HTML" value={htmlStr} extensions={[color, langs.html()]} {...editProps} />
      <Example title="Markdown" value={markdownStr} extensions={[color, langs.markdown()]} {...editProps} />
      <Example title="CSS" value={cssStr} extensions={[color, langs.css()]} {...editProps} />
      <Example title="PHP" value={phpStr} extensions={[color, langs.php()]} {...editProps} />
      <Example title="JAVA" value={javaStr} extensions={[color, langs.java()]} {...editProps} />
      <Example title="Rust" value={rustStr} extensions={[color, langs.rust()]} {...editProps} />
      <Example title="Go" value={goStr} extensions={[color, langs.go()]} {...editProps} />
      <Example title="MySQL" value={mysqlStr} extensions={[color, langs.mysql()]} {...editProps} />
      <Example title="Python" value={pythonStr} extensions={[color, langs.python()]} {...editProps} />
      <Example title="Shell" value={shellStr} extensions={[color, langs.shell()]} {...editProps} />
      <Example title="Swift" value={swiftStr} extensions={[color, langs.swift()]} {...editProps} />
    </Warpper>
  );
};
