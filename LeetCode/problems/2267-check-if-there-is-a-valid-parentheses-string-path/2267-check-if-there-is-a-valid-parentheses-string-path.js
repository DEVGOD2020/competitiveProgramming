/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    if( (grid.length + grid[0].length - 1) % 2 === 1) {
        return false;
    }

    if(grid[grid.length-1][grid[0].length-1]=="("){
        return false;
    }

    if(grid[0][0] == ")"){
        return false;
    }

    let dp = new Array(grid[0].length + 1).fill(0n);
    for(let A = 0; A<grid.length; A++){
        dp[0] = A==0?1n:0n;
        for(let B = 0; B<grid[0].length; B++){
            if(grid[A][B] == "("){
                dp[B+1] = (dp[B]|dp[B+1]) << 1n;
            }else{
                dp[B+1] = (dp[B]|dp[B+1]) >> 1n;
            }
        }
    }
    console.log(dp);
    return (dp[grid[0].length]&1n) == 1n;
};