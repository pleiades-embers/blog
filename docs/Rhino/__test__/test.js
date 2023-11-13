var obj = {
  2: "two",
  3: "three",
  1: "one",
  [Symbol("key")]: "symbol-key",
  b: "b",
  a: "a"
};

// 遍历并输出对象中的每个属性键
for (var key in obj) {
  console.log(key);
}