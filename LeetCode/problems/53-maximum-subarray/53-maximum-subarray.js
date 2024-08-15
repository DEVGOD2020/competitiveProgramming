/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let score = 0;
    let max = -Infinity;

    for(let num of nums){
        score += num;
        if(score > max){
            max = score;
        }
        if(score < 0){
            score = 0;
        }
    }

    return max;
};