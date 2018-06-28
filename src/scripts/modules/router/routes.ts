import { HashPageComponent } from '../../pages/hash-page/hash-page.component';
import { ColorNamerPageComponent } from '../../pages/color-namer-page/color-namer-page.component';
import { HomePageComponent } from '../../pages/home-page/home-page.component';

export const routes = [

  {
    path: '/hash',
    name: 'hash',
    component: HashPageComponent
  },

  {
    path: '/color-namer',
    component: ColorNamerPageComponent
  },

  {
    path: '/',
    component: HomePageComponent
  },

  {
    path: '*',
    redirect: '/'
  }

];
