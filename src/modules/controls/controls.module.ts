import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { TextfieldComponent } from './textfield/textfield.component';
import { SelectComponent } from './select/select.component';
import { SelectableTextComponent } from './selectable-text/selectable-text.component';
import { ButtonComponent } from './button/button.component';

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
    SelectableTextComponent,
    ButtonComponent
  ],
  exports: [
    TextfieldComponent,
    SelectComponent,
    SelectableTextComponent,
    ButtonComponent
  ]
})
export class ControlsModule { }
