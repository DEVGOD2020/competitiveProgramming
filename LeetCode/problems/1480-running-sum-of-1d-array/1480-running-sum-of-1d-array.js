/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let I = 1;
    while(I<nums.length){
        nums[I] += nums[I-1];
        I++;
    }
    return nums;
};
