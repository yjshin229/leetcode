/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num <= 1) return false
    let i = 1
    let sum = 0
    while(i < num){
        if (num % i === 0){
            sum += i
        }
        i ++;
        if(sum > num) return false
    }

    return sum === num
};