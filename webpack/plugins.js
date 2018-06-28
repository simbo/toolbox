const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

const { inProdMode, inDevMode } = require('./environment');
const { globals } = require('./globals');
const { paths } = require('./paths');


/**
 * Webpack Plugins List
 * https://webpack.js.org/concepts/plugins/
 */
const plugins = [];


/**
 * Define globals for all module scopes
 * (see `./environment.js`)
 * https://webpack.js.org/plugins/define-plugin/
 */
plugins.push(
  new webpack.DefinePlugin({
    ...Object.entries(globals).reduce((values, [key, value]) => ({
      ...values,
      [key]: JSON.stringify(value)
    }), {})
  })
);


/**
 * Vue Loader Plugin
 * https://vue-loader.vuejs.org/guide/#manual-configuration
 */
plugins.push(
  new VueLoaderPlugin()
);


/**
 * Create HTML Files
 * https://github.com/jantimon/html-webpack-plugin
 */
plugins.push(
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.pug'
  })
);


/**
 * Create global stylesheets
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 */
plugins.push(
  new MiniCssExtractPlugin({
    filename: `assets/css/[name]${inProdMode ? '.[contenthash]' : ''}.css`,
    chunkFilename: `assets/css/[id]${inProdMode ? '.[contenthash]' : ''}.css`
  })
);


/**
 * Copy static files
 * https://github.com/webpack-contrib/copy-webpack-plugin
 */
plugins.push(
  new CopyWebpackPlugin([{
    from: paths.src('public/**/*'),
    to: paths.dist(),
    context: paths.src('public')
  }])
);


/**
 * Remove dist folder for a clean build
 * https://github.com/johnagan/clean-webpack-plugin
 */
plugins.push(
  new CleanWebpackPlugin(['dist'], {
    root: paths.root()
  })
);


/**
 * Use unique short module and chunk ids
 * (for long-term caching strategy in prod and for hmr in dev)
 */
plugins.push(
  new webpack.NamedChunksPlugin(),
  inProdMode ? new webpack.HashedModuleIdsPlugin() : new webpack.NamedModulesPlugin()
);


/**
 * Enable HMR for development
 * https://webpack.js.org/concepts/hot-module-replacement/
 */
if (inDevMode) plugins.push(
  new webpack.HotModuleReplacementPlugin()
);


/**
 * Bundle Analyzer
 * https://github.com/webpack-contrib/webpack-bundle-analyzer
 */
if (inProdMode) plugins.push(
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: paths.root('bundle-analyzer-report.html'),
    statsFilename: paths.root('bundle-analyzer-report.json'),
    generateStatsFile: false,
    logLevel: 'warn',
    openAnalyzer: false
  })
);


module.exports = {
  plugins
};
