import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      color: [100, 100, 100],
    };
  },
  mutations: {
    randomColor(state) {
      state.color = [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
      ];
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
