/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let dp = Array.from( {length:numRows}, ()=>[] );
    dp[0] = [1];

    for(let I = 1; I<numRows; I++){
        dp[I][0] = 1;
        dp[I][I] = 1;
        for(let A = 1; A<I; A++){
            dp[I][A] = dp[I-1][A-1] + dp[I-1][A];
        }
    }

    return dp;
};
