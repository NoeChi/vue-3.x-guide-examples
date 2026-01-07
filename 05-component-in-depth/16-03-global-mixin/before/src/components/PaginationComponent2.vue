<template>
  <div>
    <a v-for="n in totalPage" @click.prevent="changePage(n)">
      {{ n }}
    </a>
    <p>当前页：{{ currentPage }}</p>
    <p v-if="showTotal">总计：{{ totalPage }}</p>
  </div>
</template>
<script>
import PaginationMixin from "../mixins/PaginationMixin";

export default {
  mixins: [PaginationMixin],
  props: ["showTotal"], // 会和其它 props 合并
  data() {
    return {
      currentPage: 1,
    };
  },
  mounted() {
    console.log("执行 PaginationComponent2 中的 mounted 方法");
  },
};
</script>
<style scoped>
div {
  padding: 24px 0;
}

p {
  margin-top: 12px;
}

a {
  color: hsl(280deg, 100%, 80%);
  width: 24px;
  display: inline-block;
  text-decoration: underline;
  cursor: pointer;
}
</style>
