import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HashGeneratorPageComponent } from './pages/hash-generator-page/hash-generator-page.component';
import { StringGeneratorPageComponent } from './pages/string-generator-page/string-generator-page.component';

const routes: Routes = [
  {
    path: 'hash-generator',
    component: HashGeneratorPageComponent,
    data: {
      title: 'Hash Generator'
    }
  },
  {
    path: 'random-string',
    component: StringGeneratorPageComponent,
    data: {
      title: 'Random String Generator'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StringsRoutingModule { }
