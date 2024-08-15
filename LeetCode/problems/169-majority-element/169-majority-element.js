/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const SIZE = Math.floor( (nums.length)/2 );
    nums.sort( (a, b) => a - b );
    return nums[SIZE];
};