/**
 * @param {number[][]} grid
 * @return {number}
 */

var minDays = function(grid) {
    let islands = 0;
    let minNeighbor = 4;
    let maxNeighbor = 0;

    let dfs = function(row,col){
        let stack = [ [row,col] ];
        while(stack.length){
            let cords = stack.pop();
            row = cords[0];
            col = cords[1];

            grid[row][col] = -1;

            let neighbor = 0;
            if(row-1 >= 0 && grid[row-1][col] != 0){neighbor++;}
            if(col-1 >= 0 && grid[row][col-1] != 0){neighbor++;}
            if(row+1 < grid.length && grid[row+1][col] != 0){neighbor++;}
            if(col+1 < grid[0].length && grid[row][col+1] != 0){neighbor++;}
            minNeighbor = Math.min(minNeighbor, neighbor);
            maxNeighbor = Math.max(maxNeighbor, neighbor);

            if(row-1 >= 0 && grid[row-1][col] > 0){ stack.push( [row-1, col] ); }
            if(col-1 >= 0 && grid[row][col-1] > 0){ stack.push( [row, col-1] ); }
            if(row+1 < grid.length && grid[row+1][col] > 0){ stack.push( [row+1, col] ); }
            if(col+1 < grid[0].length && grid[row][col+1] > 0){ stack.push( [row, col+1] )}
        }
    }

    for(let row = 0; row<grid.length; row++){
        for(let col = 0; col<grid.length; col++){
            if(grid[row][col] == 1){
                islands++;
                dfs(row,col);
            }
        }
    }

    if(islands > 1){
        return 0;
    }

    if(maxNeighbor == 1){
        return 2;
    }

    console.log(grid);
    
    return minNeighbor;
};