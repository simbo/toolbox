const { babelLoader } = require('./babel');
const { cssLoader } = require('./css');
const { htmlLoader } = require('./html');
const { postcssLoader } = require('./postcss');
const { pugLoader } = require('./pug');
const { sassLoader } = require('./sass');
const { typescriptLoader } = require('./typescript');

const loaders = {
  babel: babelLoader,
  css: cssLoader,
  html: htmlLoader,
  postcss: postcssLoader,
  pug: pugLoader,
  sass: sassLoader,
  typescript: typescriptLoader
}

module.exports = {
  loaders
};
