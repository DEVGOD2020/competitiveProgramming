/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let pos = nums.length - _.sortedIndex(nums, 1);
    let meg = _.sortedIndex(nums, 0);
    return Math.max(pos,meg);
};