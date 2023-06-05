import { useEffect } from 'react';
import { EditorStateConfig, Extension, StateEffect, Annotation } from '@codemirror/state';
import { getDefaultExtensions, DefaultExtensionsOptions } from '@uiw/react-codemirror';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { useStore } from './store';

const External = Annotation.define<boolean>();

export interface ModifiedProps extends Omit<DefaultExtensionsOptions, 'theme'>, Omit<EditorStateConfig, 'doc'> {
  value?: EditorStateConfig['doc'];
  extensions?: Extension[];
  /** Fired whenever a change occurs to the document. */
  onChange?(value: string, viewUpdate: ViewUpdate): void;
}

export const Modified = (props: ModifiedProps): JSX.Element | null => {
  const { extensions = [], value, selection, onChange, ...otherOption } = props;
  const { modified, view, theme, dispatch } = useStore();
  const defaultExtensionsOptions = { ...otherOption };
  const defaultExtensions = getDefaultExtensions({ ...defaultExtensionsOptions, theme });
  const updateListener = EditorView.updateListener.of((vu: ViewUpdate) => {
    if (
      vu.docChanged &&
      typeof onChange === 'function' &&
      // Fix echoing of the remote changes:
      // If transaction is market as remote we don't have to call `onChange` handler again
      !vu.transactions.some((tr) => tr.annotation(External))
    ) {
      const doc = vu.state.doc;
      const val = doc.toString();
      onChange(val, vu);
    }
  });
  const extensionsData = [updateListener, ...defaultExtensions, ...extensions];
  const data: EditorStateConfig = { extensions: [...extensionsData] };

  useEffect(() => {
    dispatch!({
      modified: { doc: value, selection: selection, ...data },
      modifiedExtension: {
        option: defaultExtensionsOptions,
        extension: [updateListener, extensions],
      },
    });
  }, []);

  useEffect(
    () =>
      dispatch!({
        modifiedExtension: { option: otherOption, extension: [updateListener, extensions] },
      }),
    [props],
  );

  useEffect(() => {
    if (modified?.doc !== value && view) {
      data.doc = value;
      const modifiedDoc = view?.b.state.doc.toString();
      if (modifiedDoc !== value) {
        view.b.dispatch({
          changes: { from: 0, to: (modifiedDoc || '').length, insert: value || '' },
          effects: StateEffect.reconfigure.of([...extensionsData]),
          annotations: [External.of(true)],
        });
      }
      dispatch!({ modified: { ...modified, ...data } });
    }
    if (modified?.selection !== selection) {
      data.selection = selection;
      dispatch!({ modified: { ...modified, ...data } });
    }
  }, [value, extensions, selection, view]);

  return null;
};

Modified.displayName = 'CodeMirrorMerge.Modified';
