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

const loggedIn = true;

router.beforeEach((to, from) => {
  // console.log(from);
  // console.log(to);
  // if (to.path === "/blogs") {
  if (to.path.startsWith("/blogs")) {
    // return false;
    if (!loggedIn) {
      return "/login";
      // return { path: "/login" };
      // return { name: "login" };
    }
  }
});

router.beforeResolve((to) => {
  if (to.path.startsWith("/blogs")) {
    console.log("用户已登录...");
  }
});

router.afterEach((to) => {
  document.title = to.path;
});

export default router;
