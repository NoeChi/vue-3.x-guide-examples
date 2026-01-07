<template>
  <main>
    <div class="container">
      <!-- <div> -->
      <TransitionGroup name="fade" tag="div">
        <RectangleBox
          v-for="(num, index) in nums"
          :key="num"
          @click="nums.splice(index, 1)"
          >{{ num }}</RectangleBox
        >
      </TransitionGroup>
      <!-- </div> -->

      <button @click="nums.splice(next % nums.length, 0, next++)">
        添加元素
      </button>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import RectangleBox from "./components/RectangleBox.vue";

const next = ref(7);

const nums = ref([0, 1, 2, 3, 4, 5, 6]);
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

.container {
  display: grid;
  gap: 48px;
}

.container > div {
  display: flex;
  gap: 24px;
}

.container button {
  justify-self: start;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
  transform: rotate(0);
}
.fade-leave-to {
  opacity: 0;
  transform: rotate(360deg);
}

.fade-enter-active {
  transition: all 0.7s ease-in-out;
}

.fade-leave-active {
  transition: all 0.3s ease-in;
}

.fade-move {
  transition: transform 0.3s ease-out;
}

button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(200deg, 50%, 50%),
    hsl(240deg, 50%, 50%)
  );
  padding: 12px 18px;
  margin-top: 12px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}
</style>
