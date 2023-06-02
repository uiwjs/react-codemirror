import React, { useEffect, useImperativeHandle, useMemo, useRef, memo } from 'react';
import { EditorStateConfig, Extension, StateEffect, Annotation } from '@codemirror/state';
import { MergeView, MergeConfig } from '@codemirror/merge';
import { useStore } from './store';
import { CodeMirrorMergeProps } from './';

export interface InternalRef {
  container?: HTMLDivElement | null;
  view?: MergeView;
}

export const Internal = React.forwardRef((props: CodeMirrorMergeProps, ref?: React.ForwardedRef<InternalRef>) => {
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
  const { modified, original, view, dispatch, ...otherStore } = useStore();
  const editor = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => ({ container: editor.current, view }), [editor, view]);
  useEffect(() => {
    if (!view && editor.current && original?.extensions && modified?.extensions) {
      const opts = { orientation, revertControls, highlightChanges, gutter, collapseUnchanged, renderRevertControl };
      const viewDefault = new MergeView({
        a: original,
        b: modified,
        parent: editor.current,
        ...opts,
      });
      dispatch && dispatch({ view: viewDefault, ...opts });
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
