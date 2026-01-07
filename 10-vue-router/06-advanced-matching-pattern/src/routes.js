import PrintRoute from "./pages/PrintRoute.vue";

import { createRouter, createWebHistory } from "vue-router";

// 请一个一个尝试，注释掉其它路径
const routes = [
  // {
  //   path: "/users/:userId/posts/:postId",
  //   component: PrintRoute,
  // },
  // {
  //   path: "/:categories+",
  //   component: PrintRoute,
  // },
  // {
  //   path: "/:categories*",
  //   component: PrintRoute,
  // },
  // {
  //   path: "/:categories?",
  //   component: PrintRoute,
  // },
  // {
  //   path: "/posts/:title([a-zA-Z0-9-]+)",
  //   component: PrintRoute,
  // },
  // {
  //   path: "/:notFound(.*)*",
  //   component: PrintRoute,
  // },
  // 优先级
  // {
  //   path: "/:postId",
  //   component: PrintRoute,
  // },
  // {
  //   path: "/:userId",
  //   component: PrintRoute,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
