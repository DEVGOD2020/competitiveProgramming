/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function(nums) {
    return nums.filter(
        (el)=>el==nums[ Math.floor(nums.length/2) ]
    ).length == 1;
};