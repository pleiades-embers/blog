// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21
// 注意:

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

var reverse = function (x) {
  let result = 0;

  while (x !== 0) {
    result = result * 10 + (x % 10);
    x = (x / 10) | 0;
  }
  return (result | 0) == result ? result : 0;
};

var reverse = function (x) {
  let border = 2 ** 31;
  let min = -border;
  let max = border + 1;
  let result =
    (x > 0 ? 1 : -1) *
    String(x)
      .split("")
      .filter((x) => x != "-")
      .reverse()
      .join("");
  return result < min || result > max ? 0 : result;
};
