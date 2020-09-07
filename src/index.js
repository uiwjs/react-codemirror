import React, { useRef, useImperativeHandle } from 'react';
import CodeMirror from './CodeMirror';
import './codemirror.css';
import './index.css';

const defaultOptions = {
  tabSize: 2,
  autoCloseBrackets: true,
  matchBrackets: true,
  showCursorWhenSelecting: true,
  // 显示行号
  lineNumbers: true,
  fullScreen: true,
}

function ReactCodeMirror(props = {}, ref) {
  const { options, ...otherProps } = props;
  const codeMirrorRef = useRef();
  useImperativeHandle(ref, () => ({ ...codeMirrorRef.current }));
  return (
    <CodeMirror
      {...otherProps}
      ref={codeMirrorRef}
      options={{ ...defaultOptions, ...options }}
    />
  );
}

export default React.forwardRef(ReactCodeMirror);