/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let L = 0;
    let R = 2;
    let ans = 0;
    while(R<nums.length){
        if(nums[L]+nums[R] === nums[L+1]/2){
            ans++;
        }
        L++;
        R++;
    }

    return ans;
};