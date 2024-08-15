/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    for(let I = 1; I<2**31-1; I*=2){
        if(n == I){return true;}
    }
    return false;
};