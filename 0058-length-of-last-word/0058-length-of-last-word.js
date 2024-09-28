/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sArr = s.split(" ")
    
    sArr = sArr.filter(item => item !== "")
    
    return sArr[sArr.length-1].length
};