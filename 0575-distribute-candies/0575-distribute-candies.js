/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const maxCandies = candyType.length / 2
    let typeSet = new Set(candyType)

    if(typeSet.size <= maxCandies) return typeSet.size
    return maxCandies
};