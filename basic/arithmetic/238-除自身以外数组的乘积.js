// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

// 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。

let nums = [1, 2, 3, 4]
// 输出: [24,12,8,6]

// 输入: nums = [-1,1,0,-3,3]
// 输出: [0,0,9,0,0]

var productExceptSelf = function (nums) {
    const length = nums.length;
    const result = new Array(length).fill(1);

    let pre = 1
    for (let i = 0; i < length; i++) {
        result[i] = pre
        pre *= nums[i]
    }
    let suf = 1
    for (let i = length - 1; i >= 0; i--) {
        result[i] *= suf
        suf *= nums[i]
    }
    return result
};
console.log(productExceptSelf(nums))