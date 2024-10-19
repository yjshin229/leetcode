/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if(mat.length * mat[0].length !== r * c) return mat
    let res = []
    let rCount = 0
    let cCount = 0
    let temp = []
    for(let row = 0; row < mat.length; row ++){
        for(let col = 0; col < mat[row].length; col ++){
            if(rCount > r) return mat
            if(cCount < c){
                temp.push(mat[row][col])
                cCount ++;
                
            }
            if(cCount === c){
                res.push(temp)
                rCount ++;
                cCount = 0
                temp = []
            }
        }
    }
    if(cCount !== 0){
        return mat
    }else{
        return res
    }
};