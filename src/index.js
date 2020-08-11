import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

export default class ReactCodeMirror extends Component {
  getInstance = (instance) => {
    if (instance) {
      this.codemirror = instance.codemirror;
      this.editor = instance.editor;
    }
  }
  render() {
    const { options, ...otherProps } = this.props;
    return (
      <CodeMirror
        {...otherProps}
        ref={this.getInstance}
        options={{ ...defaultOptions, ...options }}
      />
    );
  }
}

ReactCodeMirror.defaultProps = {
  value: '',
  options: {},
};

ReactCodeMirror.propTypes = {
  value: PropTypes.string,
  options: PropTypes.object,
};
