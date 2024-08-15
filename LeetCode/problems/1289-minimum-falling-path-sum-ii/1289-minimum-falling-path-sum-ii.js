/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
    let dp = [];
    for (let row = 0; row < grid.length; row++) {
        dp.push([]);
        for (let col = 0; col < grid[0].length; col++) {
            if (row === 0) {
                dp[row][col] = grid[row][col];
            } else {
                let min = Math.min(...dp[row - 1]);
                if (dp[row - 1].indexOf(min) === col) {
                    let left = dp[row - 1].slice(0, col);
                    let right = dp[row - 1].slice(col + 1, grid[0].length);
                    min = Math.min(Math.min(...left), Math.min(...right));
                }
                min += grid[row][col];
                dp[row][col] = min;
            }
        }
    }
    
    return Math.min(...dp[grid.length - 1]);
};