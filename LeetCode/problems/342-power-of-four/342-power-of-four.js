/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n < 1){ return false; }
    signed long I = 1;
    signed long max = pow(2,31)-1;
    for(I = 1; I < max; I=I*3){
        if(n == I){return true;}
    }
    return false;
};