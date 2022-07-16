import MarkdownPreview from '@uiw/react-markdown-preview';
import data from '@uiw/codemirror-extensions-hyper-link/README.md';
import { hyperLink } from '@uiw/codemirror-extensions-hyper-link';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { useEffect, useState } from 'react';
import { langs } from '@uiw/codemirror-extensions-langs';
import { markdownString } from './codeSample';
import { PageWarpper } from '../';

export const HyperLinkDoc = () => {
  const dark = document.documentElement.getAttribute('data-color-mode');
  const [theme, setTheme] = useState<ReactCodeMirrorProps['theme']>(dark === 'dark' ? 'dark' : 'light');
  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-color-mode') === 'dark' ? 'dark' : 'light');
    document.addEventListener('colorschemechange', (e) => {
      setTheme(e.detail.colorScheme as ReactCodeMirrorProps['theme']);
    });
  }, []);

  return (
    <PageWarpper>
      <CodeMirror
        value={markdownString}
        theme={theme}
        height="300px"
        style={{ margin: '0 0 23px 0' }}
        extensions={[langs.markdown(), hyperLink]}
      />
      <MarkdownPreview source={data.source} />
    </PageWarpper>
  );
};
