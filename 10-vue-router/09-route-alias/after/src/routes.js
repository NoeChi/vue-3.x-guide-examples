import BlogListPage from "./pages/BlogListPage.vue";
import BlogPostPage from "./pages/BlogPostPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: BlogListPage,
    // alias: "/posts",
    alias: ["/posts", "/blogs"],
  },
  {
    path: "/:postId",
    component: BlogPostPage,
    alias: "/posts/:postId",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
