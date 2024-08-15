/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    for(let I = 0; I<nums.length-1; I++){
        if(nums[I]%2 === nums[I+1]%2){
            return false;
        }
    }
    return true;
};