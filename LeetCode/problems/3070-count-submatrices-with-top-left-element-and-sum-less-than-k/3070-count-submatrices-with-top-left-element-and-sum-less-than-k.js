/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function(grid, k) {
    let sum = 0;
    for(let R = 0; R<grid.length; R++){
        for(let C = 0; C<grid[0].length; C++){
            if(R>0){
                grid[R][C] += grid[R-1][C];
            }
            if(C>0){
                grid[R][C] += grid[R][C-1];
            }
            if(R>0 && C>0){
                grid[R][C] -= grid[R-1][C-1];
            }
            if(grid[R][C] <= k){
                sum++;
            }
        }
    }
    return sum;
};
