/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let intersection = new Set(nums1.concat(nums2))
    let intersectionArr = [...intersection]

    let res = []
    for(const num of intersectionArr ){
        if(nums1.includes(num) && nums2.includes(num)){
            res.push(num)
        }
    }
    return res
};