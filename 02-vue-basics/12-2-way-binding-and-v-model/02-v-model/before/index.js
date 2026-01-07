// 示例：双向绑定
const app = Vue.createApp({
  data() {
    return {
      username: "",
    };
  },
  methods: {
    handleInput(e) {
      this.username = e.target.value;
    },
    resetUsername() {
      this.username = "";
    },
  },
});
app.mount("#app");
