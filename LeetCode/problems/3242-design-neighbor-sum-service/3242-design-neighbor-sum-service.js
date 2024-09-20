/**
 * @param {number[][]} grid
 */
var NeighborSum = function(grid) {
    this.myMap = {};
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col++){
            let aSum = (grid[row-1]?.[col]??0)
            +(grid[row+1]?.[col]??0)
            +(grid[row]?.[col-1]??0)
            +(grid[row]?.[col+1]??0);

            let dSum = (grid[row-1]?.[col-1]??0)
            +(grid[row+1]?.[col+1]??0)
            +(grid[row+1]?.[col-1]??0)
            +(grid[row-1]?.[col+1]??0);

            this.myMap[grid[row][col]] = [aSum, dSum];
        }
    }
};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function(value) {
    return this.myMap[value][0];
};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function(value) {
    return this.myMap[value][1];
};

/** 
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */