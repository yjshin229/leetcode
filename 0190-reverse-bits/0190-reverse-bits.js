/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let bits = n.toString(2)
    if(bits.length < 32){
        bits = ("0").repeat(32-bits.length) + bits
    }
    console.log(bits)
    let reversed = ""
    let res = 0

    for(let i = 0; i < bits.length ; i++){
        if(bits[i] === "1"){
            res += Math.pow(2,i)
        }
    }
    return res
};