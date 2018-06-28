const magicImporter = require('node-sass-magic-importer');

const { globals } = require('./../environment');
const { paths } = require('./../paths');


/**
 * Magic Importer Options
 * https://github.com/maoberlehner/node-sass-magic-importer/tree/master/packages/node-sass-magic-importer
 */
const magicImporterOptions = {
  cwd: paths.root()
};


/**
 * SASS/SCSS Loader
 * https://github.com/webpack-contrib/sass-loader
 */
// TODO: import `globals` via options as global sass variables
const sassLoader = {
  loader: 'sass-loader',
  options: {
    outputStyle: 'expanded',
    precision: 8,
    sourceMap: true,
    importer: magicImporter(magicImporterOptions),
    includePaths: [
      paths.src('styles/imports')
    ]
  }
};


module.exports = {
  sassLoader
};
