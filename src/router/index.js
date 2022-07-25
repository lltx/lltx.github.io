const routes = [
  {
    path: "/:catchAll(.*)",
    component: () => import("@/components/Home.vue"),
  },
];

import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
