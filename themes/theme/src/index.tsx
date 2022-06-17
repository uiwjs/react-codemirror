import { EditorView } from '@codemirror/view';
import { Extension } from '@codemirror/state';
import { HighlightStyle, TagStyle, syntaxHighlighting } from '@codemirror/language';

export interface CreateThemeOptions {
  /**
   * Theme inheritance. Determines which styles CodeMirror will apply by default.
   */
  dark: Theme;
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
  background: string;
  /** Default text color. */
  foreground: string;
  /** Caret color. */
  caret: string;
  /** Selection background. */
  selection: string;
  /** Background of highlighted lines. */
  lineHighlight: string;
  /** Gutter background. */
  gutterBackground: string;
  /** Text color inside gutter. */
  gutterForeground: string;
}

const createTheme = ({ dark, settings, styles }: CreateThemeOptions): Extension => {
  const theme = EditorView.theme(
    {
      '&': {
        backgroundColor: settings.background,
        color: settings.foreground,
      },
      '.cm-content': {
        caretColor: settings.caret,
      },
      '.cm-cursor, .cm-dropCursor': {
        borderLeftColor: settings.caret,
      },
      '&.cm-focused .cm-selectionBackgroundm .cm-selectionBackground, .cm-content ::selection': {
        backgroundColor: settings.selection,
      },
      '.cm-activeLine': {
        backgroundColor: settings.lineHighlight,
      },
      '.cm-gutters': {
        backgroundColor: settings.gutterBackground,
        color: settings.gutterForeground,
      },
      '.cm-activeLineGutter': {
        backgroundColor: settings.lineHighlight,
      },
    },
    {
      dark: dark === 'dark',
    },
  );

  const highlightStyle = HighlightStyle.define(styles);
  const extension = [theme, syntaxHighlighting(highlightStyle)];

  return extension;
};

export default createTheme;
