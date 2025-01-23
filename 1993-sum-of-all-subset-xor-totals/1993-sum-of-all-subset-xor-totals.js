/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    if(nums.length === 0) return 0;
    let totalSum = 0;

    function backtrack(index, currentXor) {
        if (index === nums.length) {
            totalSum += currentXor;
            return;
        }
        backtrack(index + 1, currentXor ^ nums[index]);
        backtrack(index + 1, currentXor);
    }
    backtrack(0, 0)
    return totalSum;
};