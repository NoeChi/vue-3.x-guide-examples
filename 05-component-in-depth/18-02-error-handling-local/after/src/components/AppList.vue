<template>
  <p v-if="error">啊哦，出错了！</p>
  <ul v-else>
    <AppListItem v-for="item in data">{{ item }}</AppListItem>
  </ul>
</template>
<script>
import AppListItem from "./AppListItem.vue";
export default {
  props: ["data"],
  data() {
    return {
      error: false,
    };
  },
  components: {
    AppListItem,
  },
  errorCaptured(err, instance, info) {
    // console.log(err);
    // console.log(instance);
    // console.log(info);

    this.error = true;
    // return false;
  },
};
</script>
<style scoped></style>
