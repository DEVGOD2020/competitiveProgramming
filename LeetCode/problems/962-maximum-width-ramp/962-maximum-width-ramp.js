/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    let monoStack = [];
    let max = 0;
    for(let I = 0; I<nums.length; I++){
        if(monoStack.length == 0 || nums[ monoStack[monoStack.length-1] ] > nums[I]){
            monoStack.push(I);
        }
    }

    for(let R = nums.length-1; R>= 0; R--){
        while(monoStack.length > 0 
        && nums[monoStack[monoStack.length-1]] <= nums[R]){
            max = Math.max(max, R-monoStack[monoStack.length-1] );
            monoStack.pop();
        }
    }

    return max;
};