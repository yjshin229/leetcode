/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let count = 0

    let difference = x ^ y

    while(difference){
        count += difference & 1
        difference = difference >>> 1
    }

    return count
    
};