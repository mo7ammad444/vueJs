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
      path: '/pg2',
      name: 'pg2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/pg2.vue')
    },
    {
      path: '/pg3',
      name: 'pg3',
      component: () => import('../views/pg3.vue')
    },
    {
      path: '/testcode',
      name: 'testcode',
      component: () => import('../views/testcode.vue')
    },
    {
      path: '/pg4',
      name: 'pg4',
      component: () => import('../views/pg4.vue')
    },
    {
      path: '/pg5',
      name: 'pg5',
      component: () => import('../views/pg5.vue')
    },
    {
      path: '/pg6',
      name: 'pg6',
      component: () => import('../views/pg6.vue')
    },
    {
      path: '/pg7',
      name: 'pg7',
      component: () => import('../views/pg7.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue')
    },
    {
      path: '/sendcode',
      name: 'sendcode',
      component: () => import('../views/sendcode.vue')
    },
 

  ]
})


export default router
