<template>
  <button @click="navigate">
    <slot />
  </button>
</template>
<script>
import { RouterLink, useLink } from "vue-router";
export default {
  props: {
    ...RouterLink.props,
    // 其它额外属性
  },
  setup(props) {
    // 还有 route, href, isActive, isExactActive，与 router-link v-slot 暴露的 API 一致
    const { navigate } = useLink(props);

    return { navigate };
  },
};
</script>
<style scoped></style>
