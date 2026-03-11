/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
     return ~num & ((1 << (32 - Math.clz32(num))) - 1);
};
