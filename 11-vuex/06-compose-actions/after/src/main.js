import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import { users } from "./data/users";
import { blogs } from "./data/blogs";

const store = createStore({
  state() {
    return {
      users: [],
      blogs: [],
    };
  },
  mutations: {
    loadUsers(state, payload) {
      state.users = payload.users;
    },
    loadBlogs(state, payload) {
      state.blogs = payload.blogs;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      commit("loadUsers", { users });
    },
    async fetchUsersAndBlogs({ dispatch, commit }) {
      await dispatch("fetchUsers");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      commit("loadBlogs", { blogs });
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
