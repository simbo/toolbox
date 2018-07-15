import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon/icon.component';
import { RollerComponent } from './roller/roller.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IconComponent,
    RollerComponent
  ],
  exports: [
    IconComponent,
    RollerComponent
  ]
})
export class SharedModule {}
