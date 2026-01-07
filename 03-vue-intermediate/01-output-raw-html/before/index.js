// 示例：v-html：在模板中输出原始的 HTML 代码
const app = Vue.createApp({
  data() {
    return {
      content: `<p>这是一段<span style="color: hsl(0, 80%, 70%);">HTML</span>代码</p>`,
    };
  },
});
app.mount("#app");
