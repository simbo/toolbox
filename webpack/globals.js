const { mode } = require('./environment');

/**
 * Globals for scripts, styles and templates
 * (only basic types)
 */
const globals = {
  'process.env.NODE_ENV': mode
};

module.exports = {
  globals
};
