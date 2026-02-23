/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let ans = 0;
    let score = 0;
    for(let num of nums){
        score += num;
        ans = Math.min(score,ans);
    }
    return 1 - ans;
};
