import {createRouter, createWebHistory} from 'vue-router';

// 路由信息
const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../Editor/MainFrame/index.vue'),
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('../Editor/BluePrintEditor/blueprint.vue'),
  },
];

// 导出路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
