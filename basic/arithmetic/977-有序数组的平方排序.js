// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]
// 排序后，数组变为 [0,1,9,16,100]


// var sortedSquares = function(nums) {
//     return nums.map(item=>Math.pow(item,2)).sort((a,b)=>a-b)
// };

//双指针实现

var sortedSquares = function (nums) {
    let n = nums.length
    let result = new Array(n)
    let left = 0
    let right = n - 1
    let index = n - 1

    while (left <= right) {
        let leftSquare = Math.pow(nums[left], 2)
        let rightSquare = Math.pow(nums[right], 2)
        if (leftSquare > rightSquare) {
            result[index] = leftSquare
            left++
        } else {
            result[index] = rightSquare
            right--
        }

        index--
    }
    return result
};

console.log(sortedSquares([-4, -1, 0, 3, 10]))