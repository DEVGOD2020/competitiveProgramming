/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return _.sortBy(nums)[ Math.floor( (nums.length)/2 ) ];
};