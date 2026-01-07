<template>
  <main>
    <div>
      <p v-if="error">啊哦，我是错误的顶级组件了！</p>
      <!-- <AppList v-else :data="data" /> -->
      <template v-else>
        <AppList :data="data" />
        <AppButton>测试按钮</AppButton>
      </template>
    </div>
  </main>
</template>

<script>
import AppList from "./components/AppList.vue";
import AppButton from "./components/AppButton.vue";

export default {
  components: {
    AppList,
    AppButton,
  },
  data() {
    return {
      data: [1, 2, 3],
      error: false,
    };
  },
  errorCaptured() {
    this.error = true;
    return false;
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background-color: #0f141c;
  opacity: 1;
  background-image: radial-gradient(
    #212943 0.6000000000000001px,
    #0f141c 0.6000000000000001px
  );
  background-size: 12px 12px;
  color: white;
}

#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

ul {
  list-style: none;
}

li {
  line-height: 2em;
  font-size: 28px;
}
</style>
