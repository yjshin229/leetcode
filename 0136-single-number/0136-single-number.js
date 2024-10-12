/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length === 1) return nums[0]
    
    let seen = new Set()
    for (let i = 0; i < nums.length; i ++){
        const curr = nums[i]
        nums[i] = NaN
        if(!nums.includes(curr) && !seen.has(curr)) return curr
        seen.add(curr)
    }
};