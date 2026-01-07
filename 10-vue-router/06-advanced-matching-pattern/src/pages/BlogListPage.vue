<template>
  <main>
    <div className="blogPosts">
      <article v-for="blogPost in blogPosts" :key="blogPost.id">
        <h2>
          <router-link :to="`/${blogPost.id}`">{{
            blogPost.title
          }}</router-link>
        </h2>
        <p>{{ blogPost.body.substring(0, 100) + "..." }}</p>
      </article>
    </div>
  </main>
</template>
<script>
import { getAllPosts } from "../data/blogPosts";

export default {
  data() {
    return {
      blogPosts: [],
    };
  },
  created() {
    this.blogPosts = getAllPosts();
  },
};
</script>
<style scoped>
.blogPosts {
  max-width: 600px;
  display: grid;
  row-gap: 48px;
}

h2 {
  margin-bottom: 12px;
  font-size: 32px;
}

h2 a {
  color: hsl(280deg, 100%, 80%);
  text-decoration: none;
}
</style>
