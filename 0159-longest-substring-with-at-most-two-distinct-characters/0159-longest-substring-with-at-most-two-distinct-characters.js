/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    if(s.length <= 2) return s.length
    
    const countDistinct = (idx1, idx2) => {
        const hashSet = new Set(s.slice(idx1, idx2+1))
        
        return hashSet.size
    }
    
    let left = 0
    let right = 0
    
    let res = 0
    while(left <=right && right <= s.length -1){
        const curr = countDistinct(left, right)
        if(curr <=2 ){
            right ++;
            res = Math.max(res, right -left)
        }else{
            left ++;
        }
    }
    
    return res
 
};