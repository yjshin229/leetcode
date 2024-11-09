/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let wordArr = word.split("")
    let left = 0
    let right = 1
    let count = 1
    let res = 0

    while(right <= wordArr.length){
        if(wordArr[left] === wordArr[right]){
            count ++;
            right ++;
        }else{
            if(right - left === 1){
                left ++;
                right ++;
            }else{
                res += count - 1
                count = 1
                left = right
                right++;
            }
        }
    }

    return res + 1

};