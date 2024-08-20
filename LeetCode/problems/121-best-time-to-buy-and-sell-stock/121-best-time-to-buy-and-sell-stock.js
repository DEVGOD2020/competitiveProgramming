/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxCur = 0;
    let maxSoFar = 0;

    for(let I = 1; I<prices.length; I++){
        maxCur += prices[I]-prices[I-1];
        maxCur = Math.max(0, maxCur);
        maxSoFar = Math.max(maxCur, maxSoFar);
    }

    return maxSoFar;
};