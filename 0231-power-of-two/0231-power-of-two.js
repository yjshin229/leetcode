/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let binaryNumber = n.toString(2);
    if(n === 0) return false
    binaryNumber = binaryNumber.substring(1)
    if(binaryNumber.length === 0 || parseInt(binaryNumber) === 0){
        return true
    }
    return false
};