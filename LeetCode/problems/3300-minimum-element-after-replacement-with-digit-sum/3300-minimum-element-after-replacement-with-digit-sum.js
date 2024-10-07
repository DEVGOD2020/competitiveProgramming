/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    return _.min(nums.map(el => _.sumBy(("" + el).split("").map(el => (+el)))))
};