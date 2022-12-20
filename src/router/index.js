import { createRouter, createWebHistory, } from 'vue-router';
const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index.vue'),
        meta: {
            title: '首頁',
        },
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/about/index.vue'),
        meta: {
            title: '關於我們',
        },
    },
    // {
    //   path: '/adopt',
    //   name: 'adopt',
    //   redirect: 'adopt-info',
    //   children: [
    //     {
    //       path: '/adopt-info',
    //       name: 'adopt-info',
    //       component: () => import('../views/adopt-info/index.vue'),
    //       meta: {
    //         title: '認養須知',
    //       },
    //     },
    //     {
    //       path: '/adopt-animals',
    //       name: 'adopt-animals',
    //       component: () => import('../views/adopt-animals/index.vue'),
    //       meta: {
    //         title: '認養動物',
    //       },
    //     },
    //   ],
    // },
    {
        path: '/adopt-info',
        name: 'adopt-info',
        component: () => import('../views/adopt-info/index.vue'),
        meta: {
            title: '認養須知',
        },
    },
    {
        path: '/adopt-animals',
        name: 'adopt-animals',
        component: () => import('../views/adopt-animals/index.vue'),
        meta: {
            title: '認養動物',
        },
    },
    {
        path: '/room',
        name: 'room',
        component: () => import('../views/room/index.vue'),
        meta: {
            title: '一般住宿',
        },
    },
    {
        path: '/pet_accommodation',
        name: 'pet-accommodation',
        component: () => import('../views/room/index.vue'),
        meta: {
            title: '毛孩寄宿',
        },
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('../views/products/index.vue'),
        meta: {
            title: '周邊商品',
        },
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../views/user/index.vue'),
        meta: {
            title: '會員專區',
        },
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/cart/index.vue'),
        meta: {
            title: '購物車',
        },
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = '盼窩 | ' + to.meta.title;
    }
    next();
});
export default router;
//# sourceMappingURL=index.js.map