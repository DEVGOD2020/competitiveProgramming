/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function (nums) {
    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

    let L = -1;
    let R = 0;

    let I = 0;
    while (I < nums.length) {
        if (primes.includes(nums[I]) && L == -1) {
            L = I;
            R = I;
        }
        else if (primes.includes(nums[I])) {
            R = I;
        }
        I++;
    }

    return R - L;
};