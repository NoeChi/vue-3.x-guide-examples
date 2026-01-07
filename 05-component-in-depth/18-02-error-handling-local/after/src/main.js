import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// app.config.errorHandler = (err, vm, info) => {
//   console.log(err);
//   console.log(vm);
//   console.log(info);
// };

app.mount("#app");
