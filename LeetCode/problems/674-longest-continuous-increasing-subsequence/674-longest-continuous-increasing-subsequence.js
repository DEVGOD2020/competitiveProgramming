/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let window = 1;
    let score = 0;
    for(let L = 0; L < nums.length; L++) {
        if(nums[L] < nums[L+1]){ window++; }
        else{ window = 1; }
        score = Math.max(score, window);
    }
    return score;  
};