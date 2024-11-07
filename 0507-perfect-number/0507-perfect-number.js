/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let divisors = []
    let i = 1
    let sum = 0
    while(i < num){
        if (num % i === 0){
            sum += i
            divisors.push(i)
        }

        i ++;
    }

    if (sum === num){
        return true
    }
    return false
};