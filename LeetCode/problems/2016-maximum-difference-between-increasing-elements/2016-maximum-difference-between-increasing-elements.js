/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let max = -1;
    let min = nums[0];
    for(let A = 1; A<nums.length; A++){
        if(min >= nums[A]){
            min = nums[A];
        }else{
            max = Math.max(max, nums[A]-min);
        }
    }
    return max;
};
