/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    for(let I = 1; I<prices.length; I++){
        if(prices[I] > prices[I-1]){
            profit += prices[I]-prices[I-1];
        }
    }
    return profit;
};