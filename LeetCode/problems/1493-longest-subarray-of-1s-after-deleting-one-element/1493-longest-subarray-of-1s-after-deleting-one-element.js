/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let L = 0;
    let R = 0;
    let zero = 0;
    let ans = 0;
    while(R<nums.length){
        if(nums[R] == 0){zero++;}
        while(zero >= 2 && L<R){
            if(nums[L] == 0){zero--;}
            L++;
        }
        ans = Math.max(ans, (R-L));
        R++;
    }
    return ans;
};
