/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let numMap = {}
    arr.sort((a,b) => a -b)

    let count = 0

    for(const num of arr){
        numMap[num] = (numMap[num] || 0) + 1
        if(numMap[num - 1]){
            count += numMap[num - 1]
             numMap[num -1] = 0
        }
    }
    return count
};
