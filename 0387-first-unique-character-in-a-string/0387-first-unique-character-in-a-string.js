/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let charMap = new Map();
    
    for(const char of s){
        charMap.set(char, charMap.get(char)? charMap.get(char) +1 : 1)
    }
    
    for(const [key, val] of charMap){
        console.log(key,val)
        if(val === 1){
            return s.indexOf(key)
        }
    }
    
    return -1
};