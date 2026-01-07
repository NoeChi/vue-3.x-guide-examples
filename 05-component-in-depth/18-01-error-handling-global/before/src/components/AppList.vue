<template>
  <ul>
    <AppListItem v-for="item in data">{{ item }}</AppListItem>
  </ul>
</template>
<script>
import AppListItem from "./AppListItem.vue";
export default {
  props: ["data"],
  components: {
    AppListItem,
  },
};
</script>
<style scoped></style>
