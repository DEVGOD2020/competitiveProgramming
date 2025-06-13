/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let max = Math.abs(nums[0]-nums[nums.length-1]);
    for(let I = 0; I<nums.length-1; I++){
        max = Math.max(max, Math.abs(nums[I]-nums[I+1]) );
    }
    return max;
};
