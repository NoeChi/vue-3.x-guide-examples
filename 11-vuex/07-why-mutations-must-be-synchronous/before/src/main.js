import { createApp } from "vue";
import { createStore, createLogger } from "vuex";
import App from "./App.vue";

const store = createStore({
  plugins: [createLogger()],
  state() {
    return {
      num: 1,
    };
  },
  mutations: {
    increment(state) {
      state.num++;
      // setTimeout(() => {
      // state.num++;
      // }, 1000);
    },
  },
  // actions: {
  //   increment({ commit }) {
  //     setTimeout(() => {
  //       commit("increment");
  //     }, 1000);
  //   },
  // },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
