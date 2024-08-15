/**
 * @param {number} n
 * @return {number}
 */

var memo = {};

var fib = function(n) {
    if(n == 0){return 0;}
    if(n<=2){return 1;}

    if(memo[n] === undefined){
        memo[n] = fib(n-1)+fib(n-2);
    }

    return memo[n];
};