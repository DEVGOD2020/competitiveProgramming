/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let L = 0;
    let R = 0;
    let max = 0;
    let prefix = 0;
    while(R<nums.length){
        prefix = prefix+!nums[R]
        while(L <= R && nums[R] == 0 && prefix>k){
            if(nums[L] == 0){
                prefix += -1;
            }
            L++;
        }
        max = Math.max(max, R-L+1);
        R++;
    }
    return max;
};