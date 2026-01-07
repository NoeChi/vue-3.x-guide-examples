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
});

const app = createApp(App);

app.use(store);

app.mount("#app");
