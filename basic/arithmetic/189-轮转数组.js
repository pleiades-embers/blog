// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

// 示例 1:

let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]

//要求不能使用 splice 修改原数组
var rotate = function (nums, k) {
    function reverse(i, j) {
        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
            j--
        }
    }
    const n = nums.length
    k%=n
    reverse(0, n - 1)
    reverse(0, k - 1)
    reverse(k, n - 1)
};

console.log(rotate(nums, k))