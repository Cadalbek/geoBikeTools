import Home from '../pages/Home.vue';
import Carte from '../pages/Carte.vue';
import APropos from '../pages/APropos.vue';

import {
  createRouter,
  createWebHistory
} from 'vue-router';

const routes = [
  {
    path: '/home',
    component: Home,
    name : 'home'
  },
  {
    path: '/carte',
    component: Carte,
    name : 'carte'
  },
  {
    path: '/apropos',
    component: APropos,
    name : 'apropos'
  }
];

const router = createRouter({
  history: createWebHistory(), // Permet d'activer le HTML5 mode !
  routes
});

export default router;
