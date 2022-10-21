import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    // is optional
    isAdmin?: boolean;
    // must be declared by every route
    requiresAuth: boolean;
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/index.vue'),
  },
  {
    path: '/adopt',
    name: 'adopt',
    redirect: 'adopt-info',
    children: [
      {
        path: '/adopt-info',
        name: 'adopt-info',
        component: () => import('../views/adopt-info/index.vue'),
      },
      // {
      //   path: '/adopt-animals',
      //   name: 'adopt-animals',
      //   component: () => import('../views/adopt-animals/index.vue'),
      // },
    ],
  },
  {
    path: '/room',
    name: 'room',
    component: () => import('../views/room/index.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/products/index.vue'),
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user/index.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/index.vue'),
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
