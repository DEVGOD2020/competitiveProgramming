/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    if(nums.length==1){return 1;}
    let L = 0;
    let R = 0;
    let max = 0;
    let maxValue = Math.max(...nums);
    while(R<nums.length){
        while(nums[L] === nums[R] && nums[L] === maxValue){
            R++;
        }
        max = Math.max(max,R-L);
        L = R;
        L++;
        R++;
    }
    return max;
};