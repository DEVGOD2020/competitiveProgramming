/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function (grid) {
    let operations = 0;

    //Greedy, AAAAAAA
    //Needs to greedly check if bottom value could satisify left neighbor not being equal
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (col + 1 < grid[0].length && grid[row][col] === grid[row][col + 1]) {
                console.log(row,col);
                grid[row][col + 1] = -grid[row][col];
                operations++;
            }
            if (row + 1 < grid.length && grid[row][col] !== grid[row + 1][col]) {
                console.log(row,col);
                grid[row + 1][col] = grid[row][col];
                operations++;
            }
        }
    }

    return operations;
};