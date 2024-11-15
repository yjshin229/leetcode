/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for(let i = 0; i < nums.length; i ++){
        if(i === 0){
            continue
        }else{
            nums[i] = nums[i - 1] + nums [i]
        }
    }
    return nums
};