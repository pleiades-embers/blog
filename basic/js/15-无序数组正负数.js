// 无序数组，有正数和负数，所有的正数放到数组末尾
let arr = [1, -2, 3, -1, -2, -3, 4, 5];
let j = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    if (i !== j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    j++;
  }
}

console.log(arr);