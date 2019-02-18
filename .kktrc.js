const path = require('path');
const pkg = require('./package.json');

process.env.APPSRC = path.resolve(process.cwd(), 'website');

module.exports = {
  plugins: [
    require.resolve('@kkt/plugin-less'),
  ],
  babelInclude: [path.resolve(process.cwd(), 'src')],
  // Modify the webpack config
  config: (conf, { dev, env }, webpack) => {
    if (env === 'prod') {
      conf = {
        ...conf,
        optimization: {
          ...conf.optimization,
          // https://webpack.js.org/plugins/split-chunks-plugin/
          splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 2,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
              }
            }
          }
        }
      };
    }
    // 获取 React CodeMirror 版本
    conf.plugins.push(
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(pkg.version),
      })
    );
    // 解析 Markdown 文件
    conf.module.rules = [
      ...conf.module.rules,
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
    ];

    if (env === 'prod') {
      // 生产模式下更改的 webpack 配置
      conf.entry[0] = path.resolve(process.cwd(), 'website');
      conf.output.publicPath = '';
    } else {
      conf.entry[1] = path.resolve(process.cwd(), 'website', 'index.js');
    }
    return conf;
  },
};
