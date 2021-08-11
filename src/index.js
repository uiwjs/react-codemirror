import React, { useRef, useEffect, useImperativeHandle, useState, useMemo } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/meta';
import './codemirror.css';

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
  const { options = {}, value = '', width = '100%', height = '100%', lazyLoadMode = true } = props;
  const [editor, setEditor] = useState();
  const textareaRef = useRef();
  const lastestProps = useRef(props);

  useImperativeHandle(ref, () => ({ editor }), [editor]);
  lastestProps.current = props;
  
  // 将props中所有的事件处理函数映射并保存
  function getEventHandleFromProps() {
    const propNames = Object.keys(props);
    const eventHandle = propNames.filter((keyName) => {
      return /^on+/.test(keyName);
    });

    const eventDict = {};
    eventHandle.forEach((ele) => {
      const name = ele.slice(2);
      if (name && name[0]) {
        eventDict[ele] = name.replace(name[0], name[0].toLowerCase());
      }
    });

    return eventDict;
  }

  // http://codemirror.net/doc/manual.html#config
  async function setOptions(instance, opt = {}) {
    if (typeof opt === 'object' && window) {
      const mode = CodeMirror.findModeByName(opt.mode || '');
      if (lazyLoadMode && mode && mode.mode) {
        await import(`codemirror/mode/${mode.mode}/${mode.mode}.js`);
      }
      if (mode) {
        opt.mode = mode.mime;
      }
      Object.keys(opt).forEach((name) => {
        if ((opt[name] || opt[name] === false) && JSON.stringify(opt[name])) {
          instance.setOption(name, opt[name]);
        }
      });
    }
  }

  useEffect(() => {
    if (!editor && window) {
      // 生成codemirror实例
      const instance = CodeMirror.fromTextArea(textareaRef.current, {...defaultOptions, ...options});
      const eventDict = getEventHandleFromProps();
      Object.keys(eventDict).forEach((event) => {
        instance.on(eventDict[event], (...params) => lastestProps.current[event](...params));
      });
      instance.setValue(value || '');

      if (width || height) {
        // 设置尺寸
        instance.setSize(width, height);
      }
      setEditor(instance);
      setOptions(instance, {...defaultOptions, ...options});
    }
    return () => {
      if (editor && window) {
        editor.toTextArea();
        setEditor(undefined);
      }
    }
  }, []);

  useMemo(() => {
    if (!editor || !window) return;
    const val = editor.getValue();
    if (value !== undefined && value !== val) {
      editor.setValue(value);
    }
  }, [value]);

  useMemo(() => {
    if (!editor || !window) return;
    editor.setSize(width, height);
  }, [width, height]);


  useMemo(() => {
    if (!editor || !window) return;
    setOptions(editor, {...defaultOptions, ...options});
  }, [editor, options]);
  
  return (
    <textarea ref={textareaRef} />
  );
}

export default React.forwardRef(ReactCodeMirror);
