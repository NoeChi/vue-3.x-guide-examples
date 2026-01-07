// 示例：使用 v-bind 绑定 data 到 html 属性中
const app = Vue.createApp({
  data() {
    return {
      link: "https://zxuqian.cn",
    };
  },
});
app.mount("#app");
