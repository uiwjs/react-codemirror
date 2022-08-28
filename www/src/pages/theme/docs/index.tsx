import MarkdownPreview from '@uiw/react-markdown-preview';
import data from '@uiw/codemirror-themes/README.md';
import BackToUp from '@uiw/react-back-to-top';
import { Fragment } from 'react';

export const ThemeDoc = () => {
  return (
    <Fragment>
      <MarkdownPreview source={data.source} style={{ width: 980, margin: '0 auto', padding: '50px 20px 150px 20px' }} />
      <BackToUp>Top</BackToUp>
    </Fragment>
  );
};
