/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let temp = ""
    
    for(let i = 0;  i < s.length; i++){
        const curr = s.substring(0,i+1)
        
        if(s.length % curr.length === 0 && s.length / curr.length !== 1){
            let temp = curr.repeat(s.length / curr.length)
            if(temp === s) return true
        }
    }
    return false
};