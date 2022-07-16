import MarkdownPreview from '@uiw/react-markdown-preview';
import data from '@uiw/codemirror-extensions-color/README.md';
import { color } from '@uiw/codemirror-extensions-color';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { useEffect, useState } from 'react';
import { langs } from '@uiw/codemirror-extensions-langs';
import { codeSample } from './code';
import { PageWarpper } from '../';

export const ColorDoc = () => {
  const [modeType, setModeType] = useState<'readOnly' | 'editable'>('readOnly');
  const [readOnly, setReadOnly] = useState(false);
  const dark = document.documentElement.getAttribute('data-color-mode');
  const [theme, setTheme] = useState<ReactCodeMirrorProps['theme']>(dark === 'dark' ? 'dark' : 'light');
  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-color-mode') === 'dark' ? 'dark' : 'light');
    document.addEventListener('colorschemechange', (e) => {
      setTheme(e.detail.colorScheme as ReactCodeMirrorProps['theme']);
    });
  }, []);
  const porps: ReactCodeMirrorProps = {};
  if (modeType === 'editable') {
    porps.editable = readOnly;
  }
  if (modeType === 'readOnly') {
    porps.readOnly = readOnly;
  }

  return (
    <PageWarpper>
      <CodeMirror
        value={codeSample}
        theme={theme}
        height="400px"
        // editable={readOnly}
        // readOnly={readOnly}
        {...porps}
        style={{ margin: '0 0 23px 0' }}
        extensions={[langs.css(), color]}
      />
      <div style={{ marginBottom: 23 }}>
        <button type="button" onClick={() => setReadOnly(!readOnly)}>
          编辑器 & {String(readOnly)}
        </button>
        <label>
          <input
            type="radio"
            name="mode"
            checked={modeType === 'readOnly'}
            value="readOnly"
            onChange={({ target }) => setModeType(target.value as any)}
          />{' '}
          readOnly
        </label>
        <label>
          <input
            type="radio"
            name="mode"
            checked={modeType === 'editable'}
            value="editable"
            onChange={({ target }) => setModeType(target.value as any)}
          />{' '}
          editable
        </label>
      </div>
      <MarkdownPreview source={data.source} />
    </PageWarpper>
  );
};
