import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ControlsModule } from '../controls/controls.module';
import { StringPipesModule } from '../strings/pipes/string-pipes.module';
import { ColorsRoutingModule } from './colors-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ColorInputComponent } from './color-input/color-input.component';
import { NamedColorComponent } from './named-color/named-color.component';
import { ColorNamerPageComponent } from './pages/color-namer-page/color-namer-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ControlsModule,
    StringPipesModule,
    SharedModule,
    ColorsRoutingModule
  ],
  declarations: [
    ColorInputComponent,
    NamedColorComponent,
    ColorNamerPageComponent
  ]
})
export class ColorsModule { }
