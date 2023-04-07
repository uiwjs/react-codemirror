import { useEffect } from 'react';
import { EditorStateConfig, Extension, StateEffect } from '@codemirror/state';
import { useStore } from './store';
import { getDefaultExtensions } from '@uiw/react-codemirror';

export interface OriginalProps extends EditorStateConfig {
  value?: EditorStateConfig['doc'];
  extensions?: Extension[];
}

export const Original = (props: OriginalProps): JSX.Element | null => {
  const { extensions = [] } = props;
  const { original, view, dispatch } = useStore();
  const defaultExtensions = getDefaultExtensions();
  useEffect(() => {
    const data: EditorStateConfig = { extensions: [...defaultExtensions, ...extensions] };
    if (original?.doc !== props.value && view) {
      data.doc = props.value;
      dispatch!({ original: { ...original, ...data } });
      const originalDoc = view?.a.state.doc.toString();
      if (originalDoc !== props.value) {
        view?.a.dispatch({
          changes: { from: 0, to: (originalDoc || '').length, insert: props.value || '' },
        });
      }
    }
    if (original?.selection !== props.selection) {
      data.selection = props.selection;
      dispatch!({ original: { ...original, ...data } });
    }
  }, [props.value, props.selection, view]);

  useEffect(() => {
    if (view) {
      view.a.dispatch({ effects: StateEffect.appendConfig.of([...defaultExtensions, ...extensions]) });
    }
  }, [extensions, view]);

  return null;
};
