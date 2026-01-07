<template>
  <main>
    <div>
      <!-- <PropTypes
        :num="10"
        :bool="true"
        :obj="{ name: '张三' }"
        :array="[1, 2, 3, 4]"
      /> -->
      <TypeValidation name="张三" :age="-20" />
    </div>
  </main>
</template>

<script>
import PropTypes from "./components/PropTypes.vue";
import TypeValidation from "./components/TypeValidation.vue";

export default {
  components: {
    PropTypes,
    TypeValidation,
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
