/**
 * This dirty hack patches angular cli's webpack configs within node_modules to
 * offer filter functions for altering config exports.
 *
 * (this script should be triggered on postinstall hook via package.json)
 */

const { readFile, writeFile } = require('fs');
const { dirname, join, relative } = require('path');
const { dim } = require('chalk');

// absolute path to project root;
const basepath = dirname(__dirname);

// path to filter module, relative to hack dir
const filterModule = 'config-filters.js';

// config files to patch
const configFiles = [
  {
    name: 'common',
    export: 'getCommonConfig'
  },
  {
    name: 'browser',
    export: 'getBrowserConfig'
  },
  {
    name: 'styles',
    export: 'getStylesConfig'
  }
];

// absolute path to config files folder
const configsPath = join(
  basepath,
  'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs'
);

configFiles.forEach((configFile) => {

  const configFileName = `${configFile.name}.js`;
  const configFilePath = join(configsPath, configFileName);

  readFile(configFilePath, (err, data) => {
    if (err) { throw err; }

    const configText = data.toString();

    const searchText = `exports.${configFile.export} = ${configFile.export};`;

    const searchTextPosition = configText.indexOf(searchText);

    if (searchTextPosition === -1) { return; }

    const replacementText = [
      `const configFilters = require('${join(
        relative(configsPath, __dirname), filterModule
      )}');`,
      `function getFilteredConfig(wco) {`,
      `  var config = ${configFile.export}(wco);`,
      `  var name = '${configFile.name}';`,
      `  config = typeof configFilters[name] === 'function' ?`,
      `    configFilters[name](config) : config;`,
      `  return config;`,
      `}`,
      `exports.${configFile.export} = getFilteredConfig;`
    ].join('\n');

    const output = [
      configText.slice(0, searchTextPosition),
      replacementText,
      configText.slice(searchTextPosition + searchText.length)
    ].join('');

    writeFile(configFilePath, output, (err) => {
      if (err) { throw err; }
      console.log(`${dim(`[ngCliWebpackHack]`)} ${configFileName} patched`);
    });

  });

});
