/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let X = 0;
    let score = 0;
    for(let num of nums){
        X += num;
        if(X === 0){score++;}
    }
    return score;
};