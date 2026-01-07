// 示例：计算属性和方法的区别
const app = Vue.createApp({
  data() {
    return {
      blogPosts: [
        "Vue 3.0x 入门实战",
        "Vue 3.x 完全指南",
        "React 18 新特性介绍",
        "JavaScript 基础语法概览",
      ],
      counter: 0,
    };
  },
  computed: {
    vueBlogs() {
      console.log("调用了 vueBlogs() 计算属性函数");
      return this.blogPosts.filter((blog) => blog.includes("Vue"));
    },
    // 调用方法
    // vueBlogs() {
    //   console.log("调用了 vueBlogs() 计算属性函数");
    //   return this.getVueBlogs(20);
    // },
  },
  methods: {
    // getVueBlogs() {
    //   console.log("调用了 vueBlogs() 方法");
    //   return this.blogPosts.filter((blog) => blog.includes("Vue"));
    // },
    // 带参数的
    // getVueBlogs(count) {
    //   console.log("调用了 vueBlogs() 方法");
    //   return this.blogPosts
    //     .filter((blog) => blog.includes("Vue"))
    //     .slice(0, count);
    // },
  },
});
app.mount("#app");
