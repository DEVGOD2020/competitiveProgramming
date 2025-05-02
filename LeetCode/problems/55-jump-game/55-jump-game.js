/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
    let maxJump = 0;
    for(let I = 0; I<nums.length; I++){
        if(I > maxJump){
            return false;
        }
        maxJump = Math.max(maxJump, nums[I]+I);
    }
    return true;
};