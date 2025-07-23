/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let mySet = new Set();
    let score = 0;
    let ans = 0;
    let L = 0;
    let R = 0;
    while(R<nums.length){
        if(!mySet.has( nums[R] )){
            mySet.add(nums[R]);
            score += nums[R++];
        }else if(L<R){
            mySet.delete(nums[L]);
            score += -nums[L++];
        }
        ans = Math.max(ans,score);
    }
    return ans;
};
