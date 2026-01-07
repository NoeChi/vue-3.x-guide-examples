let obj = {
  a: 1,
  b: 2,
};

let objProxy = new Proxy(obj, {});

// console.log(objProxy.a);

objProxy.a = 5;
// 访问 proxy
console.log(objProxy.a);
// 访问原始对象
console.log(obj.a);
