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
        name: 'productdetail',
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
        path: 'order/:orderid',
        name: 'ordercheck',
        component: () => import('../views/Front/OrderCheckView.vue'),
      },
      {
        path: 'order/:orderid/paid',
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
        path: 'productmanage',
        name: 'productmanage',
        component: () => import('../views/Admin/ProductManage.vue'),
      },
      {
        path: 'ordermanage',
        name: 'ordermanage',
        component: () => import('../views/Admin/OrderManage.vue'),
      },
      {
        path: 'couponmanage',
        name: 'couponmanage',
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
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
