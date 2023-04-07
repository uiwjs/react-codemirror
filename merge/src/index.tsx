import React from 'react';
import { Original } from './Original';
import { Modified } from './Modified';
import { Internal } from './Internal';
import { Provider } from './store';

export interface ReactCodeMirrorMergeProps extends React.LiHTMLAttributes<HTMLDivElement> {}

const InternalCodeMirror = (props: ReactCodeMirrorMergeProps, ref?: React.ForwardedRef<HTMLDivElement>) => {
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

const ReactCodeMirrorMerge: CodeMirrorComponent = React.forwardRef<HTMLDivElement>(
  InternalCodeMirror,
) as unknown as CodeMirrorComponent;

ReactCodeMirrorMerge.Original = Original;
ReactCodeMirrorMerge.Modified = Modified;
ReactCodeMirrorMerge.displayName = 'CodeMirrorMerge';

export default ReactCodeMirrorMerge;
