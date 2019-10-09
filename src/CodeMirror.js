import CodeMirror from 'codemirror';
import 'codemirror/mode/meta';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReactCodeMirror extends Component {
  constructor(props) {
    super(props);
    this.codemirror = null;
    this.editor = null;
  }

  componentDidMount() {
    this.renderCodeMirror();
  }
  renderCodeMirror() {
    // 生成codemirror实例
    this.editor = CodeMirror.fromTextArea(this.textarea, this.props.options);
    // 获取CodeMirror用于获取其中的一些常量
    this.codemirror = CodeMirror;
    // 事件处理映射
    const eventDict = this.getEventHandleFromProps();

    Object.keys(eventDict).forEach((event) => {
      this.editor.on(eventDict[event], this.props[event]);
    });

    const { value, width, height } = this.props;
    // 初始化值
    this.editor.setValue(value || '');

    if (width || height) {
      // 设置尺寸
      this.editor.setSize(width, height);
    }
  }
  async componentWillReceiveProps(nextProps) {
    const val = this.editor.getValue();
    const next = nextProps.value;
    if (next !== undefined && next !== this.props.value && next !== val) {
      this.editor.setValue(nextProps.value);
    }
    const { options, width, height } = nextProps;
    await this.setOptions(options);
    if (width !== this.props.width || height !== this.props.height) {
      this.editor.setSize(width, height);
    }
  }
  // http://codemirror.net/doc/manual.html#config
  async setOptions(options) {
    if (typeof options === 'object') {
      const mode = CodeMirror.findModeByName(options.mode);
      if (mode && mode.mode) {
        await import(`codemirror/mode/${mode.mode}/${mode.mode}.js`);
      }
      if (mode) {
        options.mode = mode.mime;
      }
      Object.keys(options).forEach((name) => {
        if (options[name] && JSON.stringify(options[name])) {
          this.editor.setOption(name, options[name]);
        }
      });
    }
  }

  componentWillUnmount() {
    if (this.editor) {
      this.editor.toTextArea();
    }
  }

  // 将props中所有的事件处理函数映射并保存
  getEventHandleFromProps() {
    const propNames = Object.keys(this.props);
    const eventHandle = propNames.filter((prop) => {
      return /^on+/.test(prop);
    });

    const eventDict = {};
    eventHandle.forEach((ele) => {
      eventDict[ele] = ele.slice(2).toLowerCase();
    });

    return eventDict;
  }

  render() {
    return (
      <textarea ref={(instance) => { this.textarea = instance; }} />
    );
  }
}

ReactCodeMirror.defaultProps = {
  value: '',
  options: {},
  width: '100%',
  height: '100%',
};

ReactCodeMirror.propTypes = {
  value: PropTypes.string,
  options: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
