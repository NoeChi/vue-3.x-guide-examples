<template>
  <div>
    <input type="text" placeholder="搜索消息" v-model="searchTerm" />
    <ul>
      <li v-for="msg in searchedMessages" :key="msg.id">{{ msg.content }}</li>
    </ul>
  </div>
</template>
<script>
import { ref, computed, watch } from "vue";

export default {
  setup() {
    const messages = ref([
      { id: 1, content: "这是一条消息提醒1" },
      { id: 2, content: "这是一条消息提醒2" },
      { id: 3, content: "这是一条消息提醒3" },
      { id: 4, content: "这是一条消息提醒4" },
    ]);

    const searchTerm = ref("");

    const searchedMessages = computed(() => {
      if (searchTerm.value === "") return messages.value;
      return messages.value.filter((msg) => {
        return msg.content.includes(searchTerm.value);
      });
    });

    watch(searchTerm, (newVal, oldVal) => {
      console.log(messages.value);
      console.log("搜索词：", newVal, oldVal);
    });

    // 直接监听 searchTerm 不可以
    // watch(searchTerm.value, (newVal, oldVal) => {
    //   console.log("搜索词：", newVal, oldVal);
    // });
    // 需要使用一个函数
    // watch(
    //   () => searchTerm.value,
    //   (newVal, oldVal) => {
    //     console.log("搜索词：", newVal, oldVal);
    //   }
    // );

    return { searchTerm, searchedMessages };
  },
};
</script>
<style scoped>
div {
  display: grid;
  place-items: center;
  gap: 24px;
}

p {
  margin: 12px 0 24px 0;
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
