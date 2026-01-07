let obj = {
  a: 1,
  b: 2,
};

let objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    console.log(`访问了 ${target} 中的 ${key}，值为 ${target[key]}`);
    // return target[key];
    // return 10;
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    console.log(`修改了 ${target} 中的 ${key}，值为 ${value}`);
    // target[key] = value;
    return Reflect.set(target, key, value, receiver);
  },
});

// console.log(objProxy.a);

objProxy.a = 5;
// 访问 proxy
console.log(objProxy.a);
// 访问原始对象
console.log(obj.a);
