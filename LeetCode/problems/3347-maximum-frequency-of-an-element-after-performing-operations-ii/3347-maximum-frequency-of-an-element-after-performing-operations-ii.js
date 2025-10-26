/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function(nums, k, numOps) {
    nums.sort((a,b)=>a-b);
    let freq = _.countBy(nums);
    let ans = 1;
    for(let I = 0; I<nums.length; I++){
        let A = _.sortedIndex(nums, nums[I]-k);
        let B = _.sortedLastIndex(nums, nums[I]+k)-1;
        let C = _.sortedIndex(nums, nums[I]);
        let D = _.sortedLastIndex(nums, nums[I]+2*k)-1;
        ans = Math.max( 
            Math.min(B-A+1,numOps+freq[nums[I]]),
            Math.min(D-C+1,numOps),
            ans
        );
    }
    return ans;
};
