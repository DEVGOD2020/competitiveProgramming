/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    let chuncked = _.chunk(original, n);
    if( chuncked.length !== m){
        return [];
    }
    if( chuncked[0].length !== n){
        return [];
    }
    return chuncked;
};