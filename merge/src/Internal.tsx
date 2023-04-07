import React, { useEffect, useRef } from 'react';
import { MergeView } from '@codemirror/merge';
import { useStore } from './store';

export interface ReactCodeMirrorMergeInternalProps extends React.LiHTMLAttributes<HTMLDivElement> {}

export const Internal = React.forwardRef(
  (props: ReactCodeMirrorMergeInternalProps, ref?: React.ForwardedRef<HTMLDivElement>) => {
    const { className, children } = props;
    const { modified, original, view, dispatch } = useStore();
    const editor = useRef<HTMLDivElement>(null);

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
  },
);
