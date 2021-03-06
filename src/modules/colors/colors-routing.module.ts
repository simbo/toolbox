import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorNamerPageComponent } from './pages/color-namer-page/color-namer-page.component';

const routes: Routes = [
  {
    path: 'color-namer',
    component: ColorNamerPageComponent,
    data: {
      title: 'Color Namer'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorsRoutingModule { }
