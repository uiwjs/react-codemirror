import { EditorView } from "@codemirror/view";

export const defaultDarkThemeOption = EditorView.theme({
  "&": {
    color: '#fff',
    backgroundColor: '#272822',
  },
}, {
  dark: true
});