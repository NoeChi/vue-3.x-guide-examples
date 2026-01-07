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
        <footer>
          <!-- 使用字符串 -->
          <!-- <button @click="$router.push(`/${blogPost.id}`)">查看全文</button>
           -->
          <!-- 使用配置对象 -->
          <!-- <button
            @click="
              $router.push({
                name: 'blogPost',
                params: { postId: blogPost.id },
              })
            "
          >
            查看全文
          </button> -->
          <button
            @click="
              $router.replace({
                name: 'blogPost',
                params: { postId: blogPost.id },
              })
            "
          >
            查看全文
          </button>
          <!-- <button
            @click="
              $router.go(-2)
            "
          >
            历史记录跳转
          </button> -->
        </footer>
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

button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 12px 18px;
  margin-top: 12px;
  border-radius: 4px;
  color: white;
}

footer {
  display: flex;
  justify-content: flex-end;
}
</style>
