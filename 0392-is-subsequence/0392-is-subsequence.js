/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let index = 0
    let res = []
    for(const char of t){
        if(index > s.length -1) return true
        if(char === s.charAt(index)){
            res.push(char)
            index ++;
        }
    }
    if(res.join("") === s) return true
    return false
};