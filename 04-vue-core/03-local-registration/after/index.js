// 示例：局部注册组件
import ComponentA from "./components/ComponentA.js";
import ComponentC from "./components/ComponentC.js";

const app = Vue.createApp({
  components: {
    ComponentA, // 等价于 ComponentA: ComponentA
    ComponentC,
  },
});
const vm = app.mount("#app");
