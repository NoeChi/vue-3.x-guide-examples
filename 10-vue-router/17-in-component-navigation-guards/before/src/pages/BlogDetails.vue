<template>
  <article>
    <h2>{{ blog.title }}</h2>
    <p>{{ blog.body }}</p>
  </article>
</template>
<script>
import { getBlogPostById } from "../data/blogPosts";
export default {
  data() {
    return {
      blog: {},
    };
  },
};
</script>
<style scoped>
article {
  padding: 48px;
}
</style>
