/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for(let I = 0; I<nums.length-1; I++){
        if(nums[I] === nums[I+1]){
            nums[I] = nums[I]*2;
            nums[I+1] = 0;
        }
    }

    let L = 0;
    let R = 0;
    while(R<nums.length){
        if(nums[R]){
            let temp = nums[L];
            nums[L] = nums[R];
            nums[R] = temp;
            L++;
        }
        R++;
    }

    return nums;
};