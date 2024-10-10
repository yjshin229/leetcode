/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    for(const char of t){
        const idx = s.indexOf(char)
        if(idx === -1){
            return char
        }else{
            s = s.substring(0,idx) + s.substring(idx+1)
        }
    }
};