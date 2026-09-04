/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    let rightMin = new Array(nums.length);
    rightMin[rightMin.length-1] = nums[nums.length-1];
    for(let R = nums.length-2; R>=0; R--){
        rightMin[R] = Math.min(rightMin[R+1],nums[R]);
    }
    let MAX = 0;
    for(let I = 0; I<nums.length; I++){
        MAX = Math.max(MAX,nums[I]);
        if(MAX-rightMin[I] <= k){
            return I;
        }
    }
    return -1;
};