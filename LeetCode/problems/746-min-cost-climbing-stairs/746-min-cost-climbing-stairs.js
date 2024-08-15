/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function(cost) {
    cost.push(0);
    let dp = [cost[0],cost[1]];
    
    let I = 2;
    while(I<cost.length){
        dp[I] = Math.min(dp[I-1],dp[I-2])+cost[I];
        I++;
    }
    
    return dp[I-1];
};