/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function(grid) {
    let memo = Array.from(
        {length:grid.length}, 
        ()=> new Array(grid[0].length).fill(0) 
    );

    let blah = function(R,C){
        if(R == grid.length-1 && C == grid[0].length-1){
            return [grid[R][C], grid[R][C]];
        }
        if(R >= grid.length || C >= grid[0].length){
            return null;
        }

        if(memo[R][C]){
            return memo[R][C];
        }
        let down = blah(R+1, C);
        let right = blah(R, C+1);

        let vals = [];
        if(down){
            vals.push(grid[R][C]*down[0]);
            vals.push(grid[R][C]*down[1]);
        }
        if(right){
            vals.push(grid[R][C]*right[0]);
            vals.push(grid[R][C]*right[1]);
        }

        let res = [Math.min(...vals), Math.max(...vals)];
        memo[R][C] = res;
        return res;
    }

    let ans = blah(0,0);
    if( Math.max(...ans) < 0){ return -1; }
    return Math.max(...ans) % (1e9 + 7);
};
