import { useEffect } from 'react';
import { EditorStateConfig, Extension, StateEffect, Annotation } from '@codemirror/state';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { getDefaultExtensions } from '@uiw/react-codemirror';
import { useStore } from './store';

const External = Annotation.define<boolean>();

export interface OriginalProps extends Omit<EditorStateConfig, 'doc'> {
  value?: EditorStateConfig['doc'];
  extensions?: Extension[];
  /** Fired whenever a change occurs to the document. */
  onChange?(value: string, viewUpdate: ViewUpdate): void;
}

export const Original = (props: OriginalProps): JSX.Element | null => {
  const { extensions = [], onChange } = props;
  const { original, view, dispatch } = useStore();
  const defaultExtensions = getDefaultExtensions();
  const updateListener = EditorView.updateListener.of((vu: ViewUpdate) => {
    if (
      vu.docChanged &&
      typeof onChange === 'function' &&
      // Fix echoing of the remote changes:
      // If transaction is market as remote we don't have to call `onChange` handler again
      !vu.transactions.some((tr) => tr.annotation(External))
    ) {
      const doc = vu.state.doc;
      const value = doc.toString();
      onChange(value, vu);
    }
  });
  const extensionsData = [updateListener, ...defaultExtensions, ...extensions];
  const data: EditorStateConfig = { extensions: [...extensionsData] };
  useEffect(() => {
    if (original?.doc !== props.value && view) {
      data.doc = props.value;
      dispatch!({ original: { ...original, ...data } });
      const originalDoc = view?.a.state.doc.toString();
      if (originalDoc !== props.value) {
        view?.a.dispatch({
          changes: { from: 0, to: (originalDoc || '').length, insert: props.value || '' },
          effects: StateEffect.appendConfig.of([...extensionsData]),
        });
      }
    }
    if (original?.selection !== props.selection) {
      data.selection = props.selection;
      dispatch!({ original: { ...original, ...data } });
    }
  }, [props.value, props.selection, view]);

  return null;
};

Original.displayName = 'CodeMirrorMerge.Original';
