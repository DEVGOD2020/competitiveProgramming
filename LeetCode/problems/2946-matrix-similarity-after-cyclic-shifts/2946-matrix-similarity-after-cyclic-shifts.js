/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    k %= mat[0].length;
    for (let row of mat) {
        for (let I = 0; I < mat[0].length; I++) {
            if (row[I] !== row[(I + k) % mat[0].length]) {
                return false;
            }
        }
    }
    return true;
};
