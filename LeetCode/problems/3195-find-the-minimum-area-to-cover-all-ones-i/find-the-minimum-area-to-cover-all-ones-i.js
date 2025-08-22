/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
    let minRow = Infinity;
    let minCol = Infinity;
    let maxRow = -Infinity;
    let maxCol = -Infinity;
    for(let row = 0; row<grid.length; row++){
        for(let col = 0; col<grid[0].length; col++){
            if(grid[row][col]){
                if(row < minRow){minRow=row;}
                if(row > maxRow){maxRow=row;}
                if(col < minCol){minCol=col;}
                if(col > maxCol){maxCol=col;}
            }
        }
    }
    return ((maxRow-minRow)+1) * ((maxCol-minCol)+1);
};
