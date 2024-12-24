/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sorted = Array.from(new Set(arr)).sort((a, b) => a - b);

    let rankMap = new Map();
    sorted.forEach((num, index) => {
        rankMap.set(num, index + 1);
    });

    for(let i =0;i<arr.length; i++){
        arr[i] = rankMap.get(arr[i]);
    }
    return arr;
};
