import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ControlsModule } from '../controls/controls.module';
import { StringsRoutingModule } from './strings-routing.module';
import { HashGeneratorPageComponent } from './pages/hash-generator-page/hash-generator-page.component';
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
    CommonModule,
    FormsModule,
    ControlsModule,
    StringsRoutingModule
  ],
  declarations: [
    HashGeneratorPageComponent,
    ...pipes
  ],
  exports: [
    ...pipes
  ]
})
export class StringsModule { }
