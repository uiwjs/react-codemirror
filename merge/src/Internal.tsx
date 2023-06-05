import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { EditorStateConfig } from '@codemirror/state';
import { getDefaultExtensions } from '@uiw/react-codemirror';
import { MergeView, MergeConfig, DirectMergeConfig } from '@codemirror/merge';
import { useStore } from './store';
import { CodeMirrorMergeProps } from './';

export interface InternalRef {
  container?: HTMLDivElement | null;
  view?: MergeView;
  original?: EditorStateConfig;
  modified?: EditorStateConfig;
  config?: DirectMergeConfig;
}

export const Internal = React.forwardRef<InternalRef, CodeMirrorMergeProps>((props, ref) => {
  const {
    className,
    children,
    orientation,
    revertControls,
    highlightChanges,
    gutter,
    collapseUnchanged,
    renderRevertControl,
    ...elmProps
  } = props;
  const { modified, modifiedExtension, original, originalExtension, theme, view, dispatch, ...otherStore } = useStore();
  const editor = useRef<HTMLDivElement>(null);
  const opts = { orientation, revertControls, highlightChanges, gutter, collapseUnchanged, renderRevertControl };

  useImperativeHandle(
    ref,
    () => ({
      container: editor.current,
      view,
      modified,
      original,
      config: {
        a: original!,
        b: modified!,
        parent: editor.current!,
        ...opts,
      },
    }),
    [editor, view, modified, original, opts],
  );

  useEffect(() => {
    if (view && original && modified && theme && editor.current && dispatch) {
      editor.current.innerHTML = '';
      new MergeView({
        a: {
          ...original,
          extensions: [
            ...(originalExtension?.extension || []),
            ...getDefaultExtensions({ ...originalExtension?.option, theme }),
          ],
        },
        b: {
          ...modified,
          extensions: [
            ...(modifiedExtension?.extension || []),
            ...getDefaultExtensions({ ...modifiedExtension?.option, theme }),
          ],
        },
        parent: editor.current,
        ...opts,
      });
    }
  }, [theme, editor.current, original, modified, originalExtension, modifiedExtension]);

  useEffect(() => {
    if (!view && editor.current && original?.extensions && modified?.extensions) {
      const viewDefault = new MergeView({
        a: original,
        b: modified,
        parent: editor.current,
        ...opts,
      });
      dispatch && dispatch({ view: viewDefault, container: editor.current, ...opts });
    }
  }, [editor.current, original, modified, view]);

  useEffect(() => () => view && view.destroy(), []);

  useEffect(() => {
    if (view) {
      const opts: MergeConfig = {};
      if (otherStore.orientation !== orientation) {
        opts.orientation = orientation;
      }
      if (otherStore.revertControls !== revertControls) {
        opts.revertControls = revertControls;
      }
      if (otherStore.highlightChanges !== highlightChanges) {
        opts.highlightChanges = highlightChanges;
      }
      if (otherStore.gutter !== gutter) {
        opts.gutter = gutter;
      }
      if (otherStore.collapseUnchanged !== collapseUnchanged) {
        opts.collapseUnchanged = collapseUnchanged;
      }
      if (Object.keys(opts).length && dispatch && original && modified && editor.current) {
        view.destroy();
        const viewDefault = new MergeView({
          a: original,
          b: modified,
          parent: editor.current,
          ...opts,
        });
        dispatch({ ...opts, renderRevertControl, view: viewDefault });
      }
    }
  }, [
    view,
    original,
    modified,
    editor,
    orientation,
    revertControls,
    highlightChanges,
    gutter,
    collapseUnchanged,
    renderRevertControl,
  ]);

  const defaultClassNames = 'cm-merge-theme';
  return (
    <div ref={editor} className={`${defaultClassNames}${className ? ` ${className}` : ''}`} {...elmProps}>
      {children}
    </div>
  );
});

Internal.displayName = 'CodeMirrorMerge.Internal';
