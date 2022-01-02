import { useEffect, useState } from 'react';
import { basicSetup as defaultBasicSetup } from '@codemirror/basic-setup';
import { EditorState, StateEffect } from '@codemirror/state';
import { indentWithTab as defaultIndentWithTab } from '@codemirror/commands';
import { EditorView, keymap, ViewUpdate, placeholder as extendPlaceholder } from '@codemirror/view';
import { oneDark } from '@codemirror/theme-one-dark';
import { ReactCodeMirrorProps } from './';
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
    placeholder = '',
    width = '',
    minWidth = '',
    maxWidth = '',
    editable = true,
    indentWithTab = true,
    basicSetup = true,
    root,
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
  let getExtensions = [updateListener, defaultThemeOption];
  if (indentWithTab) {
    getExtensions.unshift(keymap.of([defaultIndentWithTab]));
  }
  if (basicSetup) {
    getExtensions.unshift(defaultBasicSetup);
  }

  if (placeholder) {
    getExtensions.unshift(extendPlaceholder(placeholder));
  }

  switch (theme) {
    case 'light':
      getExtensions.push(defaultLightThemeOption);
      break;
    case 'dark':
      getExtensions.push(oneDark);
      break;
    default:
      getExtensions.push(theme);
      break;
  }

  if (editable === false) {
    getExtensions.push(EditorView.editable.of(false));
  }

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
          root,
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
      if (value !== currentValue) {
        view.dispatch({
          changes: { from: 0, to: currentValue.length, insert: value || '' },
        });
      }
    }
  }, [value, view]);

  useEffect(() => {
    if (view) {
      view.dispatch({ effects: StateEffect.reconfigure.of(getExtensions) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    theme,
    extensions,
    placeholder,
    height,
    minHeight,
    maxHeight,
    width,
    minWidth,
    maxWidth,
    editable,
    indentWithTab,
    basicSetup,
  ]);

  useEffect(() => {
    if (autoFocus && view) {
      view.focus();
    }
  }, [autoFocus, view]);

  return { state, setState, view, setView, container, setContainer };
}
