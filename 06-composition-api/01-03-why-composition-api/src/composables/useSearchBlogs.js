import { ref } from "vue";

function useSearchBlogs() {
  const searchTerm = ref("");

  function searchBlogs(theBlogs) {
    if (searchTerm.value === "") return theBlogs;
    return theBlogs.filter((blog) => {
      return blog.title.includes(searchTerm.value);
    });
  }

  return { searchTerm, searchBlogs };
}

export default useSearchBlogs;
