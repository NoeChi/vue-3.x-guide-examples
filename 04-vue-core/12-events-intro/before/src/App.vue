<template>
  <main>
    <div>
      <BlogPostItem
        v-for="post in posts"
        :key="post.id"
        v-bind="post"
      />
    </div>
  </main>
</template>

<script>
import BlogPostItem from "./components/BlogPostItem.vue";

export default {
  components: {
    BlogPostItem,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Post 1", link: "https://some.url.com" },
        { id: 2, title: "Post 2", link: "https://some.url.com" },
        { id: 3, title: "Post 3", link: "https://some.url.com" },
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background-color: #0f141c;
  opacity: 1;
  background-image: radial-gradient(
    #212943 0.6000000000000001px,
    #0f141c 0.6000000000000001px
  );
  background-size: 12px 12px;
  color: white;
}

#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

a {
  color: hsl(250deg, 100%, 90%);
  text-decoration: none;
}
</style>
