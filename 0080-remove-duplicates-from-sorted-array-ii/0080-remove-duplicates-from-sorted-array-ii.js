/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const numLen = nums.length;
    
    // If the array length is less than or equal to 2, no duplicates to remove.
    if (numLen <= 2) return numLen;
    
    let pos = 1;  // Start writing from the second position
    let count = 1;  // Count occurrences of the current number
    
    // Iterate through the array starting from the second element
    for (let idx = 1; idx < numLen; idx++) {
        if (nums[idx] === nums[idx - 1]) {
            count++;  // Increment count if it's the same as the previous number
        } else {
            count = 1;  // Reset count for a new number
        }
        
        // If count is <= 2, write the element to `pos` and increment `pos`
        if (count <= 2) {
            nums[pos] = nums[idx];
            pos++;
        }
    }
    
    return pos;  // The position `pos` gives the new length of the modified array
};
