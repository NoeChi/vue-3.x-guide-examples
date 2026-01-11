// 示例：使用 methods 处理事件
const app = Vue.createApp({
  data() {
    return {
      showAnswer: false,
    };
  },
  computed: {
    label() {
    // 如果 showAnswer 为 true，返回“隐藏答案”，否则返回“显示答案”
      return this.showAnswer ? "隐藏答案" : "显示答案";
    },
  },
  methods: {
    toggleAnswer() {
    // 做反向切换
      this.showAnswer = !this.showAnswer;
    },
  },
});
app.mount("#app");
