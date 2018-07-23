const loaderUtils = require('loader-utils');
const path = require('path');

module.exports = function (webpackConf, ServerConf) {
  if (webpackConf) {
    // 更改各种 Rules 配置
    webpackConf.module.rules.map((item) => {
      if (item.oneOf) {
        item = item.oneOf.map((childItem) => {
          // 修改配置 less 
          if (String(/\.(less)$/) === String(childItem.test)) {
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
    if (webpackConf.mode === 'development') { }
    if (webpackConf.mode === 'production') {
      // 生产模式下更改的 webpack 配置
      webpackConf.output.publicPath = '';
    }
    return webpackConf;
  }
};
