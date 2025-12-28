/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let score = 0;
    let R = grid[0].length-1;
    for(let row of grid){
        if(row[row.length-1] < 0){
            let L = 0;
            let M = Math.floor( (L+R)/2 );
            while(L<R){
                M = Math.floor( (L+R)/2 );
                if(row[M] >= 0){L = M+1; }
                else{ R = M; }
            }
            score += row.length-L;
        }
    }
    return score;
};
