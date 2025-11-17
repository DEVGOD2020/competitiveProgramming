/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let prev = -1;
    for(let I = 0; I<nums.length; I++){
        if( nums[I] == 1 ){
            if( prev >= 0 && I-prev-1 < k){
                return false;
            }
            prev = I;
        }
    }
    return true;
};
