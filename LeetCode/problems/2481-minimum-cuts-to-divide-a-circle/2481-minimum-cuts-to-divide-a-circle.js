/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function(n) {
    if(n==1){return 0;}
    return n%2==1?n:Math.floor(n/2);
};