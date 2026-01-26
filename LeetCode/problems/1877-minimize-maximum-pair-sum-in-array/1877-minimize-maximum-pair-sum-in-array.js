/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums = nums.sort( (a,b)=>a-b);
    let ans = 0;
    let R = nums.length-1;
    for(let L = 0; L<nums.length; L++){
        ans = Math.max(ans, nums[L]+nums[R] );
        R--;
    }
    return ans;
};
