/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums.sort((a,b) => a - b)

    if(nums[0] === nums[nums.length -1]) return 0
    if(Math.abs(nums[0] - nums[nums.length -1]) === 1) return nums.length
    let left = 0
    let right = 0
    let temp = 0

    let max = 0

    while(right < nums.length){
        const diffWithLeft = Math.abs(nums[left] - nums[right])

        if(diffWithLeft > 1){
            if(right - left !== 1 && nums[left] !== nums[right - 1]){
                max = Math.max(max, (right - left ))
            }
            if(Math.abs(nums[temp] - nums[right]) === 1){
                left = temp
            }else{
               left = right 
            }
            
        }

        if(nums[temp] !== nums[right]){
            temp = right
        }

        right++;
    }

    if(right - left !== 1 && Math.abs(nums[left] - nums[right - 1]) === 1){
         max = Math.max(max, (right - left))
    }

    return max
};