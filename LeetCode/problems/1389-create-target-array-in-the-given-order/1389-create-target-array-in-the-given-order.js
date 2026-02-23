/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let ans = [];
    for(let I = 0; I<index.length; I++){
        ans.splice(index[I], 0, nums[I]);
    }
    return ans;
};
