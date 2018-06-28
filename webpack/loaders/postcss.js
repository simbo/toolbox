const autoprefixer = require('autoprefixer');
const cssMqpacker = require('css-mqpacker');
const cssMqpackerSortMediaqueries = require('css-mqpacker-sort-mediaqueries');
const cssnano = require('cssnano');

const { browsers } = require('./../browsers');
const { inProdMode } = require('./../environment');


/**
 * Autoprefixer Options
 * https://github.com/postcss/autoprefixer
 */
const autoprefixerOptions = {
  browsers,
  remove: false
};


/**
 * cssMqPacker Options
 * https://github.com/hail2u/node-css-mqpacker
 */
const cssMqpackerOptions = {
  sort: cssMqpackerSortMediaqueries
};


/**
 * cssnano Options
 * http://cssnano.co/guides/optimisations/
 * http://cssnano.co/guides/presets/
 */
const cssnanoOptions = {
  preset: ['default', {
    zindex: false
  }]
};


/**
 * PostCSS Plugins
 */
const postcssPlugins = [
  autoprefixer(autoprefixerOptions),
  cssMqpacker(cssMqpackerOptions),
  inProdMode ? cssnano(cssnanoOptions) : null
].filter(plugin => plugin !== null);


/**
 * PostCSS Loader
 * https://github.com/postcss/postcss-loader
 */
const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins: postcssPlugins
  }
};


module.exports = {
  postcssLoader
};
