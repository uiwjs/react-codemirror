import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { EditorStateConfig, StateEffect } from '@codemirror/state';
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
    destroyRerender,
    renderRevertControl,
    ...elmProps
  } = props;
  const { modified, modifiedExtension, original, originalExtension, theme, dispatch, ...otherStore } = useStore();
  const editor = useRef<HTMLDivElement>(null);
  const view = useRef<MergeView>();
  const opts = { orientation, revertControls, highlightChanges, gutter, collapseUnchanged, renderRevertControl };

  useImperativeHandle(
    ref,
    () => ({
      container: editor.current,
      view: view.current,
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
    if (!view.current && editor.current) {
      view.current = new MergeView({
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
  }, [view, editor]);

  useEffect(() => {
    if (original && original.doc && view.current) {
      const originalDoc = view.current?.a.state.doc.toString();
      if (originalDoc !== original.doc) {
        view.current?.a.dispatch({
          changes: { from: 0, to: originalDoc.length, insert: original.doc || '' },
          // effects: StateEffect.reconfigure.of([
          //   ...(originalExtension?.extension || []),
          //   ...getDefaultExtensions({ ...originalExtension?.option, theme }),
          // ])
        });
      }
    }
    if (modified && modified.doc && view.current) {
      const modifiedDoc = view.current?.b.state.doc.toString();
      if (modifiedDoc !== modified.doc) {
        view.current?.b.dispatch({
          changes: { from: 0, to: modifiedDoc.length, insert: modified.doc || '' },
          // effects: StateEffect.reconfigure.of([
          //   ...(modifiedExtension?.extension || []),
          //   ...getDefaultExtensions({ ...modifiedExtension?.option, theme }),
          // ])
        });
      }
    }
    if (destroyRerender) {
      view.current?.destroy();
      view.current = new MergeView({
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
        parent: editor.current!,
        ...opts,
      });
    }
  }, [view, theme, editor.current, original, modified, originalExtension, modifiedExtension, destroyRerender]);

  useEffect(() => () => view.current && view.current.destroy(), []);

  useEffect(() => {
    if (view.current) {
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
      if (otherStore.renderRevertControl !== renderRevertControl) {
        opts.collapseUnchanged = collapseUnchanged;
      }
      if (Object.keys(opts).length && dispatch && view.current) {
        view.current.reconfigure({ ...opts });
        dispatch({ ...opts });
      }
    }
  }, [dispatch, view, orientation, revertControls, highlightChanges, gutter, collapseUnchanged, renderRevertControl]);

  const defaultClassNames = 'cm-merge-theme';
  return (
    <div ref={editor} className={`${defaultClassNames}${className ? ` ${className}` : ''}`} {...elmProps}>
      {children}
    </div>
  );
});

Internal.displayName = 'CodeMirrorMerge.Internal';
