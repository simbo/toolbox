// https://on.cypress.io/plugins-guide

const wp = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {

  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: [/node_modules/],
            use: [{
              loader: 'ts-loader',
            }],
          },
        ],
      },
    }
  };

  on('file:preprocessor', wp(options));

};
