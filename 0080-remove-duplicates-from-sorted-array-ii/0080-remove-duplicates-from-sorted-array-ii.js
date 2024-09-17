/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const numLen = nums.length;
    
    if (numLen <= 2) return numLen;
    
    let pos = 1; 
    let count = 1;
    
    for (let idx = 1; idx < numLen; idx++) {
        if (nums[idx] === nums[idx - 1]) {
            count++;  
        } else {
            count = 1; 
        }
        if (count <= 2) {
            nums[pos] = nums[idx];
            pos++;
        }
    }
    
    return pos; 
};
