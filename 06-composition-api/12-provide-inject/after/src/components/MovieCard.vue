<template>
  <div class="card">
    <!-- <MovieItem :title="movie.title" :description="movie.description" /> -->
    <MovieItem :description="movie.description" />
  </div>
</template>
<script>
import MovieItem from "./MovieItem.vue";
import { provide } from "vue";
export default {
  components: {
    MovieItem,
  },
  setup() {
    const movie = {
      title: "电影",
      description: "这是一段电影的描述",
    };

    provide("title", movie.title);

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
