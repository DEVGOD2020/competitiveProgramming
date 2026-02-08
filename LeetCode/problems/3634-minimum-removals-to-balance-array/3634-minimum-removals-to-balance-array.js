/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
    if(nums.length == 1){return 0;}

    nums.sort( (a,b)=> a-b);
    let target = nums[0]*k;
    let R = 0;
    R = _.sortedLastIndex(nums, target);

    let removed = nums.length - (R);
    let ans = removed;

    for(let L = 1; L<nums.length; L++){
        target = nums[L]*k;
        R = _.sortedLastIndex(nums, target)-1;

        removed = nums.length - (R-L+1);
        ans = Math.min(removed, ans);
    }
    return ans;
};
