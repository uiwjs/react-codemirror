import { EditorView } from '@codemirror/view';
import { Extension } from '@codemirror/state';
import { HighlightStyle, TagStyle, syntaxHighlighting } from '@codemirror/language';
import { StyleSpec } from 'style-mod';

export interface CreateThemeOptions {
  /**
   * Theme inheritance. Determines which styles CodeMirror will apply by default.
   */
  theme: Theme;
  /**
   * Settings to customize the look of the editor, like background, gutter, selection and others.
   */
  settings: Settings;
  /** Syntax highlighting styles. */
  styles: TagStyle[];
}

type Theme = 'light' | 'dark';

export interface Settings {
  /** Editor background. */
  background?: string;
  /** Default text color. */
  foreground?: string;
  /** Caret color. */
  caret?: string;
  /** Selection background. */
  selection?: string;
  /** Selection match background. */
  selectionMatch?: string;
  /** Background of highlighted lines. */
  lineHighlight?: string;
  /** Gutter background. */
  gutterBackground?: string;
  /** Text color inside gutter. */
  gutterForeground?: string;
  /** Text active color inside gutter. */
  gutterActiveForeground?: string;
  /** Gutter right border color. */
  gutterBorder?: string;
  /** set editor font */
  fontFamily?: string;
}

export const createTheme = ({ theme, settings = {}, styles = [] }: CreateThemeOptions): Extension => {
  const themeOptions: Record<string, StyleSpec> = {
    '.cm-gutters': {},
  };
  const baseStyle: StyleSpec = {};
  if (settings.background) {
    baseStyle.backgroundColor = settings.background;
  }
  if (settings.foreground) {
    baseStyle.color = settings.foreground;
  }
  if (settings.background || settings.foreground) {
    themeOptions['&'] = baseStyle;
  }

  if (settings.fontFamily) {
    themeOptions['&.cm-editor .cm-scroller'] = {
      fontFamily: settings.fontFamily,
    };
  }
  if (settings.gutterBackground) {
    themeOptions['.cm-gutters'].backgroundColor = settings.gutterBackground;
  }
  if (settings.gutterForeground) {
    themeOptions['.cm-gutters'].color = settings.gutterForeground;
  }
  if (settings.gutterBorder) {
    themeOptions['.cm-gutters'].borderRightColor = settings.gutterBorder;
  }

  if (settings.caret) {
    themeOptions['.cm-content'] = {
      caretColor: settings.caret,
    };
    themeOptions['.cm-cursor, .cm-dropCursor'] = {
      borderLeftColor: settings.caret,
    };
  }
  let activeLineGutterStyle: StyleSpec = {};
  if (settings.gutterActiveForeground) {
    activeLineGutterStyle.color = settings.gutterActiveForeground;
  }
  if (settings.lineHighlight) {
    themeOptions['.cm-activeLine'] = {
      backgroundColor: settings.lineHighlight,
    };
    activeLineGutterStyle.backgroundColor = settings.lineHighlight;
  }
  themeOptions['.cm-activeLineGutter'] = activeLineGutterStyle;

  if (settings.selection) {
    themeOptions[
      '&.cm-focused .cm-selectionBackground, & .cm-selectionLayer .cm-selectionBackground, .cm-content ::selection'
    ] = {
      backgroundColor: settings.selection,
    };
  }
  if (settings.selectionMatch) {
    themeOptions['& .cm-selectionMatch'] = {
      backgroundColor: settings.selectionMatch,
    };
  }
  const themeExtension = EditorView.theme(themeOptions, {
    dark: theme === 'dark',
  });

  const highlightStyle = HighlightStyle.define(styles);
  const extension = [themeExtension, syntaxHighlighting(highlightStyle)];

  return extension;
};

export default createTheme;
