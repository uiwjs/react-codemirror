import path from 'path';
import webpack, { Configuration } from 'webpack';
import { LoaderConfOptions } from 'kkt';
import lessModules from '@kkt/less-modules';
import rawModules from '@kkt/raw-modules';
import scopePluginOptions from '@kkt/scope-plugin-options';
import pkg from './package.json';

export default (conf: Configuration, env: 'development' | 'production', options: LoaderConfOptions) => {
  conf = rawModules(conf, env, {
    ...options,
    test: /\.(txt|md)$/i,
    esModule: true,
  });
  conf = scopePluginOptions(conf, env, {
    ...options,
    allowedFiles: [path.resolve(process.cwd(), 'src'), path.resolve(process.cwd(), 'README.md')],
  });
  conf = lessModules(conf, env, options);
  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
  );

  conf.optimization = {
    ...conf.optimization,
    splitChunks: {
      cacheGroups: {
        reactvendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react-vendor',
          chunks: 'all',
        },
        // prismjs: {
        //   test: /[\\/]node_modules[\\/](codemirror)[\\/]/,
        //   name: 'codemirror-vendor',
        //   chunks: 'async',
        // },
      },
    },
  };
  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
  }
  return conf;
};
