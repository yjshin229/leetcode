/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 1) {
        return s
    }
    
    let max = ""
    const findPalindrome = (left,right) => {
        while (left >= 0 && right <= s.length -1 && s.charAt(left) === s.charAt(right)){
            left --;
            right ++;
        }
         return s.slice(left+1,right)
    }
    
        
    for (let i = 0; i <s.length; i ++){
        let odd = findPalindrome(i,i)
        let even = findPalindrome(i,i+1)

        if(odd.length > max.length) max = odd
        
        if(even.length > max.length) max = even
    }
    return max
    
};