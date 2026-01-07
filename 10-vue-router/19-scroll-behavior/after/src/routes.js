import BlogListPage from "./pages/BlogListPage.vue";
import BlogPostPage from "./pages/BlogPostPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: BlogListPage,
  },
  {
    path: "/:postId",
    component: BlogPostPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return { top: 0 };
    // return {
    //   top: 200,
    //   behavior: "smooth",
    // };
    // 延迟
    // return new Promise((resolve) => {
    //   setTimeout(() => resolve({ top: 200, behavior: "smooth" }), 1000);
    // });
    // return {
    //   el: "#app",
    //   top: -60,
    // };
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
