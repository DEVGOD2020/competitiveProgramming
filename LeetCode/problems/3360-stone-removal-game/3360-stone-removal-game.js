/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    if(n<10){return false;}
    return Math.floor( 10.5-(Math.sqrt(110.25-2*n)) )%2 == 1;
};