/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums = nums.sort((a,b) => {
       const order1 = a.toString() + b.toString();
        const order2 = b.toString() + a.toString();
        // Compare the two orders, place the larger concatenation first
        return order2.localeCompare(order1);
        
    })
    const res = nums.join("")
    return res[0] === '0' ? '0' : res
};