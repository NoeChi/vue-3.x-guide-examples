// 示例：生命周期
// beforeCreate -> created 
// created : data, computed, methods, watch 都可以使用了，但 DOM 還沒生成
const app = Vue.createApp({
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async fetchPosts() {
      const res = await fetch("./posts.json");
      const postsData = await res.json();
      this.posts = postsData;
    },
  },
  created() {
    this.fetchPosts();
  },
});
// beforeMount -> mounted
// mounted : DOM 已經生成，可以操作 DOM 了
const vm = app.mount("#app");
// beforeUpdate -> updated
// updated : data 更新後，DOM 也更新了
// beforeUnmount -> unmounted
// unmounted : Vue 實例被卸載了