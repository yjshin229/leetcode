/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const indexMap = new Map();
    for (let i = 0; i < list2.length; i++) {
        indexMap.set(list2[i], i);
    }

    let min = Infinity;
    const result = [];

    for (let i = 0; i < list1.length; i++) {
        if (indexMap.has(list1[i])) {
            const sumIndex = i + indexMap.get(list1[i]);
            if (sumIndex < min) {
                min = sumIndex;
                result.length = 0;
                result.push(list1[i]);
            } else if (sumIndex === min) {
                result.push(list1[i]);
            }
        }
    }

    return result;
};
