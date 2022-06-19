import { Fragment, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { Extension } from '@codemirror/state';
import styled from 'styled-components';
import '@wcj/dark-mode';
import createTheme, { CreateThemeOptions } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { TagStyle } from '@codemirror/language';
import { javascript } from '@codemirror/lang-javascript';
import { defalutStyle } from './themeCode';
import { ColorMenu, SwitchTheme } from './ColorMenu';
import { SampleCode } from './SampleCode';

export const Sider = styled.div`
  width: 230px;
  overflow: auto;
  height: calc(100vh - 42px);
  padding: 18px 16px 120px 16px;
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
  position: relative;
`;

const SubTitle = styled.div`
  color: var(--color-fg-subtle);
  font-size: 12px;
  padding: 0 0;
`;

function getStyle(color?: string, tagStyle?: TagStyle) {
  if (color && tagStyle) {
    tagStyle.color = color;
    return [tagStyle];
  }
  return [];
}

export type Style = Partial<
  Record<Exclude<keyof typeof t, 'definition' | 'constant' | 'function' | 'standard' | 'local' | 'special'>, string>
> & {
  typeDefinition?: string;
};

export function ThemeEditor() {
  const [extension, setExtension] = useState<Extension>(javascript({ jsx: true }));
  const [code, setCode] = useState('');
  const [lang, setLang] = useState('jsx');
  const [theme, setTheme] = useState<CreateThemeOptions['dark']>('light');
  const [settings, setSettings] = useState<CreateThemeOptions['settings']>({
    background: '',
    foreground: '#4D4D4C',
    caret: '#AEAFAD',
    selection: '#D6D6D6',
    gutterBackground: '#FFFFFF',
    gutterForeground: '#4D4D4C80',
    lineHighlight: '#EFEFEF',
  });

  const [styles, setStyles] = useState<Style>(defalutStyle);

  const myTheme = createTheme({
    dark: theme,
    settings: { ...settings },
    styles: [
      getStyle(styles.comment, { tag: t.comment }),
      getStyle(styles.lineComment, { tag: t.lineComment }),
      getStyle(styles.blockComment, { tag: t.blockComment }),
      getStyle(styles.docComment, { tag: t.docComment }),
      getStyle(styles.name, { tag: t.name }),
      { tag: t.definition(t.typeName), color: styles.typeDefinition },
      { tag: t.typeName, color: styles.typeName },
      { tag: t.tagName, color: styles.tagName },
      { tag: t.variableName, color: styles.variableName },
      getStyle(styles.propertyName, { tag: t.propertyName }),
      { tag: t.attributeName, color: styles.attributeName },
      { tag: t.className, color: styles.className },
      getStyle(styles.labelName, { tag: t.labelName }),
      getStyle(styles.namespace, { tag: t.namespace }),
      getStyle(styles.macroName, { tag: t.macroName }),
      getStyle(styles.literal, { tag: t.literal }),
      { tag: t.string, color: styles.string },
      getStyle(styles.docString, { tag: t.docString }),
      getStyle(styles.character, { tag: t.character }),
      getStyle(styles.attributeValue, { tag: t.attributeValue }),
      { tag: t.attributeValue, color: styles.attributeValue },
      getStyle(styles.number, { tag: t.number }),
      getStyle(styles.integer, { tag: t.integer }),
      getStyle(styles.float, { tag: t.float }),
      { tag: t.bool, color: styles.bool },
      getStyle(styles.regexp, { tag: t.regexp }),
      getStyle(styles.escape, { tag: t.escape }),
      getStyle(styles.color, { tag: t.color }),
      getStyle(styles.url, { tag: t.url }),
      { tag: t.keyword, color: styles.keyword },
      getStyle(styles.self, { tag: t.self }),
      { tag: t.null, color: styles.null },
      getStyle(styles.atom, { tag: t.atom }),

      getStyle(styles.atom, { tag: t.atom }),

      getStyle(styles.unit, { tag: t.unit }),
      getStyle(styles.modifier, { tag: t.modifier }),
      getStyle(styles.operatorKeyword, { tag: t.operatorKeyword }),
      getStyle(styles.controlKeyword, { tag: t.controlKeyword }),
      getStyle(styles.definitionKeyword, { tag: t.definitionKeyword }),
      getStyle(styles.moduleKeyword, { tag: t.moduleKeyword }),
      getStyle(styles.operator, { tag: t.operator }),
      getStyle(styles.derefOperator, { tag: t.derefOperator }),
      getStyle(styles.arithmeticOperator, { tag: t.arithmeticOperator }),
      getStyle(styles.logicOperator, { tag: t.logicOperator }),
      getStyle(styles.bitwiseOperator, { tag: t.bitwiseOperator }),

      { tag: t.special(t.brace), color: styles.brace },
      getStyle(styles.compareOperator, { tag: t.compareOperator }),
      getStyle(styles.updateOperator, { tag: t.updateOperator }),
      getStyle(styles.definitionOperator, { tag: t.definitionOperator }),
      getStyle(styles.typeOperator, { tag: t.typeOperator }),
      getStyle(styles.controlOperator, { tag: t.controlOperator }),
      getStyle(styles.punctuation, { tag: t.punctuation }),
      getStyle(styles.separator, { tag: t.separator }),
      getStyle(styles.bracket, { tag: t.bracket }),
      getStyle(styles.angleBracket, { tag: t.angleBracket }),
      getStyle(styles.squareBracket, { tag: t.squareBracket }),
      getStyle(styles.paren, { tag: t.paren }),
      getStyle(styles.brace, { tag: t.brace }),
      getStyle(styles.content, { tag: t.content }),
      getStyle(styles.heading, { tag: t.heading }),
      getStyle(styles.heading1, { tag: t.heading1 }),
      getStyle(styles.heading2, { tag: t.heading2 }),
      getStyle(styles.heading3, { tag: t.heading3 }),
      getStyle(styles.heading4, { tag: t.heading4 }),
      getStyle(styles.heading5, { tag: t.heading5 }),
      getStyle(styles.heading6, { tag: t.heading6 }),
      getStyle(styles.contentSeparator, { tag: t.contentSeparator }),
      getStyle(styles.list, { tag: t.list }),
      getStyle(styles.quote, { tag: t.quote }),
      getStyle(styles.emphasis, { tag: t.emphasis }),
      getStyle(styles.strong, { tag: t.strong }),
      getStyle(styles.link, { tag: t.link }),
      getStyle(styles.monospace, { tag: t.monospace }),
      getStyle(styles.strikethrough, { tag: t.strikethrough }),
      getStyle(styles.inserted, { tag: t.inserted }),
      getStyle(styles.deleted, { tag: t.deleted }),
      getStyle(styles.changed, { tag: t.changed }),
      getStyle(styles.invalid, { tag: t.invalid }),
      getStyle(styles.meta, { tag: t.meta }),
      getStyle(styles.documentMeta, { tag: t.documentMeta }),
      getStyle(styles.annotation, { tag: t.annotation }),
      getStyle(styles.processingInstruction, { tag: t.processingInstruction }),
    ].flat(),
  });
  return (
    <Fragment>
      <Sider>
        <SwitchTheme theme={theme} onChange={(ty) => setTheme(ty)} />
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
          readOnly={lang === 'code'}
          theme={myTheme}
          extensions={[extension]}
          value={code}
          height="100%"
          style={{ minHeight: '100%' }}
        />
        <SampleCode
          styles={{ ...settings, ...styles, dark: theme }}
          onChange={(str, langName, exten) => {
            console.log(langName);
            setLang(langName);
            setCode(str || '');
            setExtension(exten || []);
          }}
        />
      </EditorView>
    </Fragment>
  );
}
