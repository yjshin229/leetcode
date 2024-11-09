/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    let ret = []
    let numMap = {}
    

    const addToMap = (arr) => {
        for(const num of arr){
                numMap[num] = (numMap[num] || 0) + 1
        }
    }
    addToMap(arr1)
    addToMap(arr2)
    addToMap(arr3)

    for (const key in numMap){
        if(numMap[key] === 3){
            ret.push(parseInt(key))
        }
    }
    return ret
};