<template>
  <main>
    <div>
      <MessageItem sender="张三" msg="你好呀!" time="19:38" />
      <MessageItem sender="李四" msg="Hi!" time="19:40" />
      <MessageItem sender="王五" msg="最近怎么样？" time="19:42" />
    </div>
  </main>
</template>

<script>
import MessageItem from "./components/MessageItem.vue";
export default {
  components: {
    MessageItem,
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
  background-image: radial-gradient(#212943 0.6000000000000001px,
      #0f141c 0.6000000000000001px);
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

h1 {
  margin-bottom: 2em;
}
</style>
