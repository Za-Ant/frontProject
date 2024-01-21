import { createRouter, createWebHistory } from 'vue-router'
// import VillaVue from '../views/Villa.vue'

const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'villa',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/properties',
      name: 'properties',
      component: () => import('../views/Properties.vue')
    },
    {
      path: '/properties/:id',
      name: 'property-detail',
      component: () => import('../views/PropertyDetail.vue'),
      props: true
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/Details.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('../views/Schedule.vue')
    },
  ]
})

export default router
