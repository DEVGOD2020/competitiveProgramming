/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort( (a,b)=>a-b);

    let L = 0;
    let ans = 1;
    for(let R = 0; R<nums.length; R++){
        if( nums[R] - nums[L] > k){
            L = R;
            ans++;
        }
    }

    return ans;
};
