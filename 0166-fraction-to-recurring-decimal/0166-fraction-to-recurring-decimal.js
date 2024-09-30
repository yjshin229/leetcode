/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if(numerator === 0) return "0"
    
    var map = new Map();
    var res = "";

    if (Math.sign(numerator) !== Math.sign(denominator)) {
        res += "-";
    }
    
    const posNumerator = Math.abs(numerator);
    const posDenom = Math.abs(denominator);
    var remainder = posNumerator % posDenom;
    res += Math.trunc(posNumerator/posDenom)


    if (remainder === 0) {
        return res;
    }

    res += ".";
    while(remainder !== 0) {
        if (map.has(remainder)) {
            // repeating patten detected;
            const index = map.get(remainder);
            res = res.slice(0, index) + "(" + res.slice(index) + ")";
            break;
        }

        map.set(remainder, res.length);

        remainder *= 10;
        res += Math.trunc(remainder/posDenom);
        remainder %= posDenom;
    }
    
    return res;
    
};