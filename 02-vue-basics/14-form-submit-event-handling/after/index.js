// 示例：表单事件处理
const app = Vue.createApp({
  data() {
    return {
      username: "",
      gender: "",
      interests: [],
      occupation: "",
      intro: "",
    };
  },
  // 处理表单提交事件 
  methods: {
    handleSubmit(e) {
      // e.preventDefault();  // 设置了修饰符就不需要了
      // form @submit.prevent="handleSubmit"
      console.log(
        this.username,
        this.gender,
        this.interests,
        this.occupation,
        this.intro
      );
    },
  },
});
app.mount("#app");
