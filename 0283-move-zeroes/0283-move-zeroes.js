/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length === 1) return

    let left = 0
    let right = left

    const swap = (idx1, idx2) => {
        const temp = nums[idx1]
        nums[idx1] = nums[idx2]
        nums[idx2] = temp
    }

    while(right < nums.length){
        if(nums[right] === 0){
            right ++;
            continue;
        }
        if(nums[left] === 0){
            swap(left, right);
            left ++;
            right ++;
            continue
        }
        left ++;
        right ++;
    }
};