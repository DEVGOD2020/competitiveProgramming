/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function(grid, k) {
    const MOD = 1e9 + 7;
    let dp = Array.from( 
        {length:grid.length}, 
        () => Array.from(
            {length:grid[0].length},
            () => Array(k).fill(0))
    );
    
    dp[0][0][ grid[0][0]%k ] = 1;
    for(let row = 0; row<grid.length; row++){
        for(let col = 0; col<grid[0].length; col++){
            let curr = grid[row][col]%k;
            for(let A = 0; A<k; A++){
                let wrapMod = ((A-curr)%k+k)%k;
                if(row-1 >= 0){
                    dp[row][col][A] += dp[row-1][col][ wrapMod ]%MOD;
                }
                if(col-1 >= 0){
                    dp[row][col][A] += dp[row][col-1][ wrapMod ]%MOD;
                }
            }
        }
    }

    return dp[grid.length-1][grid[0].length-1][0]%MOD;
};
