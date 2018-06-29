import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HashGeneratorPageComponent } from './hash-generator-page/hash-generator-page.component';
import { HashGeneratorRoutingModule } from './hash-generator-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HashGeneratorRoutingModule
  ],
  declarations: [
    HashGeneratorPageComponent
  ]
})
export class HashGeneratorModule { }
