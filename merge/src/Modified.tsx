import { useEffect } from 'react';
import { getDefaultExtensions, DefaultExtensionsOptions } from '@uiw/react-codemirror';
import { EditorStateConfig, Extension } from '@codemirror/state';
import { ViewUpdate } from '@codemirror/view';
import { useStore } from './store';

export interface ModifiedProps extends Omit<DefaultExtensionsOptions, 'theme'>, Omit<EditorStateConfig, 'doc'> {
  value?: EditorStateConfig['doc'];
  extensions?: Extension[];
  /** Fired whenever a change occurs to the document. */
  onChange?(value: string, viewUpdate: ViewUpdate): void;
}

export const Modified = (props: ModifiedProps): JSX.Element | null => {
  const { extensions = [], value, selection, onChange, ...otherOption } = props;
  const { theme, dispatch } = useStore();
  const defaultExtensions = getDefaultExtensions({ ...otherOption, theme });
  useEffect(() => {
    dispatch!({
      modified: {
        doc: value,
        selection: selection,
        extensions: [...defaultExtensions, ...extensions],
      },
      modifiedExtension: {
        onChange,
        option: otherOption,
        extension: [extensions],
      },
    });
  }, [props]);
  return null;
};

Modified.displayName = 'CodeMirrorMerge.Modified';
