/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(s.length === 0) return 0
    
    let sArr = s.split(" ")
    sArr = sArr.filter((item) => item !== "")
    return sArr.length
};