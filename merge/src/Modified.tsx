import { useEffect } from 'react';
import { EditorStateConfig, Extension, StateEffect, Annotation } from '@codemirror/state';
import { getDefaultExtensions } from '@uiw/react-codemirror';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { useStore } from './store';

const External = Annotation.define<boolean>();

export interface ModifiedProps extends Omit<EditorStateConfig, 'doc'> {
  value?: EditorStateConfig['doc'];
  extensions?: Extension[];
  /** Fired whenever a change occurs to the document. */
  onChange?(value: string, viewUpdate: ViewUpdate): void;
}

export const Modified = (props: ModifiedProps): JSX.Element | null => {
  const { extensions = [], onChange } = props;
  const { modified, view, dispatch } = useStore();
  const defaultExtensions = getDefaultExtensions();
  useEffect(() => {
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
    const data: EditorStateConfig = { extensions: [updateListener, ...defaultExtensions, ...extensions] };
    if (modified?.doc !== props.value && view) {
      data.doc = props.value;
      dispatch!({ modified: { ...modified, ...data } });
      const modifiedDoc = view?.b.state.doc.toString();
      if (modifiedDoc !== props.value) {
        view.b.dispatch({
          changes: { from: 0, to: (modifiedDoc || '').length, insert: props.value || '' },
          effects: StateEffect.appendConfig.of([...defaultExtensions, ...extensions]),
          annotations: [External.of(true)],
        });
      }
    }
    if (modified?.selection !== props.selection) {
      data.selection = props.selection;
      dispatch!({ modified: { ...modified, ...data } });
    }
  }, [props.value, extensions, props.selection, view]);

  return null;
};

Modified.displayName = 'CodeMirrorMerge.Modified';
