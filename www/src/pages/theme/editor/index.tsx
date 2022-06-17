import { Fragment, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import styled from 'styled-components';
import '@wcj/dark-mode';
import createTheme, { CreateThemeOptions } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { javascript } from '@codemirror/lang-javascript';
import { thmeCode } from './themeCode';
import { ColorMenu } from './ColorMenu';

export const Sider = styled.div`
  width: 230px;
  overflow: auto;
  height: calc(100vh - 42px);
  padding: 18px 16px;
  border-right: 1px solid var(--color-border-default);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const EditorView = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 42px);
`;

const SubTitle = styled.div`
  color: var(--color-fg-subtle);
  font-size: 12px;
  padding: 0 0;
`;

export function ThemeEditor() {
  const [settings, setSettings] = useState<CreateThemeOptions['settings']>({
    background: '#FFFFFF',
    foreground: '#4D4D4C',
    caret: '#AEAFAD',
    selection: '#D6D6D6',
    gutterBackground: '#FFFFFF',
    gutterForeground: '#4D4D4C80',
    lineHighlight: '#EFEFEF',
  });

  const [styles, setStyles] = useState({
    comment: '#787b8099',
    variable: '#66b3ff',
    string: '#e71818',
    number: '#a600ff',
    bool: '#5c6166',
    null: '#5c6166',
    keyword: '#5c6166',
    operator: '#5c6166',
    className: '#5c6166',
    typeDefinition: '#00e056',
    typeName: '#194a7b',
    HTMLbracket: '#5c6166',
    HTMLtag: '#020509',
    HTMLattribute: '#5c6166',
  });

  const myTheme = createTheme({
    dark: 'light',
    settings: { ...settings },
    styles: [
      { tag: t.comment, color: styles.comment || '#787b8099' },
      { tag: t.variableName, color: styles.variable || '#66b3ff' },
      { tag: [t.string, t.special(t.brace)], color: styles.string || '#e71818' },
      { tag: t.number, color: styles.number || '#a600ff' },
      { tag: t.bool, color: styles.bool || '#5c6166' },
      { tag: t.null, color: styles.null || '#ff0066' },
      { tag: t.keyword, color: styles.keyword || '#5c6166' },
      { tag: t.operator, color: styles.operator || '#5c6166' },
      { tag: t.className, color: styles.className || '#5c6166' },
      { tag: t.definition(t.typeName), color: styles.typeDefinition || '#00e056' },
      { tag: t.typeName, color: styles.typeName || '#194a7b' },
      { tag: t.angleBracket, color: styles.HTMLbracket || '#5c6166' },
      { tag: t.tagName, color: styles.HTMLtag || '#020509' },
      { tag: t.attributeName, color: styles.HTMLattribute || '#5c6166' },
    ],
  });
  return (
    <Fragment>
      <Sider>
        <SubTitle>Editor</SubTitle>
        {(Object.keys(settings) as Array<keyof typeof settings>).map((keyName, idx) => {
          return (
            <ColorMenu
              key={idx}
              color={settings[keyName]}
              onChange={(evn) => setSettings({ ...settings, [keyName]: evn.target.value })}
            >
              {keyName}
            </ColorMenu>
          );
        })}
        <SubTitle>Syntax Highlighting</SubTitle>
        {(Object.keys(styles) as Array<keyof typeof styles>).map((keyName, idx) => {
          return (
            <ColorMenu
              key={idx}
              color={styles[keyName]}
              onChange={(evn) => setStyles({ ...styles, [keyName]: evn.target.value })}
            >
              {keyName}
            </ColorMenu>
          );
        })}
      </Sider>
      <EditorView>
        <CodeMirror
          readOnly
          theme={myTheme}
          extensions={[javascript({ jsx: true })]}
          value={thmeCode({ ...settings, ...styles })}
          height="100%"
          style={{ minHeight: '100%' }}
        />
      </EditorView>
    </Fragment>
  );
}
