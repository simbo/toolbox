/**
 * HTML Loader
 * https://github.com/webpack-contrib/html-loader
 */

const htmlLoader = {
  loader: 'html-loader',
  options: {
    minimize: false,
    removeComments: false,
    collapseWhitespace: false
  }
};


module.exports = {
  htmlLoader
};
