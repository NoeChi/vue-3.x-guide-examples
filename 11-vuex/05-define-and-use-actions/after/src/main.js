import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import { users } from "./data/users";

const store = createStore({
  state() {
    return {
      users: [],
      loading: false,
    };
  },
  mutations: {
    loadUsers(state, payload) {
      state.users = payload.users;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    // fetchUsers(context) {
    //   setTimeout(() => {
    //     context.commit("loadUsers", { users });
    //   }, 2000);
    // },
    fetchUsers({ commit }, payload) {
      commit("setLoading", true);
      setTimeout(() => {
        commit("loadUsers", { users: users.slice(0, payload.limit) });
        commit("setLoading", false);
      }, 2000);
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
