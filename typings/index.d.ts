import React from 'react';
import CodeMirror from 'codemirror';

export interface IReactCodemirror {
  value?: string;
  options?: CodeMirror.EditorConfiguration; 
  onChange?: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList[]) => void;
}
export default class ReactCodemirror extends React.Component<IReactCodemirror> {
  static defaultProps: IReactCodemirror;
  render(): JSX.Element;
}
