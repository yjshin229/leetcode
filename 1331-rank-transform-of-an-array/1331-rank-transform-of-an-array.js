/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    // Create a sorted, deduplicated copy of the array
    let sorted = Array.from(new Set(arr)).sort((a, b) => a - b);

    console.log(sorted)
    
    // Create a map to store the rank for each unique number
    let rankMap = new Map();
    sorted.forEach((num, index) => {
        rankMap.set(num, index + 1);
    });
    console.log(rankMap)

    for(let i =0;i<arr.length; i++){
        arr[i] = rankMap.get(arr[i]);
    }
    return arr;
};
