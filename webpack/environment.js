/**
 * Build mode
 */
const inProdMode = process.env && process.env.NODE_ENV === 'production';
const inDevMode = !inProdMode;
const mode = inProdMode ? 'production' : 'development';


module.exports = {
  inProdMode,
  inDevMode,
  mode
};
