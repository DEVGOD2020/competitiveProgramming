/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let rowCount = new Array(grid.length).fill(0);
    let colCount = new Array(grid[0].length).fill(0);

    let stack = [];
    for(let row = 0; row<grid.length; row++){
        for(let col = 0; col<grid[0].length; col++){
            if(grid[row][col] === 1){
                rowCount[row] += (rowCount[row]|0) + 1;
                colCount[col] += (colCount[col]|0) + 1;
                stack.push( [row,col] );
            }
        }
    }

    let score = 0;
    while(stack.length){
        let [row,col] = stack.pop();
        if(rowCount[row] > 1 || colCount[col] > 1){
            score++;
        }
    }

    return score;
};