/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    const size = matrix.length;
    for(let row = 0; row<size; row++){
        let rowSet = new Set(matrix[row]);
        let colSet = new Set();
        for(let col = 0; col<size ; col++){
            colSet.add(matrix[col][row]);
        }
        if(rowSet.size < size  || colSet.size < size){
            return false;
        }
    }
    return true;
};