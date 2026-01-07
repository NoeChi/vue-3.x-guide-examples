<template>
  <li>{{ msg }}</li>
</template>
<script>
import { ref, watch, watchEffect, toRefs } from "vue";

export default {
  props: ["msg"],
  setup(props) {
    // console.log(props.msg);

    // watch(
    //   () => props.msg,
    //   (newMsg) => {
    //     console.log(newMsg);
    //   }
    // );

    // console.log(props);

    // const { msg } = props;

    // console.log(msg);

    // watch(
    //   () => msg,
    //   (newMsg) => {
    //     console.log(newMsg);
    //   }
    // );

    const { msg } = toRefs(props);

    watch(msg, (newMsg) => {
      console.log(newMsg);
    });

    return {};
  },
};
</script>
<style scoped>
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
