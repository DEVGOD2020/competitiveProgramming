/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    const MID = (2**(n-1));
    if(n <= 1){return "0";}
    if(k == MID){return "1";}
    if(k < MID){return findKthBit(n-1,k);}
    return findKthBit(n-1,(2**n)-k)=="1"?"0":"1";
};
