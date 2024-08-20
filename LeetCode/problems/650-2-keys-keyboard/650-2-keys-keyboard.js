/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
    if(n==1){return 0;}
    let primes = [2,3,5];
    let dp = _.range(n+1);
    dp[1] = 0;

    for(let I = 4; I<=n; I++){
        for(let prime of primes){
            if(I%prime == 0){
                dp[I] = dp[I/prime]+prime;
                break;
            }
        }
        if(dp[I] == I){
            primes.push(I);
        }
    }

    return dp[n];
};