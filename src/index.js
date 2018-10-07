import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'codemirror/lib/codemirror.css';
import CodeMirror from './CodeMirror';
import './index.css';

export default class ReactCodeMirror extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeMirrorOptions: {},
    };
  }
  async componentDidMount() {
    const { options } = this.props;
    const codeMirrorOptions = {
      tabSize: 2,
      autoCloseBrackets: true,
      matchBrackets: true,
      showCursorWhenSelecting: true,
      // 显示行号
      lineNumbers: true,
      fullScreen: true,
      ...options,
    };
    this.setState({ codeMirrorOptions });
  }
  async componentWillReceiveProps(nextPros) {
    await this.setState({
      codeMirrorOptions: { ...this.state.codeMirrorOptions, ...nextPros.options },
    });
  }
  getInstance = (instance) => {
    if (instance) {
      this.codemirror = instance.codemirror;
      this.editor = instance.editor;
    }
  }
  render() {
    const { options, ...otherProps } = this.props;
    const { codeMirrorOptions } = this.state;
    return (
      <CodeMirror
        {...otherProps}
        ref={this.getInstance}
        options={{ ...codeMirrorOptions }}
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
