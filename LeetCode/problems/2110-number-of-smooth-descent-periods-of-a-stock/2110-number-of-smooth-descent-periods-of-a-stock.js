/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let prevPrice = -1;
    let size = 0;
    let score = 0;
    for(let I = 0; I<prices.length; I++){
        if(prevPrice == prices[I]+1){size++;}
        else{size = 1;}
        prevPrice = prices[I];
        score += size;
    }
    return score;
};
