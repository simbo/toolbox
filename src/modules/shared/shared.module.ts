import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon/icon.component';
import { SpoilerComponent } from './spoiler/spoiler.component';
import { RollerComponent } from './roller/roller.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IconComponent,
    SpoilerComponent,
    RollerComponent
  ],
  exports: [
    IconComponent,
    SpoilerComponent,
    RollerComponent
  ]
})
export class SharedModule {}
