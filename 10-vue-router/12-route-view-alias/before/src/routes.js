import HomePage from "./pages/HomePage.vue";
import NavBar from "./pages/NavBar.vue";
import FooterView from "./pages/FooterView.vue";
import FooterViewAbout from "./pages/FooterViewAbout.vue";
import AboutMe from "./pages/AboutMe.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
  },
  {
    path: "/about",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
