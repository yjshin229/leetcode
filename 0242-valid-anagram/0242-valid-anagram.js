/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    
//     let sArr = s.split("").sort()
//     let tArr = t.split("").sort()
    
//     if(sArr.join("") === tArr.join("")) return true
//     return false
    
    let charMap = new Map();
    
    for(let i = 0; i < s.length ; i++){
        charMap.set(s[i], charMap.get(s[i]) ? charMap.get(s[i]) + 1 : 1)
        charMap.set(t[i], charMap.get(t[i]) ? charMap.get(t[i]) - 1 : -1)
    }
        
    for (const [key, val] of charMap) {
    if (val !== 0) {
        return false; 
    }
}
    return true;
    
   
};