<template>
  <main>
    <div>
      <ButtonWithProps :onclick="handleClick" />
      <ButtonWithEmits @customClick="handleClick" />
    </div>
  </main>
</template>

<script>
import ButtonWithProps from "./components/ButtonWithProps.vue";
import ButtonWithEmits from "./components/ButtonWithEmits.vue";

export default {
  components: {
    ButtonWithProps,
    ButtonWithEmits,
  },
  methods: {
    handleClick(value) {
      alert(value);
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

#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}
</style>
