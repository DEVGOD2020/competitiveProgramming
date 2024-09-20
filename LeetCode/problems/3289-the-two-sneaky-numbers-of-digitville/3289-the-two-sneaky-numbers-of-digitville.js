/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    nums = _.sortBy(nums);
    let ans = [];
    for(let I = 1; I<nums.length; I++){
        if(nums[I-1] == nums[I]){
            ans.push(nums[I-1]);
        }
    }
    return ans;
};