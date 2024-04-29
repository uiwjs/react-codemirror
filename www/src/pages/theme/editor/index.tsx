import { Fragment, useState } from 'react';
import { Extension } from '@codemirror/state';
import CodeMirror from '@uiw/react-codemirror';
import { color } from '@uiw/codemirror-extensions-color';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import '@wcj/dark-mode';
import createTheme, { CreateThemeOptions } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { TagStyle } from '@codemirror/language';
import { javascript } from '@codemirror/lang-javascript';
import { defalutStyle } from './themeCode';
import { ColorMenu, SwitchTheme } from './ColorMenu';
import { SampleCode, Select } from './SampleCode';
import { themeCode } from './themeCode';
import { Sample } from '../themes/Sample';

export const Sider = styled.div`
  width: 220px;
  min-width: 220px;
  overflow: auto;
  height: calc(100vh - 42px);
  padding: 18px 16px 120px 16px;
  border-right: 1px solid var(--color-border-default);
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  typeStandard?: string;
  variableNameDefinition: string;
  variableNameFunction: string;
  propertyNameDefinition: string;
  propertyNameFunction: string;
  propertyNameSpecial: string;
  classNameConstant: string;
  stringSpecial: string;
  tagNameStandard: string;
};

export function ThemeEditor() {
  const navigate = useNavigate();
  const { type = 'multiple' } = useParams();
  const [extension, setExtension] = useState<Extension>(javascript({ jsx: true }));
  const [code, setCode] = useState('');
  const [lang, setLang] = useState('jsx');
  const [theme, setTheme] = useState<CreateThemeOptions['theme']>('light');
  const [settings, setSettings] = useState<CreateThemeOptions['settings']>({
    background: '#ffffff',
    foreground: '#4D4D4C',
    caret: '#AEAFAD',
    selection: '#D6D6D6',
    selectionMatch: '#D6D6D6',
    gutterBackground: '#FFFFFF',
    gutterForeground: '#4D4D4C',
    gutterBorder: '#dddddd',
    gutterActiveForeground: '',
    lineHighlight: '#EFEFEF',
  });

  const [styles, setStyles] = useState<Style>(defalutStyle);

  const myTheme = createTheme({
    theme: theme,
    settings: { ...settings },
    styles: [
      getStyle(styles.comment, { tag: t.comment }),
      getStyle(styles.lineComment, { tag: t.lineComment }),
      getStyle(styles.blockComment, { tag: t.blockComment }),
      getStyle(styles.docComment, { tag: t.docComment }),
      getStyle(styles.name, { tag: t.name }),
      getStyle(styles.typeDefinition, { tag: t.definition(t.typeName) }),
      getStyle(styles.typeStandard, { tag: t.standard(t.typeName) }),
      getStyle(styles.typeName, { tag: t.typeName }),
      getStyle(styles.tagNameStandard, { tag: t.standard(t.tagName) }),
      getStyle(styles.tagName, { tag: t.tagName }),
      getStyle(styles.variableName, { tag: t.variableName }),
      getStyle(styles.variableNameDefinition, { tag: t.definition(t.variableName) }),
      getStyle(styles.variableNameFunction, { tag: t.function(t.variableName) }),
      getStyle(styles.propertyName, { tag: t.propertyName }),
      getStyle(styles.propertyNameDefinition, { tag: t.definition(t.propertyName) }),
      getStyle(styles.propertyNameSpecial, { tag: t.special(t.propertyName) }),
      getStyle(styles.propertyNameFunction, { tag: t.function(t.propertyName) }),
      getStyle(styles.attributeName, { tag: t.attributeName }),
      getStyle(styles.attributeValue, { tag: t.attributeValue }),
      getStyle(styles.className, { tag: t.className }),
      getStyle(styles.classNameConstant, { tag: t.constant(t.className) }),
      getStyle(styles.labelName, { tag: t.labelName }),
      getStyle(styles.namespace, { tag: t.namespace }),
      getStyle(styles.macroName, { tag: t.macroName }),
      getStyle(styles.literal, { tag: t.literal }),
      getStyle(styles.string, { tag: t.string }),
      getStyle(styles.stringSpecial, { tag: t.special(t.string) }),
      getStyle(styles.docString, { tag: t.docString }),
      getStyle(styles.character, { tag: t.character }),
      getStyle(styles.number, { tag: t.number }),
      getStyle(styles.integer, { tag: t.integer }),
      getStyle(styles.float, { tag: t.float }),
      getStyle(styles.bool, { tag: t.bool }),
      getStyle(styles.regexp, { tag: t.regexp }),
      getStyle(styles.escape, { tag: t.escape }),
      getStyle(styles.color, { tag: t.color }),
      getStyle(styles.url, { tag: t.url }),
      getStyle(styles.keyword, { tag: t.keyword }),
      getStyle(styles.self, { tag: t.self }),
      getStyle(styles.null, { tag: t.null }),
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
              color={settings[keyName] as keyof typeof settings}
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
        {type === 'single' && (
          <CodeMirror
            readOnly={lang === 'code'}
            theme={myTheme}
            extensions={[extension, color]}
            value={lang === 'code' ? themeCode({ ...settings, ...styles, dark: theme }) : code}
            height="100% !important"
            style={{ minHeight: '100%' }}
          />
        )}
        <Select value={type} onChange={(evn) => navigate(`/editor/theme/${evn.target.value}`)}>
          <option value="single">Single language</option>
          <option value="multiple">Multiple languages</option>
        </Select>
        {type === 'single' && (
          <SampleCode
            style={{ top: 40 }}
            styles={{ ...settings, ...styles, dark: theme }}
            onChange={(str, langName, exten) => {
              setLang(langName);
              setCode(str || '');
              setExtension(exten || []);
            }}
          />
        )}
        {type === 'multiple' && <Sample theme={myTheme} style={{ padding: '30px 30px' }} />}
      </EditorView>
    </Fragment>
  );
}

export const Component = () => {
  return <ThemeEditor />;
};
