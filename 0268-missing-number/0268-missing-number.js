/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b) => a-b)
    for(let i = 0; i <nums.length; i ++){
        if(i === 0){
            if( nums[i] !== 0){
                return 0
            }else{
                continue
            }    
        }
        if(nums[i-1] + 1 !== nums[i]){
            return nums[i-1] + 1
        }
    }
    return nums[nums.length -1] + 1
};