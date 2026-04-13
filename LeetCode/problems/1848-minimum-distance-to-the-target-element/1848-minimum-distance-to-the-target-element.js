/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let ans = nums.length;
    for(let I = 0; I<nums.length; I++){
        if(nums[I] == target){ans = Math.min(ans, Math.abs(start-I));}
    }
    return ans;
};
