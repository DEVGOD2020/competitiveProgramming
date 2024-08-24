/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    nums = _.sortBy(nums);
    let score = 0;

    let L = 0;
    let M = 1;
    for (let R = 2; R < nums.length; R++) {
        if (nums[R] < nums[M] + nums[L] && nums[L] + nums[M] + nums[R] > score) {
            score = nums[L] + nums[M] + nums[R];
        }
        L++;
        M++;
    }

    return score;
};