import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/properties',
      name: 'properties',
      component: () => import('../views/Properties.vue'),
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/Details.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('../views/Schedule.vue'),
    },
  ]
})

export default router
