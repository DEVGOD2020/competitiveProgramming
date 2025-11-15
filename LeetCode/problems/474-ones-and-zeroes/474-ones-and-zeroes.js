/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    
    for(const word of strs){
        const zeroCount = word.split("0").length-1;
        const oneCount = word.length - zeroCount;
        for(let ZERO = m; ZERO>=zeroCount; ZERO--){
            for(let ONE = n; ONE>=oneCount; ONE--){
                dp[ZERO][ONE] = Math.max(
                    1+dp[ZERO-zeroCount][ONE-oneCount],
                    dp[ZERO][ONE]
                )
            }
        }
    }
    
    return dp[m][n];
};
