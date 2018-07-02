import { NgModule } from '@angular/core';

import { CamelCasePipe } from './camel-case/camel-case.pipe';
import { KebabCasePipe } from './kebab-case/kebab-case.pipe';
import { PascalCasePipe } from './pascal-case/pascal-case.pipe';
import { SnakeCasePipe } from './snake-case/snake-case.pipe';

const pipes = [
  CamelCasePipe,
  KebabCasePipe,
  PascalCasePipe,
  SnakeCasePipe
];

@NgModule({
  declarations: [
    ...pipes
  ],
  exports: [
    ...pipes
  ]
})
export class StringPipesModule { }
