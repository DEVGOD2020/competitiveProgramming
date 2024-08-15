/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    nums.sort(function(a,b){return a-b})

    let L = 0;
    let R = nums.length-1;
    let min = Infinity;
    while(L<R){
        min = Math.min(min, (nums[L]+nums[R])/2);
        L++;
        R--;
    }

    return min;
};