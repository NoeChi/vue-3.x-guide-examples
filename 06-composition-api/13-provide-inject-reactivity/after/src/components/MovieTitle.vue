<template>
  <h2>{{ movie.title }}</h2>
  <!-- <h2>{{ title }}</h2> -->
</template>
<script>
import { inject } from "vue";
export default {
  setup() {
    // inject 第2个参数为默认值
    const movie = inject("movie");

    return { movie };

    // const title = inject("title");
    // return { title };
  },
};
</script>
<style scoped>
h2 {
  color: hsl(240deg, 100%, 80%);
}
</style>
