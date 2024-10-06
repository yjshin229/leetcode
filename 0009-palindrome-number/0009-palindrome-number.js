/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false
    let strNum = x.toString()
    let left = 0
    let right = strNum.length -1

    while(left < right){
        if(strNum[left] === strNum[right]){
            left ++
            right --
        }else{
            return false
        }
    }
    return true
};