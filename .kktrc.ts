import path from 'path';
import webpack, { Configuration } from 'webpack';
import { LoaderConfOptions } from 'kkt';
import lessModules from '@kkt/less-modules';
import rawModules from '@kkt/raw-modules';
import scopePluginOptions from '@kkt/scope-plugin-options';
import { mdCodeModulesLoader } from 'markdown-react-code-preview-loader';
import pkg from './package.json';

export default (conf: Configuration, env: 'development' | 'production', options: LoaderConfOptions) => {
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
    };
  } else {
    conf = rawModules(conf, env, {
      ...options,
      test: /\.(txt)$/i,
      esModule: true,
    });
    conf = mdCodeModulesLoader(conf);
    conf = scopePluginOptions(conf, env, {
      ...options,
      allowedFiles: [path.resolve(process.cwd(), 'src'), path.resolve(process.cwd(), 'README.md')],
    });
    // Get the project version.
    conf.plugins!.push(
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(pkg.version),
      }),
    );
    if (env === 'production') {
      conf.optimization = {
        ...conf.optimization,
        splitChunks: {
          cacheGroups: {
            reactvendor: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'react-vendor',
              chunks: 'all',
            },
            refractor: {
              test: /[\\/]node_modules[\\/](refractor)[\\/]/,
              name: 'refractor-vendor',
              chunks: 'all',
            },
            codemirror: {
              test: /[\\/]node_modules[\\/](@codemirror)[\\/]/,
              name: 'codemirror-vendor',
              chunks: 'all',
            },
          },
        },
      };
      conf.output = { ...conf.output, publicPath: './' };
    }
  }
  return conf;
};
