/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let temp = new Set()
    let max = 0
    let left = 0
    let right = 0
    
    while(left <= right && right <=  s.length -1){
        temp.add(s[right]);
        let tempSize = temp.size
        
        if(tempSize < right - left + 1){
            left ++;
            let currentStr = s.slice(left,right+1)
            temp.clear()
            Array.from(currentStr).forEach((c) => {
                temp.add(c)
            })
            right ++;
        }else{
            max = Math.max(right-left +1, max)
            right ++
        }
        
    }
    return max
};