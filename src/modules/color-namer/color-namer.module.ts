import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorNamerRoutingModule } from './color-namer-routing.module';
import { ColorNamerPageComponent } from './color-namer-page/color-namer-page.component';

@NgModule({
  imports: [
    CommonModule,
    ColorNamerRoutingModule
  ],
  declarations: [
    ColorNamerPageComponent
  ]
})
export class ColorNamerModule { }
