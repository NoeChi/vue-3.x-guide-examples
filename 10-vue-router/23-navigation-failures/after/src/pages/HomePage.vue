<template>
  <nav class="globalNav">
    <router-link to="/login">登录</router-link>
    <button @click="redirectToManagementPage">博客管理</button>
  </nav>
</template>
<script>
import { isNavigationFailure, NavigationFailureType } from "vue-router";
export default {
  methods: {
    async redirectToManagementPage() {
      // 1. aborted
      // const failure = await this.$router.push("/blogs");
      // console.log(failure); // Error: Navigation aborted from "/" to "/blogs" via a navigation guard.
      // console.log(isNavigationFailure(failure)); // true
      // console.log(isNavigationFailure(failure, NavigationFailureType.aborted)); // true
      // console.log(failure.to, failure.from);

      // alert("请先登录"); // 实际开发中，可以用一个用户体验友好的弹窗
      // 2. cancelled
      // new Promise(async (resolve) => {
      //   const failure = await this.$router.push("/blogs");
      //   console.log(failure);
      //   console.log(
      //     isNavigationFailure(failure, NavigationFailureType.cancelled)
      //   ); // true
      //   resolve();
      // });
      // this.$router.push("/login");
      // 3. duplicated
      // const failure = await this.$router.push("/");
      // console.log(failure);
      // console.log(
      //   isNavigationFailure(failure, NavigationFailureType.duplicated)
      // );
      // 4. redirect
      await this.$router.push("/blogs");
      console.log(this.$router.currentRoute.value);
    },
  },
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
