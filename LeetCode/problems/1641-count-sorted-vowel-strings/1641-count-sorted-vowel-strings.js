/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    let dp = [1,1,1,1];
    let ans = 0;
    for(let I = 0; I<n; I++){
        dp[0] = dp[0]+dp[1]+dp[2]+dp[3]+1;
        dp[1] = dp[1]+dp[2]+dp[3]+1;
        dp[2] = dp[2]+dp[3]+1;
        dp[3] = dp[3]+1;

        ans = dp[0];
    }
    return ans;
};
