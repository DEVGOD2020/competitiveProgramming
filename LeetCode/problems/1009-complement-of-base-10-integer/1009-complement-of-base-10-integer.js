/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    if(n==0){return 1;}
    return ~n & ((1 << (32 - Math.clz32(n))) - 1);
};
