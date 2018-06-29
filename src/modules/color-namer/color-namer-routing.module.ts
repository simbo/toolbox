import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorNamerPageComponent } from './color-namer-page/color-namer-page.component';

const routes: Routes = [
  {
    path: 'color-namer',
    component: ColorNamerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorNamerRoutingModule { }
