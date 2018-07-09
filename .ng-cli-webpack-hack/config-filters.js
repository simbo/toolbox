/**
 * These filter functions alter the internal angular cli webpack configs from
 * node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/
 */


/**
 * filter angular cli webpack common config (common.js)
 */
const HtmlMinifier = require('html-minifier');
const marked = require('marked');

marked.setOptions({
  smartypants: true
});

const HtmlMinifierOptions = {
  html5: true,
  collapseWhitespace: true,
  removeComments: true
};

const pugLoader = {
  loader: 'pug-plain-loader',
  options: {
    filters: {
      markdown: (contents) =>
        HtmlMinifier.minify(marked(contents), HtmlMinifierOptions)
    }
  }
};

exports.common = (config) => {

  // alter module rules
  config.module.rules.unshift(

    // pug templates
    {
      test: /\.pug$/,
      use: ['raw-loader', pugLoader]
    }

  );

  return config;
};


/**
 * filter angular cli webpack browser config (browser.js)
 */
exports.browser = (config) => {

  // node libs
  config.node = {
    ...config.node || {},
    stream: true
  };

  return config;
};


/**
 * filter angular cli webpack styles config (styles.js)
 */
const autoprefixer = require('autoprefixer');
const cssMqpacker = require('css-mqpacker');
const cssMqpackerSortMediaqueries = require('css-mqpacker-sort-mediaqueries');

exports.styles = (config) => {

  // alter module rules
  config.module.rules = config.module.rules.map((rule) => {

    // alter rule's loaders
    rule.use = rule.use.map((loader) => {

      // alter postcss plugins
      if (loader.loader === 'postcss-loader') {
        const pluginsFn = loader.options.plugins;
        loader.options.plugins = (ldr) => {
          const plugins = pluginsFn(ldr);
          plugins.pop();
          plugins.push(
            autoprefixer({
              remove: false,
              grid: true
            }),
            cssMqpacker({
              sort: cssMqpackerSortMediaqueries
            })
          );
          return plugins;
        };
      }

      return loader;
    });

    return rule;

  });

  return config;

};
