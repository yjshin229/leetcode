/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length
    let res = []

     for (let i = 0; i < n; i++) {
        let index = Math.abs(nums[i]) - 1; // Get the index for the current number
        // Mark the number at this index as negative (if it's not already)
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    // Collect all the indices where the value is positive (i.e., missing numbers)
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            res.push(i + 1); // These are the missing numbers
        }
    }
    return res
};