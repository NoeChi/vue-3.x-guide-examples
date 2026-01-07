// 示例：通过 Vue 实例访问和修改应用的配置
const app = Vue.createApp({
  data() {
    return {
      msg: "你好！",
      name: "张三",
    };
  },
  computed: {
    greetings() {
      return `${this.msg} ${this.name}`;
    },
  },
  methods: {
    changeName(name) {
      this.name = name;
    },
  },
  watch: {
    name(newName) {
      console.log("watch 监听：" + newName);
    },
  },
});
const vm = app.mount("#app");
