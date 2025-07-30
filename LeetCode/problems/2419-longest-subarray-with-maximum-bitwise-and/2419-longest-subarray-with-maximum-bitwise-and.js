/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let count = 0;
    let ans = 0;
    const max = Math.max(...nums);
    for(let I = 0; I<nums.length; I++){
        nums[I] === max ? count++ : count = 0;
        ans = Math.max(ans,count);
    }
    return ans;
};
