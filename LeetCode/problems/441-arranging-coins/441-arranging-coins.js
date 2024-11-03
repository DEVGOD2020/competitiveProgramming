/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
};
