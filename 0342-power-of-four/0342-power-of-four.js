/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n === 0) return false
    let isNegative = false
    if(n < 0){
        // isNegative = true
        return false
    }
    n = Math.abs(n)
    let count = 0
    while(n !== 1){
        if(n % 4 === 0){
            n /= 4
            count ++;
        }else{
            return false
        }
    }

    // if(isNegative === true && count % 2 === 1){
    //     return false
    // }
    return true
};