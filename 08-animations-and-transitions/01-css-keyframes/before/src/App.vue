<template>
  <main>
    <div class="container">
      <div class="box"></div>
    </div>
  </main>
</template>
<script setup></script>

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

.container {
  display: grid;
  justify-items: center;
}

input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
  margin-top: 64px;
}

.box {
  width: 100px;
  height: 100px;
  background: linear-gradient(
    45deg,
    hsl(240deg, 60%, 50%),
    hsl(300deg, 90%, 50%)
  );
  padding: 0.5em 1.4em;
  border-radius: 4px;
  color: white;
}
</style>
