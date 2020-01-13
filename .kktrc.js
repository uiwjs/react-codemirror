import path from 'path';

export const loaderOneOf = [
  require.resolve('@kkt/loader-less')
];

export const moduleScopePluginOpts = [
  path.resolve(process.cwd(), 'README.md')
];

export default (conf, opts, webpack) => {
  const pkg = require(path.resolve(process.cwd(), 'package.json'));
  // Webpack parses md file text
  conf.module.rules.map((item) => {
    if (item.oneOf) {
      item.oneOf.unshift({
        test: /\.md$/,
        use: [
          {
            loader: require.resolve('raw-loader'),
            options: {
              esModule: true,
            },
          },
        ],
      });
    }
    return item;
  });

  // Get the project version.
  conf.plugins.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    })
  );
  conf.output = { ...conf.output, publicPath: './' }
  return conf;
}
