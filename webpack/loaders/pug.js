const { globals } = require('./../globals');
const { paths } = require('./../paths');


/**
 * Pug Loader
 * https://github.com/yyx990803/pug-plain-loader
 */
const pugLoader = {
  loader: 'pug-plain-loader',
  options: {
    // basedir: paths.src('templates'),
    data: {
      ...globals
    },
    doctype: null,
    pretty: false,
    filters: {
    }
  }
};


module.exports = {
  pugLoader
};
