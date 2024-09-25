/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let res = ''
    
    let min = Number.MAX_VALUE
    for(const str of strs){
        if(min > str.length) min = str.length
    }
    
    
    for(let i = 0; i < min; i++){
        let temp = strs[0][i]
        for(let j = 0; j < strs.length; j ++){
            if(strs[j][i] !== temp){
                return res
            }
        }
        res += temp
    }
    return res
};