/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums = _.sortBy(nums);
    let ans = 0;
    for(let L = 0; L<nums.length; L++){
        let realTarget = target-nums[L];
        let R = _.sortedIndex(nums,realTarget);
        if(L<R){
            ans += R-L-1;
        }
    }
    return ans;
};