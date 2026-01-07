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
    meta: { private: true }, // 3. 合并，值必须一致，否则重复的属性，会以最后一个属性值为准，子路由的 meta 属性可以省略
    children: [
      {
        path: "new",
        components: {
          default: AddBlog,
          rightSideBar: RightSidebar,
        },
        // meta: { private: true },
        // meta: { private2: true }, // 3. 合并
      },
      {
        path: "details",
        component: BlogDetails,
        // meta: { private: true },
        // meta: { private: false },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const loggedIn = false;

router.beforeEach((to, from) => {
  // 1.  打印 to.matched
  console.log(to);

  // 2. 判断匹配的路由是否是私密路由
  // if (to.matched.some((record) => record.meta.private) && !loggedIn) {
  //   return "/login";
  // }
  // 3. meta 合并
  if (to.meta.private && !loggedIn) {
    return "/login";
  }
});

export default router;
