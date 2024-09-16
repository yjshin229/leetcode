/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length === 1 && nums[0] !== 0){
        return true;
    }
    
    let goal = nums.length -1
    
    for (let i = nums.length-1; i > 0; i --){
        if(nums[i-1]+ (i-1)>=goal){
            goal = i-1
        }
    }
    
    if(goal === 0)return true
    return false
};