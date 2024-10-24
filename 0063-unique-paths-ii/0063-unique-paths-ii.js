/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let rows = obstacleGrid.length;
    let cols = obstacleGrid[0].length;
    if(obstacleGrid[0][0] === 1 || obstacleGrid[rows - 1][cols - 1] === 1) return 0

    let dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    
    dp[0][0] = 1
    for (let i = 1; i < rows; i++) {
        dp[i][0] = obstacleGrid[i][0] === 0 && dp[i - 1][0] === 1 ? 1 : 0;
    }

    for (let j = 1; j < cols; j++) {
        dp[0][j] = obstacleGrid[0][j] === 0 && dp[0][j - 1] === 1 ? 1 : 0;
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            } else {
                dp[i][j] = 0; // Obstacle, no paths through this cell
            }
        }
    }

    return dp[rows - 1][cols - 1];
};