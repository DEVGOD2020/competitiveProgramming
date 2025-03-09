/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums = nums.sort((a,b)=> a - b);
    return Math.max(
        nums.slice(0,2).reduce(
            (sum,el)=> sum*el, 1
        )*nums[nums.length-1],
        nums.slice(nums.length-3,nums.length).reduce(
            (sum,el)=> sum*el, 1
        )
    )
};