import { FC, PropsWithChildren, useEffect, useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { color } from '@uiw/codemirror-extensions-color';
import DocumentStr from '@uiw/react-codemirror/README.md';
import { Extension } from '@codemirror/state';
import CodeMirror, { ReactCodeMirrorProps, BasicSetupOptions } from '@uiw/react-codemirror';
import styled from 'styled-components';
import { langs } from '@uiw/codemirror-extensions-langs';
import { Select } from '../../Select';

const Label = styled.label`
  user-select: none;
  white-space: nowrap;
`;

const Options: FC<
  PropsWithChildren<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>
> = ({ children, ...props }) => {
  return (
    <Label>
      <span>{children}</span>
      <input type="checkbox" {...props} />
    </Label>
  );
};

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
  const [basicSetup, setBasicSetup] = useState<BasicSetupOptions>({});

  function handleLangChange(lang: keyof typeof langs) {
    try {
      import(`code-example/txt/sample.${lang.toLocaleLowerCase()}.txt`)
        .then((data) => {
          setCode(data.default);
          if (langs[lang]) {
            setExtensions([color, langs[lang]()]);
          }
          setMode(lang);
        })
        .catch((err) => {
          if (langs[lang]) {
            setExtensions([color, langs[lang]()]);
          } else {
            setExtensions([color]);
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
        basicSetup={basicSetup}
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
            onChange={(evn) => handleLangChange(evn.target.value as keyof typeof langs)}
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
          <Options
            checked={basicSetup.lineNumbers !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, lineNumbers: evn.target.checked })}
          >
            lineNumbers
          </Options>
          <Options
            checked={basicSetup.foldGutter !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, foldGutter: evn.target.checked })}
          >
            foldGutter
          </Options>
          <Options
            checked={basicSetup.highlightActiveLineGutter !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, highlightActiveLineGutter: evn.target.checked })}
          >
            highlightActiveLineGutter
          </Options>
          <Options
            checked={basicSetup.highlightSpecialChars !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, highlightSpecialChars: evn.target.checked })}
          >
            highlightSpecialChars
          </Options>
          <Options
            checked={basicSetup.history !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, history: evn.target.checked })}
          >
            history
          </Options>
          <Options
            checked={basicSetup.drawSelection !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, drawSelection: evn.target.checked })}
          >
            drawSelection
          </Options>
          <Options
            checked={basicSetup.dropCursor !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, dropCursor: evn.target.checked })}
          >
            dropCursor
          </Options>
          <Options
            checked={basicSetup.allowMultipleSelections !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, allowMultipleSelections: evn.target.checked })}
          >
            allowMultipleSelections
          </Options>
          <Options
            checked={basicSetup.indentOnInput !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, indentOnInput: evn.target.checked })}
          >
            indentOnInput
          </Options>
          <Options
            checked={basicSetup.syntaxHighlighting !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, syntaxHighlighting: evn.target.checked })}
          >
            syntaxHighlighting
          </Options>
          <Options
            checked={basicSetup.bracketMatching !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, bracketMatching: evn.target.checked })}
          >
            bracketMatching
          </Options>
          <Options
            checked={basicSetup.closeBrackets !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, closeBrackets: evn.target.checked })}
          >
            closeBrackets
          </Options>
          <Options
            checked={basicSetup.autocompletion !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, autocompletion: evn.target.checked })}
          >
            autocompletion
          </Options>
          <Options
            checked={basicSetup.rectangularSelection !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, rectangularSelection: evn.target.checked })}
          >
            rectangularSelection
          </Options>
          <Options
            checked={basicSetup.crosshairCursor !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, crosshairCursor: evn.target.checked })}
          >
            crosshairCursor
          </Options>
          <Options
            checked={basicSetup.highlightActiveLine !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, highlightActiveLine: evn.target.checked })}
          >
            highlightActiveLine
          </Options>
          <Options
            checked={basicSetup.highlightSelectionMatches !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, highlightSelectionMatches: evn.target.checked })}
          >
            highlightSelectionMatches
          </Options>
          <Options
            checked={basicSetup.closeBracketsKeymap !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, closeBracketsKeymap: evn.target.checked })}
          >
            closeBracketsKeymap
          </Options>
          <Options
            checked={basicSetup.defaultKeymap !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, defaultKeymap: evn.target.checked })}
          >
            defaultKeymap
          </Options>
          <Options
            checked={basicSetup.searchKeymap !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, searchKeymap: evn.target.checked })}
          >
            searchKeymap
          </Options>
          <Options
            checked={basicSetup.historyKeymap !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, historyKeymap: evn.target.checked })}
          >
            historyKeymap
          </Options>
          <Options
            checked={basicSetup.foldKeymap !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, foldKeymap: evn.target.checked })}
          >
            foldKeymap
          </Options>
          <Options
            checked={basicSetup.completionKeymap !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, completionKeymap: evn.target.checked })}
          >
            completionKeymap
          </Options>
          <Options
            checked={basicSetup.lintKeymap !== false}
            onChange={(evn) => setBasicSetup({ ...basicSetup, lintKeymap: evn.target.checked })}
          >
            lintKeymap
          </Options>
        </Tools>
        <MarkdownPreview source={DocumentStr.source} />
      </MarkdownDocument>
    </Warpper>
  );
}
