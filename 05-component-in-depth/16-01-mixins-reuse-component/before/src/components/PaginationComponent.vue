<template>
  <div>
    <p>当前页：{{ currentPage }}</p>
    <button v-for="n in totalPage" @click="changePage(n)">
      {{ n }}
    </button>
  </div>
</template>
<script>
export default {
  props: ["totalPage", "defaultCurrentPage"],
  data() {
    return {
      currentPage: this.defaultCurrentPage,
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
  },
};
</script>
<style scoped></style>
