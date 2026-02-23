/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let primes = new Set([2,3,5,7,11,13,17,19]);
    let bitCount = (I)=> I.toString(2).split("1").length-1;
    let score = 0;
    for(let I = left; I<=right; I++){
        if(primes.has( bitCount(I) ) ){
            score++;
        }
    }
    return score;
};
