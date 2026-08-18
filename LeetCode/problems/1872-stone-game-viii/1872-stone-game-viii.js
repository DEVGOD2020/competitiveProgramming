/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVIII = function(stones) {
    let dp = new Array(stones.length).fill(0);
    let sum = stones.reduce( (sum,el)=>sum+el);
    let max = -Infinity;
    for(let L = stones.length-1; L>=0; L--){
        max = Math.max(max, sum-(dp[L+1]??0) );
        sum += -stones[L];
        dp[L] = max;
    }
    return dp[1];
};