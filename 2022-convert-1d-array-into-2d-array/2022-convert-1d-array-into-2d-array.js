/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(n===original.length){
        return [original]
    }else if(original.length != m * n){
        return []
    }

    let curr = 0

    let ret = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for(let r = 0; r < m; r++){
        for(let c = 0; c < n; c++){
            ret[r][c] = original[curr]
            curr++;
        }
    }
    return ret;
};