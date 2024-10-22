/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let ans = 0
    let i = 0
    while(num !==0){
        if(num & 1){
            i ++
        }else{
            ans += Math.pow(2, i)
            i++ 
        }
        num = num >>> 1
    }
    return ans
};