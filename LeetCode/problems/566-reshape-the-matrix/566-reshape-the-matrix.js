/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if(r*c !== mat.length*mat[0].length){
        return mat;
    }

    return _.chunk( _.flatten(mat), c );
};