import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // is optional
    isAdmin?: boolean
    // must be declared by every route
    requiresAuth: boolean
  }
}

const routes: Array<RouteRecordRaw> = [
   {
    path: '/',
    name: 'index',
    component: () =>import('../views/home/index.vue'),
  },
  {
    path: '/home',
    name: 'Home',
     component: () =>import('../views/home/index.vue'),
  },
   {
    path: '/about',
    name: 'About',
     component: () =>import('../views/About/index.vue'),
  },
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router