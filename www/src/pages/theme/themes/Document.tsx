import { FC, PropsWithChildren, useEffect, useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import okaidia from '@uiw/codemirror-theme-okaidia/README.md';
import dracula from '@uiw/codemirror-theme-dracula/README.md';
import duotone from '@uiw/codemirror-theme-duotone/README.md';
import eclipse from '@uiw/codemirror-theme-eclipse/README.md';
import styled from 'styled-components';

export const toSnakeCase = (str: string = '') =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join(',')
    .split(',');

const mdSource = {
  okaidia: okaidia.source,
  eclipse: eclipse.source,
  dracula: dracula.source,
  duotoneLight: duotone.source,
  duotoneDark: duotone.source,
};

const Button = styled.button``;

const Title = styled.div`
  font-size: 24px;
  padding-bottom: 15px;
  text-transform: capitalize;
  font-weight: bold;
`;

const Warpper = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 42px);
`;

const Header = styled.div`
  padding: 26px 23px 22px 23px;
  border-bottom: 1px solid var(--color-border-default);
  ${Title} {
    padding: 6px 0 12px 0;
  }
  ${Button} {
  }
`;

const Pre = styled.pre`
  border: 1px solid var(--color-border-default);
  background-color: var(--color-canvas-subtle);
  display: inline-block;
  padding: 10px 13px;
  border-radius: 5px;
`;

const Content = styled.div`
  padding: 30px 38px 120px 38px;
`;

interface DocumentProps {
  themeName?: string;
}

export const Document: FC<PropsWithChildren<DocumentProps>> = ({ children, themeName }) => {
  const [previewDoc, setPreviewDoc] = useState(false);
  const [source, setSource] = useState(okaidia.source);
  useEffect(() => {
    if (themeName) {
      setSource(mdSource[themeName as keyof typeof mdSource]);
    }
  }, [themeName]);

  const [_name] = toSnakeCase(themeName) || [];
  return (
    <Warpper>
      <Header>
        <Title>{themeName} Theme</Title>
        <div>
          <Button onClick={() => setPreviewDoc(!previewDoc)}>
            {previewDoc ? 'Preview Theme' : 'Preview Document'}
          </Button>
        </div>
        <Pre>npm install @uiw/codemirror-theme-{_name} --save</Pre>
      </Header>
      <Content>
        {previewDoc && <MarkdownPreview source={source} style={{ width: 980, padding: '10px 20px 150px 0' }} />}
        {!previewDoc && children}
      </Content>
    </Warpper>
  );
};
