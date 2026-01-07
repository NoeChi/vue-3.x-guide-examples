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
    // props: true,
    // props: { postId: 5 },
    props: (route) => {
      console.log(route);
      return { postId: Number(route.params.postId) };
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
