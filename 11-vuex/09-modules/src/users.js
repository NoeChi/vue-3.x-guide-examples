export const users = {
  state() {
    return {
      list: ["u1", "u2", "u3", "u4", "u5"],
    };
  },
  mutations: {
    addUser(state, payload) {
      state.list.push(payload.user);
    },
  },
  actions: {
    addUserAsync({ commit, dispatch, rootState, getters }, payload) {
      setTimeout(() => {
        // console.log(rootState);
        commit("addUser", payload);
        // commit("addBlog", { blog: "bfromUser" });
        dispatch("addBlogAsync", { blog: "bfromUser" });
      }, 1000);
    },
  },
  getters: {
    limitedUserCountStr(state, getters, rootState) {
      // console.log(getters);
      // console.log(rootState);
      return getters.limitedBlogCountStr + "用户";
    },
    limitedUsers(state, getters, rootState) {
      return state.list.slice(0, rootState.limit || -1);
    },
  },
};
