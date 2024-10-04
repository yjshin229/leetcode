/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let start = 0
    let end = 9

    let resMap = new Map()
    while (end < s.length){
        const curr = s.substring(start,end+1)
        if(resMap.has(curr)){
            resMap.set(curr, resMap.get(curr) + 1)
        }else{
            resMap.set(curr, 1)
        }
        start ++;
        end++
    }

    let result = []

    for (const [key, value] of resMap) {
        if (value >=2) {
        result.push(key);
    }
}
    return result
};