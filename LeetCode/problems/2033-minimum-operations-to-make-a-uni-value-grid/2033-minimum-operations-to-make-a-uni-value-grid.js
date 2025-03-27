/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    let arr = grid.flat().sort(function(a,b){return a-b});
    
    let target = arr[Math.floor(arr.length/2)];
    let moves = 0;
    for(let num of arr){
        if(num%x !== grid[0][0]%x){
            return -1;
        }

        moves += Math.floor(Math.abs(num-target)/x)
    }

    return moves;
};