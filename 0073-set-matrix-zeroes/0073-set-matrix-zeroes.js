/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let zeros = []
    for(let r = 0; r < matrix.length; r++){
        for(let c = 0; c <matrix[0].length; c ++){
            if(matrix[r][c] === 0){
                zeros.push([r,c])
            }
        }
    }
    
    for(let i = 0; i<zeros.length; i ++){
        const r = zeros[i][0]
        const c = zeros[i][1]
        
        matrix[r] = new Array(matrix[0].length).fill(0)
        for(let i = 0; i < matrix.length; i++){
            matrix[i][c] = 0
        }
    }
};