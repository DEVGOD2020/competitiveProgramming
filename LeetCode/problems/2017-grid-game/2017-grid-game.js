/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
    let firstRow = _.sumBy(grid[0]);
    let secondRow = 0;

    let minBlueScore = Infinity;
    for(let I in grid[0]){
        firstRow += -grid[0][I];
        minBlueScore = Math.min(minBlueScore,Math.max(firstRow,secondRow));
        secondRow += grid[1][I];
    }

    return minBlueScore;
};