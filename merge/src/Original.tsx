import { useEffect } from 'react';
import { getDefaultExtensions, DefaultExtensionsOptions } from '@uiw/react-codemirror';
import { EditorStateConfig, Extension } from '@codemirror/state';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { useStore } from './store';

export interface OriginalProps extends Omit<DefaultExtensionsOptions, 'theme'>, Omit<EditorStateConfig, 'doc'> {
  value?: EditorStateConfig['doc'];
  extensions?: Extension[];
  /** Fired whenever a change occurs to the document. */
  onChange?(value: string, viewUpdate: ViewUpdate): void;
}

export const Original = (props: OriginalProps): JSX.Element | null => {
  const { extensions = [], value, selection, onChange, ...otherOption } = props;
  const { theme, dispatch } = useStore();
  const defaultExtensions = getDefaultExtensions({ ...otherOption, theme });
  const updateListener = EditorView.updateListener.of((vu: ViewUpdate) => {
    if (vu.docChanged && typeof onChange === 'function') {
      const doc = vu.state.doc;
      const val = doc.toString();
      onChange(val, vu);
    }
  });

  useEffect(
    () =>
      dispatch!({
        original: {
          doc: value,
          selection: selection,
          extensions: [updateListener, ...defaultExtensions, ...extensions],
        },
        originalExtension: {
          onChange,
          option: otherOption,
          extension: [extensions, updateListener],
        },
      }),
    [props],
  );

  return null;
};

Original.displayName = 'CodeMirrorMerge.Original';
