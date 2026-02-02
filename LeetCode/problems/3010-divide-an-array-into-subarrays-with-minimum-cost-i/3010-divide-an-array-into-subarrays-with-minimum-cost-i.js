/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let temp = nums.shift();
    nums.sort((a,b)=>a-b);
    return temp + nums[0] + nums[1];
};
