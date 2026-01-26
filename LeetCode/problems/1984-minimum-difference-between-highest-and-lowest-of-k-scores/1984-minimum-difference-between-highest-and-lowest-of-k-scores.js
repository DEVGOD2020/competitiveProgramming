/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums = nums.sort( (a,b)=>a-b);
    let L = 0;
    let ans = Infinity;
    for(let R = k-1; R<nums.length; R++){
        ans = Math.min(ans, nums[R]-nums[L]);
        L++;
    }
    return ans === Infinity ? 0 : ans;
};
