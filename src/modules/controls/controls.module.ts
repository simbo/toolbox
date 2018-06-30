import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextfieldComponent } from './textfield/textfield.component';
import { SelectComponent } from './select/select.component';
import { SelectableTextComponent } from './selectable-text/selectable-text.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TextfieldComponent,
    SelectComponent,
    SelectableTextComponent
  ],
  exports: [
    TextfieldComponent,
    SelectComponent,
    SelectableTextComponent
  ]
})
export class ControlsModule { }
