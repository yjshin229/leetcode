/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let charMap = new Map()
    
    for (const char of s){
        charMap.set(char, charMap.get(char) ? charMap.get(char) + 1 : 1)
    }
    
    console.log(charMap)
    
    let odd = 0
    
    for (const [key, value] of charMap) {
        if(value % 2 === 1){
            odd ++;
        }
        
        if(odd> 1) return false
    }
    return true;
};