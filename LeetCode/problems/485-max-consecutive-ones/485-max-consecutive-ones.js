/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let score = 0;
    let max = 0;
    for(let I = 0; I<nums.length; I++){
        score = score*nums[I]+nums[I];
        max = Math.max(max,score);
    }
    return max;
};