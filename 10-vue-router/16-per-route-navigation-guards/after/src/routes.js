import AddBlog from "./pages/AddBlog.vue";
import BlogDetails from "./pages/BlogDetails.vue";
import BlogManagement from "./pages/BlogManagement.vue";
import RightSidebar from "./pages/RightSidebar.vue";
import LoginPage from "./pages/LoginPage.vue";
import HomePage from "./pages/HomePage.vue";

import { createRouter, createWebHistory } from "vue-router";

const loggedIn = true;

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
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
        path: "details/:postId",
        component: BlogDetails,
        beforeEnter(to, from) {
          console.log(to);
          console.log(from);
        },
      },
    ],
    // beforeEnter(to, from) {
    //   if (!loggedIn) {
    //     return "/login";
    //   }
    // },
    beforeEnter: [authBlogsPage],
  },
];

function authBlogsPage(to, from) {
  if (!loggedIn) {
    return "/login";
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
