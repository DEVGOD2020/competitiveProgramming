/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
    let cur = 1;
    let prev = 0;
    let ans = 0;
    for(let I = 0; I<nums.length-1; I++){
        if(nums[I] < nums[I+1]){
            cur++;
        }else{
            prev = cur;
            cur = 1;
        }
        ans = Math.max(ans, Math.floor(cur/2), Math.min(prev,cur));
    }
    return ans >= k;
};
