const loaderUtils = require('loader-utils');
const path = require('path');

module.exports = function (webpackConf, ServerConf) {
  if (webpackConf) {
    // 更改各种 Rules 配置
    webpackConf.module.rules.map((item) => {
      if (item.oneOf) {
        item = item.oneOf.map((childItem) => {
          // 修改配置 css|less 
          if (String(/\.(css|less)$/) === String(childItem.test)) {
            childItem.use = childItem.use.map((_childItem) => {
              if (/node_modules\/css-loader/.test(_childItem.loader)) {
                _childItem = {
                  loader: require.resolve('css-loader'),
                  options: {
                    root: '.',
                    modules: true,
                    // minimize: true,
                    localIdentName: '[local]',
                    importLoaders: 1,
                    getLocalIdent: (context, localIdentName, localName) => {
                      // 过滤 uiw 组件库，因为 modules=true 参数，会将 className替换成Hash，导致uiw样式无法加载
                      const hash = loaderUtils.getHashDigest(context.resourcePath + localIdentName, 'md5', 'base64', 5);
                      const codemirrorpath = path.join(process.cwd(), 'node_modules', 'codemirror');
                      if (
                        (new RegExp(`^${codemirrorpath}`)).test(context.resourcePath)
                      ) {
                        return localName;
                      }
                      return localName + hash;
                    },
                  },
                }
              }
              return _childItem;
            });
          }
          return childItem;
        });
      }
      return item;
    });
    if (webpackConf.mode === 'development') {
      // console.log('webpackConf:', webpackConf);
      // 开发模式下更改的 webpack 配置
      // webpackConf.entry = './path/to/my/entry/file.js';
      // webpackConf.output = {
      //   library: "someLibName",
      //   libraryTarget: "umd",
      //   filename: "someLibName.js",
      //   auxiliaryComment: "Test Comment"
      // }
      // webpackConf.output.auxiliaryComment =
      // delete webpackConf.output;
    }
    if (webpackConf.mode === 'production') {
      // 生产模式下更改的 webpack 配置
      // webpackConf.entry = './path/to/my/entry/file.js';
      // console.log('webpackConf:', webpackConf);
      // webpackConf.output.path = 'wr';
      // console.log('---->', __dirname)
      // webpackConf.output.path = `${__dirname}${path.sep}wr5`;
      // webpackConf.output.path = path.join(__dirname, 'wr2');
    }
    return webpackConf;
  }
  if (ServerConf) {
    // ServerConf.proxy = {
    //   '/api': {
    //     target: 'http://127.0.0.1:1130',
    //     changeOrigin: true,
    //   },
    // }
    return ServerConf;
  }
};
