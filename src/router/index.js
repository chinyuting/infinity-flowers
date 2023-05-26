import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Front/HomeView.vue'),
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/Front/ProductsView.vue'),
      },
      {
        path: 'products/:productId',
        name: 'ProductDetail',
        component: () => import('../views/Front/ProductDetailView.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/Front/CartView.vue'),
      },
      {
        path: 'favorite',
        name: 'favorite',
        component: () => import('../views/Front/FavoriteView.vue'),
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/Front/OrderView.vue'),
      },
      {
        path: 'order/:orderId',
        name: 'OrderCheck',
        component: () => import('../views/Front/OrderCheckView.vue'),
      },
      {
        path: 'order/:orderId/paid',
        name: 'orderPaid',
        component: () => import('../views/Front/OrderCompletedView.vue'),
      },
      {
        path: 'orderSearch',
        name: 'orderSearch',
        component: () => import('../views/Front/OrderSearchView.vue'),
      },
      {
        path: 'QA',
        name: 'QA',
        component: () => import('../views/Front/QAView.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashBoardView.vue'),
    children: [
      {
        path: 'ProductManage',
        name: 'ProductManage',
        component: () => import('../views/Admin/ProductManage.vue'),
      },
      {
        path: 'OrderManage',
        name: 'OrderManage',
        component: () => import('../views/Admin/OrderManage.vue'),
      },
      {
        path: 'CouponManage',
        name: 'CouponManage',
        component: () => import('../views/Admin/CouponManage.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
