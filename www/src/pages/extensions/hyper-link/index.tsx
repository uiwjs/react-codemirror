import MarkdownPreview from '@uiw/react-markdown-preview';
import data from '@uiw/codemirror-extensions-hyper-link/README.md';
import { hyperLink } from '@uiw/codemirror-extensions-hyper-link';
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { useTheme } from '../../../utils/useTheme';
import { markdownString } from './codeSample';
import { PageWarpper } from '../';

export const HyperLinkDoc = () => {
  const { theme } = useTheme();

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
