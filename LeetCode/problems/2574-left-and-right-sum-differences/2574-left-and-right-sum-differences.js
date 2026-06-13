/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let suffix = nums.reduce((sum,el)=>sum+el)-nums[0];
    let prefix = 0;
    for(let I = 0; I<nums.length;I++){
        let temp = nums[I];
        nums[I] = Math.abs(prefix-suffix);
        prefix += temp;
        suffix -= nums[I+1];
    }
    return nums;
};