/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperationsToMakeMedianK = function(nums, k) {
    nums.sort(function(a,b){return a-b;});
    let median = nums[Math.floor(nums.length/2)];
    return Math.abs(median-k);
};