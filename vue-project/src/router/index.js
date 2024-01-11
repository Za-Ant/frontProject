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
      path: '/destination/:slug',
      name: 'destination',
      component: () => import('../views/Destinations.vue'),
      props: true,
    }
  ]
})

export default router
