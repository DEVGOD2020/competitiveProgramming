/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minCuttingCost = function(n, m, k) {
    if(n < k && m < k){
        return 0;
    }
    return (Math.max(n,m)-k) * k
};
