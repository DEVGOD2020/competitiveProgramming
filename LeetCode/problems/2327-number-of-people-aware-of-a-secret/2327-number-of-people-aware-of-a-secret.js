/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
    const mod = (1e9 + 7);
    let dp = new Array(n).fill(0);
    dp[0] = 1;
    for (let I = 1; I < n; I++) {
        dp[I] += dp[I - 1];
        dp[I] += (dp[I - delay] || 0) % mod;
        dp[I] += (-(dp[I - forget] || 0) + mod) % mod;
        dp[I] = dp[I] % mod;
    }

    return (dp[n - 1] - (dp[n - forget - 1] || 0) + mod) % mod;
};
