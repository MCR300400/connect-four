import AboutView from '@/views/AboutView.vue';
import GameView from '@/views/GameView.vue';
import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/game/:idGame',
    name: 'Game',
    component: GameView,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
