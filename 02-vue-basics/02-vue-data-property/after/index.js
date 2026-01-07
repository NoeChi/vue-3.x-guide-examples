const app = Vue.createApp({
  data() {
    return {
      name: "眀昊", // 字符串
      // name: ["明昊", "北辰"],    // 数组
      // name: false,             // 布尔值
      // name: null,              // null
      // name: undefined,          // undefined
      // name: { firstName: "昊", lastName: "明" }, // 对象
      // name: 666,                                 // 数字
      // name: function () {                        // 函数
      //   return "明昊";
      // },
    };
  },
});
app.mount("#app");
