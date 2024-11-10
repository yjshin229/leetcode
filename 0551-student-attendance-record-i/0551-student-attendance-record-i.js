/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let map = {}
    let consecutive = 0
    let absent = 0
    for(const char of s){
        if(char === "L"){
            consecutive ++;
        }else if(char === "A"){
            absent ++;
            consecutive = 0
        }else{
            consecutive = 0
        }
        if(consecutive >=3 || absent >= 2) return false
    }
    return true
};