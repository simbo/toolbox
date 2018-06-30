const autoprefixer = require('autoprefixer');
const cssMqpacker = require('css-mqpacker');
const cssMqpackerSortMediaqueries = require('css-mqpacker-sort-mediaqueries');

/**
 * These filter functions alter the internal angular cli webpack configs from
 * node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/
 */


/**
 * filter angular cli webpack common config (common.js)
 */
exports.common = (config) => {

  // pug templates
  config.module.rules.unshift({
    test: /\.pug$/,
    use: ['raw-loader', 'pug-plain-loader']
  });

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
exports.styles = (config) => {

  // alter postcss plugins
  config.module.rules = config.module.rules.map((rule) => {
    rule.use = rule.use.map((loader) => {
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
