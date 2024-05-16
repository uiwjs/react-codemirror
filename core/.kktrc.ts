import { LoaderConfOptions, WebpackConfiguration } from 'kkt';
import lessModules from '@kkt/less-modules';

export default (conf: WebpackConfiguration, env: 'production' | 'development', options: LoaderConfOptions) => {
  conf = lessModules(conf, env, options);
  if (options.bundle) {
    conf.output!.library = '@uiw/codemirror';
    conf.externals = {
      '@codemirror/basic-setup': {
        root: ['CM', '@codemirror/basic-setup'],
        commonjs: '@codemirror/basic-setup',
        commonjs2: '@codemirror/basic-setup',
      },
      '@codemirror/state': {
        root: ['CM', '@codemirror/state'],
        commonjs: '@codemirror/state',
        commonjs2: '@codemirror/state',
      },
      '@codemirror/view': {
        root: ['CM', '@codemirror/view'],
        commonjs: '@codemirror/view',
        commonjs2: '@codemirror/view',
      },
      '@codemirror/theme-one-dark': {
        root: ['CM', '@codemirror/theme-one-dark'],
        commonjs: '@codemirror/theme-one-dark',
        commonjs2: '@codemirror/theme-one-dark',
      },
      oneDark: {
        root: ['CM', '@codemirror/theme-one-dark', 'oneDark'],
      },
      basicSetup: {
        root: ['CM', '@codemirror/basic-setup', 'basicSetup'],
      },
      indentWithTab: {
        root: ['CM', '@codemirror/commands', 'indentWithTab'],
      },
      keymap: {
        root: ['CM', '@codemirror/view', 'keymap'],
      },
      placeholder: {
        root: ['CM', '@codemirror/view', 'placeholder'],
      },
      ViewUpdate: {
        root: ['CM', '@codemirror/view', 'ViewUpdate'],
      },
      EditorView: {
        root: ['CM', '@codemirror/view', 'EditorView'],
      },
      StateEffect: {
        root: ['CM', '@codemirror/state', 'StateEffect'],
      },
      EditorState: {
        root: ['CM', '@codemirror/basic-setup', 'EditorState'],
      },
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
      'react/jsx-runtime': {
        root: 'ReactJSXRuntime',
        commonjs2: 'react/jsx-runtime',
        commonjs: 'react/jsx-runtime',
        amd: 'react/jsx-runtime',
      },
      'react/jsx-dev-runtime': {
        root: 'ReactJSXDevRuntime',
        commonjs2: 'react/jsx-dev-runtime',
        commonjs: 'react/jsx-dev-runtime',
        amd: 'react/jsx-dev-runtime',
      },
    };
  }
  return conf;
};
