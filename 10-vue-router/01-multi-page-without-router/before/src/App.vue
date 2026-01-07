<template></template>

<script setup>
import PageOne from "./components/PageOne.vue";
import PageTwo from "./components/PageTwo.vue";
import PageThree from "./components/PageThree.vue";
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

nav {
  padding: 24px 0;
}

nav a {
  font-size: 18px;
  color: white;
  margin-right: 24px;
  /* cursor: pointer; */
}

/* button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 0.5em 1.4em;
  border-radius: 4px;
  color: white;
} */
</style>
