<template>
  <main>
    <div>
      <p>这是 App.vue 中的样式，它的 style 不带 scoped，所以会影响全局</p>
      <ScopedStyle />
      <SassStyle />
      <CssModules />
    </div>
  </main>
</template>

<script>
import "./style.css";
import ScopedStyle from "./components/ScopedStyle.vue";
import SassStyle from "./components/SassStyle.vue";
import CssModules from "./components/CssModules.vue";

export default {
  components: {
    ScopedStyle,
    SassStyle,
    CssModules,
  },
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

p {
  background-color: hsl(200deg, 100%, 60%, 0.7);
  padding: 2em;
  border-radius: 8px;
}
</style>
