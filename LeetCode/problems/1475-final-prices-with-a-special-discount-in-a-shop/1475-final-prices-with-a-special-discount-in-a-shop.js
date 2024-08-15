/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const newArr = [];
    const monoStack = [];
    for(let I = prices.length-1; I>=0; I--){
        while(monoStack.length && monoStack[0]>prices[I]){
            monoStack.shift();
        }
        newArr[I] = monoStack.length ? prices[I]-monoStack[0] : prices[I];
        monoStack.unshift(prices[I]);
    }

    return newArr;
};