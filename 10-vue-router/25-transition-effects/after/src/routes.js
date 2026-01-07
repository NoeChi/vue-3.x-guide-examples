import BlogListPage from "./pages/BlogListPage.vue";
import BlogPostPage from "./pages/BlogPostPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: BlogListPage,
    meta: {
      transition: "fade",
    },
  },
  {
    path: "/:postId",
    component: BlogPostPage,
    meta: {
      transition: "fadeAndMove",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  if (to.path === "/" && from.matched.length >= 1) {
    to.meta.transition = "fadeAndMove";
    console.log(to);
  }
});

export default router;
