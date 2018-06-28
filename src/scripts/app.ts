import '../styles/app.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
import { router } from './modules/router/router';
import { components } from './components';
import { filters } from './modules/filters';

Vue.use(VueRouter);
Vue.use(filters);
Vue.use(components);

new Vue({
  el: 'main',
  router
});
