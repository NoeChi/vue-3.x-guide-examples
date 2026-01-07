import { createApp } from "vue";
import App from "./App.vue";
import PaginationMixin from "./mixins/PaginationMixin";

const app = createApp(App);

app.mixin(PaginationMixin);

app.mixin({
  siteTitle: "我的 Vue 应用",
  computed: {
    siteTitle() {
      return this.$options.siteTitle;
    },
  },
});

app.mount("#app");
