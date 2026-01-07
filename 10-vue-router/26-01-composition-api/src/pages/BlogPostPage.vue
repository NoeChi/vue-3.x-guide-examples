<template>
  <article>
    <h2>
      {{ blogPost.title }}
    </h2>
    <p>{{ blogPost.body }}</p>
    <footer>
      <router-link to="/">回到主页</router-link>
      <router-link :to="`/${blogPost.id - 1}`">上一篇</router-link>
      <!-- <router-link :to="`/${blogPost.id + 1}`">下一篇</router-link> -->
      <!-- <button @click="next">下一篇</button> -->
      <ButtonLink :to="`/${blogPost.id + 1}`">下一篇</ButtonLink>
    </footer>
  </article>
</template>
<script>
import { getBlogPostById } from "../data/blogPosts";
import ButtonLink from "../components/ButtonLink.vue";
import { ref, watchEffect } from "vue";
import {
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
  useRoute,
  useRouter,
} from "vue-router";

export default {
  components: { ButtonLink },
  setup() {
    const blogPost = ref({});

    const route = useRoute();

    watchEffect(() => {
      blogPost.value = getBlogPostById(route.params.postId);
    });

    const router = useRouter();
    function next() {
      router.push(`/${blogPost.value.id + 1}`);
    }

    onBeforeRouteUpdate((to, from) => {
      console.log(to, from);
    });

    // onBeforeRouteLeave

    return { blogPost, next };
  },

  // 在 setup 之前执行，所以还需要配置式的声明
  // beforeRouteEnter: (to, from) {

  // }
};
</script>
<style scoped>
article {
  max-width: 700px;
}

footer {
  margin-top: 48px;
  display: flex;
  gap: 24px;
}

footer a {
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 0.9em 1.4em;
  border-radius: 4px;
  color: white;
}
</style>
