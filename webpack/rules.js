const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { loaders } = require('./loaders/index');


/**
 * Webpack Module Rules
 * https://webpack.js.org/configuration/module/
 */
const rules = [

  {
    test: /\.js$/,
    use: [loaders.babel]
  },

  {
    test: /\.ts$/,
    use: [loaders.babel, loaders.typescript]
  },

  {
    test: /\.scss$/,
    oneOf: [
      {
        resourceQuery: /^\?vue/,
        use: ['vue-style-loader', loaders.css, loaders.postcss, loaders.sass]
      },
      {
        use: [MiniCssExtractPlugin.loader, loaders.css, loaders.postcss, loaders.sass]
      }
    ]
  },

  {
    test: /\.pug$/,
    oneOf: [
      {
        resourceQuery: /^\?vue/,
        use: [loaders.pug]
      },
      {
        use: ['raw-loader', loaders.pug]
      }
    ]
  },

  {
    test: /\.vue$/,
    use: ['vue-loader']
  }

/**
 * Exclude node_modules for all rules per default
 */
].map(rule => {
  rule.exclude = rule.exclude || /node_modules/;
  return rule;
});


module.exports = {
  rules
};
