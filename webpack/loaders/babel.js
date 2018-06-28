const { browsers } = require('./../browsers');


/**
 * Babel Loader
 * https://github.com/babel/babel-loader
 */
const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: [
      ['@babel/preset-env', { targets: { browsers } }]
    ],
    plugins: ['@babel/transform-runtime']
  }
};


module.exports = {
  babelLoader
};
