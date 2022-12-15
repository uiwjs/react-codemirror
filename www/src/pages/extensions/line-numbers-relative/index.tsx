import MarkdownPreview from '@uiw/react-markdown-preview';
import data from '@uiw/codemirror-extensions-line-numbers-relative/README.md';
import { lineNumbersRelative } from '@uiw/codemirror-extensions-line-numbers-relative';
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { useTheme } from '../../../utils/useTheme';
import { PageWarpper } from '../';

export const LineNumbersRelativeDoc = () => {
  const { theme } = useTheme();

  return (
    <PageWarpper>
      <CodeMirror
        value={data.source}
        theme={theme}
        height="300px"
        style={{ margin: '0 0 23px 0' }}
        extensions={[langs.markdown(), lineNumbersRelative]}
      />
      <MarkdownPreview source={data.source} />
    </PageWarpper>
  );
};
