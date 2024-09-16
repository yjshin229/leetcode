/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;         // pointer for the boundary of 0s
    let right = nums.length - 1;  // pointer for the boundary of 2s
    let current = 0;      // pointer for the current element

    // Loop until current surpasses the right pointer
    while (current <= right) {
        if (nums[current] === 0) {
            // Swap current with left and move both left and current pointers forward
            [nums[left], nums[current]] = [nums[current], nums[left]];
            left++;
            current++;
        } else if (nums[current] === 2) {
            // Swap current with right and move right pointer backward
            [nums[right], nums[current]] = [nums[current], nums[right]];
            right--;
        } else {
            // If it's a 1, just move the current pointer forward
            current++;
        }
    }
};
