const chalk = require('chalk');

const { mode, inProdMode } = require('./webpack/environment');
const { config } = require('./webpack/config');

const [ modeIcon, modeColor ] = [
    ['👔', 'cyan'],
    ['👷', 'yellow']
][ inProdMode ? 0 : 1 ];

console.log(
    chalk`{dim Mode} ${modeIcon} {${modeColor} ${mode}}\n`
);

module.exports = config;
