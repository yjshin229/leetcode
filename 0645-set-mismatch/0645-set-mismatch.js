/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {

    let seen = new Set()
    let duplicate, missing, totalSum = 0
    for(const num of nums){
        if(seen.has(num)){
            duplicate = num;
        }else{
            seen.add(num);
            totalSum += num;
        }
    }

    const expected = (nums.length * (nums.length +1)) / 2;
    missing = expected - totalSum
    return [duplicate, missing];
};