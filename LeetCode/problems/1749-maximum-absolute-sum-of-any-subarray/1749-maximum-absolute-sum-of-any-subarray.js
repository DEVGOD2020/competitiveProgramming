/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let MAX = 0;
    let MIN = 0;
    let score = 0;
    for(let num of nums){
        score += num;
        MAX = Math.max(MAX,score);
        MIN = Math.min(MIN,score);
    }
    
    return MAX-MIN;
};