/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let score = 0;
    for(let A = 0; A < nums.length; A++){
        if(nums[A] === 0){
            nums[A] = nums[A] == 0 ? 1 : 0;
            nums[A+1] = nums[A+1] == 0 ? 1 : 0;
            nums[A+2] = nums[A+2] == 0 ? 1 : 0;
            score++;
        }
        if(A+2 === nums.length-1){
            if(nums[A] == 0){
                return -1;
            }
            if(nums[A+1] == 0){
                return -1;
            }
            if(nums[A+2] == 0){
                return -1;
            }
            return score;
        }
    }

    return -1;
};