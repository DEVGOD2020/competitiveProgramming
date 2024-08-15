/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    let high = [0,0];
    const N = grid.length;
    let I = 0;
    while(I<N){
        let val = teamScore(grid[I]);
        if(val > high[1]){
            high = [I,val];
        }
        I++;
    }

    return high[0];
};

function teamScore(arr){
    return arr.filter((data) => data == 1).reduce((A, B) => A + B, 0);
}