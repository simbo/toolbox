import VueRouter from 'vue-router';
import { routes } from './routes';

export const router = new VueRouter({
  mode: 'hash', // have to stick to hash as github pages can't rewrite,
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-exact-active',
  routes
});
