const { inDevMode } = require('./../environment');


/**
 * CSS Loader
 * https://github.com/webpack-contrib/css-loader#options
 */
const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: inDevMode,
    url: false,
    import: false,
    modules: false
  }
};


module.exports = {
  cssLoader
};
