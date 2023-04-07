import { useEffect } from 'react';
import { EditorStateConfig, Extension } from '@codemirror/state';
import { getDefaultExtensions } from '@uiw/react-codemirror';
import { useStore } from './store';

export interface ModifiedProps extends EditorStateConfig {
  value?: EditorStateConfig['doc'];
  extensions?: Extension[];
}

export const Modified = (props: ModifiedProps): JSX.Element | null => {
  const { extensions = [] } = props;
  const { modified, view, dispatch } = useStore();
  const defaultExtensions = getDefaultExtensions();
  useEffect(() => {
    const data: EditorStateConfig = { extensions: [...defaultExtensions, ...extensions] };
    if (modified?.doc !== props.value && view) {
      data.doc = props.value;
      dispatch!({ modified: { ...modified, ...data } });
      const modifiedDoc = view?.b.state.doc.toString();
      if (modifiedDoc !== props.value) {
        view.b.dispatch({
          changes: { from: 0, to: (modifiedDoc || '').length, insert: props.value || '' },
        });
      }
    }
    if (modified?.selection !== props.selection) {
      data.selection = props.selection;
      dispatch!({ modified: { ...modified, ...data } });
    }
  }, [props.value, props.selection, view]);

  return null;
};
