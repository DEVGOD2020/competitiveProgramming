/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let LIS = new Array(nums.length).fill(1);
    let ans = 1;
    for(let R = 1; R<nums.length; R++){
        for(let L= 0; L<R; L++){
            if(nums[R] > nums[L]){
                if(LIS[R] < LIS[L]+1){
                    LIS[R] = LIS[L]+1;
                    ans = Math.max(ans,LIS[R]);
                }
            }
        }
    }
    return ans;
};
