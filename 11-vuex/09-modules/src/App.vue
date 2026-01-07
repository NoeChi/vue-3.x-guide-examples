<template>
  <main>
    <div>
      <p>
        根模块 limit: <span>{{ limit }}</span>
      </p>
      <button @click="updateLimit({ limit: limit + 1 })">+1</button
      ><button
        @click="updateLimit({ limit: limit - 1 })"
        style="margin-left: 12px"
      >
        -1
      </button>
      <p>
        根模块 limitStr: <span>{{ limitStr }}</span>
      </p>
      <p>
        users 模块 users: <span>{{ users.list }}</span>
      </p>
      <p>
        users 模块 limitedUserCountStr: <span>{{ limitedUserCountStr }}</span>
      </p>
      <p>
        users 模块 limitedUsers: <span>{{ limitedUsers }}</span>
      </p>
      <button @click="addUser({ user: 'u' + (users.list.length + 1) })">
        添加用户
      </button>
      <button
        @click="addUserAsync({ user: 'u' + (users.list.length + 1) })"
        style="margin-left: 12px"
      >
        添加用户（异步）
      </button>
      <p>
        blogs 模块 blogs: <span>{{ blogs.list }}</span>
      </p>
      <p>
        blogs 模块 limitedBlogCountStr: <span>{{ limitedBlogCountStr }}</span>
      </p>
      <p>
        blogs 模块 limitedBlogs: <span>{{ limitedBlogs }}</span>
      </p>
      <button @click="addBlog({ blog: 'blog' + (blogs.list.length + 1) })">
        添加博客
      </button>
    </div>
  </main>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["limit", "users", "blogs"]),
    ...mapGetters([
      "limitStr",
      "limitedBlogCountStr",
      "limitedUserCountStr",
      "limitedUsers",
      "limitedBlogs",
    ]),
  },
  methods: {
    ...mapMutations(["updateLimit", "addUser", "addBlog"]),
    ...mapActions(["addUserAsync"]),
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

/* #app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
} */

main {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

p {
  margin: 12px 0;
}

p > span {
  color: hsl(280deg, 100%, 80%);
}

button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 0.8em 1.4em;
  font-size: 16px;
  border-radius: 4px;
  color: white;
  margin-bottom: 36px;
  margin-top: 8px;
}
</style>
