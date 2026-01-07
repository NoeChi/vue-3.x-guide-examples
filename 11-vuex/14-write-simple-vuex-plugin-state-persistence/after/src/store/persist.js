export default function persistState(store) {
  // window.addEventListener("beforeunload", (e) => {
  //   window.localStorage.setItem("vuex", JSON.stringify(store.state));
  // });
  store.subscribe((mutation, state) => {
    window.localStorage.setItem("vuex", JSON.stringify(state));
  });

  const prevState = window.localStorage.getItem("vuex");
  console.log(prevState);
  if (prevState) {
    store.replaceState(JSON.parse(prevState));
  }
}
