import path from 'path';
import webpack from 'webpack';
import lessModules from '@kkt/less-modules';
import rawModules from '@kkt/raw-modules';
import scopePluginOptions from '@kkt/scope-plugin-options';
import pkg from './package.json';

export default (conf, env, options) => {
  conf = rawModules(conf, env, { ...options });
  conf = scopePluginOptions(conf, env, {
    ...options,
    allowedFiles: [
      path.resolve(process.cwd(), 'README.md')
    ]
  });
  conf = lessModules(conf, env, options);
  // Get the project version.
  conf.plugins.push(new webpack.DefinePlugin({
    VERSION: JSON.stringify(pkg.version),
  }));

  conf.optimization = {
    ...conf.optimization,
    splitChunks: {
      cacheGroups: {
        reactvendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react-vendor',
          chunks: 'all',
        },
        prismjs: {
          test: /[\\/]node_modules[\\/](codemirror)[\\/]/,
          name: 'codemirror-vendor',
          chunks: 'async',
        },
      },
    },
  };

  conf.output = { ...conf.output, publicPath: './' }
  return conf;
}
