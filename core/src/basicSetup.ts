import {
  KeyBinding,
  lineNumbers,
  highlightActiveLineGutter,
  highlightSpecialChars,
  drawSelection,
  dropCursor,
  rectangularSelection,
  crosshairCursor,
  highlightActiveLine,
  keymap,
} from '@codemirror/view';
import { EditorState, Extension } from '@codemirror/state';
import { history, defaultKeymap, historyKeymap } from '@codemirror/commands';
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search';
import { closeBrackets, autocompletion, closeBracketsKeymap, completionKeymap } from '@codemirror/autocomplete';
import {
  foldGutter,
  indentOnInput,
  syntaxHighlighting,
  defaultHighlightStyle,
  bracketMatching,
  foldKeymap,
} from '@codemirror/language';
import { lintKeymap } from '@codemirror/lint';

export interface BasicSetupOptions {
  lineNumbers?: boolean;
  highlightActiveLineGutter?: boolean;
  highlightSpecialChars?: boolean;
  history?: boolean;
  foldGutter?: boolean;
  drawSelection?: boolean;
  dropCursor?: boolean;
  allowMultipleSelections?: boolean;
  indentOnInput?: boolean;
  syntaxHighlighting?: boolean;
  bracketMatching?: boolean;
  closeBrackets?: boolean;
  autocompletion?: boolean;
  rectangularSelection?: boolean;
  crosshairCursor?: boolean;
  highlightActiveLine?: boolean;
  highlightSelectionMatches?: boolean;

  closeBracketsKeymap?: boolean;
  defaultKeymap?: boolean;
  searchKeymap?: boolean;
  historyKeymap?: boolean;
  foldKeymap?: boolean;
  completionKeymap?: boolean;
  lintKeymap?: boolean;
}

/**
This is an extension value that just pulls together a number of
extensions that you might want in a basic editor. It is meant as a
convenient helper to quickly set up CodeMirror without installing
and importing a lot of separate packages.

Specifically, it includes...

 - [the default command bindings](https://codemirror.net/6/docs/ref/#commands.defaultKeymap)
 - [line numbers](https://codemirror.net/6/docs/ref/#view.lineNumbers)
 - [special character highlighting](https://codemirror.net/6/docs/ref/#view.highlightSpecialChars)
 - [the undo history](https://codemirror.net/6/docs/ref/#commands.history)
 - [a fold gutter](https://codemirror.net/6/docs/ref/#language.foldGutter)
 - [custom selection drawing](https://codemirror.net/6/docs/ref/#view.drawSelection)
 - [drop cursor](https://codemirror.net/6/docs/ref/#view.dropCursor)
 - [multiple selections](https://codemirror.net/6/docs/ref/#state.EditorState^allowMultipleSelections)
 - [reindentation on input](https://codemirror.net/6/docs/ref/#language.indentOnInput)
 - [the default highlight style](https://codemirror.net/6/docs/ref/#language.defaultHighlightStyle) (as fallback)
 - [bracket matching](https://codemirror.net/6/docs/ref/#language.bracketMatching)
 - [bracket closing](https://codemirror.net/6/docs/ref/#autocomplete.closeBrackets)
 - [autocompletion](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion)
 - [rectangular selection](https://codemirror.net/6/docs/ref/#view.rectangularSelection) and [crosshair cursor](https://codemirror.net/6/docs/ref/#view.crosshairCursor)
 - [active line highlighting](https://codemirror.net/6/docs/ref/#view.highlightActiveLine)
 - [active line gutter highlighting](https://codemirror.net/6/docs/ref/#view.highlightActiveLineGutter)
 - [selection match highlighting](https://codemirror.net/6/docs/ref/#search.highlightSelectionMatches)
 - [search](https://codemirror.net/6/docs/ref/#search.searchKeymap)
 - [linting](https://codemirror.net/6/docs/ref/#lint.lintKeymap)

(You'll probably want to add some language package to your setup
too.)

This extension does not allow customization. The idea is that,
once you decide you want to configure your editor more precisely,
you take this package's source (which is just a bunch of imports
and an array literal), copy it into your own code, and adjust it
as desired.
*/
export const basicSetup = (options: BasicSetupOptions = {}): Extension[] => {
  const keymaps: KeyBinding[][] = [];
  if (options.closeBracketsKeymap !== false) {
    keymaps.push([...closeBracketsKeymap]);
  }
  if (options.defaultKeymap !== false) {
    keymaps.push([...defaultKeymap]);
  }
  if (options.searchKeymap !== false) {
    keymaps.push([...searchKeymap]);
  }
  if (options.historyKeymap !== false) {
    keymaps.push([...historyKeymap]);
  }
  if (options.foldKeymap !== false) {
    keymaps.push([...foldKeymap]);
  }
  if (options.completionKeymap !== false) {
    keymaps.push([...completionKeymap]);
  }
  if (options.lintKeymap !== false) {
    keymaps.push([...lintKeymap]);
  }
  const extensions: Extension[] = [];
  if (options.lineNumbers !== false) extensions.push(lineNumbers());
  if (options.highlightActiveLineGutter !== false) extensions.push(highlightActiveLineGutter());
  if (options.highlightSpecialChars !== false) extensions.push(highlightSpecialChars());
  if (options.history !== false) extensions.push(history());
  if (options.foldGutter !== false) extensions.push(foldGutter());
  if (options.drawSelection !== false) extensions.push(drawSelection());
  if (options.dropCursor !== false) extensions.push(dropCursor());
  if (options.allowMultipleSelections !== false) extensions.push(EditorState.allowMultipleSelections.of(true));
  if (options.indentOnInput !== false) extensions.push(indentOnInput());
  if (options.syntaxHighlighting !== false)
    extensions.push(syntaxHighlighting(defaultHighlightStyle, { fallback: true }));
  if (options.bracketMatching !== false) extensions.push(bracketMatching());
  if (options.closeBrackets !== false) extensions.push(closeBrackets());
  if (options.autocompletion !== false) extensions.push(autocompletion());
  if (options.rectangularSelection !== false) extensions.push(rectangularSelection());
  if (options.crosshairCursor !== false) extensions.push(crosshairCursor());
  if (options.highlightActiveLine !== false) extensions.push(highlightActiveLine());
  if (options.highlightSelectionMatches !== false) extensions.push(highlightSelectionMatches());

  return [...extensions, keymap.of(keymaps.flat())].filter(Boolean);
};
