import PageOne from "./components/PageOne.vue";
import PageTwo from "./components/PageTwo.vue";
import PageThree from "./components/PageThree.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: PageOne,
  },
  {
    path: "/2",
    component: PageTwo,
  },
  {
    path: "/3",
    component: PageThree,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
