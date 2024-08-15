/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort(function(a,b){return a-b;});
    let prefixSum = [nums[0]];
    for(let I=1; I<nums.length; I++){
        prefixSum[I] = prefixSum[I-1]+nums[I];
    }

    let I = prefixSum.length-1;
    while(I > 1){
        if(prefixSum[I-1] > nums[I]){
            return prefixSum[I]
        }
        I += -1;
    }

    return -1;
};