import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// app.directive("fsize", {
//   mounted(el, binding) {
//     el.style.fontSize = binding.value + "px";
//   },
//   // 这样在 data 更新时，才会触发指令更新
//   updated(el, binding) {
//     el.style.fontSize = binding.value + "px";
//   },
// });

// 如果 mounted 和 updated 的代码相同，可以合并为一个：
// app.directive("fsize", (el, binding) => {
//   el.style.fontSize = binding.value + "px";
// });

// 带有 args：
app.directive("fsize", (el, binding) => {
  el.style.fontSize = binding.value + (binding.arg || "px");
});

app.mount("#app");
