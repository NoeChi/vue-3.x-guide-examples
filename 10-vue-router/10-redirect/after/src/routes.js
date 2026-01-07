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
    path: "/posts",
    // redirect: "/",
    redirect: { name: "blogList" },
  },
  {
    path: "/:postId",
    component: BlogPostPage,
    name: "blogPost",
  },
  {
    path: "/posts/:postId",
    // redirect: "/:postId", // 错误
    redirect: (to) => {
      return { path: `/${to.params.postId}` };
    },
  },
  // 或使用命名方式
  // {
  //   path: "/posts/:postId",
  //   redirect: (to) => {
  //     return { name: "blogPost", params: { postId: to.params.postId } };
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
