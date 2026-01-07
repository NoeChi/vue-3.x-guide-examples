let map: Map<string, number> = new Map();
map.set("1", 1);
// map.set(2, 2);

function printType<T, K>(t: T, k: K) {
  console.log(typeof t, typeof k);
}

printType<string, number>("abc", 123);
