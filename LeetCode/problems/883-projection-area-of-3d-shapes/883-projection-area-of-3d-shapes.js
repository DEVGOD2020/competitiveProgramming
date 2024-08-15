/**
 * @param {number[][]} grid
 * @return {number}
 */

var projectionArea = function(grid) {
    let area = 0;
    let high = 0;

    for(let a in grid){
        area += Math.max(...grid[a]);
        high = 0;
        for(let b in grid){
            if(grid[a][b] > 0){area++;}
            high = Math.max(high,grid[b][a]);
        }
        area += high;
    }

    return area;
};