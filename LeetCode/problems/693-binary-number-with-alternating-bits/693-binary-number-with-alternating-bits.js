/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    n = n ^ (n>>1);
    return (n & (n+1)) == 0;
};
