<template>
  <div>
    <ul>
      <li v-for="msg in messages" :key="msg.id">{{ msg.content }}</li>
    </ul>
    <button @click="messages = []">删除全部</button>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const messages = ref([
      { id: 1, content: "这是一条消息提醒1" },
      { id: 2, content: "这是一条消息提醒2" },
      { id: 3, content: "这是一条消息提醒3" },
      { id: 4, content: "这是一条消息提醒4" },
    ]);

    console.log(messages.value);

    return { messages };
  },
};
</script>
<style scoped>
div {
  display: grid;
  place-items: center;
}

ul {
  list-style: none;
  display: grid;
  gap: 24px;
}

li {
  display: flex;
  align-items: center;
  gap: 12px;
}

li::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: hsl(280deg, 100%, 70%);
  border-radius: 100%;
}
</style>
