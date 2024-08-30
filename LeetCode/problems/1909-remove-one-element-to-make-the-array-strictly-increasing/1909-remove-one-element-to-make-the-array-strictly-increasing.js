/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let score = 0;
    for(let I = 0; I<nums.length; I++){
        if(nums[I] <= nums[I-1]){
            score++;
        }
        if(I>1 && nums[I-2] >= nums[I]){
            nums[I] = nums[I-1];
        }
    }

    return score < 2;
};