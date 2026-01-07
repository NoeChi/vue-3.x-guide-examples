import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      users: [
        {
          id: 1,
          name: "John",
          age: 25,
        },
        {
          id: 2,
          name: "Jane",
          age: 26,
        },
        {
          id: 3,
          name: "Jack",
          age: 27,
        },
        {
          id: 4,
          name: "Jill",
          age: 28,
        },
      ],
    };
  },
  getters: {
    usersOlderThan26(state) {
      return state.users.filter((user) => user.age > 26);
    },
    numberOfUsersOlderThan26(state, getters) {
      return getters.usersOlderThan26.length;
    },
    usersOlderThan(state) {
      // 这种情况不会缓存结果
      return (age) => state.users.filter((user) => user.age > age);
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
