<!-- Refs：获取 DOM 和子组件实例 -->
<template>
  <main>
    <div>
      <!-- 父組件透過 ref="autofocus" 取得子組件的引用 -->
      <AutoFocus ref="autofocus" />
    </div>
  </main>
</template>

<script>
import AutoFocus from "./components/AutoFocus.vue";
export default {
  components: {
    AutoFocus,
  },
  // 在 mounted() 中 等待5000ms 後 操作子組件 
  // 讀取子組件的資料：this.$refs.autofocus.inputText - 直接存取子組件的 inputText 資料
  // 呼叫子組件的方法：this.$refs.autofocus.blur() - 呼叫子組件暴露的 blur() 方法
  mounted() {
    setTimeout(() => {
      console.log(this.$refs.autofocus.inputText);
      this.$refs.autofocus.blur();
    }, 5000);
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
