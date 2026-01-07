<template>
  <div>
    <p>当前页：{{ currentPage }}</p>
    <button v-for="n in totalPage" @click="changePage(n)">
      {{ n }}
    </button>
  </div>
</template>
<script>
import PaginationMixin from "../mixins/PaginationMixin";

export default {
  mixins: [PaginationMixin],
};
</script>
<style scoped></style>
