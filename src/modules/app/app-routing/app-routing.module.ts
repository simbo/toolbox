import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '../home-page/home-page.component';
import { AppRoutingService } from './app-routing.service';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true, // need to use hash urls as github pages is used as host
      enableTracing: false // true for debugging routes
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AppRoutingService
  ]
})
export class AppRoutingModule {}
