// 示例：使用 watch 监听数据变化
const app = Vue.createApp({
  data() {
    return {
      showAnswer: false,
      countDown: 5,
      timer: null,
    };
  },
  computed: {
    label() {
      return this.showAnswer ? "隐藏答案 " + this.countDown : "显示答案";
    },
  },
  methods: {
    toggleAnswer() {
      this.showAnswer = !this.showAnswer;
    },
  },
  watch: {
    showAnswer(newVal, oldVal) {
      if (newVal) {
        this.countDown = 5;
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
        // 5秒后关闭答案
        this.timer = setInterval(() => {
          this.countDown -= 1;
          if (this.countDown === 0) {
            this.showAnswer = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
  },
});
app.mount("#app");
