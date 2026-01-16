<template>
  <div>
    <a :href="link">{{ title }}</a>
  </div>
</template>
<script>
export default {
  props: ["link", "title"],
  // 不繼承非props的屬性，可以傳入但不使用
  inheritAttrs: false,
  // 使用$attrs來取得非props的屬性
  // 這邊看的是class屬性
  mounted() {
    console.log(this.$attrs.class);
  },
};
</script>
