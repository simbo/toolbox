import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { TextfieldComponent } from './textfield/textfield.component';
import { SelectComponent } from './select/select.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    TextfieldComponent,
    SelectComponent,
    ButtonComponent,
    CheckboxComponent
  ],
  exports: [
    TextfieldComponent,
    SelectComponent,
    ButtonComponent,
    CheckboxComponent
  ]
})
export class ControlsModule { }
