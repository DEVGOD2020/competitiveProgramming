/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    return nums.reduce( (sum,el)=>sum|el) << (nums.length-1);
};
