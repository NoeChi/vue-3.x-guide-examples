import { createApp } from "vue";
import { createStore, createLogger } from "vuex";
import App from "./App.vue";
import { blogs } from "./blogs";
import { users } from "./users";

const store = createStore({
  plugins: [createLogger()],
  modules: {
    users,
    blogs,
  },
  state() {
    return {
      limit: 0,
    };
  },
  mutations: {
    updateLimit(state, payload) {
      state.limit = payload.limit;
    },
  },
  actions: {
    updateLimitAsync({ commit }, payload) {
      setTimeout(() => {
        commit("updateLimit", payload);
      }, 1000);
    },
  },
  getters: {
    limitStr(state) {
      return "限" + state.limit + "条";
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
