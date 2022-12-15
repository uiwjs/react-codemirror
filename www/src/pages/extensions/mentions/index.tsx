import MarkdownPreview from '@uiw/react-markdown-preview';
import data from '@uiw/codemirror-extensions-mentions/README.md';
import { mentions } from '@uiw/codemirror-extensions-mentions';
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { useTheme } from '../../../utils/useTheme';
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
  const { theme } = useTheme();

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
