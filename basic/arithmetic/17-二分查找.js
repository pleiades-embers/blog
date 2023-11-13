
// 1. 无重复升序数组 查下标
// [-1, 0, 3, 4, 6, 10, 13, 14], 2

function binarySearch(nums,target){
    let left = 0
    let right = nums.length - 1

    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(nums[mid] === target) {
            return mid
        }else if(nums[mid] < target) {
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return -1 
}


console.log(binarySearch([-1, 0, 3, 4, 6, 10, 13, 14],6))



