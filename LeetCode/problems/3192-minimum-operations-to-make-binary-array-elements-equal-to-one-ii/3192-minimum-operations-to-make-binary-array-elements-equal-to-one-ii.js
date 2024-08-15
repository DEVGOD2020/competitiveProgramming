/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let flag = 1;
    let score = 0;
    for(let I = 0; I<nums.length; I++){
        if(nums[I] != flag){
            score++;
            flag = flag==0?1:0;
        }
    }
    
    return score;
};