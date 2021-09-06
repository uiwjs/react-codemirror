import React, { useEffect, useRef, useImperativeHandle } from "react";
import { EditorState, EditorStateConfig, Extension } from "@codemirror/state";
import { EditorView, ViewUpdate } from "@codemirror/view";
import { useCodeMirror } from './useCodeMirror';

export * from './useCodeMirror';
export * from "@codemirror/view";
export * from "@codemirror/basic-setup";
export * from "@codemirror/state";

export interface ReactCodeMirrorProps extends Omit<EditorStateConfig, 'doc' | 'extensions'>, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * value of the auto created model in the editor.
   */
  value?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  theme?: 'light' | 'dark';
  /**
   * Fired whenever a change occurs to the document.
   */
  onChange?(value: string, viewUpdate: ViewUpdate): void;
  /**
   * Extension values can be [provided](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions) when creating a state to attach various kinds of configuration and behavior information.
   * They can either be built-in extension-providing objects,
   * such as [state fields](https://codemirror.net/6/docs/ref/#state.StateField) or [facet providers](https://codemirror.net/6/docs/ref/#state.Facet.of),
   * or objects with an extension in its `extension` property. Extensions can be nested in arrays arbitrarily deep—they will be flattened when processed.
   */
  extensions?: Extension[]
}

export interface ReactCodeMirrorRef {
  editor?: HTMLDivElement | null;
  state?: EditorState;
  view?: EditorView;
}

export default React.forwardRef<ReactCodeMirrorRef, ReactCodeMirrorProps>((props, ref) => {
  const { className, value, selection, extensions = [], onChange, theme, height, minHeight, maxHeight, width, minWidth, maxWidth, ...other } = props;
  const editor = useRef<HTMLDivElement>(null);
  const { state, view, container, setContainer } = useCodeMirror({
    container: editor.current,
    value, theme, height, minHeight, maxHeight, width, minWidth, maxWidth,
    selection,
    onChange,
    extensions,
  });
  useImperativeHandle(ref, () => ({ editor: container, state, view }));
  useEffect(() => {
    setContainer(editor.current);
    return () => {
      if (view) {
        view.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div ref={editor} className={`cm-theme-${theme} ${className || ''}`} {...other}></div>
  );
});
