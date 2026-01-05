/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let negatives = 0;
    let sum = 0;
    let min = 1e5 + 1;
    for(let row = 0; row<matrix.length; row++){
        for(let col=0; col<matrix.length; col++){
            sum += Math.abs(matrix[row][col]);
            if(min >= Math.abs(matrix[row][col])){
                min = Math.abs(matrix[row][col])
            }
            if(matrix[row][col] < 0){
                negatives++;
            }
        }
    }

    return sum - ((negatives%2 == 1) ? 2*min : 0);
};
