/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums = _.sortBy( _.uniq(nums));
    return nums.length>=3 ? nums[nums.length - 3] : nums[nums.length-1]
};