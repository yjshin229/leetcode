/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num.toString().length === 1) return num

    const add = (n) => {
        let temp = 0
        while(n){
            temp += n % 10
            n = Math.floor(n / 10)
        }
        return temp 
    }

    while(num.toString().length !== 1){
        num = add(num)
    }
    return num
};