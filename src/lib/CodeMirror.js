import CodeMirror from 'codemirror';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReactCodeMirror extends Component {
  constructor(props) {
    super(props);
    this.codemirror = null;
    this.editor = null;
  }

  componentDidMount() {
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

  componentWillReceiveProps(nextProps) {
    const val = this.editor.getValue();
    const next = nextProps.value;
    if (next !== undefined && next !== this.props.value && next !== val) {
      this.editor.setValue(nextProps.value);
    }
    const { options, width, height } = nextProps;
    this.setOptions(options);

    if (width !== this.props.width || height !== this.props.height) {
      this.editor.setSize(width, height);
    }
  }
  // http://codemirror.net/doc/manual.html#config
  setOptions(options) {
    if (typeof options === 'object') {
      Object.keys(options).forEach((name) => {
        if (JSON.stringify(this.props.options[name]) !== JSON.stringify(options[name])) {
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
      eventDict[ele] = ele.replace(/^on[A-Z]/g, s => s.slice(2).toLowerCase());
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
  width: null,
  height: null,
};

ReactCodeMirror.propTypes = {
  value: PropTypes.string,
  options: PropTypes.object,
  width(props, propName, componentName) {
    const width = props[propName];
    if (!(width === null || typeof width === 'number' || typeof width === 'string')) {
      return new Error(`Invalid prop \`${propName}\` supplied to` +
        ` \`${componentName}\`. Validation failed.`);
    }
  },
  height(props, propName, componentName) {
    const height = props[propName];
    if (!(height === null || typeof height === 'number' || typeof height === 'string')) {
      return new Error(`Invalid prop \`${propName}\` supplied to` +
        ` \`${componentName}\`. Validation failed.`);
    }
  },
};
