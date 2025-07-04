/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let curProfit = 0;
    let maxProfit = 0;

    for(let I = 1; I<prices.length; I++){
        curProfit += prices[I]-prices[I-1];
        curProfit = Math.max(0, curProfit);
        maxProfit = Math.max(curProfit, maxProfit);
    }

    return maxProfit;
};
