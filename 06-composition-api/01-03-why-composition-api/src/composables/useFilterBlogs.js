import { ref } from "vue";

function useFilterBlogs() {
  const category = ref("all");

  function filterBlogs(theBlogs) {
    if (category.value === "all") return theBlogs;
    return theBlogs.filter((blog) => {
      return blog.category === category.value;
    });
  }

  return { category, filterBlogs };
}

export default useFilterBlogs;
