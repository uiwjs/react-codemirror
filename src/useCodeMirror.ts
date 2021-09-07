import { useEffect, useState } from 'react';
import { basicSetup } from '@codemirror/basic-setup';
import { EditorState, StateEffect } from '@codemirror/state';
import { indentWithTab } from '@codemirror/commands';
import { EditorView, keymap, ViewUpdate } from '@codemirror/view';
import { ReactCodeMirrorProps } from './';
import { oneDarkTheme } from '@codemirror/theme-one-dark';
import { defaultLightThemeOption } from './theme/light';

export interface UseCodeMirror extends ReactCodeMirrorProps {
  container?: HTMLDivElement | null;
}

export function useCodeMirror(props: UseCodeMirror) {
  const {
    value,
    selection,
    onChange,
    onUpdate,
    extensions = [],
    autoFocus,
    theme = 'light',
    height = '',
    minHeight = '',
    maxHeight = '',
    width = '',
    minWidth = '',
    maxWidth = '',
  } = props;
  const [container, setContainer] = useState(props.container);
  const [view, setView] = useState<EditorView>();
  const [state, setState] = useState<EditorState>();

  const defaultThemeOption = EditorView.theme({
    '&': {
      height,
      minHeight,
      maxHeight,
      width,
      minWidth,
      maxWidth,
    },
  });
  const updateListener = EditorView.updateListener.of((vu: ViewUpdate) => {
    if (vu.docChanged && typeof onChange === 'function') {
      const doc = vu.state.doc;
      const value = doc.toString();
      onChange(value, vu);
    }
  });
  let getExtensions = [basicSetup, keymap.of([indentWithTab]), updateListener, defaultThemeOption];
  theme === 'light' ? getExtensions.push(defaultLightThemeOption) : getExtensions.push(oneDarkTheme);
  if (onUpdate && typeof onUpdate === 'function') {
    getExtensions.push(EditorView.updateListener.of(onUpdate));
  }
  getExtensions = getExtensions.concat(extensions);

  useEffect(() => {
    if (container && !state) {
      const stateCurrent = EditorState.create({
        doc: value,
        selection,
        extensions: getExtensions,
      });
      setState(stateCurrent);
      if (!view) {
        const viewCurrent = new EditorView({
          state: stateCurrent,
          parent: container as any,
        });
        setView(viewCurrent);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container, state]);

  useEffect(() => {
    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, [view]);

  useEffect(() => {
    if (view) {
      const currentValue = view.state.doc.toString();
      view.dispatch({
        changes: { from: 0, to: currentValue.length, insert: value || '' },
      });
    }
  }, [value, view]);

  useEffect(() => {
    if (view) {
      view.dispatch({ effects: StateEffect.reconfigure.of(getExtensions) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, extensions, height, minHeight, maxHeight, width, minWidth, maxWidth]);

  useEffect(() => {
    if (autoFocus && view) {
      view.focus();
    }
  }, [autoFocus, view]);

  return { state, setState, view, setView, container, setContainer };
}
