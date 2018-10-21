import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ControlsModule } from '../controls/controls.module';
import { StringPipesModule } from './pipes/string-pipes.module';
import { StringsRoutingModule } from './strings-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HashGeneratorPageComponent } from './pages/hash-generator-page/hash-generator-page.component';
import { StringGeneratorPageComponent } from './pages/string-generator-page/string-generator-page.component';
import { UuidGeneratorPageComponent } from './pages/uuid-generator-page/uuid-generator-page.component';

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
    HashGeneratorPageComponent,
    StringGeneratorPageComponent,
    UuidGeneratorPageComponent
  ],
  exports: [
    StringPipesModule
  ]
})
export class StringsModule { }
