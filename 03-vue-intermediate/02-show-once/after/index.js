// 示例：v-once：只渲染1次 HTML 模板
const app = Vue.createApp({
  data() {
    return {
      list: [1, 2, 3],
    };
  },
});
app.mount("#app");
