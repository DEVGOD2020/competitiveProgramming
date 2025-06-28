/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let R = 0; R<matrix.length; R++){
        for(let C = R+1; C<matrix.length; C++){
            [matrix[R][C],matrix[C][R]] = [matrix[C][R],matrix[R][C]];
        }
    }

    matrix.map( (row)=> row.reverse() );
};
