/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack.length < needle.length) return -1

    if(haystack === needle) return 0
    const needleLen = needle.length
    let left  = 0
    let right = left + needleLen

    while(right <= haystack.length){
        const curr = haystack.substring(left, right)
        if(curr === needle) return left
        left ++;
        right ++;
    }
    return -1
};