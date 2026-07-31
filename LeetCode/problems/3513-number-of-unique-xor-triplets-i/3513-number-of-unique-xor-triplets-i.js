/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    if(nums.length < 3){return nums.length;}
    return 2**Math.floor(Math.log2(nums.length)+1);
};