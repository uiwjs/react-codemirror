import MarkdownPreview from '@uiw/react-markdown-preview';
import data from '@uiw/codemirror-extensions-mentions/README.md';
import { mentions } from '@uiw/codemirror-extensions-mentions';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { useEffect, useState } from 'react';
import { langs } from '@uiw/codemirror-extensions-langs';
import { PageWarpper } from '../';

const users = [
  {
    label: '@Walter White',
  },
  {
    label: '@皮皮鲁',
  },
  {
    label: '@鲁西西',
  },
  {
    label: '@中本聪',
  },
  {
    label: '@サトシ・ナカモト',
  },
  {
    label: '@野比のび太',
  },
  {
    label: '@성덕선',
  },
  {
    label: '@Jesse Pinkman',
  },
  {
    label: '@Gustavo "Gus" Fring',
  },
  {
    label: '@Saul Goodman',
  },
  {
    label: '@Hank Schrader',
  },
  {
    label: '@Skyler White',
  },
  {
    label: '@Mike Ehrmantraut',
  },
  {
    label: '@Lydìã Rôdarté-Qüayle',
  },
];

export const MentionsDoc = () => {
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
        value={data.source}
        theme={theme}
        height="300px"
        style={{ margin: '0 0 23px 0' }}
        extensions={[langs.markdown(), mentions(users)]}
      />
      <MarkdownPreview source={data.source} />
    </PageWarpper>
  );
};
