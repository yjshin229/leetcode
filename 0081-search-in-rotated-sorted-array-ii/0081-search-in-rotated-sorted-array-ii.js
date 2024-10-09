/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    numsSet = new Set(nums)
    console.log(numsSet)
    nums = [...numsSet]
    console.log(nums)
    const pivotSearch = () => {
        let start = 0;
        let end = nums.length -1;

        while(start < end){
            let mid = Math.floor((start+end) /2);
            if(nums[end] < nums[mid]){
                start = mid + 1;
            }else{
                end = mid;
            }
        }
        return start
    }

    console.log(pivotSearch())

    const binarySearch = (start, end) => {
        if(nums[start] > target || nums[end] < target) return false
        while(start <= end){
            const mid = Math.floor((end+start) /2);
            if(nums[mid] === target){
                return true
            }else if(nums[mid] < target){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }
        return false
    }
    const pivot = pivotSearch();
    let lowerSearch = binarySearch(0, pivot-1);
    let upperSearch = binarySearch(pivot, nums.length -1)

    return(lowerSearch || upperSearch)
};