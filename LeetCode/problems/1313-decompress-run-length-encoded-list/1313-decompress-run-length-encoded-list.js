/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    return nums.reduce((sum,el,I)=>( I%2==1&&sum.push(...Array(nums[I-1]).fill(el)),sum), []);
};
