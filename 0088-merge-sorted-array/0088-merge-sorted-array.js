/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(!nums2.length) return nums1
    const binarySearch = (target, length) => {
        let start = 0
        let end = length - 1

        while(start <= end){
            const mid = Math.floor((start + end) / 2)
            if(nums1[mid] === target){
                return mid
            }else if(nums1[mid] < target){
                start = mid + 1
            }else{
                end = mid - 1
            }
        }

        return start
    }


    for(let i = 0; i < n; i++){
        let idx = binarySearch(nums2[i], m)
        nums1.pop()
        nums1.splice(idx, 0, nums2[i])
        m ++;
    }
};