<template>
  <div>
    <ul>
      <MessageListItem
        v-for="msg in messages"
        :key="msg.id"
        :msg="msg.content"
      ></MessageListItem>
    </ul>
  </div>
</template>
<script>
import { ref, watch, watchEffect } from "vue";
import MessageListItem from "./MessageListItem.vue";

export default {
  props: ["messages"],
  setup(props) {
    console.log(props.messages);

    // 这里 messages 是 ref 中的 value

    // const { messages } = props;

    watch(
      () => props.messages,
      // () => messages,
      (newMessages) => {
        console.log(newMessages.length);
      },
      {
        deep: true,
      }
    );

    return {};
  },
  components: { MessageListItem },
};
</script>
<style scoped>
div {
  display: grid;
  place-items: center;
  gap: 24px;
}

h2 {
  color: hsl(280deg, 50%, 70%);
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
