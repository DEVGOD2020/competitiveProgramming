/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let L = 0;
    let R = nums.length-1;
    let score = 0;
    while(L<=R){
        if(L!=R){
            score += parseInt(nums[L]+''+nums[R]);
            L++;
            R--;
        }else{
            score += parseInt(nums[L]);
            break;
        }
    }
    return score;
};