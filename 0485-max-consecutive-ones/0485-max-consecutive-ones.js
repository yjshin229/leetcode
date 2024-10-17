/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0
    let count = 0

    for(let i = 0; i <nums.length; i++){
        if(i === 0 && nums[i] === 1){
            count ++;
        }else if(nums[i] === 1){
            count ++
        }else if(nums[i]!== 1){
            res = Math.max(res, count)
            count = 0
        }
        if(i === nums.length -1){
            res = Math.max(res, count)
            count = 0
        }
    }
    return res
};