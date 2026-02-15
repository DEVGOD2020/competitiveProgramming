/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    let DP = Array.from( 
        {length: query_row+1}, ()=> new Array(query_glass+1).fill(0) 
    );
    
    DP[0][0] = poured;

    for(let row = 1; row<=query_row; row++){
        for(let col = 0; col<=row; col++){
            if( (DP[row-1][col-1]??0) > 1){
                DP[row][col] += (DP[row-1][col-1]-1)/2;
            }
            if( (DP[row-1][col]??0) > 1){
                DP[row][col] += (DP[row-1][col]-1)/2;
            }
        }
    }

    return Math.min(1, DP[query_row][query_glass]);
};
