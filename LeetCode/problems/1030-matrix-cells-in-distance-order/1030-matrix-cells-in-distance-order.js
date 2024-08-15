/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    let mat = new Array(rows).fill(0).map(() => new Array(cols).fill([0,0]));
    console.log(mat);
    for(let X = 0; X<rows; X++){
        for(let Y = 0; Y<cols; Y++){
            mat[X][Y] = Math.abs(X-rCenter)+Math.abs(Y-cCenter);
        }
    }

    return mat;
};