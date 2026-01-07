<template>
  <div class="card">
    <!-- <MovieItem :title="movie.title" :description="movie.description" /> -->
    <MovieItem :description="movie.description" />
  </div>
</template>
<script>
import MovieItem from "./MovieItem.vue";
import { ref, provide, toRef } from "vue";
export default {
  components: {
    MovieItem,
  },
  setup() {
    const movie = ref({
      title: "电影",
      description: "这是一段电影的描述",
    });

    provide("movie", movie);

    // provide("title", toRef(movie.value, "title"));

    setTimeout(() => {
      movie.value.title = "电影-修改";
    }, 1500);

    return { movie };
  },
};
</script>
<style scoped>
.card {
  padding: 12px;
  border: 1px solid hsl(240deg, 100%, 80%);
  border-radius: 4px;
}
</style>
