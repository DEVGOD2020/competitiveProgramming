/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for(let row = 1; row<matrix.length; row++){
        for(let col = 1; col<matrix[0].length; col++){
            if(matrix[row][col] != matrix[row-1][col-1]){
                return false;
            }
        }
    }
    return true;
};