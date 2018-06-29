const fs = require('fs');
const path = require('path');

const basepath = path.dirname(__dirname);

const configsPath = path.join(
  basepath,
  'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs'
);

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

configFiles.forEach((configFile) => {

  const configFilePath = path.join(configsPath, `${configFile.name}.js`);

  fs.readFile(configFilePath, (err, data) => {
    if (err) { throw err; }
    const configText = data.toString();

    const searchText = `exports.${configFile.export} = ${configFile.export};`;
    const searchTextPosition = configText.indexOf(searchText);

    if (searchTextPosition === -1) { return; }

    const replacementText = [
      `const configFilters = require('${
        path.join(
          path.relative(configsPath, basepath),
          '.ng-webpack/config-filters.js'
        )
      }');`,
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

    fs.writeFile(configFilePath, output, (err) => {
      if (err) { throw err; }
    });

  });

});
