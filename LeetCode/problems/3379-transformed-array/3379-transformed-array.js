/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    let res = [];
    for(let I = 0; I<nums.length; I++){
        res[I] = nums[ ( (I+nums[I])%nums.length + nums.length) % nums.length ];
    }
    return res;
};
