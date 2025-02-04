/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let prefix = nums[0];
    let score = prefix;
    for(let I = 1; I<nums.length; I++){
        if(nums[I-1] < nums[I]){
            prefix += nums[I];
            score = Math.max(score,prefix);
        }else{
            prefix = nums[I];
        }
    }

    return score;
};