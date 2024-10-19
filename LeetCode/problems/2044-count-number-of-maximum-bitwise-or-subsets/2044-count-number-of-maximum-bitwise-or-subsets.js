/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
    const maxBitwise = nums.reduce((a, c) => a | c, 0)

    let ans = 0;
    let backtrack = function (I, score = 0) {
        if (score === maxBitwise) { ans++; }
        
        for (let A = I; A < nums.length; A++) {
            backtrack(A + 1, score | nums[A]);
        }
    }

    backtrack(0);

    return ans;
};