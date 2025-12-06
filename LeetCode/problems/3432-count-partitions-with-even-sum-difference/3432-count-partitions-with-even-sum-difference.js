/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let right = nums.reduce( (sum,el)=> sum+el)-nums[0];
    let left = nums[0];
    let score = 0;
    for(I = 1; I<nums.length; I++){
        if( (left-right)%2 == 0){score++;}
        right -= nums[I];
        left += nums[I];
    }
    return score;
};
