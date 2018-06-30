import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamelCasePipe } from './pipes/camel-case.pipe';
import { KebabCasePipe } from './pipes/kebab-case.pipe';
import { PascalCasePipe } from './pipes/pascal-case.pipe';
import { SnakeCasePipe } from './pipes/snake-case.pipe';

const pipes = [
  CamelCasePipe,
  KebabCasePipe,
  PascalCasePipe,
  SnakeCasePipe
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...pipes
  ],
  exports: [
    ...pipes
  ]
})
export class GenericsModule { }
