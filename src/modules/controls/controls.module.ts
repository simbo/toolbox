import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextfieldComponent } from './textfield/textfield.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TextfieldComponent
  ],
  exports: [
    FormsModule,
    TextfieldComponent
  ]
})
export class ControlsModule { }
