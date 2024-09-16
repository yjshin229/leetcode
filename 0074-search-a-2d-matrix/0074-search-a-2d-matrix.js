/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rStart = 0
    let rEnd = matrix.length-1;
    let c = 0
    
    let rFound = -1
    while(rStart <= rEnd){
        let rMid = Math.trunc(rStart + (rEnd-rStart)/2)
        if(matrix[rMid][0] <= target && matrix[rMid][matrix[rMid].length-1] >= target){
            rFound = rMid
            break;
        }else if(matrix[rMid][0] > target){
            rEnd = rMid - 1
        }else{
            rStart = rMid + 1
        }
    }
    
    
    if(rFound === -1) return false
    console.log(rFound)

    
    let cStart = 0
    let cEnd = matrix[0].length -1
    while (cStart <= cEnd){
        let cMid = Math.trunc(cStart + (cEnd -cStart)/2)
        if(matrix[rFound][cMid] === target){
            return true
        }else if(matrix[rFound][cMid] < target){
            cStart = cMid +1
        }else{
            cEnd = cMid -1
        }
    }
    return false
};