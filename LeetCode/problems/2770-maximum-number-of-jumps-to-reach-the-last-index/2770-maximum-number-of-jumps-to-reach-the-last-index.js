/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function(nums, target) {
    let DP = new Array(nums.length).fill(-1e9);
    DP[0] = 0;
    for(let A = 1; A<nums.length; A++){
        for(let I = 0; I<A; I++){
            if (Math.abs(nums[A] - nums[I]) <= target) {
                DP[A] = Math.max(DP[A], DP[I]+1);
            }
        }
    }
    return DP[nums.length-1]<0?-1:DP[nums.length-1];
};
