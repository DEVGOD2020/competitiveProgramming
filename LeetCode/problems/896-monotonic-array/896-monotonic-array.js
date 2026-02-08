/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    return nums.every( (el,I)=> I==0 || nums[I-1]<=el) || nums.every( (el,I)=> I==0 || nums[I-1]>=el );
};
