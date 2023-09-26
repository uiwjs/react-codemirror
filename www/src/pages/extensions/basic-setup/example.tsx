import { FC, PropsWithChildren, useContext, useState } from 'react';
import CodeMirror, { BasicSetupOptions } from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import styled from 'styled-components';
import { useTheme } from '../../../utils/useTheme';
import { PageWarpper } from '..';
import { MdContext } from '../../theme/Preview';

const Label = styled.label`
  user-select: none;
  white-space: nowrap;
`;

export const Options: FC<
  PropsWithChildren<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>
> = ({ children, ...props }) => {
  return (
    <Label>
      <input type="checkbox" {...props} />
      <span>{children}</span>
    </Label>
  );
};

const Warpper = styled.div`
  padding-bottom: 32px;
`;

export const BasicSetupExample = () => {
  const { theme } = useTheme();
  const [basicSetup, setBasicSetup] = useState<BasicSetupOptions>({});
  const mdData = useContext(MdContext);
  return (
    <PageWarpper>
      <CodeMirror
        value={mdData.mdstr}
        theme={theme}
        basicSetup={basicSetup}
        height="300px !important"
        style={{ margin: '0 0 23px 0' }}
        extensions={[langs.markdown()]}
      />
      <Warpper>
        <select
          value={basicSetup.tabSize}
          onChange={(evn) => setBasicSetup({ ...basicSetup, tabSize: Number(evn.target.value || '2') })}
        >
          <option value={2}>TabSize: 2</option>
          <option value={4}>TabSize: 4</option>
          <option value={6}>TabSize: 6</option>
          <option value={8}>TabSize: 8</option>
        </select>
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
      </Warpper>
    </PageWarpper>
  );
};
