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
    // 如果 showAnswer 为 true，返回“隐藏答案 ”加上倒计时数字，否则返回“显示答案”
      return this.showAnswer ? "隐藏答案 " + this.countDown : "显示答案";
    },
  },
  methods: {
    toggleAnswer() {
    // 做反向切换
      this.showAnswer = !this.showAnswer;
    },
  },
  watch: {
    // 和data中的 showAnswer 对应
    showAnswer(newVal, oldVal) {
    // 如果 showAnswer 变为 true，启动倒计时
      if (newVal) {
        this.countDown = 5;
      // 如果 已有计时器，先清除它
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
