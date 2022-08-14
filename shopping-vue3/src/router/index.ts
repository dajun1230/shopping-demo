import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/login/index.vue';
import Home from '@/views/index.vue';
import GoodManage from '@/views/good/index.vue';
import OrderManage from '@/views/order/index.vue';
import UserManage from '@/views/user/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/good',
          name: 'good',
          component: GoodManage
        },
        {
          path: '/order',
          name: 'order',
          component: OrderManage
        },
        {
          path: '/user',
          name: 'user',
          component: UserManage
        }
      ]
    },
  ]
})

export default router
