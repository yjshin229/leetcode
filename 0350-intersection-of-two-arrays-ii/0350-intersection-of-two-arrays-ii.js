/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let res= []
    if(nums1.length < nums2.length) {
        for(const num of nums1){
            if(nums2.includes(num)){
                res.push(num)
                let idx = nums2.indexOf(num)
                nums2.splice(idx, 1)
            }
        }
    }else{
        for(const num of nums2){
            if(nums1.includes(num)){
                res.push(num)
                let idx = nums1.indexOf(num)
                nums1.splice(idx, 1)
            }
        }
    }
    return res
};