import { useEffect, useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import DocumentStr from '@uiw/react-codemirror/README.md';
import { Extension } from '@codemirror/state';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import styled from 'styled-components';
import { Select } from '../Select';
import { langs } from '../langs';

const themeOptions = ['dark', 'light'];
const heightOptions = ['auto', '200px', '300px', '500px'];

let count = 0;

const MarkdownDocument = styled.div`
  margin: 0 auto;
  text-align: left;
  max-width: 995px;
  overflow: auto;
  padding: 16px;
  border-radius: 5px;
`;

const Tools = styled.div`
  margin: 0 auto;
  max-width: 995px;
  padding: 15px 0 0 0;
  > label {
    margin-right: 15px;
  }
`;

const CodemirrorWarpper = styled(CodeMirror)`
  box-shadow: 0 0 0 1px rgb(16 22 26 / 10%), 0 0 0 rgb(16 22 26 / 0%), 0 1px 1px rgb(16 22 26 / 20%);
  margin: 0 auto;
  text-align: left;
  max-width: 995px;
  overflow: auto;
  border-radius: 5px;
`;

const Warpper = styled.div`
  padding-bottom: 18px;
`;

export default function Example() {
  const dark = document.documentElement.getAttribute('data-color-mode');
  const [mode, setMode] = useState('javascript');
  const [placeholder, setPlaceholder] = useState('Please enter the code.');
  const [autofocus, setAutofocus] = useState(false);
  const [editable, setEditable] = useState(true);
  const [theme, setTheme] = useState<ReactCodeMirrorProps['theme']>(dark === 'dark' ? 'dark' : 'light');
  const [code, setCode] = useState('');
  const [extensions, setExtensions] = useState<Extension[]>();
  const [height, setHeight] = useState('500px');

  function handleLangChange(lang: string) {
    try {
      import(`code-example/txt/sample.${lang.toLocaleLowerCase()}.txt`)
        .then((data) => {
          setCode(data.default);
          if (langs[lang]) {
            setExtensions([langs[lang]()]);
          }
          setMode(lang);
        })
        .catch((err) => {
          if (langs[lang]) {
            setExtensions([langs[lang]()]);
          } else {
            setExtensions([]);
          }
          setMode(lang);
          setCode('');
        });
      if (lang === 'html') {
      }
    } catch (error) {}
  }
  useEffect(() => {
    handleLangChange('javascript');
    setTheme(document.documentElement.getAttribute('data-color-mode') === 'dark' ? 'dark' : 'light');
    document.addEventListener('colorschemechange', (e) => {
      setTheme(e.detail.colorScheme as ReactCodeMirrorProps['theme']);
    });
  }, []);
  return (
    <Warpper className="wmde-markdown-var">
      <CodemirrorWarpper
        value={code}
        height={height}
        theme={theme}
        editable={editable}
        extensions={extensions}
        autoFocus={autofocus}
        placeholder={placeholder}
        onChange={(value) => setCode(value)}
        style={{
          maxWidth: '995px',
          margin: '-18px auto 0 auto',
          position: 'relative',
          zIndex: 999,
        }}
      />
      <MarkdownDocument>
        <Tools>
          <Select
            label="Lang"
            options={Object.keys(langs)}
            value={mode}
            onChange={(evn) => handleLangChange(evn.target.value)}
          />
          <Select
            label="Theme"
            options={themeOptions}
            value={theme as string}
            onChange={(evn) => {
              document.documentElement.setAttribute('data-color-mode', evn.target.value);
              setTheme(evn.target.value as ReactCodeMirrorProps['theme']);
            }}
          />
          <Select
            label="Height"
            options={heightOptions}
            value={height}
            onChange={(evn) => setHeight(evn.target.value)}
          />
          <button
            onClick={() => {
              count++;
              setCode(`console.log("Hello World! ${count}")`);
            }}
          >
            change code
          </button>
          <label>
            <input type="checkbox" checked={autofocus} onChange={(evn) => setAutofocus(evn.target.checked)} />
            autoFocus
          </label>
          <label>
            <input type="checkbox" checked={editable} onChange={(evn) => setEditable(evn.target.checked)} />
            editable
          </label>
          <label>
            placeholder:
            <input type="text" value={placeholder} onChange={(evn) => setPlaceholder(evn.target.value)} />
          </label>
        </Tools>
        <MarkdownPreview source={DocumentStr.source} />
      </MarkdownDocument>
    </Warpper>
  );
}
