interface Value<T> {
  value: T;
  description: string;
}

let stringValue: Value<string> = {
  value: "hello",
  description: "这是字符串类型的数据",
};

let numberValue: Value<number> = {
  value: 10,
  description: "这是数字类型的数据",
};
