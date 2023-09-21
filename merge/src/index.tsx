import React from 'react';
import { MergeConfig } from '@codemirror/merge';
import { Original } from './Original';
import { Modified } from './Modified';
import { Internal, InternalRef } from './Internal';
import { Provider, InitialState } from './store';

export interface CodeMirrorMergeRef extends InternalRef {}
export interface CodeMirrorMergeProps extends React.HTMLAttributes<HTMLDivElement>, MergeConfig {
  theme?: InitialState['theme'];
  /**
   * Default is `false`. If true, the editor will be destroyed and re-rendered every time the editor is updated.
   */
  destroyRerender?: boolean;
}

const InternalCodeMirror = React.forwardRef<CodeMirrorMergeRef, CodeMirrorMergeProps>(({ theme, ...props }, ref) => {
  return (
    <Provider theme={theme}>
      <Internal {...props} ref={ref} />
    </Provider>
  );
});

type CodeMirrorComponent = typeof InternalCodeMirror & {
  Original: typeof Original;
  Modified: typeof Modified;
};

const CodeMirrorMerge: CodeMirrorComponent = InternalCodeMirror as unknown as CodeMirrorComponent;

CodeMirrorMerge.Original = Original;
CodeMirrorMerge.Modified = Modified;
CodeMirrorMerge.displayName = 'CodeMirrorMerge';

export default CodeMirrorMerge;
