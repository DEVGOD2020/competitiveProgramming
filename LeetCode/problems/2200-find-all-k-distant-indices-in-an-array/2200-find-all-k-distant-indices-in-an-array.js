/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    let ans = new Set();
    for(let I = 0; I<nums.length; I++){
        if( nums[I] === key){
            const start = Math.max(0,I-k);
            const end = Math.min(nums.length,I+k+1);
            for(let L = start; L < end; L++){
                ans.add(L);
            }
        }
    }
    return [...ans];
};
