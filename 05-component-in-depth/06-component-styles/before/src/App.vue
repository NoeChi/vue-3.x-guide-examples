<template>
  <main>
    <div>
      <p>
        这是 App.vue 中的样式，它的 style 不带 scoped，所以会影响全局
      </p>
    </div>
  </main>
</template>

<script>
export default {};
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

p {
  background-color: hsl(200deg, 100%, 60%, 0.7);
  padding: 2em;
  border-radius: 8px;
}
</style>
