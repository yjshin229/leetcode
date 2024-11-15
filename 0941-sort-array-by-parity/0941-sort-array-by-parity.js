/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let ret = []

    for(const num of nums){
        if(num % 2 === 0){
            ret.unshift(num)
        }else{
            ret.push(num)
        }
    }
    return ret
};