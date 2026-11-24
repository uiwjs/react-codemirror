import React from 'react';
import CodeMirror, { type ReactCodeMirrorRef, type UseCodeMirror } from '../cjs';

export const controlledEditor = (
  <CodeMirror value="const value = 1;" id="editor" aria-label="Code" ref={React.createRef<ReactCodeMirrorRef>()} />
);
export const emptyEditor = <CodeMirror />;

// @ts-expect-error defaultValue is not an editor option; use value instead.
export const unsupportedComponentProp = <CodeMirror defaultValue="const value = 1;" />;

export const unsupportedHookProp: UseCodeMirror = {
  // @ts-expect-error useCodeMirror does not consume defaultValue either.
  defaultValue: 'const value = 1;',
};

// @ts-expect-error value must remain a string.
export const invalidValue = <CodeMirror value={123} />;
