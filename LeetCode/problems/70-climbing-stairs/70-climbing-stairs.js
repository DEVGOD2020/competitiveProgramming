/**
 * @param {number} n
 * @return {number}
 */

var memo = {};
var climbStairs = function(n) {
    if(n <= 3){return n;}
    if(memo[n-1] === undefined){
        memo[n-1] = climbStairs(n-1);
    }
    if(memo[n-2] === undefined){
        memo[n-2] = climbStairs(n-2);
    }
    return memo[n-1]+memo[n-2];
}