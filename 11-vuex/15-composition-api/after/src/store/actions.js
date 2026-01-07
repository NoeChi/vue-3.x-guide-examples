export default {
  updateLimitAsync({ commit }, payload) {
    setTimeout(() => {
      commit("updateLimit", payload);
    }, 1000);
  },
};
