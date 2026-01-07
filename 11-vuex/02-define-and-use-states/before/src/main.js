import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      num: 1,
      str: "string",
      bool: true,
      arr: [1, 2, 3],
      user: {
        id: 1,
        name: "John",
        age: 25,
      },
    };
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
