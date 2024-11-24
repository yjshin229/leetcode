/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let ret = []

    const findSelfDividingNums = (num) => {
        let numbers = num.toString().split("")
        for(const digit of numbers){
            if(digit === 0 || num % digit !== 0){
                return false;
            }
        }
        return true;
    } 


    for(let i = left; i <= right; i++){
        if(findSelfDividingNums(i)){
            ret.push(i)
        }
    }

    return ret

};