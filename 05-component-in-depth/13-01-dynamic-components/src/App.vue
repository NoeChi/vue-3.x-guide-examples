<template>
  <main>
    <div>
      <!-- 动态 HTML 元素  -->
      <TextHeading level="1">一级标题</TextHeading>
      <TextHeading level="2">二级标题</TextHeading>
      <TextHeading level="3">三级标题</TextHeading>
      <TextHeading level="4">四级标题</TextHeading>
      <TextHeading level="5">五级标题</TextHeading>
      <TextHeading level="6">六级标题</TextHeading>
    </div>
  </main>
</template>

<script>
import TextHeading from "./components/TextHeading.vue";
export default {
  components: {
    TextHeading,
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
</style>
