import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ControlsModule } from '../controls/controls.module';
import { ColorsRoutingModule } from './colors-routing.module';
import { ColorNamerPageComponent } from './pages/color-namer-page/color-namer-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ControlsModule,
    ColorsRoutingModule
  ],
  declarations: [
    ColorNamerPageComponent
  ]
})
export class ColorsModule { }
