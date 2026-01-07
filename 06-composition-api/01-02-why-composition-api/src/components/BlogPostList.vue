<template>
  <div>
    <div class="options">
      <input type="text" v-model="searchTerm" placeholder="搜索标题..." />
      <select v-model="category">
        <option value="all">全部</option>
        <option value="vue">Vue</option>
        <option value="react">React</option>
        <option value="javascript">JavaScript</option>
        <option value="css">CSS</option>
      </select>
    </div>

    <div class="blogList">
      <div v-for="blog in resultBlogs" :key="blog.id" class="blogCard">
        <h2>{{ blog.title }}</h2>
        <p class="category">分类：{{ blog.category }}</p>
        <p class="author">作者：{{ blog.author }}</p>
        <p class="pubDate">发布日期：{{ blog.pubDate }}</p>
        <p class="content">{{ blog.content }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const blogs = ref([
      {
        id: 1,
        title: "Vue 完全指南教程",
        category: "vue",
        author: "张三",
        pubDate: "2022-01-01",
        content: "这是Vue博客内容",
      },
      {
        id: 2,
        title: "React 完全指南教程",
        category: "react",
        author: "李四",
        pubDate: "2022-02-01",
        content: "这是React博客内容",
      },
      {
        id: 3,
        title: "JavaScript 完全指南教程",
        category: "javascript",
        author: "王五",
        pubDate: "2022-03-01",
        content: "这是 JavaScript 博客内容",
      },
      {
        id: 4,
        title: "CSS 完全指南教程",
        category: "css",
        author: "赵六",
        pubDate: "2022-04-01",
        content: "这是 CSS 博客内容",
      },
    ]);

    const resultBlogs = computed(() => {
      let result = searchBlogs(blogs.value);
      result = filterBlogs(result);
      return result;
    });

    const searchTerm = ref("");
    function searchBlogs(theBlogs) {
      if (searchTerm.value === "") return theBlogs;
      return theBlogs.filter((blog) => {
        return blog.title.includes(searchTerm.value);
      });
    }

    const category = ref("all");
    function filterBlogs(theBlogs) {
      if (category.value === "all") return theBlogs;
      return theBlogs.filter((blog) => {
        return blog.category === category.value;
      });
    }

    return { searchTerm, category, resultBlogs };
  },
};
</script>
<style scoped>
.options {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  padding-bottom: 24px;
}
.blogList {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.blogCard {
  border: 1px solid hsl(280deg, 50%, 50%);
  padding: 12px;
  display: grid;
  grid-template-areas:
    "title title title"
    "category author pubDate"
    "content content content";
  gap: 12px;
  align-items: center;
}

h2 {
  grid-area: title;
}

.category {
  grid-area: category;
}

.author {
  grid-area: author;
}

.pubDate {
  grid-area: pubDate;
}

.category,
.author,
.pubDate {
  font-size: 14px;
  margin-bottom: 12px;
  color: hsl(280deg, 50%, 70%);
}

.content {
  grid-area: content;
}
</style>
