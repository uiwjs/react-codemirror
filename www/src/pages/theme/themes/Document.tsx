import { FC, PropsWithChildren, useEffect, useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import styled from 'styled-components';
import { PreCode } from './PreCode';
import { mdSource } from './Datas';
import { Warpper } from './Warpper';

export const toSnakeCase = (str: string = '') =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join(',')
    .split(',');

export const Button = styled.button``;

export const Title = styled.div`
  font-size: 24px;
  padding-bottom: 15px;
  text-transform: capitalize;
  font-weight: bold;
`;

export const Header = styled.div`
  padding: 26px 23px 22px 23px;
  border-bottom: 1px solid var(--color-border-default);
  ${Title} {
    padding: 6px 0 12px 0;
  }
  ${Button} {
  }
`;

export const Content = styled.div`
  padding: 30px 38px 120px 38px;
`;

interface DocumentProps {
  themeName?: string;
}

export const Document: FC<PropsWithChildren<DocumentProps>> = ({ children, themeName }) => {
  const [previewDoc, setPreviewDoc] = useState(false);
  const [source, setSource] = useState(mdSource.okaidia);
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
        <PreCode value={`npm install @uiw/codemirror-theme-${_name} --save`} />
        <div>
          <Button onClick={() => setPreviewDoc(!previewDoc)}>
            {previewDoc ? 'Preview Theme' : 'Preview Document'}
          </Button>
        </div>
      </Header>
      <Content>
        {previewDoc && <MarkdownPreview source={source} style={{ width: 980, padding: '10px 20px 150px 0' }} />}
        {!previewDoc && children}
      </Content>
    </Warpper>
  );
};
