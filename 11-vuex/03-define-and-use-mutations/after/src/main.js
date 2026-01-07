import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import { INCREMENT } from "./mutation_types";

const store = createStore({
  state() {
    return {
      num: 1,
      arr: [1, 2, 3],
      user: {
        id: 1,
        name: "John",
        age: 25,
      },
    };
  },
  mutations: {
    // increment(state) {
    //   state.num++;
    // },
    [INCREMENT](state) {
      state.num++;
    },
    pushToArr(state, payload) {
      state.arr.push(payload.ele);
    },
    changeUserName(state, payload) {
      state.user.name = payload.name;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
