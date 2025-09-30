/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let blah = Object.values(_.countBy(nums));
    const MAX = Math.max(...blah);
    return blah.filter(
        (el) => el == MAX
    ).length * MAX;
};
