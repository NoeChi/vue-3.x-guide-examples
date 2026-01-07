// 示例：再看 v-for
const app = Vue.createApp({
  data() {
    return {
      blogPost: {
        title: "Vue 3.x 完全指南",
        author: "张旭乾",
        pubDate: "2021-12-12",
      },
      todos: [
        {
          id: 1,
          content: "待办1",
        },
        {
          id: 2,
          content: "待办2",
        },
        {
          id: 3,
          content: "待办3",
        },
      ],
    };
  },
});
app.mount("#app");
