import BlogListPage from "./pages/BlogListPage.vue";
import BlogPostPage from "./pages/BlogPostPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: BlogListPage,
    name: "blogList",
  },

  {
    path: "/:postId",
    component: BlogPostPage,
    name: "blogPost",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
