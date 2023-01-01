import { createRouter, createWebHistory } from "vue-router";

// 路由信息
const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/Main/index.vue"),
  },
  {
    path: "/editor",
    name: "editor",
    component: () => import("../views/BluePrintEditor/index.vue"),
  },
];

// 导出路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
