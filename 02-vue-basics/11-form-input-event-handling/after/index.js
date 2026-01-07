// 示例：表单输入控件事件处理
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
  },
});
app.mount("#app");
