/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
    const n = nums.length;
    let dp = Array(n).fill(0).map(() => ({}));
    let max = 2;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let diff = nums[i] - nums[j];
            dp[i][diff] = dp[j][diff] ? dp[j][diff] + 1 : 2;
            max = Math.max(max, dp[i][diff]);
        }
    }
    return max;

};