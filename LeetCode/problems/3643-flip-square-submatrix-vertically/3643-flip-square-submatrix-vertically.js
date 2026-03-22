/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function(grid, x, y, k) {
    if(k==1){return grid;}
    for(let R = x; R < x + Math.floor(k / 2); R++){
        for(let C = y; C<Math.min(grid[0].length, y+k); C++){
            let blah = (x+k-1)-(R-x);
            [grid[R][C],grid[blah][C]] = [grid[blah][C],grid[R][C]]
        }
    }
    return grid;
};
