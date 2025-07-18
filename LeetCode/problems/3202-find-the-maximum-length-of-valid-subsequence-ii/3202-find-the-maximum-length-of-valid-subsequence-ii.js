/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, k) {
    if(k==1){return nums.length;}
    let dp = Array.from( {length: k}, ()=>new Array(k).fill(0) );

    let ans = 0;
    for(let num of nums){
        const curr = num%k;
        for(let prev = 0; prev<k; prev++){
            dp[curr][prev] = dp[prev][curr]+1;
            ans = Math.max(ans,dp[curr][prev]);
        }
    }

    return ans;
};

