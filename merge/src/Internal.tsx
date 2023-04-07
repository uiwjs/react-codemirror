import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { MergeView } from '@codemirror/merge';
import { useStore } from './store';

export interface InternalRef {
  container?: HTMLDivElement | null;
  view?: MergeView;
}

export interface InternalProps extends React.LiHTMLAttributes<HTMLDivElement> {}

export const Internal = React.forwardRef((props: InternalProps, ref?: React.ForwardedRef<InternalRef>) => {
  const { className, children } = props;
  const { modified, original, view, dispatch } = useStore();
  const editor = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => ({ container: editor.current, view }), [editor, view]);
  useEffect(() => {
    if (!view && editor.current && original && modified) {
      const viewDefault = new MergeView({
        a: original,
        b: modified,
        parent: editor.current,
      });
      dispatch && dispatch({ view: viewDefault });
    }
  }, [editor.current, original, modified, view]);

  useEffect(() => {
    return () => {
      view && view.destroy();
    };
  }, []);

  const defaultClassNames = 'cm-merge-theme';
  return (
    <div ref={editor} className={`${defaultClassNames}${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </div>
  );
});

Internal.displayName = 'CodeMirrorMerge.Internal';
