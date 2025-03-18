/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let L = 0;
    let R = 0;
    let windowMask = 0;
    let score = 0;
    while(R<nums.length){
        while( (windowMask & nums[R]) !== 0 && L < R){
            windowMask ^= nums[L];
            L++;
        }
        windowMask |= nums[R];
        score = Math.max(score, R-L+1);
        R++;
    }
    return score;
};