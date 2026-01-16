// 示例：如何创建组件
// 這邊不用給任何輸入給app，由下方的component來處理
const app = Vue.createApp({});
// 定義一個名為 WordCount 的組件
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
