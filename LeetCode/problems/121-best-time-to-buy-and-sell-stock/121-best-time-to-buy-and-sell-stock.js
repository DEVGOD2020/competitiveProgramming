/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const max = Math.max(...prices);
    const min = Math.min(...prices);
    return max-min;
};