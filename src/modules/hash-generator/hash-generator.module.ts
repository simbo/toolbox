import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HashGeneratorPageComponent } from './hash-generator-page/hash-generator-page.component';
import { HashGeneratorRoutingModule } from './hash-generator-routing.module';
import { ControlsModule } from '../controls/controls.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ControlsModule,
    HashGeneratorRoutingModule
  ],
  declarations: [
    HashGeneratorPageComponent
  ]
})
export class HashGeneratorModule { }
