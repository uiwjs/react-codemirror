import { FC, Fragment, PropsWithChildren, useEffect, useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import okaidia from '@uiw/codemirror-theme-okaidia/README.md';
import dracula from '@uiw/codemirror-theme-dracula/README.md';
import styled from 'styled-components';

const mdSource = {
  okaidia: okaidia.source,
  dracula: dracula.source,
};

const Button = styled.button``;

const Title = styled.div`
  font-size: 21px;
  padding-bottom: 15px;
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
  return (
    <Fragment>
      <Title>{themeName}</Title>
      <div>
        <Button onClick={() => setPreviewDoc(!previewDoc)}>{previewDoc ? 'Preview Theme' : 'Preview Document'}</Button>
      </div>
      {previewDoc && <MarkdownPreview source={source} style={{ width: 980, padding: '30px 20px 150px 0' }} />}
      {!previewDoc && children}
    </Fragment>
  );
};
