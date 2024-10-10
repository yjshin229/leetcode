/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if(s.length === 1) return 1
    
    let charMap = new Map()
    
     for(const char of s){
        charMap.set(char, charMap.get(char) ? charMap.get(char) + 1 : 1)
    }
    
    let res = 0
    // let odd = -1;
    let hasOdd = false
    for(const [key,val] of charMap){
        if(val % 2 === 0){
            res += val
        }else{
            res += val - 1
            hasOdd = true
        }
    }
    
    if(hasOdd) res += 1
    return res
};