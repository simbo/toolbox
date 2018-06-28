const { join, dirname } = require('path');

// base paths
const root = dirname(__dirname);
const src = join(root, 'src');
const dist = join(root, 'dist');


/**
 * Paths Object
 *
 * Every object property is a function which returns the respective base path,
 * joined with optional trailers.
 *
 * @type { [name: string]: (...trailers: string[]) => string }
 */
const paths = Object.entries({
  root,
  src,
  dist
}).reduce((obj, [name, path]) => ({
  ...obj,
  [name]: (...trailers) => join(path, ...trailers)
}), {});


module.exports = {
  paths
};
