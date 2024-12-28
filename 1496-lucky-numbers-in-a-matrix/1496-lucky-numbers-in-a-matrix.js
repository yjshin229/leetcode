/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    let luckyNums = [];
    
    for (let r = 0; r < matrix.length; r++) {
        let minVal = matrix[r][0];
        let minIdx = 0;
        for (let c = 1; c < matrix[r].length; c++) {
            if (matrix[r][c] < minVal) {
                minVal = matrix[r][c];
                minIdx = c;
            }
        }
        
        let isLucky = true;
        for (let rr = 0; rr < matrix.length; rr++) {
            if (matrix[rr][minIdx] > minVal) {
                isLucky = false;
                break;
            }
        }
        
        if (isLucky) {
            luckyNums.push(minVal);
        }
    }
    
    return luckyNums;
};
