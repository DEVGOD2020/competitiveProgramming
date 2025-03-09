/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let arr = Array(grid.length*grid.length+1).fill(false);
    arr[0] = true;
    let dup = 0;
    let missing = 0;
    for(let row = 0; row<grid.length; row++){
        for(let col=0; col<grid[0].length; col++){
            let num = grid[row][col];
            if(arr[num]){
                dup = num;
            }
            arr[num] = true;
        }
    }

    missing = arr.indexOf(false);

    return [dup,missing];
};