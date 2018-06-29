import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HashGeneratorPageComponent } from './hash-generator-page/hash-generator-page.component';

const routes: Routes = [
  {
    path: 'hash',
    component: HashGeneratorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HashGeneratorRoutingModule { }
