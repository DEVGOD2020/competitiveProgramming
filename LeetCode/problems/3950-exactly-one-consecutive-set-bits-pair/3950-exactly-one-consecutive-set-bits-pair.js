/**
 * @param {number} n
 * @return {boolean}
 */
var consecutiveSetBits = function(n) {
    return (n&=(n>>1)) && !(n&(n-1));
};