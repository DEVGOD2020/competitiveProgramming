/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    return [...nums,...nums].join(",").includes(_.sortBy(nums).join(","));
};