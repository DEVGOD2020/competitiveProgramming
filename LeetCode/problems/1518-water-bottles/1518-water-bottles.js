/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let drank = 0;
    while(numBottles >= numExchange){
        drank += numExchange;
        numBottles += -numExchange;
        numBottles += 1;
    }
    return drank+numBottles;
};