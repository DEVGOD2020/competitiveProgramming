/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let score = 0;
    const N = grid.length;
    for(let row = 0; row<N; row++){
        for(let col = 0; col<N; col++){
            if(grid[row][col]){score += (4*grid[row][col]) + 2;}
            if(row){score += -Math.min(grid[row][col],grid[row-1][col])*2;}
            if(col){score += -Math.min(grid[row][col],grid[row][col-1])*2;}
        }
    }
    return score;
};
