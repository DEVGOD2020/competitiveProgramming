/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    if(nums.length <= 2){return nums.length}
    return 2**Math.max(...nums).toString(2).length;
};
