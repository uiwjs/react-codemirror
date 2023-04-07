import React from 'react';
import { Original } from './Original';
import { Modified } from './Modified';
import { Internal, InternalRef } from './Internal';
import { Provider } from './store';

export interface ReactCodeMirrorMergeRef extends InternalRef {}
export interface ReactCodeMirrorMergeProps extends React.LiHTMLAttributes<HTMLDivElement> {}

const InternalCodeMirror = (props: ReactCodeMirrorMergeProps, ref?: React.ForwardedRef<InternalRef>) => {
  return (
    <Provider>
      <Internal {...props} ref={ref} />
    </Provider>
  );
};

type CodeMirrorComponent = React.FC<React.PropsWithRef<ReactCodeMirrorMergeProps>> & {
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
