/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];

    const backtrack = (start, current) => {
        // Add the current subset to the result
        res.push([...current]);

        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);

            backtrack(i + 1, current);

            current.pop();
        }
    };

    backtrack(0, []);

    return res;
};
