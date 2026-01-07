<template>
  <article>
    <h2>
      {{ blogPost.title }}
    </h2>
    <p>{{ blogPost.body }}</p>
    <footer>
      <router-link to="/">回到主页</router-link>
    </footer>
  </article>
</template>
<script>
import { getBlogPostById } from "../data/blogPosts";

export default {
  data() {
    return { blogPost: {} };
  },
  created() {
    this.blogPost = getBlogPostById(this.$route.params.postId);
  },
  watch: {
    "$route.params": {
      handler(params, oldParams) {
        this.blogPost = getBlogPostById(params.postId);
      },
      immediate: true,
    },
  },
};
</script>
<style scoped>
article {
  max-width: 700px;
}

footer {
  margin-top: 48px;
}

footer a {
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 1em 1.4em;
  border-radius: 4px;
  color: white;
}
</style>
