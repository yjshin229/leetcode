/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const majority = nums.length / 2

    let numMap = {}

    for(const num of nums){
        numMap[num] = (numMap[num] || 0) + 1
        if(numMap[num] > majority) return num
    }
};