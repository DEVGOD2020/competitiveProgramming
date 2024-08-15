/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let sum = 0;
    
    for(let I = 0; I < 32; I++){
        sum += (n>>I)&1;
    }
    
    return sum;
};