/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let numMap = {}
    for (let i = 0; i<nums.length; i++){
        const num = nums[i]
        if(numMap[num]!== undefined){ // if numMap[num] = 0, numMap[num] will return false
            console.log(Math.abs(numMap[num] - i))
            if(Math.abs(numMap[num] - i) <= k) return true
            else numMap[num] = i
        }else{
            numMap[num] = i
        }
    }

    return false
};