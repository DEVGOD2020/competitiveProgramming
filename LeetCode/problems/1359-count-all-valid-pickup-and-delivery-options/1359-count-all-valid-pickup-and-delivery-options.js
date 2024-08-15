/**
 * @param {number} n
 * @return {number}
 */

var memo = [1,6,90,2520,113400];
var countOrders = function(n) {
    if(memo[n-1] === undefined){
        if(memo[n-2] === undefined){
            memo[n-2] = countOrders(n-1);
        }
        memo[n-1] = n*(memo[n-2]+
        (n-1)*(2*memo[n-2]))%(1e9+7);
    }
    return memo[n-1];
};