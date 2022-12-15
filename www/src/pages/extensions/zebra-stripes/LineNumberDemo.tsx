import data from '@uiw/codemirror-extensions-zebra-stripes/README.md';
import { zebraStripes } from '@uiw/codemirror-extensions-zebra-stripes';
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { useTheme } from '../../../utils/useTheme';

export const LineNumberDemo = () => {
  const { theme } = useTheme();

  return (
    <CodeMirror
      value={data.source}
      theme={theme}
      height="300px"
      style={{ margin: '0 0 23px 0' }}
      extensions={[
        langs.markdown(),
        zebraStripes({ lineNumber: [1, [3, 6], 10], lightColor: '#aca2ff33', darkColor: '#aca2ff40' }),
      ]}
    />
  );
};
