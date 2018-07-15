import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ControlsModule } from '../controls/controls.module';
import { StringPipesModule } from './pipes/string-pipes.module';
import { StringsRoutingModule } from './strings-routing.module';
import { HashGeneratorPageComponent } from './pages/hash-generator-page/hash-generator-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ControlsModule,
    StringPipesModule,
    StringsRoutingModule,
    SharedModule
  ],
  declarations: [
    HashGeneratorPageComponent
  ],
  exports: [
    StringPipesModule
  ]
})
export class StringsModule { }
