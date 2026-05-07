/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxValue = function(nums) {
    let preMax = new Array(nums.length);
    let suffMin = new Array(nums.length);

    let max = -Infinity;
    for(let I = 0; I<nums.length; I++){
        max = Math.max(nums[I],max);
        preMax[I] = max;
    }

    min = Infinity;
    for(let I = nums.length-1; I>=0; I--){
        min = Math.min(nums[I],min);
        suffMin[I] = min;
    }

    for(let I = nums.length-1; I>=0; I--){
        preMax[I]>suffMin[I+1]?nums[I]=nums[I+1]:nums[I]=preMax[I];
    }

    return nums;
};
