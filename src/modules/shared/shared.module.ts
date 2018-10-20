import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon/icon.component';
import { SpoilerComponent } from './spoiler/spoiler.component';
import { RollerComponent } from './roller/roller.component';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [
    IconComponent,
    SpoilerComponent,
    RollerComponent
  ],
  exports: [
    IconComponent,
    SpoilerComponent,
    RollerComponent,
    PipesModule
  ]
})
export class SharedModule {}
