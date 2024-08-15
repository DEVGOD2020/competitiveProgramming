/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let arr = s.split(/O+/).filter(Boolean);
    console.log(arr);
    return arr.length;
};