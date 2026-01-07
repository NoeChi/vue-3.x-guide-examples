// 示例：如何创建组件
const app = Vue.createApp({});

app.component("WordCount", {
  data() {
    return {
      content: "",
    };
  },
  computed: {
    count() {
      return this.content.length;
    },
  },
  template: `
    <div>
      <input v-model="content" />
      <p>你共输入了 {{ count }} 个字符</p>
    </div>
  `,
});

const vm = app.mount("#app");
