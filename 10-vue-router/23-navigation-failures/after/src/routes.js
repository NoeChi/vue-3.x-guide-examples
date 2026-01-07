import AddBlog from "./pages/AddBlog.vue";
import BlogDetails from "./pages/BlogDetails.vue";
import BlogManagement from "./pages/BlogManagement.vue";
import RightSidebar from "./pages/RightSidebar.vue";
import LoginPage from "./pages/LoginPage.vue";
import HomePage from "./pages/HomePage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/blogs",
    component: BlogManagement,
    meta: { private: true },
    children: [
      {
        path: "new",
        components: {
          default: AddBlog,
          rightSideBar: RightSidebar,
        },
      },
      {
        path: "details",
        component: BlogDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const loggedIn = false;

// 1. aborted
// router.beforeEach((to, from) => {
//   if (to.meta.private && !loggedIn) {
//     return false; // 1. aborted
//     // return "/login";
//   }
// });

// 2. cancelled
// router.beforeEach(async (to, from) => {
//   if (to.meta.private && !loggedIn) {
//     await new Promise((resolve) => setTimeout(() => resolve(), 3000));
//     return false;
//   }
// });

// 4. redirected
router.beforeEach((to, from) => {
  if (to.meta.private && !loggedIn) {
    return "/login";
  }
});

export default router;
