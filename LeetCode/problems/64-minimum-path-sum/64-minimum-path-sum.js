/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const n = grid.length;
    const m = grid[0].length;

    for(let A = 0; A<n; A++){
        for(let B = 0; B<m; B++){
            if(A == 0 && B>0){
                grid[A][B] += grid[A][B-1];
            }
            else if(B == 0 && A>0){
                grid[A][B] += grid[A-1][B];
            }else{
                if(A!=0 && B!=0){
                    grid[A][B] += Math.min(grid[A-1][B],grid[A][B-1])
                }
            }
        }
    }

    return grid[n-1][m-1];
}