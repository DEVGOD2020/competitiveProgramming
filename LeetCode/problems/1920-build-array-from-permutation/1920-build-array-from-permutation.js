/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    ans = [];
    for(let a in nums){
        ans[a] = nums[nums[a]];
    }
    return ans;
};