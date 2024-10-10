/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    
    let sArr = s.split("").sort()
    let tArr = t.split("").sort()
    
    if(sArr.join("") === tArr.join("")) return true
    return false
    
};