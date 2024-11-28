/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    return Math.max( ...[...new Set(n)].map( (el)=>parseInt(el)) );
};