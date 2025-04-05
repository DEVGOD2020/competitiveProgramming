/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let ans = 0;
    let max = 0;
    let maxDiff = 0;
    for(let I = 0; I<nums.length; I++){
        ans = Math.max(ans, maxDiff*nums[I])
        maxDiff = Math.max(maxDiff, max-nums[I]);
        max = Math.max(max, nums[I])
    }

    return ans;
};