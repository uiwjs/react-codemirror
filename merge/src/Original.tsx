import { useEffect } from 'react';
import { EditorStateConfig, Extension, StateEffect, Annotation } from '@codemirror/state';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { getDefaultExtensions, DefaultExtensionsOptions } from '@uiw/react-codemirror';
import { useStore } from './store';

const External = Annotation.define<boolean>();

export interface OriginalProps extends Omit<DefaultExtensionsOptions, 'theme'>, Omit<EditorStateConfig, 'doc'> {
  value?: EditorStateConfig['doc'];
  extensions?: Extension[];
  /** Fired whenever a change occurs to the document. */
  onChange?(value: string, viewUpdate: ViewUpdate): void;
}

export const Original = (props: OriginalProps): JSX.Element | null => {
  const { extensions = [], value, selection, onChange, ...otherOption } = props;
  const { original, view, theme, dispatch } = useStore();
  const defaultExtensions = getDefaultExtensions({ ...otherOption, theme });
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
      original: { doc: value, selection: selection, ...data },
      originalExtension: {
        option: otherOption,
        extension: [updateListener, extensions],
      },
    });
  }, []);

  useEffect(
    () =>
      dispatch!({
        originalExtension: {
          option: otherOption,
          extension: [updateListener, extensions],
        },
      }),
    [props],
  );

  useEffect(() => {
    if (original?.doc !== value && view) {
      data.doc = value;
      dispatch!({ original: { ...original, ...data } });
      const originalDoc = view?.a.state.doc.toString();
      if (originalDoc !== value) {
        view?.a.dispatch({
          changes: { from: 0, to: (originalDoc || '').length, insert: value || '' },
          effects: StateEffect.reconfigure.of([...extensionsData]),
          annotations: [External.of(true)],
        });
      }
    }
    if (original?.selection !== selection) {
      data.selection = selection;
      dispatch!({ original: { ...original, ...data } });
    }
  }, [value, selection, view]);

  return null;
};

Original.displayName = 'CodeMirrorMerge.Original';
