/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let L = 0;
    let R = k-1;
    let winSum = _.sumBy(nums.slice(L,R+1));
    let max = winSum/k;
    while(R<nums.length){
        max = Math.max(winSum/k, max);
        winSum += -nums[L];
        L++;
        R++;
        winSum += nums[R];
    }
    return max;
};