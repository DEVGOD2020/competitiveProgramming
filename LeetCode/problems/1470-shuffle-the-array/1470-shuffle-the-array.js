/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let ans = [];
    for(let I = 0; I<n; I++){
        ans.push(nums[I],nums[I+n]);
    }
    return ans;
};
