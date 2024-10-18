/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    // if(num === 1) return true
    // for(let i = 2; i <= 46340; i++){
    //     if(i * i === num){
    //         return true
    //     }
    // }
    // return false
    for(let i = 1; i < Math.pow(2,31) -1; i+= 2){
        if(num === 0){
            return true
        }else if(num < i){
            return false
        }else{
            num -= i
        }
    }
    return true
};