import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ColorNamerRoutingModule } from './color-namer-routing.module';
import { ColorNamerPageComponent } from './color-namer-page/color-namer-page.component';
import { GenericsModule } from '../generics/generics.module';
import { ControlsModule } from '../controls/controls.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GenericsModule,
    ControlsModule,
    ColorNamerRoutingModule
  ],
  declarations: [
    ColorNamerPageComponent
  ]
})
export class ColorNamerModule { }
