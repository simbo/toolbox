const HtmlMinifier = require('html-minifier');
const marked = require('marked');
const autoprefixer = require('autoprefixer');
const cssMqpacker = require('css-mqpacker');
const cssMqpackerSortMediaqueries = require('css-mqpacker-sort-mediaqueries');


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

const postcssPlugins = [
  autoprefixer({
    remove: false,
    grid: true
  }),
  cssMqpacker({
    sort: cssMqpackerSortMediaqueries
  })
];


// filter ng-cli's webpack config
module.exports.default = (config) => {

  // alter module rules
  config.module.rules.forEach((rule) => {

    // alter rule's loaders
    if (rule.use) {
      rule.use.forEach((loaderFn) => {

        // alter postcss plugins
        if (loaderFn.loader === 'postcss-loader') {
          const pluginsCreator = loaderFn.options.plugins;
          loaderFn.options.plugins = (loader) => {
            const plugins = pluginsCreator(loader)
              .filter(plugin => plugin.postcssPlugin !== 'autoprefixer');
            plugins.push(...postcssPlugins);
            return plugins;
          };
        }

        return loaderFn;
      });
    }

    return rule;

  });

  // add module rules
  config.module.rules.unshift(

    // pug template loader
    {
      test: /\.pug$/,
      use: ['raw-loader', pugLoader]
    }

  );


  // node libs
  config.node = {
    ...config.node || {},
    stream: true
  };

  return config;
};
