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

  - `ng serve [--prod]`  
    builds, serves and reloads at [localhost:4200](http://localhost:4200/)

  - `ng build [--prod]`  
    builds to `dist/`

  - `ng test`  
    unit tests via [Karma](https://karma-runner.github.io)

  - `ng e2e`  
    end-to-end tests via [Protractor](http://www.protractortest.org/)

  - `ng generate <schematic> [options]`  
    i.e.: `ng generate component component-name` to generate a new component.  
    See `ng generate --help` for schematics.  
    See `ng generate <schematic> --help` for schematic options

  - `yarn run analyzer`  
    build and start bundle analyzer at [localhost:8888](http://localhost:8888/)


### More

  - Angular CLI
      - [ReadMe](https://github.com/angular/angular-cli/blob/master/packages/angular/cli/README.md#documentation)
      - [Wiki](https://github.com/angular/angular-cli/wiki)


Deployment
----------

Successfully tested builds on `master` are automatically published on GitHub
Pages via Travis CI.


License
-------

MIT © 2018 Simon Lepel
