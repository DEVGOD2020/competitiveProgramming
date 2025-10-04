/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    let A = -0.5;
    let B = 1.5 - numExchange;
    let C = numBottles;
    let ans = ( -B - Math.sqrt( (B*B) - (4*A*C) ) )/(2*A);
    return numBottles + Math.ceil( ans ) - 1;
};
