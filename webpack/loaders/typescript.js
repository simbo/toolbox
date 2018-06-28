const { paths } = require('./../paths');


/**
 * Typescript Loader
 * https://github.com/TypeStrong/ts-loader
 */
const typescriptLoader = {
  loader: 'ts-loader',
  options: {
    appendTsSuffixTo: [/\.vue$/]
  }
};


module.exports = {
  typescriptLoader
};
