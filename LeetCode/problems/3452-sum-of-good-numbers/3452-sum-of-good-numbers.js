/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
    return nums.reduce( (sum,val,key)=>
        sum += ( (nums[key-k]??0) < val) && ( (nums[key+k]??0) < val) ? val : 0
    ,0);
};