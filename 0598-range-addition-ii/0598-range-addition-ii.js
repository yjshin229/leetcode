// /**
//  * @param {number} m
//  * @param {number} n
//  * @param {number[][]} ops
//  * @return {number}
//  */
// var maxCount = function(m, n, ops) {
//     if(!ops.length) return  m * n
//     if(ops.length === 1) return ops[0][0] * ops[0][1]
//     let grid = Array.from({length :  m}, () => Array.from({length : n}).fill(0))

//     let map = {}

//     let max = 0
//     let count = 0
//     const addToMap = (row,col) => {
//         for(let r = 0; r <row; r++){
//             for(let c = 0; c<col; c++){
//                 map[`${r},${c}`] = (map[`${r},${c}`] || 0) + 1
//                 if(map[`${r},${c}`] > max){
//                 max = map[`${r},${c}`]
//                 count = 1
//                 }else if(map[`${r},${c}`] === max){
//                     count ++
//                 }
//             }
//         }
//     }


//     for([row,col] of ops){
//         addToMap(row ,col)
//     }

//     // let values = map.values()

//     // max = Math.max(...values)
    
//     // values.find()

//     return count
    

// };
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    // If there are no operations, the entire grid has the same count
    if (!ops.length) return m * n;

    // Find the minimum row and column bounds from the operations
    let minRow = m;
    let minCol = n;

    for (const [row, col] of ops) {
        minRow = Math.min(minRow, row);
        minCol = Math.min(minCol, col);
    }

    // The area of the subgrid with the maximum count
    return minRow * minCol;
};
