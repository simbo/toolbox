import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextfieldComponent } from './textfield/textfield.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TextfieldComponent,
    SelectComponent
  ],
  exports: [
    TextfieldComponent,
    SelectComponent
  ]
})
export class ControlsModule { }
