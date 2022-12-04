import data from '@uiw/codemirror-extensions-zebra-stripes/README.md';
import { zebraStripes } from '@uiw/codemirror-extensions-zebra-stripes';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { useEffect, useState } from 'react';
import { langs } from '@uiw/codemirror-extensions-langs';

export const LineNumberDemo = () => {
  const dark = document.documentElement.getAttribute('data-color-mode');
  const [theme, setTheme] = useState<ReactCodeMirrorProps['theme']>(dark === 'dark' ? 'dark' : 'light');
  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-color-mode') === 'dark' ? 'dark' : 'light');
    document.addEventListener('colorschemechange', (e) => {
      setTheme(e.detail.colorScheme as ReactCodeMirrorProps['theme']);
    });
  }, []);

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
