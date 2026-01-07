import PrintRoute from "./pages/PrintRoute.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/posts",
    component: PrintRoute,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
