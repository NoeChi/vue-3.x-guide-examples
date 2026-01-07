// 示例：使用 computed 处理稍复杂的业务逻辑
const app = Vue.createApp({
  data() {
    return {
      showAnswer: false,
    };
  },
  computed: {
    label() {
      return this.showAnswer ? "隐藏答案" : "显示答案";
    },
  },
});
app.mount("#app");
