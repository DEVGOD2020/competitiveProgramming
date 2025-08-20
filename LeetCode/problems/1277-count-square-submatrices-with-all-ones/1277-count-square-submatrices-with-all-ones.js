/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let score = 0;
    for(let row = 0; row<matrix.length; row++){
        for(let col=0;col<matrix[0].length; col++){
            if(row == 0 || col == 0 || matrix[row][col] == 0){
                score += matrix[row][col];
                continue;
            }

            let up = matrix[row][col-1];
            let left = matrix[row-1][col];
            let upLeft = matrix[row-1][col-1];
            matrix[row][col] += Math.min(up,left,upLeft); 
            score += matrix[row][col];

        }
    }
    return score;
};
