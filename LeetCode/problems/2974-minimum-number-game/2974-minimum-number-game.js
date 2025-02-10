/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let ans = [];
    nums = _.sortBy(nums)
    for(let I = 0; I<nums.length; I+=2){
        ans.push(nums[I+1]);
        ans.push(nums[I]);
    }

    return ans;
};