<template>
  <nav class="globalNav">
    <router-link to="/login">登录</router-link>
    <!-- <router-link to="/blogs">博客管理</router-link> -->
    <!-- <ButtonLink to="/blogs">博客管理</ButtonLink> -->
    <PrivateLink to="/blogs" private>博客管理</PrivateLink>
  </nav>
</template>
<script>
import ButtonLink from "../components/ButtonLink.vue";
import PrivateLink from "../components/PrivateLink.vue";

export default {
  components: { ButtonLink, PrivateLink },
};
</script>
<style scoped>
.globalNav {
  height: 200px;
  align-self: start;
  justify-self: center;
  padding: 24px;
}

.globalNav a {
  padding: 12px;
}
</style>
