/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = Array(m).fill().map(() => Array(n).fill(0));

    for(let I = 0; I<m; I++){
        if(obstacleGrid[I][0] == 1){break;}
        else{dp[I][0] = 1;}
    }

    for(let I = 0; I<n; I++){
        if(obstacleGrid[0][I] == 1){break;}
        else{dp[0][I] = 1;}
    }

    for(let A = 1; A<m; A++){
        for(let B = 1; B<n; B++){
            if(obstacleGrid[A][B] !== 1){
                dp[A][B] = dp[A-1][B]+dp[A][B-1] 
            }
        }
    }

    return dp[m-1][n-1];

};