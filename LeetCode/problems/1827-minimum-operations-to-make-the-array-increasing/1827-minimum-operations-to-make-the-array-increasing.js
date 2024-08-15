/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let score = 0;
    const SIZE = nums.length
    for(let a=1; a<SIZE; a++){
        if(nums[a-1] >= nums[a]){
            score += (nums[a-1]+1)-nums[a]
            nums[a] = nums[a-1]+1;
        }
    }
    return score;
};