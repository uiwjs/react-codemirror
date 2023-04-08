import React from 'react';
import { MergeConfig } from '@codemirror/merge';
import { Original } from './Original';
import { Modified } from './Modified';
import { Internal, InternalRef } from './Internal';
import { Provider } from './store';

export interface CodeMirrorMergeRef extends InternalRef {}
export interface CodeMirrorMergeProps extends React.HTMLAttributes<HTMLDivElement>, MergeConfig {}

const InternalCodeMirror = (props: CodeMirrorMergeProps, ref?: React.ForwardedRef<InternalRef>) => {
  return (
    <Provider>
      <Internal {...props} ref={ref} />
    </Provider>
  );
};

type CodeMirrorComponent = React.FC<React.PropsWithRef<CodeMirrorMergeProps>> & {
  Original: typeof Original;
  Modified: typeof Modified;
};

const ReactCodeMirrorMerge: CodeMirrorComponent = React.forwardRef<InternalRef>(
  InternalCodeMirror,
) as unknown as CodeMirrorComponent;

ReactCodeMirrorMerge.Original = Original;
ReactCodeMirrorMerge.Modified = Modified;
ReactCodeMirrorMerge.displayName = 'CodeMirrorMerge';

export default ReactCodeMirrorMerge;
