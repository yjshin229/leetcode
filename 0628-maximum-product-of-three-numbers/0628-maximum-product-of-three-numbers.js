/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    if(nums.length === 1){
        return nums[0]
    }else if(nums.length === 2){
        return nums[0] * nums[1]
    }
    nums = nums.sort((a,b) => b - a)

    return Math.max((nums[0] * nums[1] * nums[2]), (nums[0] * nums[nums.length-1] * nums[nums.length-2]))
};