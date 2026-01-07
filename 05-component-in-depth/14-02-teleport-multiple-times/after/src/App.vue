<template>
  <main>
    <div class="container">
      <button @click="msgs.push(`这是一段消息${msgs.length + 1}`)">
        添加消息
      </button>
      <AlertBox v-for="msg in msgs">{{ msg }}</AlertBox>
    </div>
  </main>
</template>

<script>
import AlertBox from "./components/AlertBox.vue";
export default {
  components: {
    AlertBox,
  },
  data() {
    return {
      msgs: [],
    };
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

button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 12px 18px;
  margin-top: 12px;
  border-radius: 4px;
  color: white;
}

.container {
  position: relative;
  /* border: 1px solid hsl(280deg, 100%, 50%); */
}

#messages {
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
}
</style>
