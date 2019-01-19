toolbox
=======

  > Some online tools at [simbo.codes/toolbox](https://simbo.codes/toolbox).

[![Toolbox Github Page](https://img.shields.io/badge/github-page-blue.svg)](https://simbo.codes/toolbox/)
[![Build Status](https://travis-ci.org/simbo/toolbox.svg?branch=master)](https://travis-ci.org/simbo/toolbox)
[![Coverage Status](https://coveralls.io/repos/github/simbo/toolbox/badge.svg?branch=master)](https://coveralls.io/github/simbo/toolbox?branch=master)


--------------------------------------------------------------------------------


Development
-----------


### Requirements

  - node >= 8.11.2

  - [`yarn`](https://yarnpkg.com/lang/en/) for package management

  - globally installed [`@angular/cli`


### Usage

See `package.json#scripts` for all scripts and details.

  - `yarn run serve`  
    builds, serves and reloads at [localhost:4200](http://localhost:4200/)

  - `yarn run build`  
    builds to `dist/`

  - `yarn run test`  
    unit tests via [Karma](https://karma-runner.github.io)

  - `yarn run e2e`  
    end-to-end tests via [Cypress](https://www.cypress.io/)

  - `ng generate <schematic> [options]`  
    e.g.: `ng generate component component-name` to generate a new component.  
    See `ng generate --help` for schematics.  
    See `ng generate <schematic> --help` for schematic options

  - `yarn run bundle-analyzer`  
    build and start bundle analyzer at [localhost:8888](http://localhost:8888/)

  - `yarn run release`  
    prepare and push a tagged release version (will be built by Travis CI and
    pushed to GitHub Pages)


### More

  - Angular CLI
      - [ReadMe](https://github.com/angular/angular-cli/blob/master/packages/angular/cli/README.md#documentation)
      - [Wiki](https://github.com/angular/angular-cli/wiki)


License
-------

MIT © 2018 Simon Lepel
