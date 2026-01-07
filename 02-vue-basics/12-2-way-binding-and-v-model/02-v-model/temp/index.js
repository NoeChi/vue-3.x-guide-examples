// 示例：双向绑定
const app = Vue.createApp({
  data() {
    return {
      username: "",
    };
  },
  methods: {
    resetUsername() {
      this.username = "";
    },
  },
});
app.mount("#app");
