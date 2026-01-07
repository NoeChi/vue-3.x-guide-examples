import { createApp } from "vue";
import { createStore, createLogger } from "vuex";
import App from "./App.vue";

const store = createStore({
  plugins: [createLogger()],
  state() {
    return {
      user: {
        username: "",
        gender: "",
        occupation: "",
      },
    };
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
