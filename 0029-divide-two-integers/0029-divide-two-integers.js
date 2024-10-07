/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX_NUMBER = Math.pow(2, 31) - 1
    const MIN_NUMBER = Math.pow(-2, 31)
        
    if(dividend === 0 ) return 0

    if (divisor === 1) return Math.min(Math.max(dividend, MIN_NUMBER), MAX_NUMBER);
    if (divisor === -1) return Math.min(Math.max(-dividend, MIN_NUMBER), MAX_NUMBER);

    let sign = (dividend > 0) === (divisor > 0) ? 1 : -1;

    absDividend = Math.abs(dividend)
    absDivisor = Math.abs(divisor)

    let count = 0
    while (absDividend >= absDivisor) {
        let base = absDivisor;
        let multiple = 1;

        // Double the divisor until it is greater than half of the remaining dividend
        while (base <= (absDividend >> 1)) {
            base <<= 1;
            multiple <<= 1;
        }

        // Subtract the largest multiple of the divisor found and add to the result
        absDividend -= base;
        count += multiple;
    }

    let result = count * sign
    if(result < 0){ 
        if(result < MIN_NUMBER) return MIN_NUMBER
    }else{
        if(result > MAX_NUMBER) return MAX_NUMBER
    }
    return result
    
    

};