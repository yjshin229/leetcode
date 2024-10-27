/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (!ops.length) return m * n;

    let minRow = m;
    let minCol = n;

    for (const [row, col] of ops) {
        minRow = Math.min(minRow, row);
        minCol = Math.min(minCol, col);
    }

    return minRow * minCol;
};
