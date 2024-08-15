/**
 * @param {number} n
 * @return {number}
 */

var memo = {}
var tribonacci = function(n) {
    if(n == 0){return 0;}
    if(n == 1 || n == 2){return 1;}
    if(memo[n-1] === undefined){
        memo[n-1] = tribonacci(n-1);
    }
    if(memo[n-2] === undefined){
        memo[n-2] = tribonacci(n-2);
    }
    if(memo[n-3] === undefined){
        memo[n-3] = tribonacci(n-3);
    }
    return memo[n-1]+memo[n-2]+memo[n-3];
};