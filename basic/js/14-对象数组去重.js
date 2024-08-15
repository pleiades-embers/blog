function uniqueArray(arr, key) {
  const unique= arr.reduce((acc, obj) => {
    if (!acc.has(obj[key])) {
      acc.set(obj[key], obj);
    }
    return acc;
  }, new Map());

  return [...unique.values()]
}

// 示例用法
const array = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "John" },
  { id: 3, name: "Jake" },
];

const result = uniqueArray(array, "id");
console.log(result);
