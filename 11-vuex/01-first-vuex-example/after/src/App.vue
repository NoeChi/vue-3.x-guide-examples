<template>
  <main>
    <button @click="changeColor">生成随机颜色</button>
  </main>
</template>
<script>
export default {
  computed: {
    bgColor() {
      const colors = this.$store.state.color;
      return `rgb(${colors.join(", ")})`;
    },
  },
  methods: {
    changeColor() {
      this.$store.commit("randomColor");
    },
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

/* #app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
} */

main {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
  background-color: v-bind(bgColor);
}

button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 1.5em 1.4em;
  font-size: 16px;
  border-radius: 4px;
  color: white;
}
</style>
